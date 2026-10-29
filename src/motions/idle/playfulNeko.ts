import type { IdleGestureDefinition, IdleGestureContext, IdleGestureResult } from '../types';

/**
 * Playful Neko Paws
 * Inspired by ゆるして猫!!.ts
 * Dynamic cat paws scratching/patting in front of chest with 30-finger curl articulation and cute head tilt.
 */
export const playfulNeko: IdleGestureDefinition = {
  id: 'playful_neko',
  displayName: 'Playful Neko Paws',
  description: 'Pose cakar kucing dinamis bergantian di depan dada dengan senyum manja.',
  duration: 4.5,
  emotion: 'happy',
  update(ctx: IdleGestureContext): IdleGestureResult {
    // Alternating paw cycle (approx 1.8 Hz paw stroke)
    const strokeFreq = 11.0;
    const leftStroke = Math.sin(ctx.timer * strokeFreq);
    const rightStroke = Math.cos(ctx.timer * strokeFreq);

    // Soft cute body bounce
    const bounce = Math.sin(ctx.timer * strokeFreq * 0.5) * -0.015;

    // Head tilted playfully with sweet nod
    const headRoll = 0.16 + Math.sin(ctx.timer * 3.5) * 0.05;
    const headPitch = -0.06 + Math.sin(ctx.timer * strokeFreq * 0.5) * 0.04;
    const headYaw = -0.08;

    return {
      centerOffsetY: bounce * ctx.weight,
      hipsRoll: Math.sin(ctx.timer * strokeFreq * 0.5) * 0.04 * ctx.weight,
      headRoll,
      headPitch,
      headYaw,
      // Left paw held up in front of chest, alternating forward and back
      leftArmTargetX: 0.48 + leftStroke * 0.08,
      leftArmTargetZ: -0.32,
      leftArmTargetY: -0.35,
      leftElbowTargetZ: 0.85 + leftStroke * 0.12,
      // Right paw held up in front of chest
      rightArmTargetX: 0.48 + rightStroke * 0.08,
      rightArmTargetZ: 0.32,
      rightArmTargetY: 0.35,
      rightElbowTargetZ: -0.85 - rightStroke * 0.12,
      rightWristTargetX: 0.25,
      rightWristTargetZ: -0.15,
      // Curled cat paws
      fingerCurl: 0.85,
      // Cheerful expression with blush
      smile: 0.85,
      blush: 0.65,
      lookAtOffsetY: 0.2,
    };
  },
};
