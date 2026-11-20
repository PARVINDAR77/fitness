/**
 * FitLife Today's Workout View Controller
 * Binds active daily exercise data, video/canvas demonstration, audio cues, and step cards
 */

import { state } from '../core/state.js';
import { workoutEngine } from './workout-engine.js';
import { speechManager } from './speech-manager.js';
import { languageManager } from './language-manager.js';
import { escapeHtml } from '../core/helpers.js';

class DailyWorkoutController {
  constructor() {
    this.currentExerciseIndex = 0;
    this.workoutData = null;
    this.canvasAnimationId = null;
  }

  init() {
    state.subscribe('ACTIVE_DAY_CHANGED', () => this.render());
    state.subscribe('LANGUAGE_CHANGED', () => this.render());
    state.subscribe('WORKOUT_COMPLETED', () => this.render());
  }

  render(containerId = 'daily-workout-root') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dayNumber = state.activeDay || 1;
    this.workoutData = workoutEngine.getPersonalizedWorkout(dayNumber, state.profile);
    const lang = state.profile.language || 'en';

    // Safe bounds check for exercise index
    if (this.currentExerciseIndex >= this.workoutData.resolvedExercises.length) {
      this.currentExerciseIndex = 0;
    }

    const currentEx = this.workoutData.resolvedExercises[this.currentExerciseIndex] || this.workoutData.resolvedExercises[0];
    const completedDaysCount = state.progress.completedDays ? state.progress.completedDays.length : 0;
    const progressPercent = Math.min(100, Math.round((completedDaysCount / 30) * 100));

    const exName = currentEx.name[lang] || currentEx.name['en'];
    const exInstructions = currentEx.instructions[lang] || currentEx.instructions['en'];
    const exTip = currentEx.tip[lang] || currentEx.tip['en'];
    const workoutTitle = this.workoutData.title[lang] || this.workoutData.title['en'];

