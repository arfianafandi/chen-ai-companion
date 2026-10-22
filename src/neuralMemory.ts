import type { EmotionType } from './types';
import { affection } from './affection';
import { sfx } from './audio';

export interface LearnedMemory {
  id: string;
  trigger: string;             // Keyword or phrase trigger
  response: string;            // Chen's trained reply
  emotion: EmotionType;        // Facial expression
  motionId?: string;           // Custom trained motion or built-in gesture ID
  confidence: number;          // 0 to 1 confidence weight
  rewards: number;             // Upvotes from user
  penalties: number;           // Downvotes from user
  source: 'user_taught' | 'chat_auto' | 'feedback_correction';
  createdAt: number;
  lastUsedAt: number;
}

export interface CognitiveState {
  valence: number;     // -1 (melancholy/serious) to +1 (happy/blushing)
  arousal: number;     // 0 (calm/relaxed) to 1 (excited/alert)
  energy: number;      // 0 to 1
  innerMonologue: string;
  lastActivityTime: number;
  proactiveChatCount: number;
}

const STORAGE_KEY = 'chen_neural_memories_v2';
const COGNITIVE_KEY = 'chen_cognitive_state_v2';

export class NeuralMemorySystem {
  public memories: LearnedMemory[] = [];
  public cognitiveState: CognitiveState = {
    valence: 0.5,
    arousal: 0.3,
    energy: 0.9,
    innerMonologue: 'Sistem kognitif aktif. Menunggu instruksi dari Administrator...',
    lastActivityTime: Date.now(),
    proactiveChatCount: 0,
  };

  public onMemoryChange?: (memories: LearnedMemory[]) => void;
  public onThoughtUpdate?: (thought: string) => void;

