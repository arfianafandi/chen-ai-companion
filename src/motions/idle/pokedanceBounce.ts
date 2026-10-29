import type { IdleGestureDefinition, IdleGestureContext, IdleGestureResult } from '../types';

/**
 * Poke Dance Bounce & Hip Sway
 * Inspired by Motion_POKEDANCE.ts
 * Harmonic vertical bounce at ~128 BPM (2.13 Hz) paired with rhythmic pelvic hip sway (1.06 Hz).
 */
export const pokedanceBounce: IdleGestureDefinition = {
  id: 'pokedance_bounce',
  displayName: 'Poke Bounce & Sway',
  description: 'Goyangan pinggul ritmis dan pantulan badan ceria ala Poke Dance.',
  duration: 4.8,
  emotion: 'happy',
  update(ctx: IdleGestureContext): IdleGestureResult {
    // 128 BPM rhythm beat
    const bpm = 128;
    const beat = (ctx.timer * bpm) / 60;

    // Harmonic bounce (2.13 Hz) & Pelvis roll (1.06 Hz)
    const bounce = Math.abs(Math.sin(beat * Math.PI)) * -0.045; // Dips downward on each beat
    const hipRoll = Math.sin(beat * Math.PI) * 0.16;            // Sway alternating left/right
    const hipYaw = Math.cos(beat * Math.PI) * 0.06;

    // Head subtle counter-tilt with phase lag
    const headRoll = -Math.sin(beat * Math.PI - 0.25) * 0.12;
    const headPitch = -0.04 + Math.sin(beat * Math.PI * 2) * 0.03;

    // Arms in iconic Poke Dance stance: hands near shoulders/head, elbows bent
    const armWave = Math.sin(beat * Math.PI * 2) * 0.05;

    return {
      centerOffsetY: bounce * ctx.weight,
      centerOffsetX: Math.sin(beat * Math.PI) * 0.02 * ctx.weight,
      hipsRoll: hipRoll * ctx.weight,
      hipsYaw: hipYaw * ctx.weight,
      headRoll,
      headPitch,
      // Left arm lifted, elbow bent
      leftArmTargetZ: -0.42 + armWave,
      leftArmTargetX: 0.18,
      leftArmTargetY: -0.12,
      leftElbowTargetZ: 0.65 + armWave * 0.5,
      // Right arm lifted, elbow bent
      rightArmTargetZ: 0.42 - armWave,
      rightArmTargetX: 0.18,
      rightArmTargetY: 0.12,
      rightElbowTargetZ: -0.65 - armWave * 0.5,
      // Wrist subtle pulsation
      rightWristTargetZ: Math.sin(beat * Math.PI) * 0.15,
      rightWristTargetX: 0.05,
      // Cute smile
      smile: 0.8,
      blush: 0.25,
      fingerCurl: 0.4, // Soft natural hand curve
    };
  },
};
