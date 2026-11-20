/**
 * Automated Test Suite: Storage & Persistence
 * Run directly with: node tests/storage.test.js
 */

import assert from 'node:assert';
import { storage } from '../js/core/storage.js';

console.log('--- RUNNING STORAGE TESTS ---');

// Test 1: Default Profile
const profile = storage.getProfile();
assert.strictEqual(profile.version, 1);
assert.strictEqual(typeof profile.goal, 'string');
assert.strictEqual(typeof profile.duration, 'number');
console.log('✔ Test 1 Passed: Default profile contract is valid.');

// Test 2: Profile Update
storage.saveProfile({ goal: 'strength', duration: 20 });
const updatedProfile = storage.getProfile();
assert.strictEqual(updatedProfile.goal, 'strength');
assert.strictEqual(updatedProfile.duration, 20);
console.log('✔ Test 2 Passed: Profile updates persist cleanly.');

// Test 3: Workout Completion & Streak Logging
storage.markDayCompleted(1, 15);
let prog = storage.getProgress();
assert.ok(prog.completedDays.includes(1), 'Day 1 must be marked completed');
assert.strictEqual(prog.currentDay, 2, 'Current day should advance to 2');
assert.strictEqual(prog.streak, 1, 'Initial streak should be 1');
assert.strictEqual(prog.totalMinutesLogged, 15, 'Total minutes logged should be 15');
console.log('✔ Test 3 Passed: Workout completion updates completedDays, streaks, and minutes.');

// Test 4: Idempotent Completion (Re-completing same day shouldn't duplicate completedDays)
storage.markDayCompleted(1, 15);
prog = storage.getProgress();
assert.strictEqual(prog.completedDays.filter(d => d === 1).length, 1, 'Day 1 must not appear more than once');
console.log('✔ Test 4 Passed: Repeated completion does not duplicate records.');

// Test 5: Full Reset
storage.resetAllProgress();
const resetProg = storage.getProgress();
assert.strictEqual(resetProg.completedDays.length, 0, 'Completed days must be empty after reset');
assert.strictEqual(resetProg.streak, 0, 'Streak must be 0 after reset');
assert.strictEqual(resetProg.currentDay, 1, 'Current day must be 1 after reset');
console.log('✔ Test 5 Passed: Full reset restores clean initial state.');

console.log('ALL STORAGE TESTS PASSED SUCCESSFULLY!\n');
