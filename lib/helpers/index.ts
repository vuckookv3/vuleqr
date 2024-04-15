export function beep(freq = 750, duration = 150, vol = 5) {
  try {
    const context = new window.AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = 'square';
    gain.connect(context.destination);
    gain.gain.value = vol * 0.01;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * 0.001);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Sorry, Web Audio API is not supported by your browser');
  }
}
