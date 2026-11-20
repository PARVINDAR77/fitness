/**
 * FitLife Progress Tracker & Metrics Calculator
 * Calculates accurate streak counters, percentage completion, and session analytics
 */

import { state } from '../core/state.js';

class ProgressTracker {
  constructor() {}

  getMetrics() {
    const progress = state.progress || {};
    const completedDays = progress.completedDays || [];
    const completedCount = completedDays.length;
    const percentage = Math.min(100, Math.round((completedCount / 30) * 100));

    return {
      completedCount,
      percentage,
      streak: progress.streak || 0,
      totalMinutes: progress.totalMinutesLogged || (completedCount * 15),
      currentDay: progress.currentDay || 1,
      isDayCompleted: (day) => completedDays.includes(parseInt(day, 10))
    };
  }

  updateUI() {
    const metrics = this.getMetrics();

    // Update global progress text
    document.querySelectorAll('[data-metric="percentage"]').forEach(el => {
      el.textContent = `${metrics.percentage}%`;
    });

    document.querySelectorAll('[data-metric="streak"]').forEach(el => {
      el.textContent = metrics.streak;
    });

    document.querySelectorAll('[data-metric="completedCount"]').forEach(el => {
      el.textContent = `${metrics.completedCount} / 30`;
    });

    document.querySelectorAll('[data-metric="totalMinutes"]').forEach(el => {
      el.textContent = `${metrics.totalMinutes} min`;
    });

    // Update progress bars
    document.querySelectorAll('[data-metric-bar="progress"]').forEach(bar => {
      bar.style.width = `${metrics.percentage}%`;
    });
  }
}

export const progressTracker = new ProgressTracker();
