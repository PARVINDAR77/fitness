/**
 * FitLife 30-Day Workout Plan Calendar Controller
 * Renders the 30-day interactive card grid with live completion states, rest days, and launchers
 */

import { state } from '../core/state.js';
import { workouts } from '../data/workouts.js';
import { languageManager } from './language-manager.js';
import { escapeHtml } from '../core/helpers.js';

class WorkoutCalendarController {
  constructor() {}

  init() {
    state.subscribe('LANGUAGE_CHANGED', () => this.render());
    state.subscribe('WORKOUT_COMPLETED', () => this.render());
    state.subscribe('STATE_RESET', () => this.render());
  }

  render(containerId = 'calendar-grid-root') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lang = state.profile.language || 'en';
    const completedSet = new Set(state.progress.completedDays || []);
    const activeDay = state.activeDay || 1;

    const cardsHtml = workouts.map(item => {
      const isCompleted = completedSet.has(item.day);
      const isCurrent = item.day === activeDay;
      const isRest = item.isRestDay;

      let cardClass = 'day-card';
      if (isCompleted) cardClass += ' status-completed';
      else if (isCurrent) cardClass += ' status-active';
      else if (isRest) cardClass += ' status-rest';

      const title = item.title[lang] || item.title['en'];

      let actionBtnHtml = '';
      if (isCompleted) {
        actionBtnHtml = `
          <button class="btn-day-action btn-day-done" data-day="${item.day}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span data-i18n="statusDone">${languageManager.t('statusDone')}</span>
          </button>
        `;
      } else if (isRest) {
        actionBtnHtml = `
          <button class="btn-day-action btn-day-rest" data-day="${item.day}">
            <span>❤️</span>
            <span data-i18n="statusRelax">${languageManager.t('statusRelax')}</span>
          </button>
        `;
      } else {
        actionBtnHtml = `
          <button class="btn-day-action btn-day-start" data-day="${item.day}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span data-i18n="statusStart">${languageManager.t('statusStart')}</span>
          </button>
        `;
      }

      return `
        <div class="${cardClass}" id="day-card-${item.day}">
          <div class="day-card-header">
            <span class="day-label">${languageManager.t('dayWord')} ${item.day}</span>
            <span class="day-duration-badge">${item.duration} min</span>
          </div>

          <div class="day-card-body">
            <div class="day-thumbnail-wrapper">
              <img src="${item.thumbnail}" alt="${escapeHtml(title)}" class="day-thumbnail-img" loading="lazy">
            </div>
            <div class="day-info">
              <h3 class="day-exercise-title">${escapeHtml(title)}</h3>
              <span class="day-category-tag">${escapeHtml(item.category)}</span>
            </div>
          </div>

          <div class="day-card-footer">
            ${actionBtnHtml}
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = cardsHtml;
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll('.btn-day-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const day = parseInt(btn.getAttribute('data-day'), 10);
        if (!isNaN(day)) {
          state.setActiveDay(day);
          window.location.hash = '#workout';
        }
      });
    });
  }
}

export const workoutCalendarController = new WorkoutCalendarController();
