import type { DanceTrack } from '../../types';

/**
 * Happy Hands — Charming, cheerful hand gestures and head bobs.
 * Motion: motions/happy_hands.vmd | Audio: audio/circus.wav
 */
export const happyHands: DanceTrack = {
  id: 'happy_hands',
  name: 'Happy Hands (ハッピーハンズ)',
  motionUrl: `${import.meta.env.BASE_URL}motions/happy_hands.vmd`,
  audioUrl: `${import.meta.env.BASE_URL}audio/circus.wav`,
  durationEstimate: 12,
  description: 'Charming, cheerful hand gestures and head bobs.',
};
