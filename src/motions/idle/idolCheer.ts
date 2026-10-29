import type { IdleGestureDefinition, IdleGestureContext, IdleGestureResult } from '../types';

/**
 * Idol Cheer & Support
 * Inspired by Michi no Timothy (Motion.ts)
 * Energetic upper-body cheer with hands pumping at chest level, wide smile, and free eye tracking.
 */
export const idolCheer: IdleGestureDefinition = {
  id: 'idol_cheer',
  displayName: 'Idol Cheer',
  description: 'Gerakan sorak idol ceria di depan dada dengan kontak mata penuh mengikuti kursor.',
  duration: 4.2,
  emotion: 'happy',
  update(ctx: IdleGestureContext): IdleGestureResult {
    // Rhythmic cheer cheer pump (approx 2.4 Hz)
    const cheerRate = 14.0;
    const cheerPump = Math.sin(ctx.timer * cheerRate) * 0.08;

    // Rhythmic enthusiastic nod
    const headPitch = -0.05 + Math.sin(ctx.timer * cheerRate * 0.5) * 0.05;
    const headRoll = Math.sin(ctx.timer * 4.0) * 0.06;

    // Upper body vertical bounce
    const bounce = Math.abs(Math.sin(ctx.timer * cheerRate * 0.5)) * -0.025;

    return {
      centerOffsetY: bounce * ctx.weight,
      hipsRoll: Math.sin(ctx.timer * 4.0) * 0.03 * ctx.weight,
      headPitch,
      headRoll,
      headYaw: 0, // Zero yaw lock so gaze-tracking smoothly follows user cursor
      // Both hands raised in front of chest cheering
      leftArmTargetX: 0.45 + cheerPump,
      leftArmTargetZ: -0.28,
      leftArmTargetY: -0.15,
      leftElbowTargetZ: 0.78 + cheerPump * 0.5,

      rightArmTargetX: 0.45 + cheerPump,
      rightArmTargetZ: 0.28,
      rightArmTargetY: 0.15,
      rightElbowTargetZ: -0.78 - cheerPump * 0.5,
      rightWristTargetX: 0.15,
      rightWristTargetZ: 0.1,

      // Open, encouraging hands
      fingerCurl: 0.25,

      // Radiant smile with soft blush
      smile: 0.95,
      blush: 0.35,
    };
  },
};
