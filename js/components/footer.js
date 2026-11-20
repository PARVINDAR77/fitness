/**
 * FitLife Site Footer Component
 * Renders medical disclaimer, copyright, and regional language note
 */

import { languageManager } from '../features/language-manager.js';

export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="site-container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand-logo">
            <svg class="brand-icon" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="14" fill="#ECE8FD"/>
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
          </div>
          <p data-i18n="footerMission">${languageManager.t('footerMission')}</p>
        </div>

        <div>
          <h4 class="footer-heading" data-i18n="footerLinksHeader">${languageManager.t('footerLinksHeader')}</h4>
          <div class="footer-links">
            <a href="#home" class="footer-link" data-i18n="navHome">${languageManager.t('navHome')}</a>
            <a href="#plan" class="footer-link" data-i18n="navWorkoutPlan">${languageManager.t('navWorkoutPlan')}</a>
            <a href="#workout" class="footer-link" data-i18n="todaysWorkout">${languageManager.t('todaysWorkout')}</a>
            <a href="#tips" class="footer-link" data-i18n="navHealthyTips">${languageManager.t('navHealthyTips')}</a>
            <a href="#profile" class="footer-link" data-i18n="profile">${languageManager.t('profile')}</a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading" data-i18n="footerLegalHeader">${languageManager.t('footerLegalHeader')}</h4>
          <div class="footer-links">
            <a href="#profile" class="footer-link">Privacy & Local Storage</a>
            <a href="#tips" class="footer-link">Safety Guidelines</a>
            <a href="#home" class="footer-link">Multilingual Access</a>
          </div>
        </div>
      </div>

      <div class="disclaimer-box" data-i18n="disclaimerText">
        ${languageManager.t('disclaimerText')}
      </div>

      <div class="footer-bottom">
        <p data-i18n="copyrightText">${languageManager.t('copyrightText')}</p>
        <p>Built with ❤️ for everyday health, longevity, and joy.</p>
      </div>
    </div>
  `;
}
