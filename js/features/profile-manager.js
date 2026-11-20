/**
 * FitLife Profile & Settings Manager
 * Customizes goals, sound options, speech rate, data export and progress reset
 */

import { state } from '../core/state.js';
import { storage } from '../core/storage.js';
import { progressTracker } from './progress-tracker.js';
import { languageManager } from './language-manager.js';

class ProfileManagerController {
  constructor() {}

  init() {
    state.subscribe('LANGUAGE_CHANGED', () => this.render());
    state.subscribe('WORKOUT_COMPLETED', () => this.render());
    state.subscribe('STATE_RESET', () => this.render());
  }

  render(containerId = 'profile-view-root') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const metrics = progressTracker.getMetrics();
    const profile = state.profile;
    const lang = profile.language || 'en';

    container.innerHTML = `
      <div class="profile-layout-grid">
        <!-- Sidebar Summary Card -->
        <div class="profile-sidebar-card">
          <div class="profile-avatar-circle">👤</div>
          <div>
            <h2 class="text-title-2">${languageManager.t('profileTitle')}</h2>
            <p class="text-body-sm">${languageManager.t('brandTagline')}</p>
          </div>

          <div class="profile-streak-pill">
            <span>🔥</span>
            <span>${metrics.streak} Day Streak</span>
          </div>

          <div class="progress-wrapper" style="margin-top: 10px;">
            <div class="progress-meta">
              <span>Overall 30-Day Plan</span>
              <span>${metrics.percentage}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${metrics.percentage}%;"></div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; margin-top: 8px;">
            <div style="background:var(--color-bg-subtle); padding:10px; border-radius:12px; text-align:center;">
              <div style="font-size:1.4rem; font-weight:800; color:var(--color-primary);">${metrics.completedCount}</div>
              <div class="text-caption" data-i18n="profileDaysDone">${languageManager.t('profileDaysDone')}</div>
            </div>
            <div style="background:var(--color-bg-subtle); padding:10px; border-radius:12px; text-align:center;">
              <div style="font-size:1.4rem; font-weight:800; color:var(--color-primary);">${metrics.totalMinutes}</div>
              <div class="text-caption" data-i18n="profileMinutes">${languageManager.t('profileMinutes')}</div>
            </div>
          </div>
        </div>

        <!-- Main Settings Form -->
        <div class="settings-main-card">
          <!-- Section 1: Goal -->
          <div class="settings-group">
            <h3 class="settings-group-title">
              <span>🎯</span>
              <span data-i18n="settingsGoalTitle">${languageManager.t('settingsGoalTitle')}</span>
            </h3>
            <div class="form-grid-options">
              <label class="choice-card-label">
                <input type="radio" name="setting_goal" value="weight_loss" ${profile.goal === 'weight_loss' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">⚖️ Weight Loss</div>
              </label>
              <label class="choice-card-label">
                <input type="radio" name="setting_goal" value="general_fitness" ${profile.goal === 'general_fitness' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">🏃 General Fitness</div>
              </label>
              <label class="choice-card-label">
                <input type="radio" name="setting_goal" value="strength" ${profile.goal === 'strength' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">💪 Strength</div>
              </label>
              <label class="choice-card-label">
                <input type="radio" name="setting_goal" value="mobility" ${profile.goal === 'mobility' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">🧘 Mobility</div>
              </label>
            </div>
          </div>

          <!-- Section 2: Difficulty Level -->
          <div class="settings-group">
            <h3 class="settings-group-title">
              <span>⚡</span>
              <span data-i18n="settingsLevelTitle">${languageManager.t('settingsLevelTitle')}</span>
            </h3>
            <div class="form-grid-options">
              <label class="choice-card-label">
                <input type="radio" name="setting_level" value="beginner" ${profile.level === 'beginner' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">Beginner</div>
              </label>
              <label class="choice-card-label">
                <input type="radio" name="setting_level" value="intermediate" ${profile.level === 'intermediate' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">Intermediate</div>
              </label>
              <label class="choice-card-label">
                <input type="radio" name="setting_level" value="advanced" ${profile.level === 'advanced' ? 'checked' : ''} style="display:none;">
                <div class="choice-content">Advanced</div>
              </label>
            </div>
          </div>

          <!-- Section 3: Audio & Voice Coaching -->
          <div class="settings-group">
            <h3 class="settings-group-title">
              <span>🔊</span>
              <span data-i18n="settingsSoundTitle">${languageManager.t('settingsSoundTitle')}</span>
            </h3>

            <div class="toggle-row">
              <span data-i18n="settingsSoundToggle">${languageManager.t('settingsSoundToggle')}</span>
              <label class="toggle-switch">
                <input type="checkbox" id="setting_sound_toggle" ${profile.soundEnabled !== false ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div style="margin-top: 12px;">
              <label class="text-body-sm" style="display:block; margin-bottom:8px;" data-i18n="settingsSpeechSpeed">${languageManager.t('settingsSpeechSpeed')}</label>
              <div class="form-grid-options">
                <label class="choice-card-label">
                  <input type="radio" name="setting_speed" value="0.8" ${profile.speechSpeed === 0.8 ? 'checked' : ''} style="display:none;">
                  <div class="choice-content">${languageManager.t('speedSlow')}</div>
                </label>
                <label class="choice-card-label">
                  <input type="radio" name="setting_speed" value="1.0" ${profile.speechSpeed === 1.0 ? 'checked' : ''} style="display:none;">
                  <div class="choice-content">${languageManager.t('speedNormal')}</div>
                </label>
                <label class="choice-card-label">
                  <input type="radio" name="setting_speed" value="1.2" ${profile.speechSpeed === 1.2 ? 'checked' : ''} style="display:none;">
                  <div class="choice-content">${languageManager.t('speedFast')}</div>
                </label>
              </div>
            </div>
          </div>

          <!-- Section 4: Data Management & Reset -->
          <div class="settings-group">
            <h3 class="settings-group-title" style="color: var(--color-danger);">
              <span>⚠️</span>
              <span>Data & Reset</span>
            </h3>
            <p class="text-body-sm">
              FitLife stores all workout progress privately in your local browser. No data leaves your device.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:8px;">
              <button id="btn-export-data" class="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>Export Progress (JSON)</span>
              </button>
              <button id="btn-trigger-reset" class="btn" style="background:#FDF2F2; color:var(--color-danger); border:1px solid var(--color-danger-border);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                <span data-i18n="btnResetProgress">${languageManager.t('btnResetProgress')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindSettingsEvents();
  }

  bindSettingsEvents() {
    // Goal radios
    document.querySelectorAll('input[name="setting_goal"]').forEach(r => {
      r.addEventListener('change', () => {
        state.profile.goal = r.value;
        storage.saveProfile(state.profile);
      });
    });

    // Level radios
    document.querySelectorAll('input[name="setting_level"]').forEach(r => {
      r.addEventListener('change', () => {
        state.profile.level = r.value;
        storage.saveProfile(state.profile);
      });
    });

    // Sound toggle
    const soundToggle = document.getElementById('setting_sound_toggle');
    if (soundToggle) {
      soundToggle.addEventListener('change', () => {
        state.profile.soundEnabled = soundToggle.checked;
        storage.saveProfile(state.profile);
      });
    }

    // Speed radios
    document.querySelectorAll('input[name="setting_speed"]').forEach(r => {
      r.addEventListener('change', () => {
        state.profile.speechSpeed = parseFloat(r.value);
        storage.saveProfile(state.profile);
      });
    });

    // Export Data Button
    const exportBtn = document.getElementById('btn-export-data');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const data = {
          profile: storage.getProfile(),
          progress: storage.getProgress(),
          exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fitlife-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Reset Progress with double confirmation
    const resetBtn = document.getElementById('btn-trigger-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const confirmed = window.confirm(
          languageManager.t('resetConfirmTitle') + "\n\n" + languageManager.t('resetConfirmBody')
        );
        if (confirmed) {
          state.resetAll();
          window.location.hash = '#home';
        }
      });
    }
  }
}

export const profileManager = new ProfileManagerController();
