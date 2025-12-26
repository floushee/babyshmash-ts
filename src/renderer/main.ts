import { playBeep } from './sound.js';
import { randomShape } from './shapes.js';

const canvas = document.getElementById('canvas') as HTMLDivElement | null;
const hint = document.getElementById('hint');

const spawnShape = (trigger: string) => {
  if (!canvas) return;
  const shape = randomShape(trigger);
  canvas.appendChild(shape);

  shape.addEventListener('animationend', () => {
    shape.remove();
  });

  // Fallback cleanup in case the animation is interrupted.
  window.setTimeout(() => shape.remove(), 4000);
};

const handleInteraction = (label: string) => {
  spawnShape(label);
  playBeep();
  if (hint) {
    hint.classList.add('hide');
  }
};

window.addEventListener('keydown', (event) => {
  // Allow Alt+F4, etc. to pass through without side effects.
  if (event.metaKey || event.altKey && event.key.toLowerCase() === 'f4') return;
  handleInteraction(event.key);
});

window.addEventListener('pointerdown', () => handleInteraction('tap'));
window.addEventListener('resize', () => {
  // Keeping shapes bounded to the new viewport; no action required besides hints.
});

// Keep the background lively if no input happens.
const idleIntervalMs = 2000;
let idleTimer = window.setInterval(() => handleInteraction('idle'), idleIntervalMs);

const resetIdleTimer = () => {
  window.clearInterval(idleTimer);
  idleTimer = window.setInterval(() => handleInteraction('idle'), idleIntervalMs);
};

['keydown', 'pointerdown', 'pointermove'].forEach((evt) => {
  window.addEventListener(evt, resetIdleTimer);
});

// Start with a single shape so the screen is not empty.
spawnShape('start');
