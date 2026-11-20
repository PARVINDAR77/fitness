/**
 * FitLife Onboarding Wizard Controller
 * 4-step personalized setup modal (Goal, Level, Duration, Language)
 */

import { state } from '../core/state.js';
import { storage } from '../core/storage.js';
import { languageManager } from './language-manager.js';

class OnboardingController {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 4;
    this.formData = {
      goal: 'weight_loss',
      level: 'beginner',
      duration: 15,
      language: 'en'
    };
  }

  init() {
    // If onboarding is not complete and user clicks "Start Your 30 Days Plan", launch wizard
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#btn-hero-start, [data-action="start-30-days"]');
      if (btn) {
        e.preventDefault();
        if (!state.profile.onboardingComplete) {
          this.open();
        } else {
          window.location.hash = '#workout';
        }
      }
    });
  }

  open() {
    this.currentStep = 1;
    this.formData = {
      goal: state.profile.goal || 'weight_loss',
      level: state.profile.level || 'beginner',
      duration: state.profile.duration || 15,
      language: state.profile.language || 'en'
    };

    let modal = document.getElementById('onboarding-modal-backdrop');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'onboarding-modal-backdrop';
      modal.className = 'modal-backdrop';
      document.body.appendChild(modal);
    }

    modal.classList.add('open');
    this.renderStep();
  }

  close() {
    const modal = document.getElementById('onboarding-modal-backdrop');
    if (modal) modal.classList.remove('open');
  }

  renderStep() {
    const modal = document.getElementById('onboarding-modal-backdrop');
    if (!modal) return;

    let stepHtml = '';

    if (this.currentStep === 1) {
      stepHtml = `
        <h3 class="text-title-2" data-i18n="stepGoal">${languageManager.t('stepGoal')}</h3>
        <p class="text-body-sm" style="margin-bottom: 16px;">Step 1 of 4: Choose what matters most to you.</p>
        <div class="form-grid-options" style="grid-template-columns: 1fr;">
          <label class="choice-card-label">
            <input type="radio" name="onboard_goal" value="weight_loss" ${this.formData.goal === 'weight_loss' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>⚖️ ${languageManager.t('goalWeightLoss')}</strong>
              <div class="text-caption">Calorie burn, core activation, healthy metabolism</div>
            </div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_goal" value="general_fitness" ${this.formData.goal === 'general_fitness' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>🏃 ${languageManager.t('goalGeneralFitness')}</strong>
              <div class="text-caption">Overall stamina, cardiovascular health & energy</div>
            </div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_goal" value="strength" ${this.formData.goal === 'strength' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>💪 ${languageManager.t('goalStrength')}</strong>
              <div class="text-caption">Firm tone, posture support and bone density</div>
            </div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_goal" value="mobility" ${this.formData.goal === 'mobility' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>🧘 ${languageManager.t('goalMobility')}</strong>
              <div class="text-caption">Gentle joint comfort, flexibility & low stiffness</div>
            </div>
          </label>
        </div>
      `;
    } else if (this.currentStep === 2) {
      stepHtml = `
        <h3 class="text-title-2" data-i18n="stepLevel">${languageManager.t('stepLevel')}</h3>
        <p class="text-body-sm" style="margin-bottom: 16px;">Step 2 of 4: Let's pick an easy, comfortable pace.</p>
        <div class="form-grid-options" style="grid-template-columns: 1fr;">
          <label class="choice-card-label">
            <input type="radio" name="onboard_level" value="beginner" ${this.formData.level === 'beginner' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>🌱 ${languageManager.t('levelBeginner')}</strong>
              <div class="text-caption">Gentle movements, chair options, extra rest periods</div>
            </div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_level" value="intermediate" ${this.formData.level === 'intermediate' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>🌿 ${languageManager.t('levelIntermediate')}</strong>
              <div class="text-caption">Moderate bodyweight flow with steady intervals</div>
            </div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_level" value="advanced" ${this.formData.level === 'advanced' ? 'checked' : ''} style="display:none;">
            <div class="choice-content">
              <strong>🌳 ${languageManager.t('levelAdvanced')}</strong>
              <div class="text-caption">Challenging intervals and endurance progressions</div>
            </div>
          </label>
        </div>
      `;
    } else if (this.currentStep === 3) {
      stepHtml = `
        <h3 class="text-title-2" data-i18n="stepDuration">${languageManager.t('stepDuration')}</h3>
        <p class="text-body-sm" style="margin-bottom: 16px;">Step 3 of 4: Select your daily workout time.</p>
        <div class="form-grid-options">
          <label class="choice-card-label">
            <input type="radio" name="onboard_duration" value="10" ${this.formData.duration === 10 ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>10 Min</strong></div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_duration" value="15" ${this.formData.duration === 15 ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>15 Min</strong><br><span style="font-size:0.75rem; color:var(--color-primary); font-weight:700;">★ Recommended</span></div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_duration" value="20" ${this.formData.duration === 20 ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>20 Min</strong></div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_duration" value="30" ${this.formData.duration === 30 ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>30 Min</strong></div>
          </label>
        </div>
      `;
    } else if (this.currentStep === 4) {
      stepHtml = `
        <h3 class="text-title-2" data-i18n="stepLang">${languageManager.t('stepLang')}</h3>
        <p class="text-body-sm" style="margin-bottom: 16px;">Step 4 of 4: All instructions and audio will match.</p>
        <div class="form-grid-options" style="grid-template-columns: 1fr;">
          <label class="choice-card-label">
            <input type="radio" name="onboard_lang" value="en" ${this.formData.language === 'en' ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>🇬🇧 English</strong></div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_lang" value="hi" ${this.formData.language === 'hi' ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>🇮🇳 हिंदी (Hindi)</strong></div>
          </label>
          <label class="choice-card-label">
            <input type="radio" name="onboard_lang" value="gu" ${this.formData.language === 'gu' ? 'checked' : ''} style="display:none;">
            <div class="choice-content"><strong>🇮🇳 ગુજરાતી (Gujarati)</strong></div>
          </label>
        </div>
      `;
    }

    modal.innerHTML = `
      <div class="modal-content">
        <button id="btn-close-onboard" class="modal-close-btn" aria-label="Close setup">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div style="margin-bottom: 20px;">
          <h2 class="text-title-1" style="color:var(--color-primary);" data-i18n="onboardingTitle">${languageManager.t('onboardingTitle')}</h2>
          <p class="text-body-sm" data-i18n="onboardingSubtitle">${languageManager.t('onboardingSubtitle')}</p>
        </div>

        ${stepHtml}

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px; padding-top:16px; border-top:1px solid var(--color-border);">
          ${this.currentStep > 1 
            ? `<button id="btn-onboard-back" class="btn btn-secondary">← Back</button>` 
            : `<span></span>`
          }
          <button id="btn-onboard-next" class="btn btn-primary">
            ${this.currentStep < this.totalSteps ? languageManager.t('btnNext') : languageManager.t('btnStartMyPlan')}
          </button>
        </div>
      </div>
    `;

    this.bindStepEvents();
  }

  bindStepEvents() {
    const closeBtn = document.getElementById('btn-close-onboard');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    const backBtn = document.getElementById('btn-onboard-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (this.currentStep > 1) {
          this.currentStep--;
          this.renderStep();
        }
      });
    }

    const nextBtn = document.getElementById('btn-onboard-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        // Collect current step value
        if (this.currentStep === 1) {
          const selected = document.querySelector('input[name="onboard_goal"]:checked');
          if (selected) this.formData.goal = selected.value;
        } else if (this.currentStep === 2) {
          const selected = document.querySelector('input[name="onboard_level"]:checked');
          if (selected) this.formData.level = selected.value;
        } else if (this.currentStep === 3) {
          const selected = document.querySelector('input[name="onboard_duration"]:checked');
          if (selected) this.formData.duration = parseInt(selected.value, 10);
        } else if (this.currentStep === 4) {
          const selected = document.querySelector('input[name="onboard_lang"]:checked');
          if (selected) this.formData.language = selected.value;
        }

        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
          this.renderStep();
        } else {
          // Finish onboarding
          this.completeOnboarding();
        }
      });
    }

    // Direct card click support
    document.querySelectorAll('.choice-card-label').forEach(label => {
      label.addEventListener('click', () => {
        const input = label.querySelector('input');
        if (input) input.checked = true;
      });
    });
  }

  completeOnboarding() {
    state.profile.goal = this.formData.goal;
    state.profile.level = this.formData.level;
    state.profile.duration = this.formData.duration;
    state.profile.language = this.formData.language;
    state.profile.onboardingComplete = true;

    storage.saveProfile(state.profile);
    state.setLanguage(this.formData.language);

    this.close();
    window.location.hash = '#workout';
  }
}

export const onboardingController = new OnboardingController();
