/**
 * FitLife Multilingual Language Manager
 * Scans DOM elements with data-i18n attributes, updates text content, and binds flag selectors
 */

import { translations } from '../data/translations.js';
import { state } from '../core/state.js';

class LanguageManager {
  constructor() {
    this.currentLanguage = state.profile.language || 'en';
  }

  init() {
    state.subscribe('LANGUAGE_CHANGED', ({ language }) => {
      this.currentLanguage = language;
      this.applyTranslations();
      this.updateLanguageDropdownUI();
    });

    this.applyTranslations();
    this.bindEvents();
    this.updateLanguageDropdownUI();
  }

  t(key, replacements = {}) {
    const langDict = translations[this.currentLanguage] || translations['en'];
    let text = langDict[key] || translations['en'][key] || key;

    // Handle template replacements like {day}
    Object.keys(replacements).forEach(placeholder => {
      text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacements[placeholder]);
    });

    return text;
  }

  applyTranslations() {
    document.documentElement.setAttribute('lang', this.currentLanguage);
    document.body.classList.toggle('lang-hi', this.currentLanguage === 'hi');
    document.body.classList.toggle('lang-gu', this.currentLanguage === 'gu');

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) {
        if (el.tagName === 'INPUT' && el.getAttribute('type') === 'placeholder') {
          el.setAttribute('placeholder', val);
        } else {
          el.textContent = val;
        }
      }
    });

    // Translate elements with aria-label i18n
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = this.t(key);
      if (val) el.setAttribute('aria-label', val);
    });
  }

  bindEvents() {
    // Dropdown toggle
    const toggleBtn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-menu');

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
      });

      document.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    }

    // Language buttons
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const chosenLang = btn.getAttribute('data-set-lang');
        if (chosenLang) {
          state.setLanguage(chosenLang);
        }
      });
    });
  }

  updateLanguageDropdownUI() {
    const currentLabel = document.getElementById('current-lang-label');
    const flagEmojis = { en: '🇬🇧 English', hi: '🇮🇳 हिंदी', gu: '🇮🇳 ગુજરાતી', mr: '🇮🇳 मराठी', ta: '🇮🇳 தமிழ்', te: '🇮🇳 తెలుగు' };
    if (currentLabel) {
      currentLabel.textContent = flagEmojis[this.currentLanguage] || '🌐 English';
    }

    // Highlight active pill
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      const lang = btn.getAttribute('data-set-lang');
      btn.classList.toggle('active', lang === this.currentLanguage);
    });
  }
}

export const languageManager = new LanguageManager();
