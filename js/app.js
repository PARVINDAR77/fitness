/**
 * FitLife Main Application Coordinator
 * Bootstraps routes, initializes components, and coordinates state
 */

import { state } from './core/state.js';
import { router } from './core/router.js';
import { renderHeader, renderBottomNav } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { languageManager } from './features/language-manager.js';
import { dailyWorkoutController } from './features/daily-workout.js';
import { workoutCalendarController } from './features/workout-calendar.js';
import { profileManager } from './features/profile-manager.js';
import { onboardingController } from './features/onboarding.js';
import { progressTracker } from './features/progress-tracker.js';
import { tips } from './data/tips.js';
import { escapeHtml } from './core/helpers.js';

class FitLifeApp {
  constructor() {}

  init() {
    // 1. Render Global Shell Components
    renderHeader();
    renderBottomNav();
    renderFooter();

    // 2. Initialize Feature Controllers
    languageManager.init();
    dailyWorkoutController.init();
    workoutCalendarController.init();
    profileManager.init();
    onboardingController.init();

    // 3. Register Routes
    router.register('home', () => this.showView('home-view'));
    router.register('plan', () => {
      this.showView('plan-view');
      workoutCalendarController.render('calendar-grid-root');
    });
    router.register('workout', () => {
      this.showView('workout-view');
      dailyWorkoutController.render('daily-workout-root');
    });
    router.register('tips', () => {
      this.showView('tips-view');
      this.renderTipsView();
    });
    router.register('profile', () => {
      this.showView('profile-view');
      profileManager.render('profile-view-root');
    });

    // 4. Bind Home View Interactive Widgets
    this.bindHomeInteractiveWidgets();

    // 5. Initial metrics update
    progressTracker.updateUI();

    // Header scroll shadow effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('site-header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 15);
      }
    });

    // Handle initial route
    router.handleRoute();
  }

  showView(viewElementId) {
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.style.display = 'none';
    });
    const target = document.getElementById(viewElementId);
    if (target) {
      target.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  bindHomeInteractiveWidgets() {
    // Today's preview card in home
    const previewContainer = document.getElementById('home-today-preview');
    if (previewContainer) {
      previewContainer.addEventListener('click', () => {
        window.location.hash = '#workout';
      });
    }

    // Language pills in Home View
    document.querySelectorAll('.lang-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) {
          state.setLanguage(lang);
        }
      });
    });
  }

  renderTipsView() {
    const root = document.getElementById('tips-grid-root');
    if (!root) return;

    const lang = state.profile.language || 'en';

    root.innerHTML = tips.map(tip => `
      <div class="card card-hover" style="display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="benefit-icon-box benefit-icon-yellow">
            ${tip.category === 'hydration' ? '💧' : tip.category === 'nutrition' ? '🥗' : tip.category === 'sleep' ? '🌙' : '✨'}
          </div>
          <div>
            <h3 class="text-title-3">${escapeHtml(tip.title[lang] || tip.title['en'])}</h3>
            <span class="badge badge-warning">${tip.category.toUpperCase()}</span>
          </div>
        </div>

        <p class="text-body-sm" style="line-height:1.6;">
          ${escapeHtml(tip.summary[lang] || tip.summary['en'])}
        </p>

        <ul style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
          ${(tip.actionablePoints[lang] || tip.actionablePoints['en']).map(point => `
            <li style="display:flex; align-items:flex-start; gap:8px; font-size:0.875rem;">
              <span style="color:var(--color-success); font-weight:bold;">✔</span>
              <span>${escapeHtml(point)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }
}

// Instantiate and launch
export const app = new FitLifeApp();
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
