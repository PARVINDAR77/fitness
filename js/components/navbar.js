/**
 * FitLife Navigation Bar Component
 * Renders sticky desktop header and bottom mobile navigation bar
 */

import { state } from '../core/state.js';
import { languageManager } from '../features/language-manager.js';

export function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <div class="site-container header-inner">
      <!-- Brand Logo -->
      <a href="#home" class="brand-logo" aria-label="FitLife Home">
        <svg class="brand-icon" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="14" fill="#ECE8FD"/>
          <!-- Dumbbell icon in brand colors -->
          <rect x="8" y="18" width="6" height="12" rx="3" fill="#5637D8"/>
          <rect x="14" y="21" width="4" height="6" rx="2" fill="#7456EA"/>
          <rect x="18" y="22" width="12" height="4" rx="2" fill="#5637D8"/>
          <rect x="30" y="21" width="4" height="6" rx="2" fill="#7456EA"/>
          <rect x="34" y="18" width="6" height="12" rx="3" fill="#5637D8"/>
        </svg>
        <div class="brand-meta">
          <div class="brand-name">Fit<span>Life</span></div>
          <div class="brand-tagline" data-i18n="brandTagline">${languageManager.t('brandTagline')}</div>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="desktop-nav" aria-label="Main Navigation">
        <a href="#home" class="nav-link active">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span data-i18n="navHome">${languageManager.t('navHome')}</span>
        </a>
        <a href="#plan" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span data-i18n="navWorkoutPlan">${languageManager.t('navWorkoutPlan')}</span>
        </a>
        <a href="#workout" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span data-i18n="todaysWorkout">${languageManager.t('todaysWorkout')}</span>
        </a>
        <a href="#tips" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><line x1="10" y1="21" x2="14" y2="21"/></svg>
          <span data-i18n="navHealthyTips">${languageManager.t('navHealthyTips')}</span>
        </a>
        <a href="#profile" class="nav-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span data-i18n="profile">${languageManager.t('profile')}</span>
        </a>
      </nav>

      <!-- Header Actions: Language Switcher & Profile Button -->
      <div class="header-actions">
        <div class="lang-dropdown-wrapper">
          <button class="lang-dropdown-btn" id="lang-dropdown-btn" aria-haspopup="true" aria-expanded="false">
            <span id="current-lang-label">🌐 English</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="lang-menu" id="lang-menu" role="menu">
            <button class="lang-option" data-set-lang="en">🇬🇧 English</button>
            <button class="lang-option" data-set-lang="hi">🇮🇳 हिंदी (Hindi)</button>
            <button class="lang-option" data-set-lang="gu">🇮🇳 ગુજરાતી (Gujarati)</button>
            <button class="lang-option" data-set-lang="mr">🇮🇳 मराठी (Marathi)</button>
            <button class="lang-option" data-set-lang="ta">🇮🇳 தமிழ் (Tamil)</button>
            <button class="lang-option" data-set-lang="te">🇮🇳 తెలుగు (Telugu)</button>
          </div>
        </div>

        <a href="#profile" class="btn-header-profile" aria-label="Profile">
          <span data-i18n="login">${languageManager.t('login')}</span>
        </a>
      </div>
    </div>
  `;
}

export function renderBottomNav() {
  const bottomNav = document.getElementById('bottom-nav');
  if (!bottomNav) return;

  bottomNav.innerHTML = `
    <a href="#home" class="bottom-nav-item active">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span data-i18n="navHome">${languageManager.t('navHome')}</span>
    </a>
    <a href="#plan" class="bottom-nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>Plan</span>
    </a>
    <a href="#workout" class="bottom-nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      <span>Today</span>
    </a>
    <a href="#tips" class="bottom-nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><line x1="10" y1="21" x2="14" y2="21"/></svg>
      <span>Tips</span>
    </a>
    <a href="#profile" class="bottom-nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span data-i18n="profile">${languageManager.t('profile')}</span>
    </a>
  `;
}
