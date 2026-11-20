/**
 * FitLife Versioned Storage Repository
 * Provides resilient persistence with quota error handling, schema versioning, and fallbacks
 */

const STORAGE_VERSION = 1;
const PREFIX = 'fitlife_v1_';

const DEFAULT_PROFILE = {
  version: STORAGE_VERSION,
  goal: "weight_loss",
  level: "beginner",
  duration: 15,
  language: "en",
  soundEnabled: true,
  speechSpeed: 1.0,
  onboardingComplete: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

const DEFAULT_PROGRESS = {
  version: STORAGE_VERSION,
  currentDay: 1,
  completedDays: [],
  streak: 0,
  lastCompletedDate: null,
  totalMinutesLogged: 0,
  history: []
};

class StorageRepository {
  constructor() {
    this.memoryStore = new Map();
    this.isLocalStorageAvailable = this._checkAvailability();
  }

  _checkAvailability() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return false;
      const testKey = '__fitlife_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('[FitLife Storage] LocalStorage is unavailable. Using memory fallback.');
      return false;
    }
  }

  get(key, defaultValue = null) {
    const fullKey = PREFIX + key;
    if (this.isLocalStorageAvailable) {
      try {
        const item = window.localStorage.getItem(fullKey);
        if (item === null) return defaultValue;
        return JSON.parse(item);
      } catch (e) {
        console.error(`[FitLife Storage] Error reading ${fullKey}:`, e);
        return defaultValue;
      }
    } else {
      return this.memoryStore.has(fullKey) ? this.memoryStore.get(fullKey) : defaultValue;
    }
  }

  set(key, value) {
    const fullKey = PREFIX + key;
    if (this.isLocalStorageAvailable) {
      try {
        window.localStorage.setItem(fullKey, JSON.stringify(value));
      } catch (e) {
        console.error(`[FitLife Storage] Error writing ${fullKey}:`, e);
      }
    } else {
      this.memoryStore.set(fullKey, value);
    }
  }

  remove(key) {
    const fullKey = PREFIX + key;
    if (this.isLocalStorageAvailable) {
      window.localStorage.removeItem(fullKey);
    } else {
      this.memoryStore.delete(fullKey);
    }
  }

  // Profile Specific Helpers
  getProfile() {
    const saved = this.get('profile', null);
    if (!saved) return { ...DEFAULT_PROFILE };
    return { ...DEFAULT_PROFILE, ...saved };
  }

  saveProfile(profile) {
    const updated = {
      ...this.getProfile(),
      ...profile,
      updatedAt: new Date().toISOString()
    };
    this.set('profile', updated);
    return updated;
  }

  // Progress Specific Helpers
  getProgress() {
    const saved = this.get('progress', null);
    if (!saved) return { ...DEFAULT_PROGRESS };
    return { ...DEFAULT_PROGRESS, ...saved };
  }

  saveProgress(progress) {
    const updated = {
      ...this.getProgress(),
      ...progress
    };
    this.set('progress', updated);
    return updated;
  }

  markDayCompleted(dayNumber, durationMinutes = 15) {
    const day = parseInt(dayNumber, 10);
    const progress = this.getProgress();
    const todayStr = new Date().toISOString().split('T')[0];

    const completedSet = new Set(progress.completedDays);
    const isNewCompletion = !completedSet.has(day);
    completedSet.add(day);

    let newStreak = progress.streak;
    if (isNewCompletion) {
      if (!progress.lastCompletedDate) {
        newStreak = 1;
      } else {
        const last = new Date(progress.lastCompletedDate);
        const today = new Date(todayStr);
        const diffDays = Math.round((today - last) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          newStreak += 1;
        } else if (diffDays === 0) {
          // Already logged something today
        } else {
          newStreak = 1; // Streak reset
        }
      }
    }

    const nextDay = Math.min(30, Math.max(progress.currentDay, day + 1));
    const newMinutes = progress.totalMinutesLogged + (isNewCompletion ? durationMinutes : 0);

    const historyItem = {
      day,
      completedAt: new Date().toISOString(),
      duration: durationMinutes
    };

    const updated = {
      ...progress,
      currentDay: nextDay,
      completedDays: Array.from(completedSet).sort((a, b) => a - b),
      streak: newStreak,
      lastCompletedDate: todayStr,
      totalMinutesLogged: newMinutes,
      history: [historyItem, ...progress.history]
    };

    this.saveProgress(updated);
    return updated;
  }

  resetAllProgress() {
    const profile = this.getProfile();
    profile.onboardingComplete = false;
    this.saveProfile(profile);

    const resetProg = {
      version: STORAGE_VERSION,
      currentDay: 1,
      completedDays: [],
      streak: 0,
      lastCompletedDate: null,
      totalMinutesLogged: 0,
      history: []
    };
    this.saveProgress(resetProg);
    return { profile, progress: resetProg };
  }
}

export const storage = new StorageRepository();
