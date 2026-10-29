import type { DanceTrack } from '../../types';

/**
 * Yurushite Neko — Cute apologetic cat dance with adorable ear poses.
 * Motion: motions/yurushite_neko.vmd | Audio: audio/yurushite_neko.wav
 */
export const yurusiteNeko: DanceTrack = {
  id: 'yurushite_neko',
  name: 'Yurushite Neko (ゆるして猫!!)',
  motionUrl: `${import.meta.env.BASE_URL}motions/yurushite_neko.vmd`,
  audioUrl: `${import.meta.env.BASE_URL}audio/yurushite_neko.wav`,
  durationEstimate: 40,
  description: 'Cute apologetic cat dance with adorable ear poses.',
};
