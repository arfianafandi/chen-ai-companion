// Web Audio Sound FX, Authentic Voice Audio Player & Web Speech TTS/STT Manager

class SoundFX {
  private ctx: AudioContext | null = null;

  public initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Soft sci-fi click
  playClick() {
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {}
  }

  // Sparkling cute heart chime (headpat)
  playHeartChime() {
    try {
      const ctx = this.initCtx();
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
        gain.gain.setValueAtTime(0.09, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.35);
      });
    } catch {}
  }

  playHeart() {
    this.playHeartChime();
  }

  // Cute blush chime
  playBlushSound() {
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(950, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {}
  }

  // Martial sword draw / high-five sound
  playMartialSound() {
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {}
  }

  // Affection level-up celebration fanfare
  playLevelUp() {
    try {
      const ctx = this.initCtx();
      const arpeggio = [440, 554.37, 659.25, 880, 1108.73];
      arpeggio.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.09);
        osc.stop(ctx.currentTime + idx * 0.09 + 0.5);
      });
    } catch {}
  }
}

export const sfx = new SoundFX();

// Dance Audio Player
class DanceAudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  public isPlaying = false;

  play(url: string, onEnded?: () => void): Promise<void> {
    this.stop();
    const audio = new Audio(url);
    this.currentAudio = audio;
    audio.volume = 0.85;
    audio.onended = () => {
      this.isPlaying = false;
      if (onEnded) onEnded();
    };
    this.isPlaying = true;
    return audio.play().catch(err => {
      console.warn('Audio play prevented:', err);
      this.isPlaying = false;
    });
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    this.isPlaying = false;
  }

  pause() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.isPlaying = false;
    }
  }

  resume() {
    if (this.currentAudio) {
      this.currentAudio.play();
      this.isPlaying = true;
    }
  }
}

export const danceAudio = new DanceAudioManager();

/**
 * Text-Aware Phonetic Vowel Extractor
 * Inspired by MMD vocal lip-sync analysis (あ, い, う, え, お).
 * Maps natural speech text (Indonesian, English, Japanese, Chinese) into expressive vowel visemes.
 */
export function extractPhoneticVowels(text: string): { vowel: string; intensity: number }[] {
  const clean = text.toLowerCase().replace(/\[.*?\]/g, '').trim();
  const sequence: { vowel: string; intensity: number }[] = [];

  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];
    if (/[.,!?;:\n]/.test(char)) {
      // Pause / closed mouth
      sequence.push({ vowel: 'ん', intensity: 0 });
      sequence.push({ vowel: 'ん', intensity: 0 });
    } else if (/\s/.test(char)) {
      sequence.push({ vowel: 'ん', intensity: 0.05 });
    } else if (/[aáàâä]/.test(char) || char === 'あ' || char === 'ア') {
      sequence.push({ vowel: 'あ', intensity: 0.85 });
    } else if (/[iíìîï]/.test(char) || char === 'い' || char === 'イ') {
      sequence.push({ vowel: 'い', intensity: 0.8 });
    } else if (/[uúùûü]/.test(char) || char === 'う' || char === 'ウ') {
      sequence.push({ vowel: 'う', intensity: 0.75 });
    } else if (/[eéèêë]/.test(char) || char === 'え' || char === 'エ') {
      sequence.push({ vowel: 'え', intensity: 0.8 });
    } else if (/[oóòôö]/.test(char) || char === 'お' || char === 'オ') {
      sequence.push({ vowel: 'お', intensity: 0.85 });
    } else if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) {
      // Consonants soften preceding vowel
      if (sequence.length > 0 && sequence[sequence.length - 1].intensity > 0) {
        sequence.push({ vowel: sequence[sequence.length - 1].vowel, intensity: 0.35 });
      }
    }
  }

  if (sequence.length === 0) {
    return [
      { vowel: 'あ', intensity: 0.75 },
      { vowel: 'い', intensity: 0.7 },
      { vowel: 'う', intensity: 0.65 },
      { vowel: 'え', intensity: 0.75 },
      { vowel: 'お', intensity: 0.8 },
    ];
  }

  return sequence;
}

// AUTHENTIC VOICE AUDIO PLAYER (Real Studio Anime Voice Lines with Synchronized Lip-Sync)
export class ChenVoicePlayer {
  private currentAudio: HTMLAudioElement | null = null;
  public isPlaying = false;
  public onLipSyncUpdate: ((vowel: string, intensity: number) => void) | null = null;
  private lipSyncInterval: number | null = null;
  public language: 'ja' | 'zh' = (typeof localStorage !== 'undefined' && (localStorage.getItem('chen_voice_pack') as 'ja' | 'zh')) || 'zh';
  public enabled = true;

  setLanguage(lang: 'ja' | 'zh') {
    this.language = lang;
    try {
      localStorage.setItem('chen_voice_pack', lang);
    } catch {}
  }

