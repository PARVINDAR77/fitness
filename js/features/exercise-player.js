/**
 * FitLife Interactive Guided Workout Player
 * Drives live work intervals, rest periods, acoustic alerts, voice announcements, and session completion
 */

import { state } from '../core/state.js';
import { workoutEngine } from './workout-engine.js';
import { speechManager } from './speech-manager.js';
import { languageManager } from './language-manager.js';
import { formatTime, playCountdownChime, playStartChime, playRestChime } from '../core/helpers.js';

class ExercisePlayerController {
  constructor() {
    this.timerInterval = null;
    this.currentDay = 1;
    this.workout = null;
    this.exerciseIndex = 0;
    this.phase = 'ready'; // 'ready' | 'work' | 'rest' | 'finished'
    this.remainingSeconds = 3;
    this.isPaused = false;
    this.init();
  }

  init() {
    window.addEventListener('LAUNCH_GUIDED_PLAYER', (e) => {
      const day = e.detail && e.detail.day ? e.detail.day : state.activeDay || 1;
      this.startSession(day);
    });
  }

  startSession(dayNumber) {
    this.currentDay = dayNumber;
    this.workout = workoutEngine.getPersonalizedWorkout(dayNumber, state.profile);
    this.exerciseIndex = 0;
    this.isPaused = false;

    this.renderPlayerModal();
    this.startGetReadyPhase();
  }

  renderPlayerModal() {
    let overlay = document.getElementById('guided-player-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'guided-player-overlay';
      overlay.className = 'player-overlay';
      document.body.appendChild(overlay);
    }

    overlay.classList.add('active');
    this.updatePlayerUI();
  }

  updatePlayerUI() {
    const overlay = document.getElementById('guided-player-overlay');
    if (!overlay || !this.workout) return;

    if (this.phase === 'finished') {
      this.renderCompletionScreen(overlay);
      return;
    }

    const lang = state.profile.language || 'en';
    const currentEx = this.workout.resolvedExercises[this.exerciseIndex] || this.workout.resolvedExercises[0];
    const exName = currentEx.name[lang] || currentEx.name['en'];
    const totalExercises = this.workout.resolvedExercises.length;

    let nextExName = 'None';
    if (this.exerciseIndex + 1 < totalExercises) {
      const nextEx = this.workout.resolvedExercises[this.exerciseIndex + 1];
      nextExName = nextEx.name[lang] || nextEx.name['en'];
    }

    const phaseLabel = this.phase === 'ready'
      ? languageManager.t('playerGetReady')
      : this.phase === 'work'
        ? languageManager.t('playerWork')
        : languageManager.t('playerRest');

    overlay.innerHTML = `
      <div class="player-modal" role="dialog" aria-modal="true" aria-label="Guided Workout Player">
        <div class="player-header">
          <span class="player-step-counter">Exercise ${this.exerciseIndex + 1} of ${totalExercises}</span>
          <button id="btn-close-player" class="modal-close-btn" aria-label="Close workout player">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div style="text-align: center;">
          <h2 class="text-title-1">${this.phase === 'rest' ? 'Rest & Breathe' : exName}</h2>
          <p class="text-body-sm" style="color: var(--color-primary); font-weight: 600;">
            ${this.phase === 'rest' ? `Next Up: ${nextExName}` : currentEx.primaryMuscles.join(' & ').replace('_', ' ')}
          </p>
        </div>

        <!-- Circular Countdown Timer -->
        <div class="player-timer-circle">
          <svg class="player-timer-svg" width="200" height="200">
            <circle class="timer-circle-bg" cx="100" cy="100" r="88"/>
            <circle id="timer-circle-progress" class="timer-circle-progress" cx="100" cy="100" r="88" stroke-dasharray="553" stroke-dashoffset="0"/>
          </svg>
          <div class="player-timer-number" id="player-time-digits">${this.remainingSeconds}</div>
          <div class="player-timer-status">${phaseLabel}</div>
        </div>

        <!-- Controls Row -->
        <div class="player-controls-row">
          <button id="btn-player-prev" class="player-btn-circle" aria-label="Previous Exercise">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <button id="btn-player-toggle" class="player-btn-primary" aria-label="${this.isPaused ? 'Resume' : 'Pause'}">
            ${this.isPaused 
              ? `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>` 
              : `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
            }
          </button>

