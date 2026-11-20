# FitLife: Local Storage Specification & State Persistence

**Document Version:** 1.0.0  

---

## 1. Storage Keys & Namespaces

FitLife stores all client state under a versioned, collision-free namespace in the browser's `window.localStorage`:

| Key Name | Purpose | Example Value |
|---|---|---|
| `fitlife_v1_profile` | User preferences, goals, level, and settings | `{ goal: "weight_loss", level: "beginner", language: "en", ... }` |
| `fitlife_v1_progress` | Completed days, active streak, minutes logged | `{ currentDay: 1, completedDays: [1], streak: 1, ... }` |
| `fitlife_v1_history` | Detailed completion log per session | `[ { day: 1, date: "2026-11-20", duration: 15, rating: 5 } ]` |
| `fitlife_v1_favorites`| User bookmarked exercises | `[ "squat", "plank" ]` |

---

## 2. Detailed Data Schema

### 2.1 Profile Schema (`fitlife_v1_profile`)
```typescript
interface UserProfile {
  version: 1;
  goal: "weight_loss" | "general_fitness" | "strength" | "flexibility" | "mobility";
  level: "beginner" | "intermediate" | "advanced";
  duration: 10 | 15 | 20 | 30; // minutes
  language: "en" | "hi" | "gu" | "mr" | "ta" | "te";
  soundEnabled: boolean;
  speechSpeed: number; // 0.8, 1.0, 1.2
  highContrast: boolean;
  reducedMotion: boolean;
  onboardingComplete: boolean;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}
```

### 2.2 Progress Schema (`fitlife_v1_progress`)
```typescript
interface UserProgress {
  version: 1;
  currentDay: number; // 1 to 30
  completedDays: number[]; // e.g. [1, 2]
  streak: number; // Consecutive active days
  lastCompletedDate: string | null; // "YYYY-MM-DD"
  totalMinutesLogged: number;
}
```

---

## 3. Data Integrity, Validation & Fallback Rules

1. **Storage Availability Check**: Upon application launch, `storage.js` performs a test write and read. If `localStorage` is disabled or blocked (e.g., restricted iframe or storage quota exceeded), the system switches to an in-memory session repository and notifies the user gently.
2. **Schema Versioning & Migration**: Every payload includes a `version: 1` field. If legacy data is found, migration functions transform older schemas into the current standard without wiping existing workout streaks.
3. **Graceful Corruption Recovery**: If `JSON.parse()` fails due to corrupted storage data, the storage manager backs up the invalid string to `fitlife_backup_corrupted` and resets to clean initial defaults.
4. **Data Reset Guarantee**: The user can completely erase all stored preferences and logs at any time via the Profile Settings screen with double confirmation.