  playVoice(voiceKey: string, spokenText?: string): Promise<boolean> {
    if (!this.enabled) return Promise.resolve(false);

    this.stop();
    tts.stop(); // Stop any overlapping TTS

    const prefix = this.language === 'zh' ? 'zh_' : '';
    const fileUrl = `${import.meta.env.BASE_URL}audio/chen/${prefix}${voiceKey}.mp3`;
    const audio = new Audio(fileUrl);
    this.currentAudio = audio;
    audio.volume = 1.0;

    return new Promise((resolve) => {
      audio.onplay = () => {
        this.isPlaying = true;
        this.startLipSync(spokenText);
      };
      audio.onended = () => {
        this.finishVoice();
        resolve(true);
      };
      audio.onerror = () => {
        this.finishVoice();
        resolve(false);
      };

      audio.play().catch(err => {
        console.warn('Authentic voice play blocked by autoplay:', err);
        this.finishVoice();
        resolve(false);
      });
    });
  }

  private startLipSync(spokenText?: string) {
    const phonemes = spokenText ? extractPhoneticVowels(spokenText) : [
      { vowel: 'あ', intensity: 0.75 },
      { vowel: 'い', intensity: 0.7 },
      { vowel: 'う', intensity: 0.65 },
      { vowel: 'え', intensity: 0.75 },
      { vowel: 'お', intensity: 0.8 },
    ];
    let step = 0;
    if (this.lipSyncInterval !== null) clearInterval(this.lipSyncInterval);

    this.lipSyncInterval = window.setInterval(() => {
      if (!this.isPlaying) return;
      const p = phonemes[step % phonemes.length];
      const intensity = p.intensity > 0 ? p.intensity * (0.8 + Math.random() * 0.3) : 0;
      if (this.onLipSyncUpdate) {
        this.onLipSyncUpdate(p.vowel, Math.max(0, Math.min(1, intensity)));
      }
      step++;
    }, 85);
  }

  private finishVoice() {
    this.isPlaying = false;
    if (this.lipSyncInterval !== null) {
      clearInterval(this.lipSyncInterval);
      this.lipSyncInterval = null;
    }
    if (this.onLipSyncUpdate) {
      this.onLipSyncUpdate('ん', 0); // close mouth
    }
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    this.finishVoice();
  }
}

export const chenVoice = new ChenVoicePlayer();

// DYNAMIC TTS MANAGER (For Freeform AI Chat with auto-voice discovery)
export class TTSManager {
  private synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  public isSpeaking = false;
  public onLipSyncUpdate: ((vowel: string, intensity: number) => void) | null = null;
  private lipSyncInterval: number | null = null;
  private cachedVoices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.cachedVoices = this.synth.getVoices();
  }

  getVoices(): SpeechSynthesisVoice[] {
    if (this.cachedVoices.length === 0 && this.synth) {
      this.cachedVoices = this.synth.getVoices();
    }
    return this.cachedVoices;
  }

  speak(text: string, options: { lang?: string; pitch?: number; rate?: number } = {}): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.stop();
      chenVoice.stop();

      const cleanText = text.replace(/\[.*?\]/g, '').trim();
      if (!cleanText) {
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.pitch = options.pitch ?? 1.35;
      utterance.rate = options.rate ?? 1.05;

      const voices = this.getVoices();
      const preferredLang = options.lang || 'ja-JP';

      const targetVoice = 
        voices.find(v => v.lang.startsWith(preferredLang.substring(0, 2)) && (v.name.includes('Female') || v.name.includes('Girl') || v.name.includes('Natural') || v.name.includes('Ayumi') || v.name.includes('Haruka') || v.name.includes('Nanami') || v.name.includes('Xiaoxiao'))) ||
        voices.find(v => v.lang.startsWith(preferredLang.substring(0, 2))) ||
        voices.find(v => v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Jenny')) ||
        voices[0];

      if (targetVoice) {
        utterance.voice = targetVoice;
      }

      const phonemes = extractPhoneticVowels(cleanText);

      utterance.onstart = () => {
        this.isSpeaking = true;
        let step = 0;
        this.lipSyncInterval = window.setInterval(() => {
          if (!this.isSpeaking) return;
          const p = phonemes[step % phonemes.length];
          const dynamicIntensity = p.intensity > 0 ? p.intensity * (0.8 + Math.random() * 0.3) : 0;
          if (this.onLipSyncUpdate) {
            this.onLipSyncUpdate(p.vowel, Math.max(0, Math.min(1, dynamicIntensity)));
          }
          step++;
        }, 80);
      };

      utterance.onend = () => {
        this.finishSpeech();
        resolve();
      };

      utterance.onerror = () => {
        this.finishSpeech();
        resolve();
      };

      this.synth.speak(utterance);
    });
  }

  private finishSpeech() {
    this.isSpeaking = false;
    if (this.lipSyncInterval !== null) {
      clearInterval(this.lipSyncInterval);
      this.lipSyncInterval = null;
    }
    if (this.onLipSyncUpdate) {
      this.onLipSyncUpdate('ん', 0);
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.finishSpeech();
  }
}

export const tts = new TTSManager();
