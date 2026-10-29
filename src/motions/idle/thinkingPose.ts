import type { IdleGestureDefinition } from '../types';

/**
 * Thinking Pose — Hand-to-chin thoughtful pose, deep in contemplation.
 */
export const thinkingPose: IdleGestureDefinition = {
  id: 'thinking_pose',
  displayName: 'Thinking Pose',
  description: 'Right hand touches chin thoughtfully, analyzing operational plans.',
  duration: 4.2,
  update(ctx) {
    return {
      rightArmTargetX: 0.36,
      rightArmTargetZ: 0.14,
      rightElbowTargetZ: 0.68,
      rightWristTargetX: -0.14 * ctx.weight,
      headRoll: -0.08 * ctx.weight,
      headPitch: -0.05 * ctx.weight,
      smile: 0.1 * ctx.weight,
    };
  },
};