          <button id="btn-player-next" class="player-btn-circle" aria-label="Skip to Next Exercise">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    `;

    this.bindPlayerEvents();
  }

  bindPlayerEvents() {
    const closeBtn = document.getElementById('btn-close-player');
    if (closeBtn) closeBtn.addEventListener('click', () => this.stopAndClose());

    const toggleBtn = document.getElementById('btn-player-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.isPaused = !this.isPaused;
        this.updatePlayerUI();
      });
    }

    const nextBtn = document.getElementById('btn-player-next');
    if (nextBtn) nextBtn.addEventListener('click', () => this.skipNext());

    const prevBtn = document.getElementById('btn-player-prev');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevExercise());
  }

  startGetReadyPhase() {
    this.phase = 'ready';
    this.remainingSeconds = 3;
    this.clearTimer();

    const currentEx = this.workout.resolvedExercises[this.exerciseIndex];
    const lang = state.profile.language || 'en';
    const exName = currentEx.name[lang] || currentEx.name['en'];

    if (state.profile.soundEnabled !== false) {
      speechManager.speak(`Get ready for ${exName}`);
    }

    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;

      this.remainingSeconds--;
      this.updateDigits();

      if (this.remainingSeconds > 0 && state.profile.soundEnabled !== false) {
        playCountdownChime();
      }

      if (this.remainingSeconds <= 0) {
        this.startWorkPhase();
      }
    }, 1000);
  }

  startWorkPhase() {
    this.phase = 'work';
    const currentEx = this.workout.resolvedExercises[this.exerciseIndex];
    const duration = currentEx.plannedDuration || (currentEx.plannedReps ? currentEx.plannedReps * 3 : 30);
    this.remainingSeconds = duration;
    this.clearTimer();

    if (state.profile.soundEnabled !== false) {
      playStartChime();
    }

    this.updatePlayerUI();

    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;

      this.remainingSeconds--;
      this.updateDigits();

      if (this.remainingSeconds <= 3 && this.remainingSeconds > 0 && state.profile.soundEnabled !== false) {
        playCountdownChime();
      }

      if (this.remainingSeconds <= 0) {
        this.finishWorkInterval();
      }
    }, 1000);
  }

  finishWorkInterval() {
    const totalExercises = this.workout.resolvedExercises.length;
    if (this.exerciseIndex + 1 >= totalExercises) {
      this.phase = 'finished';
      this.clearTimer();
      state.completeActiveDay(this.workout.duration || 15);
      this.updatePlayerUI();
    } else {
      this.startRestPhase();
    }
  }

  startRestPhase() {
    this.phase = 'rest';
    const currentEx = this.workout.resolvedExercises[this.exerciseIndex];
    this.remainingSeconds = currentEx.restTime || 20;
    this.clearTimer();

    if (state.profile.soundEnabled !== false) {
      playRestChime();
    }

    this.updatePlayerUI();

    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;

      this.remainingSeconds--;
      this.updateDigits();

      if (this.remainingSeconds <= 3 && this.remainingSeconds > 0 && state.profile.soundEnabled !== false) {
        playCountdownChime();
      }

      if (this.remainingSeconds <= 0) {
        this.exerciseIndex++;
        this.startGetReadyPhase();
      }
    }, 1000);
  }

  updateDigits() {
    const digits = document.getElementById('player-time-digits');
    if (digits) {
      digits.textContent = this.remainingSeconds;
    }
  }

  skipNext() {
    this.clearTimer();
    const totalExercises = this.workout.resolvedExercises.length;
    if (this.exerciseIndex + 1 < totalExercises) {
      this.exerciseIndex++;
      this.startGetReadyPhase();
    } else {
      this.finishWorkInterval();
    }
  }

  prevExercise() {
    this.clearTimer();
    if (this.exerciseIndex > 0) {
      this.exerciseIndex--;
      this.startGetReadyPhase();
    } else {
      this.startGetReadyPhase();
    }
  }

  renderCompletionScreen(overlay) {
    if (state.profile.soundEnabled !== false) {
      playStartChime();
    }

    overlay.innerHTML = `
      <div class="player-modal" style="text-align: center; gap: 20px;">
        <div style="font-size: 3.5rem;">🎉</div>
        <h2 class="text-title-1" data-i18n="playerCongratulations">${languageManager.t('playerCongratulations')}</h2>
        <p class="text-body" data-i18n="playerDayLogged">${languageManager.t('playerDayLogged', { day: this.currentDay })}</p>
        
        <div style="display: flex; gap: 12px; margin-top: 15px; width: 100%;">
          <button id="btn-finish-home" class="btn btn-primary" style="flex: 1;">
            <span data-i18n="btnBackHome">${languageManager.t('btnBackHome')}</span>
          </button>
          <button id="btn-finish-plan" class="btn btn-secondary" style="flex: 1;">
            <span data-i18n="btnViewCalendar">${languageManager.t('btnViewCalendar')}</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-finish-home').addEventListener('click', () => {
      this.stopAndClose();
      window.location.hash = '#home';
    });

    document.getElementById('btn-finish-plan').addEventListener('click', () => {
      this.stopAndClose();
      window.location.hash = '#plan';
    });
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  stopAndClose() {
    this.clearTimer();
    speechManager.stop();
    const overlay = document.getElementById('guided-player-overlay');
    if (overlay) overlay.classList.remove('active');
  }
}

export const exercisePlayer = new ExercisePlayerController();