  constructor() {
    this.load();
    this.seedDefaultKnowledge();
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.memories = JSON.parse(raw);
      }
      const cog = localStorage.getItem(COGNITIVE_KEY);
      if (cog) {
        this.cognitiveState = { ...this.cognitiveState, ...JSON.parse(cog) };
      }
    } catch (e) {
      console.warn('Failed to load neural memories:', e);
    }
  }

  public save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memories));
      localStorage.setItem(COGNITIVE_KEY, JSON.stringify(this.cognitiveState));
      if (this.onMemoryChange) this.onMemoryChange(this.memories);
    } catch (e) {
      console.warn('Failed to save neural memories:', e);
    }
  }

  private seedDefaultKnowledge() {
    if (this.memories.length === 0) {
      this.memories = [
        {
          id: 'mem_default_1',
          trigger: 'siapa pembuatmu',
          response: 'Saya dikembangkan dengan arsitektur MMD 3D & Neural AI untuk mendampingi Anda di perbatasan Talos-II sebagai Operator Endfield Industries! [EMOTE:smile]',
          emotion: 'smile',
          motionId: 'confident_officer',
          confidence: 0.95,
          rewards: 1,
          penalties: 0,
          source: 'user_taught',
          createdAt: Date.now(),
          lastUsedAt: Date.now(),
        },
        {
          id: 'mem_default_2',
          trigger: 'aku lelah',
          response: 'Administrator sudah bekerja keras hari ini... Istirahatlah sejenak. Chen akan menyeduhkan teh pegunungan Talos dan berjaga di sini untukmu. [EMOTE:happy]',
          emotion: 'happy',
          motionId: 'stretch_relax',
          confidence: 0.9,
          rewards: 2,
          penalties: 0,
          source: 'user_taught',
          createdAt: Date.now(),
          lastUsedAt: Date.now(),
        },
        {
          id: 'mem_default_3',
          trigger: 'semangat',
          response: 'Terima kasih, Administrator! Dengan dukungan Anda, pedang ganda Chen tidak akan pernah ragu menghadapi ancaman apa pun di Talos-II! [EMOTE:happy]',
          emotion: 'happy',
          motionId: 'gentle_wave',
          confidence: 0.92,
          rewards: 1,
          penalties: 0,
          source: 'user_taught',
          createdAt: Date.now(),
          lastUsedAt: Date.now(),
        },
        {
          id: 'mem_default_4',
          trigger: 'apakah kamu mencintaiku',
          response: 'E-eh?! Pertanyaan yang begitu tiba-tiba... Wajahku jadi terasa hangat. Sebagai Operator, tapi juga... sebagai seseorang yang selalu di sisimu, Anda sangat berarti bagiku, Administrator. [EMOTE:blush]',
          emotion: 'blush',
          motionId: 'shy_glance',
          confidence: 0.98,
          rewards: 3,
          penalties: 0,
          source: 'user_taught',
          createdAt: Date.now(),
          lastUsedAt: Date.now(),
        },
      ];
      this.save();
    }
  }

  // --- Memory Retrieval / Fuzzy Match ---
  public findMatch(input: string): { memory: LearnedMemory; score: number } | null {
    const cleanInput = input.toLowerCase().trim();
    if (!cleanInput) return null;

    let bestMatch: LearnedMemory | null = null;
    let highestScore = 0;

    for (const mem of this.memories) {
      const trigger = mem.trigger.toLowerCase().trim();
      let score = 0;

      // Exact match
      if (cleanInput === trigger) {
        score = 1.0;
      } 
      // Substring match
      else if (cleanInput.includes(trigger) || trigger.includes(cleanInput)) {
        score = 0.85;
      } 
      // Token overlap match
      else {
        const inputTokens = new Set(cleanInput.split(/\s+/).filter(t => t.length > 2));
        const triggerTokens = trigger.split(/\s+/).filter(t => t.length > 2);
        if (inputTokens.size > 0 && triggerTokens.length > 0) {
          let overlap = 0;
          for (const token of triggerTokens) {
            if (inputTokens.has(token)) overlap++;
          }
          score = overlap / Math.max(inputTokens.size, triggerTokens.length);
        }
      }

      // Weight by confidence and user rewards
      score *= mem.confidence;
      if (mem.penalties > mem.rewards) {
        score *= 0.5; // Penalize poorly rated answers
      }

      if (score > highestScore && score >= 0.5) {
        highestScore = score;
        bestMatch = mem;
      }
    }

    if (bestMatch) {
      bestMatch.lastUsedAt = Date.now();
      this.save();
      return { memory: bestMatch, score: highestScore };
    }

    return null;
  }

  // --- Teach Chen (Direct or Learned Rule) ---
  public teach(
    trigger: string,
    response: string,
    emotion: EmotionType = 'smile',
    motionId?: string,
    source: LearnedMemory['source'] = 'user_taught'
  ): LearnedMemory {
    const cleanTrigger = trigger.trim().toLowerCase();
    
    // Check if rule already exists; update it if so
    const existing = this.memories.find(m => m.trigger.toLowerCase() === cleanTrigger);
    if (existing) {
      existing.response = response.trim();
      existing.emotion = emotion;
      if (motionId) existing.motionId = motionId;
      existing.confidence = Math.min(1.0, existing.confidence + 0.1);
      existing.source = source;
      existing.lastUsedAt = Date.now();
      this.updateThought(`Memori diperbarui: [${trigger}] -> [${response.slice(0, 30)}...]`);
      this.save();
      return existing;
    }

    const newMem: LearnedMemory = {
      id: 'mem_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      trigger: trigger.trim(),
      response: response.trim(),
      emotion,
      motionId,
      confidence: 0.9,
      rewards: 0,
      penalties: 0,
      source,
      createdAt: Date.now(),
      lastUsedAt: Date.now(),
    };

    this.memories.unshift(newMem);
    this.updateThought(`Menyerap memori baru: Jika Administrator menyebut '${trigger}', respon dengan '${response.slice(0, 30)}...'`);
    this.save();
    return newMem;
  }

  // --- Natural Language In-Chat Learning ("Ingat ini: ...") ---
  public tryParseInChatTeaching(text: string): { taught: boolean; feedback?: string; emotion?: EmotionType } {
    const lower = text.trim();

    // Pattern 1: "ingat ini: [X] = [Y]" or "kalau aku bilang [X] jawab [Y]"
    const matchRule = lower.match(/(?:kalau|jika)\s+(?:aku|saya)\s+(?:bilang|tanya|kata|ngomong)\s+["']?([^"'\n,]+)["']?\s*,?\s*(?:jawab|balas|respon)\s+["']?([^"'\n]+)["']?/i) ||
                      lower.match(/(?:ingat|ajari|pelajari)\s*:\s*["']?([^"'\n=->]+)["']?\s*(?:=|->|jawab|adalah)\s*["']?([^"'\n]+)["']?/i);

    if (matchRule) {
      const trigger = matchRule[1].trim();
      const response = matchRule[2].trim();
      this.teach(trigger, response, 'happy', undefined, 'chat_auto');
      affection.addXp(12);
      return {
        taught: true,
        feedback: `Dimengerti, Administrator! Chen telah mencatat memori ini ke dalam jaringan kognitif: jika Anda berkata "${trigger}", Chen akan merespons "${response}". Terima kasih telah melatih Chen! [EMOTE:happy]`,
        emotion: 'happy',
      };
    }

    // Pattern 2: "Mulai sekarang panggil aku [X]" or "Namaku adalah [X]"
    const matchName = lower.match(/(?:panggil\s+aku|namaku\s+(?:adalah)?)\s+([a-zA-Z0-9_\-\s]+)/i);
    if (matchName) {
      const name = matchName[1].trim();
      this.teach('siapa namaku', `Nama Anda adalah ${name}, sosok Administrator terpenting bagi Chen di Talos-II! [EMOTE:smile]`, 'smile', 'curious_tilt', 'chat_auto');
      this.teach('namaku', `Tentu saja aku ingat, nama Anda adalah ${name}! [EMOTE:happy]`, 'happy', 'cute_nod', 'chat_auto');
      affection.addXp(10);
      return {
        taught: true,
        feedback: `Baik, ${name}! Chen telah mengingat nama Anda dalam modul memori jangka panjang. Chen akan selalu mengingatnya! [EMOTE:smile]`,
        emotion: 'smile',
      };
    }

    return { taught: false };
  }

  // --- RLHF Feedback (Reward / Penalty) ---
  public rewardMemory(memoryId: string): boolean {
    const mem = this.memories.find(m => m.id === memoryId);
    if (mem) {
      mem.rewards++;
      mem.confidence = Math.min(1.0, mem.confidence + 0.08);
      this.cognitiveState.valence = Math.min(1.0, this.cognitiveState.valence + 0.1);
      this.updateThought(`Umpan balik positif diterima! Bobot memori '${mem.trigger}' dinaikkan ke ${(mem.confidence * 100).toFixed(0)}%.`);
      this.save();
      affection.addXp(5);
      sfx.playHeart();
      return true;
    }
    return false;
  }

  public penalizeMemory(memoryId: string, correctedResponse?: string): boolean {
    const mem = this.memories.find(m => m.id === memoryId);
    if (mem) {
      mem.penalties++;
      mem.confidence = Math.max(0.2, mem.confidence - 0.15);
      if (correctedResponse && correctedResponse.trim()) {
        mem.response = correctedResponse.trim();
        mem.confidence = 0.85;
        mem.source = 'feedback_correction';
        this.updateThought(`Koreksi diterapkan pada '${mem.trigger}'. Jawaban diperbarui sesuai instruksi Administrator.`);
      } else {
        this.updateThought(`Kritik diterima untuk '${mem.trigger}'. Chen akan mengevaluasi jawaban ini.`);
      }
      this.save();
      return true;
    }
    return false;
  }

  public deleteMemory(id: string) {
    this.memories = this.memories.filter(m => m.id !== id);
    this.save();
  }

  // --- Cognitive Thought Generation (Inner Monologue Stream) ---
  public updateThought(thought: string) {
    this.cognitiveState.innerMonologue = thought;
    this.cognitiveState.lastActivityTime = Date.now();
    if (this.onThoughtUpdate) this.onThoughtUpdate(thought);
    this.save();
  }

  public generateInnerThought(context: {
    userInput?: string;
    detectedEmotion?: EmotionType;
    affectionLevel: number;
    action?: string;
  }): string {
    const bond = affection.getCurrentLevel();
    const thoughts: string[] = [];

    if (context.userInput) {
      const lower = context.userInput.toLowerCase();
      if (lower.includes('cantik') || lower.includes('sayang') || lower.includes('cute')) {
        thoughts.push(`[Analisis Kognitif]: Administrator memberi pujian interpersonal. Valensi emosi meningkat. Reaksi: Tersipu sopan, pertahankan martabat prajurit.`);
      } else if (lower.includes('pedang') || lower.includes('combat') || lower.includes('misi')) {
        thoughts.push(`[Analisis Kognitif]: Permintaan mode tempur Endfield. Tingkat kewaspadaan: Maksimal. Verifikasi pedang ganda siap pakai.`);
      } else if (lower.includes('lelah') || lower.includes('capek')) {
        thoughts.push(`[Analisis Kognitif]: Terdeteksi kelelahan pada Administrator. Prioritaskan kenyamanan mental, tawarkan teh Talos dan tempat istirahat.`);
      } else {
        thoughts.push(`[Analisis Kognitif]: Menganalisis kalimat input '${context.userInput.slice(0, 25)}...'. Mencocokkan dengan ${this.memories.length} simpul memori neural.`);
      }
    } else if (context.action) {
      thoughts.push(`[Interaksi Fisik]: Administrator menyentuh bagian ${context.action}. Respon syaraf kognitif terpicu (Bond LV.${bond.level}: ${bond.title}).`);
    } else {
      thoughts.push(`[Pikiran Batin]: Mengawasi pos Talos-II. Administrator berada di hadapan saya. Detak jantung kognitif stabil.`);
    }

    const thought = thoughts[0];
    this.updateThought(thought);
    return thought;
  }

  // --- Proactive Idle Conversation Initiator ---
  public getProactiveIdleRemark(): { text: string; emotion: EmotionType; gesture?: string } | null {
    const hours = new Date().getHours();
    const bond = affection.getCurrentLevel();

    const remarks: { text: string; emotion: EmotionType; gesture?: string }[] = [];

    // Time-based remarks
    if (hours >= 5 && hours < 11) {
      remarks.push({
        text: 'Pagi hari di Talos-II selalu terasa segar dan sejuk... Administrator, apakah Anda sudah sarapan sebelum bertugas? [EMOTE:smile]',
        emotion: 'smile',
        gesture: 'gentle_wave',
      });
    } else if (hours >= 11 && hours < 15) {
      remarks.push({
        text: 'Matahari siang mulai terik. Jangan lupa minum air yang cukup, Administrator. Chen sudah menyiapkan persediaan logistik. [EMOTE:happy]',
        emotion: 'happy',
        gesture: 'stretch_relax',
      });
    } else if (hours >= 19 || hours < 4) {
      remarks.push({
        text: 'Malam sudah sangat larut di luar pangkalan... Jangan memaksakan diri bekerja terlalu keras, Administrator. Chen selalu di sini menemani Anda. [EMOTE:smile]',
        emotion: 'smile',
        gesture: 'curious_tilt',
      });
    }

    // Bond-based remarks
    if (bond.level >= 2) {
      remarks.push({
        text: 'Administrator... Chen sedang memikirkan latihan pedang tadi pagi. Tapi berada di samping Anda seperti ini rasanya sangat menenangkan. [EMOTE:happy]',
        emotion: 'happy',
        gesture: 'shy_glance',
      });
    }
    if (bond.level >= 3) {
      remarks.push({
        text: 'Menatap Anda dari dekat... membuat saya bersyukur telah ditugaskan bersama Administrator di perbatasan ini. [EMOTE:blush]',
        emotion: 'blush',
        gesture: 'cute_nod',
      });
    }

    if (remarks.length === 0) return null;
    const chosen = remarks[Math.floor(Math.random() * remarks.length)];
    this.cognitiveState.proactiveChatCount++;
    this.updateThought(`[Inisiatif Otonom]: Chen memutuskan untuk menyapa Administrator terlebih dahulu.`);
    return chosen;
  }
}

export const neuralMemory = new NeuralMemorySystem();