    container.innerHTML = `
      <!-- Today's Workout Banner -->
      <div class="workout-header-banner">
        <div class="banner-title-area">
          <div class="banner-calendar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <h1 class="text-title-2" data-i18n="todaysWorkout">${languageManager.t('todaysWorkout')}</h1>
            <p class="text-body-sm" data-i18n="todaysWorkoutSubtitle">${languageManager.t('todaysWorkoutSubtitle')}</p>
          </div>
        </div>

        <div class="banner-progress-pill">
          <span>Day ${dayNumber} of 30</span>
          <div class="banner-mini-bar" aria-label="Progress bar">
            <div class="banner-mini-fill" style="width: ${progressPercent}%;"></div>
          </div>
          <span>${progressPercent}%</span>
        </div>
      </div>

      <!-- Main Exercise Board (Matches Reference Image) -->
      <div class="exercise-main-board">
        <div class="exercise-board-grid">
          <!-- Left Column: Video Demonstration & 3-Step Thumbnails -->
          <div class="exercise-visual-col">
            <div class="video-player-container" id="video-box">
              <canvas id="motion-guide-canvas" class="video-fallback-canvas" width="480" height="270"></canvas>
              
              <div class="video-play-overlay" id="btn-video-play-overlay">
                <div class="video-play-btn" aria-label="Start Exercise Demo">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>

              <div class="video-controls-bar">
                <span id="video-timestamp">0:00 / 0:45</span>
                <span>FitLife Motion Guide</span>
              </div>
            </div>

            <!-- 3 Sequential Step Thumbnails -->
            <div class="exercise-steps-row">
              <div class="step-thumb-card active" data-step-index="0">
                <img src="${currentEx.media.steps[0] || 'assets/images/exercises/steps/squat-step-1.png'}" alt="Step 1 Stance" class="step-thumb-img">
                <span class="step-thumb-label">1. Start Stance</span>
              </div>
              <div class="step-thumb-card" data-step-index="1">
                <img src="${currentEx.media.steps[1] || 'assets/images/exercises/steps/squat-step-2.png'}" alt="Step 2 Descent" class="step-thumb-img">
                <span class="step-thumb-label">2. Lower Body</span>
              </div>
              <div class="step-thumb-card" data-step-index="2">
                <img src="${currentEx.media.steps[2] || 'assets/images/exercises/steps/squat-step-3.png'}" alt="Step 3 Return" class="step-thumb-img">
                <span class="step-thumb-label">3. Stand & Finish</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Title, Listen, Instructions, Tip Card -->
          <div class="exercise-meta-col">
            <div class="exercise-header-line">
              <h2 class="exercise-main-title">${escapeHtml(exName)}</h2>
              <span class="exercise-target-badge">(${escapeHtml(currentEx.primaryMuscles.join(' & ').replace('_', ' '))})</span>
            </div>

            <!-- Audio Voice Assistant Button & Language Indicator -->
            <div class="audio-control-bar">
              <button id="btn-listen-exercise" class="btn-listen" aria-label="Listen to instructions">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg>
                <span data-i18n="listen">${languageManager.t('listen')}</span>
              </button>
              
              <div class="lang-dropdown-wrapper">
                <button class="lang-dropdown-btn" id="lang-dropdown-btn-workout" aria-label="Select voice language">
                  <span>${lang === 'hi' ? '🇮🇳 हिंदी' : lang === 'gu' ? '🇮🇳 ગુજરાતી' : '🇬🇧 English'}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
              </div>
            </div>

            <!-- Numbered Instructions List -->
            <div class="exercise-instruction-steps">
              ${exInstructions.map((instruction, idx) => `
                <div class="instruction-step-item">
                  <div class="step-number-circle">${idx + 1}</div>
                  <div class="step-instruction-text">${escapeHtml(instruction)}</div>
                </div>
              `).join('')}
            </div>

            <!-- Tip Card (Yellow box from reference image) -->
            <div class="form-tip-card">
              <div class="tip-bulb-icon">💡</div>
              <div class="tip-content">
                <span class="tip-title" data-i18n="tipPrefix">${languageManager.t('tipPrefix')}</span>
                <span class="tip-text">${escapeHtml(exTip)}</span>
              </div>
            </div>

            <!-- Start Workout Action Button -->
            <div style="margin-top: 10px;">
              <button id="btn-start-guided-player" class="btn btn-primary btn-lg" style="width: 100%;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span data-i18n="startWorkout">${languageManager.t('startWorkout')} (Day ${dayNumber})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(currentEx, exInstructions);
    this.startMotionGuideCanvas(currentEx);
  }

  bindEvents(currentEx, instructions) {
    // Listen Button Speech Toggle
    const listenBtn = document.getElementById('btn-listen-exercise');
    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        const lang = state.profile.language || 'en';
        const name = currentEx.name[lang] || currentEx.name['en'];
        const fullSpeech = `${name}. ` + instructions.join('. ');
        speechManager.toggle(fullSpeech);
      });
    }

    // Video play overlay
    const overlay = document.getElementById('btn-video-play-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        const startBtn = document.getElementById('btn-start-guided-player');
        if (startBtn) startBtn.click();
      });
    }

    // Start Guided Player Button
    const startPlayerBtn = document.getElementById('btn-start-guided-player');
    if (startPlayerBtn) {
      startPlayerBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('LAUNCH_GUIDED_PLAYER', {
          detail: { day: state.activeDay || 1 }
        }));
      });
    }

    // Step Thumbnail Switching
    document.querySelectorAll('.step-thumb-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.step-thumb-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });

    // Language Dropdown in Workout Screen
    const langBtn = document.getElementById('lang-dropdown-btn-workout');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = state.profile.language === 'en' ? 'hi' : state.profile.language === 'hi' ? 'gu' : 'en';
        state.setLanguage(nextLang);
      });
    }
  }

  startMotionGuideCanvas(exercise) {
    const canvas = document.getElementById('motion-guide-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    if (this.canvasAnimationId) {
      cancelAnimationFrame(this.canvasAnimationId);
    }

    const renderFrame = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw studio floor & soft lavender ambient gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#F4F1FF');
      bgGrad.addColorStop(1, '#ECE8FD');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Floor line
      ctx.strokeStyle = '#D5CEF0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 230);
      ctx.lineTo(440, 230);
      ctx.stroke();

      // Workout Mat
      ctx.fillStyle = '#5637D8';
      ctx.beginPath();
      ctx.roundRect(80, 224, 320, 10, 4);
      ctx.fill();

      // Kinetic animated movement curve (Oscillating squat depth)
      const cycle = Math.sin(frame * 0.04); // -1 to +1
      const squatDepth = 15 + Math.max(0, cycle * 35); // 15px to 50px downward displacement

      // Draw stylized biomechanical figure
      const centerX = 240;
      const headY = 90 + squatDepth;
      const hipY = 150 + squatDepth;
      const kneeX = centerX - 25 - (squatDepth * 0.2);
      const kneeY = 185 + (squatDepth * 0.5);
      const footX = centerX - 15;
      const footY = 224;

      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Spine & Head
      ctx.fillStyle = '#101C3A';
      ctx.beginPath();
      ctx.arc(centerX + 5, headY, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#101C3A';
      ctx.beginPath();
      ctx.moveTo(centerX + 5, headY + 14);
      ctx.lineTo(centerX - 5, hipY);
      ctx.stroke();

      // Legs / Squat articulation
      ctx.strokeStyle = '#5637D8';
      ctx.beginPath();
      ctx.moveTo(centerX - 5, hipY);
      ctx.lineTo(kneeX, kneeY);
      ctx.lineTo(footX, footY);
      ctx.stroke();

      // Arms counter-balance
      ctx.strokeStyle = '#7456EA';
      ctx.beginPath();
      ctx.moveTo(centerX + 2, headY + 25);
      ctx.lineTo(centerX - 35, headY + 35);
      ctx.stroke();

      // Realtime cadence text
      ctx.fillStyle = '#69738A';
      ctx.font = '600 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      const phaseText = cycle > 0 ? 'Descent: Knees Bent, Back Straight' : 'Ascent: Press Through Heels';
      ctx.fillText(phaseText, centerX, 40);

      this.canvasAnimationId = requestAnimationFrame(renderFrame);
    };

    renderFrame();
  }
}

export const dailyWorkoutController = new DailyWorkoutController();
