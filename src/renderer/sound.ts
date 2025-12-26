let audioContext: AudioContext | null = null;

const ensureContext = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    void audioContext.resume();
  }
  return audioContext;
};

export const playBeep = () => {
  const ctx = ensureContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.value = 180 + Math.random() * 760;
  gain.gain.value = 0.2;

  osc.connect(gain).connect(ctx.destination);

  const now = ctx.currentTime;
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
  osc.start(now);
  osc.stop(now + 0.3);
};
