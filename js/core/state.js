/**
 * FitLife Reactive State Store
 * Event-driven Pub/Sub ensuring instantaneous UI reactivity
 */

import { storage } from './storage.js';

class StateStore {
  constructor() {
    this.listeners = new Map();
    this.profile = storage.getProfile();
    this.progress = storage.getProgress();
    this.activeDay = this.progress.currentDay || 1;
    this.currentView = 'home';
  }

  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event).delete(callback);
  }

  dispatch(event, payload = {}) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try {
          cb(payload);
        } catch (e) {
          console.error(`[FitLife State] Listener error for ${event}:`, e);
        }
      });
    }
  }

  setLanguage(langCode) {
    this.profile.language = langCode;
    storage.saveProfile(this.profile);
    this.dispatch('LANGUAGE_CHANGED', { language: langCode });
  }

  setActiveDay(dayNumber) {
    this.activeDay = parseInt(dayNumber, 10);
    this.dispatch('ACTIVE_DAY_CHANGED', { day: this.activeDay });
  }

  completeActiveDay(durationMinutes = 15) {
    const updated = storage.markDayCompleted(this.activeDay, durationMinutes);
    this.progress = updated;
    this.dispatch('WORKOUT_COMPLETED', { day: this.activeDay, progress: updated });
  }

  resetAll() {
    const res = storage.resetAllProgress();
    this.profile = res.profile;
    this.progress = res.progress;
    this.activeDay = 1;
    this.dispatch('STATE_RESET', res);
  }
}

export const state = new StateStore();
