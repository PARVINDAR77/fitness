/**
 * Automated Test Suite: Workout Engine & Curriculum Integrity
 * Run directly with: node tests/workout-engine.test.js
 */

import assert from 'node:assert';
import { workouts, getWorkoutByDay } from '../js/data/workouts.js';
import { exercises, getExerciseById } from '../js/data/exercises.js';
import { workoutEngine } from '../js/features/workout-engine.js';

console.log('--- RUNNING WORKOUT ENGINE TESTS ---');

// Test 1: Exactly 30 days exist in sequential order
assert.strictEqual(workouts.length, 30, 'Workouts array must contain exactly 30 days');
for (let i = 0; i < 30; i++) {
  assert.strictEqual(workouts[i].day, i + 1, `Day ${i + 1} must be in sequential index ${i}`);
}
console.log('✔ Test 1 Passed: Exactly 30 sequential days exist.');

// Test 2: Active Recovery Days (Days 7, 14, 21, 28)
const restDays = [7, 14, 21, 28];
restDays.forEach(dayNum => {
  const workout = getWorkoutByDay(dayNum);
  assert.strictEqual(workout.isRestDay, true, `Day ${dayNum} must be designated as a rest day`);
  assert.strictEqual(workout.category, 'Recovery', `Day ${dayNum} category must be Recovery`);
});
console.log('✔ Test 2 Passed: Days 7, 14, 21, and 28 are valid active recovery days.');

// Test 3: Exercise Catalog Integrity
const exerciseIds = new Set(exercises.map(e => e.id));
assert.ok(exerciseIds.has('squat'), 'Catalog must contain squat');
assert.ok(exerciseIds.has('pushup'), 'Catalog must contain pushup');
assert.ok(exerciseIds.has('rest-recovery'), 'Catalog must contain rest-recovery');

workouts.forEach(w => {
  assert.ok(w.exercises && w.exercises.length > 0, `Day ${w.day} must have exercises`);
  w.exercises.forEach(entry => {
    assert.ok(exerciseIds.has(entry.exerciseId), `Day ${w.day} references unknown exerciseId: "${entry.exerciseId}"`);
  });
});
console.log('✔ Test 3 Passed: All 30 days reference valid, cataloged exercises.');

// Test 4: Personalized Workout Resolution
const beginnerWorkout = workoutEngine.getPersonalizedWorkout(1, { level: 'beginner', duration: 15 });
assert.strictEqual(beginnerWorkout.day, 1);
assert.ok(beginnerWorkout.resolvedExercises.length > 0);
assert.strictEqual(beginnerWorkout.duration, 15);

const advancedWorkout = workoutEngine.getPersonalizedWorkout(1, { level: 'advanced', duration: 30 });
assert.strictEqual(advancedWorkout.duration, 30);
console.log('✔ Test 4 Passed: Workout personalization correctly adapts parameters.');

console.log('ALL WORKOUT ENGINE TESTS PASSED SUCCESSFULLY!\n');
