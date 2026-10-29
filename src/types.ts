export type EmotionType = 
  | 'normal' 
  | 'smile' 
  | 'happy' 
  | 'blush' 
  | 'wink' 
  | 'surprised' 
  | 'serious' 
  | 'jitome' 
  | 'pout' 
  | 'smug' 
  | 'tehepero';

export type BodyPart = 'head' | 'cheek' | 'chest' | 'hand' | 'leg';

export interface TouchReaction {
  part: BodyPart;
  name: string;
  expression: EmotionType;
  dialogue: string;
  affectionGain: number;
  soundType: 'cute' | 'heart' | 'blush' | 'martial' | 'squish';
  voiceKey?: string;
}

export interface AffectionLevel {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  description: string;
  unlockedPose?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'chen';
  text: string;
  timestamp: number;
  emotion?: EmotionType;
}

export interface AISettings {
  provider: 'offline' | 'openai' | 'gemini' | 'groq' | 'ollama';
  apiKey: string;
  apiUrl: string;
  model: string;
  systemPrompt: string;
  voiceEnabled: boolean;
  voiceLang: string;
  voicePitch: number;
  voiceRate: number;
}

export interface DanceTrack {
  id: string;
  name: string;
  motionUrl: string;
  audioUrl: string;
  durationEstimate: number;
  description: string;
}

export type GraphicsPreset = 'performance' | 'ultra-light' | 'high' | 'custom';
export type ShadowQuality = 'off' | 'low' | 'medium' | 'high';

