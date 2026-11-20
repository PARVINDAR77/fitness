/**
 * FitLife Web Speech Assistant & Voice Coaching Engine
 * Interfaces with window.speechSynthesis, manages regional voices, and provides auditory feedback
 */

import { state } from '../core/state.js';

class SpeechManager {
  constructor() {
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.voices = [];
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.init();
  }

  init() {
    if (!this.synth) {
      console.warn('[FitLife Speech] Web Speech API not supported in this browser.');
      return;
    }

    this.loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  getVoiceForLanguage(langCode) {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }

    const langMap = {
      en: ['en-IN', 'en-US', 'en-GB'],
      hi: ['hi-IN', 'hi'],
      gu: ['gu-IN', 'gu'],
      mr: ['mr-IN', 'mr'],
      ta: ['ta-IN', 'ta'],
      te: ['te-IN', 'te']
    };

    const targetPrefixes = langMap[langCode] || ['en'];

    // 1. Direct match on language code
    for (const prefix of targetPrefixes) {
      const match = this.voices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix.toLowerCase()));
      if (match) return match;
    }

    // 2. Name-based match (e.g. voice name contains "Hindi" or "Gujarati")
    const nameMatch = this.voices.find(v => {
      const name = v.name.toLowerCase();
      if (langCode === 'hi' && name.includes('hindi')) return true;
      if (langCode === 'gu' && name.includes('gujarati')) return true;
      return false;
    });

    if (nameMatch) return nameMatch;

    // 3. Fallback to default or English voice
    return this.voices.find(v => v.default) || this.voices.find(v => v.lang.startsWith('en')) || null;
  }

  speak(text, onComplete = null) {
    if (!this.synth) {
      this.showToast("Voice assistant is not supported in this browser.");
      if (onComplete) onComplete();
      return;
    }

    this.stop(); // Stop any active speech

    if (!text || text.trim() === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const currentLang = state.profile.language || 'en';
    const voice = this.getVoiceForLanguage(currentLang);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'gu' ? 'gu-IN' : 'en-US';
    }

    utterance.rate = state.profile.speechSpeed || 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.updateListenButton(true);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.updateListenButton(false);
      if (onComplete) onComplete();
    };

    utterance.onerror = (err) => {
      this.isSpeaking = false;
      this.updateListenButton(false);
      console.warn('[FitLife Speech] Speech error or canceled:', err);
      if (onComplete) onComplete();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.updateListenButton(false);
    }
  }

  toggle(text) {
    if (this.isSpeaking) {
      this.stop();
    } else {
      this.speak(text);
    }
  }

  updateListenButton(speaking) {
    const btn = document.getElementById('btn-listen-exercise');
    if (!btn) return;

    if (speaking) {
      btn.classList.add('speaking');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg> <span data-i18n="stop">${state.profile.language === 'hi' ? 'रोकें' : state.profile.language === 'gu' ? 'અટકાવો' : 'Stop'}</span>`;
    } else {
      btn.classList.remove('speaking');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg> <span data-i18n="listen">${state.profile.language === 'hi' ? 'सुनें' : state.profile.language === 'gu' ? 'સાંભળો' : 'Listen'}</span>`;
    }
  }

  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

export const speechManager = new SpeechManager();
