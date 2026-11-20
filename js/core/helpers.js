/**
 * FitLife Utility Helpers
 * Formatting, Sanitization, Audio Chimes & DOM operations
 */

export function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function playChime(frequency = 587, durationMs = 120, type = 'sine') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000);
  } catch (e) {
    // Audio autoplay restrictions or unsupported
  }
}

export function playCountdownChime() {
  playChime(440, 100, 'sine');
}

export function playStartChime() {
  playChime(587, 80, 'triangle');
  setTimeout(() => playChime(880, 180, 'triangle'), 100);
}

export function playRestChime() {
  playChime(659, 120, 'sine');
  setTimeout(() => playChime(523, 180, 'sine'), 130);
}
