/**
 * FitLife Workout Engine & Personalization Algorithm
 * Dynamically adapts the 30-day curriculum based on user goal, experience level, and target duration
 */

import { workouts, getWorkoutByDay } from '../data/workouts.js';
import { exercises, getExerciseById } from '../data/exercises.js';

class WorkoutEngine {
  constructor() {}

  /**
   * Generates a personalized daily workout tailored to the user profile
   */
  getPersonalizedWorkout(dayNumber, profile = {}) {
    const baseWorkout = getWorkoutByDay(dayNumber);
    if (!baseWorkout) return workouts[0];

    // If it's an active rest day, return as is
    if (baseWorkout.isRestDay) {
      return {
        ...baseWorkout,
        resolvedExercises: [
          {
            ...getExerciseById("rest-recovery"),
            plannedDuration: 180,
            plannedReps: null,
            sets: 1,
            restTime: 0
          }
        ]
      };
    }

    const level = profile.level || 'beginner';
    const durationTarget = profile.duration || 15;
    const goal = profile.goal || 'weight_loss';

    // Difficulty scaling multipliers
    let repMultiplier = 1.0;
    let durationMultiplier = 1.0;
    let restModifier = 0;

    if (level === 'beginner') {
      repMultiplier = 0.85;
      durationMultiplier = 0.85;
      restModifier = 5; // Extra 5s rest for beginners
    } else if (level === 'advanced') {
      repMultiplier = 1.3;
      durationMultiplier = 1.25;
      restModifier = -5; // 5s less rest for advanced
    }

    // Resolve each exercise with personalized parameters
    const resolvedExercises = baseWorkout.exercises.map(entry => {
      const exData = getExerciseById(entry.exerciseId);

      let reps = entry.repetitions;
      let duration = entry.duration;
      let rest = Math.max(15, (entry.rest || 25) + restModifier);

      if (reps !== null) {
        reps = Math.round(reps * repMultiplier);
      }
      if (duration !== null) {
        duration = Math.round(duration * durationMultiplier);
      }

      return {
        ...exData,
        plannedDuration: duration,
        plannedReps: reps,
        sets: entry.sets || 1,
        restTime: rest
      };
    });

    return {
      ...baseWorkout,
      duration: durationTarget,
      resolvedExercises
    };
  }

  getAllWorkouts() {
    return workouts;
  }
}

export const workoutEngine = new WorkoutEngine();
