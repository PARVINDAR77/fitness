/**
 * Automated Test Suite: Progress Mathematics & Streak Calculation
 * Run directly with: node tests/progress.test.js
 */

import assert from 'node:assert';
import { storage } from '../js/core/storage.js';

console.log('--- RUNNING PROGRESS METRICS TESTS ---');

// Reset to clean test state
storage.resetAllProgress();

// Test 1: Baseline 0 Completion
let prog = storage.getProgress();
assert.strictEqual(prog.completedDays.length, 0);
let pct = Math.round((prog.completedDays.length / 30) * 100);
assert.strictEqual(pct, 0, 'Initial completion percentage must be 0%');
console.log('✔ Test 1 Passed: Initial completion is 0%.');

// Test 2: Single Day Completion
storage.markDayCompleted(1, 15);
prog = storage.getProgress();
assert.strictEqual(prog.completedDays.length, 1);
pct = Math.round((prog.completedDays.length / 30) * 100);
assert.strictEqual(pct, 3, 'Day 1 completion should yield 3%');
console.log('✔ Test 2 Passed: Day 1 completion matches 3% progress badge from reference image.');

// Test 3: Multiple Days Completion (15 days -> 50%)
for (let d = 2; d <= 15; d++) {
  storage.markDayCompleted(d, 15);
}
prog = storage.getProgress();
assert.strictEqual(prog.completedDays.length, 15);
pct = Math.round((prog.completedDays.length / 30) * 100);
assert.strictEqual(pct, 50, '15 completed days must equal exactly 50%');
assert.strictEqual(prog.totalMinutesLogged, 15 * 15, 'Total minutes logged must be 225');
console.log('✔ Test 3 Passed: 15 completed days equals 50% completion.');

// Test 4: All 30 Days (30 days -> 100%)
for (let d = 16; d <= 30; d++) {
  storage.markDayCompleted(d, 15);
}
prog = storage.getProgress();
assert.strictEqual(prog.completedDays.length, 30);
pct = Math.round((prog.completedDays.length / 30) * 100);
assert.strictEqual(pct, 100, '30 completed days must equal 100%');
console.log('✔ Test 4 Passed: 30 completed days equals 100% completion.');

// Clean up test state
storage.resetAllProgress();

console.log('ALL PROGRESS TESTS PASSED SUCCESSFULLY!\n');
