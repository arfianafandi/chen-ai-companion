import type { AISettings, ChatMessage, EmotionType } from './types';
import { affection } from './affection';
import { chenVoice } from './audio';
import { neuralMemory } from './neuralMemory';
import { motionTrainer, type TrainedMotion } from './motionTrainer';

export interface AIResponse {
  text: string;
  emotion: EmotionType;
  voiceKey?: string;
  spokenText?: string;
  thought?: string;
  trainedMotion?: TrainedMotion;
  gestureId?: string;
  memoryId?: string;
}

export interface StreamCallbacks {
  onStart?: () => void;
  onToken?: (token: string, accumulatedCleanText: string) => void;
  onSentence?: (sentence: string) => void;
  onEmotion?: (emotion: EmotionType) => void;
  onDone?: (finalResponse: AIResponse) => void;
  onError?: (error: any) => void;
}

async function* parseSSEStream(response: Response): AsyncGenerator<string> {
  const reader = response.body?.getReader();
  if (!reader) return;
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith(':')) continue;
      if (trimmed.startsWith('data: ')) {
        const payload = trimmed.slice(6).trim();
        if (payload) yield payload;
      }
    }
  }

  if (buffer.trim().startsWith('data: ')) {
    const payload = buffer.trim().slice(6).trim();
    if (payload) yield payload;
  }
}

export const DEFAULT_AI_SETTINGS: AISettings = {
  provider: 'offline',
  apiKey: '',
  apiUrl: 'https://api.groq.com/openai/v1',
  model: 'llama-3.3-70b-versatile',
  systemPrompt: `You are Chen Qianyu (陈千语), an elite combat specialist and operator for Endfield Industries on the frontier planet Talos-II. 
You wield dual curved blades with exceptional discipline and agile swordsmanship.
Personality:
- Highly dependable, dutiful, protective, and calm under fire.
- Off-duty, you are warm, sincere, fond of mountain herbal tea, and deeply devoted to the Administrator (the user).
- You blush when praised or teased, but try to maintain your dignified martial demeanor.
- Answer in Chinese or Japanese if voice language is Chinese/Japanese, with a concise translation.
- Include emotion tags at appropriate moments: [EMOTE:smile], [EMOTE:happy], [EMOTE:blush], [EMOTE:wink], [EMOTE:surprised], [EMOTE:serious], [EMOTE:pout], [EMOTE:tehepero].`,
  voiceEnabled: true,
  voiceLang: 'zh-CN',
  voicePitch: 1.0,
  voiceRate: 1.0,
};

export class AIEngine {
  public settings: AISettings;
  private messageHistory: ChatMessage[] = [];

  constructor() {
    this.settings = this.loadSettings();
  }

  loadSettings(): AISettings {
    try {
      const saved = localStorage.getItem('chen_ai_settings');
      if (saved) {
        return { ...DEFAULT_AI_SETTINGS, ...JSON.parse(saved) };
      }
    } catch {}
    return { ...DEFAULT_AI_SETTINGS };
  }

  saveSettings(settings: AISettings) {
    this.settings = settings;
    try {
      localStorage.setItem('chen_ai_settings', JSON.stringify(settings));
    } catch {}
  }

  async generateResponse(userInput: string): Promise<AIResponse> {
    return this.generateResponseStream(userInput);
  }

  async generateResponseStream(
    userInput: string,
    callbacks?: StreamCallbacks
  ): Promise<AIResponse> {
    callbacks?.onStart?.();

    this.messageHistory.push({
      id: Math.random().toString(36).substring(2, 9),
      sender: 'user',
      text: userInput,
      timestamp: Date.now(),
    });

    // 1. Generate autonomous inner monologue
    const thought = neuralMemory.generateInnerThought({
      userInput,
      affectionLevel: affection.getCurrentLevel().level,
    });

    // Tracking state for live emotion, sentence chunking & clean display
    let currentEmotion: EmotionType = 'smile';
    let accumulatedRaw = '';
    let sentenceBuffer = '';

    const processChunk = (chunk: string) => {
      accumulatedRaw += chunk;
      sentenceBuffer += chunk;

      // Realtime emotion detection
      const emoteMatch = accumulatedRaw.match(/\[EMOTE:([a-zA-Z]+)\]/i);
      if (emoteMatch) {
        const detected = emoteMatch[1].toLowerCase() as EmotionType;
        const valid: EmotionType[] = [
          'normal', 'smile', 'happy', 'blush', 'wink', 
          'surprised', 'serious', 'jitome', 'pout', 'smug', 'tehepero'
        ];
        if (valid.includes(detected) && detected !== currentEmotion) {
          currentEmotion = detected;
          callbacks?.onEmotion?.(currentEmotion);
        }
      }

      // Clean display text (strip emote tags & partial unclosed tags)
      const cleanDisplay = accumulatedRaw
        .replace(/\[EMOTE:[^\]]*\]?/gi, '')
        .trimStart();

      callbacks?.onToken?.(chunk, cleanDisplay);

      // Sentence pipelining for continuous zero-wait TTS
      const sentenceEndMatch = sentenceBuffer.match(/([^.!?\n。！？]+[.!?\n。！？]+)/);
      if (sentenceEndMatch) {
        const completeSentence = sentenceEndMatch[1];
        sentenceBuffer = sentenceBuffer.substring(completeSentence.length);
        const cleanSentence = completeSentence.replace(/\[.*?\]/g, '').trim();
        if (cleanSentence) {
          callbacks?.onSentence?.(cleanSentence);
        }
      }
    };

    const flushRemainingSentence = () => {
      const cleanSentence = sentenceBuffer.replace(/\[.*?\]/g, '').trim();
      if (cleanSentence) {
        callbacks?.onSentence?.(cleanSentence);
        sentenceBuffer = '';
      }
    };

    // 2. Check if user is teaching Chen in natural language
    const teachResult = neuralMemory.tryParseInChatTeaching(userInput);
    if (teachResult.taught && teachResult.feedback) {
      const replyText = teachResult.feedback;
      const emotion = teachResult.emotion || 'happy';
      callbacks?.onEmotion?.(emotion);
      await this.simulateTypingStream(replyText, processChunk);
      flushRemainingSentence();

      const reply: AIResponse = {
        text: replyText,
        emotion,
        spokenText: replyText,
        thought: `[Sistem Pembelajaran]: Berhasil menyerap aturan kognitif baru dari instruksi Administrator.`,
      };
      this.messageHistory.push({
        id: Math.random().toString(36).substring(2, 9),
        sender: 'chen',
        text: reply.text,
        timestamp: Date.now(),
        emotion: reply.emotion,
      });
      callbacks?.onDone?.(reply);
      return reply;
    }

    // 3. Query trained neural memory first
    const memoryMatch = neuralMemory.findMatch(userInput);
    if (memoryMatch && memoryMatch.score >= 0.55) {
      const mem = memoryMatch.memory;
      let trainedMotion: TrainedMotion | undefined;
      if (mem.motionId) {
        trainedMotion = motionTrainer.trainedMotions.find(m => m.id === mem.motionId);
      }
      callbacks?.onEmotion?.(mem.emotion);
      await this.simulateTypingStream(mem.response, processChunk);
      flushRemainingSentence();

      const reply: AIResponse = {
        text: mem.response,
        emotion: mem.emotion,
        spokenText: mem.response,
        thought: `[Pencocokan Memori]: Ditemukan memori terlatih '${mem.trigger}' (Kesesuaian: ${(memoryMatch.score * 100).toFixed(0)}%, Keyakinan: ${(mem.confidence * 100).toFixed(0)}%).`,
        memoryId: mem.id,
        trainedMotion,
        gestureId: !trainedMotion ? mem.motionId : undefined,
      };
      this.messageHistory.push({
        id: Math.random().toString(36).substring(2, 9),
        sender: 'chen',
        text: reply.text,
        timestamp: Date.now(),
        emotion: reply.emotion,
      });
      callbacks?.onDone?.(reply);
      return reply;
    }

    // 4. Check if user input triggers a trained motion directly
    const matchedMotion = motionTrainer.findMatchingMotion(userInput);

    let fullReply = '';
    let voiceKey: string | undefined;
    let spokenText: string | undefined;

    if (this.settings.provider === 'offline' || !this.settings.apiKey) {
      const off = this.getOfflineResponse(userInput);
      voiceKey = off.voiceKey;
      spokenText = off.spokenText;
      const offEmotion = this.extractEmotion(off.text);
      callbacks?.onEmotion?.(offEmotion);
      await this.simulateTypingStream(off.text, processChunk);
      flushRemainingSentence();
      fullReply = off.text;
    } else {
      try {
        const isZh = chenVoice.language === 'zh' || this.settings.voiceLang.startsWith('zh');
        const isJa = chenVoice.language === 'ja' || this.settings.voiceLang.startsWith('ja');
        let languageInstruction = 'Answer in Chinese (Mandarin) with a brief Indonesian translation in parentheses.';
        if (isJa) {
          languageInstruction = 'Answer in Japanese with a brief Indonesian translation in parentheses.';
        }
        const enhancedSystemPrompt = `${this.settings.systemPrompt}\nIMPORTANT: ${languageInstruction}`;

        if (this.settings.provider === 'gemini') {
          fullReply = await this.fetchGeminiStream(userInput, enhancedSystemPrompt, processChunk);
        } else {
          fullReply = await this.fetchOpenAICompatibleStream(userInput, enhancedSystemPrompt, processChunk);
        }

        if (!fullReply.trim()) {
          throw new Error('Empty response from LLM stream');
        }
        flushRemainingSentence();
      } catch (err) {
        console.warn('Streaming LLM failed, falling back to smart offline response:', err);
        callbacks?.onError?.(err);
        const off = this.getOfflineResponse(userInput);
        voiceKey = off.voiceKey;
        spokenText = off.spokenText;
        const offEmotion = this.extractEmotion(off.text);
        callbacks?.onEmotion?.(offEmotion);
        await this.simulateTypingStream(off.text, processChunk);
        flushRemainingSentence();
        fullReply = off.text;
      }
    }

    const finalEmotion = this.extractEmotion(fullReply);

    const reply: AIResponse = {
      text: fullReply,
      emotion: finalEmotion,
      voiceKey,
      spokenText: spokenText || fullReply,
      thought,
      trainedMotion: matchedMotion || undefined,
    };

    this.messageHistory.push({
      id: Math.random().toString(36).substring(2, 9),
      sender: 'chen',
      text: reply.text,
      timestamp: Date.now(),
      emotion: reply.emotion,
    });

    callbacks?.onDone?.(reply);
    return reply;
  }

  private extractEmotion(text: string): EmotionType {
    const match = text.match(/\[EMOTE:([a-zA-Z]+)\]/i);
    if (match) {
      const tag = match[1].toLowerCase() as EmotionType;
      const valid: EmotionType[] = [
        'normal', 'smile', 'happy', 'blush', 'wink', 
        'surprised', 'serious', 'jitome', 'pout', 'smug', 'tehepero'
      ];
      if (valid.includes(tag)) return tag;
    }
    return 'smile';
  }

  private getOfflineResponse(input: string): { text: string; voiceKey?: string; spokenText?: string } {
    const text = input.toLowerCase().trim();
    const isZh = chenVoice.language === 'zh' || this.settings.voiceLang.startsWith('zh');

    // 1. Romance / Flirting / Praise ("cantik", "cute", "love", "suka", "sayang", "waifu", dll.)
    if (
      text.includes('cantik') || text.includes('cute') || text.includes('love') || 
      text.includes('suka') || text.includes('sayang') || text.includes('waifu') ||
      text.includes('manis') || text.includes('kawaii') || text.includes('praise')
    ) {
      if (isZh) {
        return {
          voiceKey: 'praise_1',
          text: `被您这么直接地夸奖……太让人害羞了。不过，我真的很开心！[EMOTE:blush]\n(Dipuji secara terang-terangan olehmu... membuatku tersipu. Tapi aku sangat senang!)`,
          spokenText: '被您这么直接地夸奖，太让人害羞了。不过，我真的很开心！',
        };
      }
      return {
        voiceKey: 'praise_1',
        text: `そ、そんなに真っ直ぐ見つめられると…照れてしまいます。でも、とても嬉しいです。[EMOTE:blush]\n(Ditatap lurus seperti itu... membuatku tersipu. Tapi, aku sangat senang.)`,
        spokenText: 'そんなに真っ直ぐ見つめられると、照れてしまいます。でも、とても嬉しいです。',
      };
    }

    // 2. Greetings ("halo", "hai", "hello", "pagi", "siang", "malam", "nihao", "konnichiwa")
    if (
      text.includes('halo') || text.includes('hai') || text.includes('hello') || 
      text.includes('hi') || text.includes('pagi') || text.includes('siang') || 
      text.includes('malam') || text.includes('konnichiwa') || text.includes('ohayo') ||
      text.includes('nihao') || text.includes('你好')
    ) {
      if (isZh) {
        return {
          voiceKey: 'greeting',
          text: `终末地工业干员，陈千语，向您报到！管理员，很荣幸能再次见到您！[EMOTE:smile]\n(Operator Endfield Industries, Chen Qianyu, melapor! Suatu kehormatan bisa bertemu kembali dengan Anda, Administrator!)`,
          spokenText: '终末地工业干员，陈千语，向您报到！管理员，很荣幸能再次见到您！',
        };
      }
      return {
        voiceKey: 'greeting',
        text: `エンドフィールド工業所属、陳千語、着任しました！管理官、お会いできて光栄です！[EMOTE:smile]\n(Operator Endfield Industries, Chen Qianyu, melapor untuk bertugas! Senang bertemu lagi, Administrator!)`,
        spokenText: 'エンドフィールド工業所属、陳千語、着任しました！管理官、お会いできて光栄です！',
      };
    }

    // 3. Combat, Swords & Endfield Mission ("pedang", "sword", "senjata", "blade", "latihan", "combat", "talos")
    if (
      text.includes('pedang') || text.includes('sword') || text.includes('senjata') || 
      text.includes('blade') || text.includes('latihan') || text.includes('combat') || 
      text.includes('endfield') || text.includes('talos') || text.includes('fight')
    ) {
      if (isZh) {
        return {
          voiceKey: 'swords_1',
          text: `双剑就绪，随时准备出击！管理员，请下达作战指令吧！[EMOTE:serious]\n(Pedang ganda siap, kapan pun siap berangkat! Administrator, silakan berikan instruksi misi!)`,
          spokenText: '双剑就绪，随时准备出击！管理员，请下达作战指令吧！',
        };
      }
      return {
        voiceKey: 'swords_1',
        text: `双剣抜刀、目標確認！いつでも出撃可能です、管理官のご指示を！[EMOTE:serious]\n(Pedang ganda terhunus, target terkunci! Kapan pun siap bertempur, Administrator!)`,
        spokenText: '双剣抜刀、目標確認！いつでも出撃可能です、管理官のご指示を！',
      };
    }

    // 4. Dancing & Motions ("dance", "joget", "menari", "poke", "neko")
    if (text.includes('dance') || text.includes('joget') || text.includes('menari') || text.includes('poke') || text.includes('neko')) {
      if (isZh) {
        return {
          voiceKey: 'dance_1',
          text: `我的舞蹈……请管理员好好看着哦！嘿嘿，开始啦！[EMOTE:tehepero]\n(Tarianku... tolong perhatikan baik-baik ya, Administrator! Mulai!)`,
          spokenText: '我的舞蹈，请管理员好好看着哦！嘿嘿，开始啦！',
        };
      }
      return {
        voiceKey: 'dance_1',
        text: `私のダンス…ちゃんと見ていてくださいね！ふふっ、いきます！[EMOTE:tehepero]\n(Tarianku... perhatikan baik-baik ya, Administrator! Fufu, mari mulai!)`,
        spokenText: '私のダンス、ちゃんと見ていてくださいね！ふふっ、いきます！',
      };
    }

    // 5. Tea & Relaxation ("teh", "tea", "makan", "minum", "istirahat", "capek")
    if (text.includes('teh') || text.includes('tea') || text.includes('makan') || text.includes('minum') || text.includes('istirahat') || text.includes('capek')) {
      if (isZh) {
        return {
          voiceKey: 'tea_1',
          text: `我泡了塔洛斯山脉的清茶。管理员，忙碌之余一起坐下来喝一杯吧？[EMOTE:happy]\n(Aku menyeduh teh segar pegunungan Talos. Administrator, mari rehat sejenak dan minum bersama?)`,
          spokenText: '我泡了塔洛斯山脉的清茶。管理员，忙碌之余一起坐下来喝一杯吧？',
        };
      }
      return {
        voiceKey: 'tea_1',
        text: `タロス山脈の高山茶を淹れました。管理官、一緒に少しお茶にしませんか？[EMOTE:happy]\n(Aku menyeduh teh pegunungan Talos. Administrator, maukah istirahat dan minum teh bersamaku?)`,
        spokenText: 'タロス山脈の高山茶を淹れました。管理官、一緒に少しお茶にしませんか？',
      };
    }

    // 6. Who are you? ("siapa kamu", "who are you", "namamu", "kenalan")
    if (text.includes('siapa kamu') || text.includes('who are you') || text.includes('namamu') || text.includes('kenalan') || text.includes('chen')) {
      if (isZh) {
        return {
          voiceKey: 'greeting',
          text: `我是终末地工业干员陈千语。我的双剑，将永远为您开辟前进的道路！[EMOTE:smile]\n(Saya Chen Qianyu, operator Endfield Industries. Pedang gandaku akan selalu membuka jalan untukmu!)`,
          spokenText: '我是终末地工业干员陈千语。我的双剑，将永远为您开辟前进的道路！',
        };
      }
      return {
        voiceKey: 'greeting',
        text: `エンドフィールドのスペシャリスト、陳千語です。双剣を携え、管理官をお守りします！[EMOTE:smile]\n(Saya Chen Qianyu, spesialis Endfield. Dengan pedang ganda, aku akan selalu melindungimu!)`,
        spokenText: 'エンドフィールドのスペシャリスト、陳千語です。双剣を携え、管理官をお守りします！',
      };
    }

    // 7. Touch reactions mentioned in chat ("headpat", "elus", "pat", "peluk")
    if (text.includes('headpat') || text.includes('elus') || text.includes('pat') || text.includes('peluk')) {
      if (isZh) {
        return {
          voiceKey: 'headpat_1',
          text: `诶？摸头吗……？感觉好温暖，管理员。[EMOTE:happy]\n(Eh? Membelai kepalaku...? Rasanya sangat hangat, Administrator.)`,
          spokenText: '诶？摸头吗……？感觉好温暖，管理员。',
        };
      }
      return {
        voiceKey: 'headpat_1',
        text: `えっ？頭を撫でてくれるのですか…？ふふ、暖かいですね、管理官。[EMOTE:happy]\n(Eh? Mengelus kepalaku...? Fufu, hangat sekali, Administrator.)`,
        spokenText: 'えっ？頭を撫でてくれるのですか？ふふ、暖かいですね、管理官。',
      };
    }

    // Default conversational responses
    if (isZh) {
      return {
        voiceKey: 'headpat_2',
        text: `收到！虽然我是前线干员……但如果是管理员的话，随时听从您的指示！[EMOTE:smile]\n(Dimengerti! Meskipun saya prajurit garda depan, saya selalu siap mendampingi Anda!)`,
        spokenText: '收到！虽然我是前线干员，但如果是管理员的话，随时听从您的指示！',
      };
    }
    return {
      voiceKey: 'headpat_2',
      text: `了解しました！私は前哨基地のスペシャリストですが…管理官になら、いつでもお力になります！[EMOTE:smile]\n(Dimengerti! Sebagai spesialis Endfield, aku selalu siap membantumu kapan pun!)`,
      spokenText: '了解しました！管理官になら、いつでもお力になります！',
    };
  }

  private async simulateTypingStream(fullText: string, onChunk: (part: string) => void): Promise<string> {
    const parts = fullText.split(/(\s+|[,.!?。！？\n]+)/);
    for (const part of parts) {
      if (!part) continue;
      onChunk(part);
      const delay = part.length > 4 ? 28 : 14;
      await new Promise(r => setTimeout(r, delay));
    }
    return fullText;
  }

  private async fetchGeminiStream(
    userInput: string,
    enhancedSystemPrompt: string,
    onToken: (chunk: string) => void
  ): Promise<string> {
    const model = this.settings.model || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${this.settings.apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: enhancedSystemPrompt }],
        },
        contents: [
          ...this.messageHistory.slice(-8).map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }],
          })),
          { role: 'user', parts: [{ text: userInput }] },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Gemini Stream Error (${res.status}): ${errText || res.statusText}`);
    }

    let accumulated = '';
    for await (const chunkData of parseSSEStream(res)) {
      try {
        const json = JSON.parse(chunkData);
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          accumulated += text;
          onToken(text);
        }
      } catch {}
    }

    return accumulated;
  }

  private async fetchOpenAICompatibleStream(
    userInput: string,
    enhancedSystemPrompt: string,
    onToken: (chunk: string) => void
  ): Promise<string> {
    let endpoint = this.settings.apiUrl;
    if (!endpoint.endsWith('/chat/completions')) {
      endpoint = `${endpoint.replace(/\/+$/, '')}/chat/completions`;
    }

    const messages = [
      { role: 'system', content: enhancedSystemPrompt },
      ...this.messageHistory.slice(-8).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      })),
      { role: 'user', content: userInput },
    ];

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (this.settings.apiKey) {
      headers['Authorization'] = `Bearer ${this.settings.apiKey}`;
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: this.settings.model || 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 350,
        stream: true,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`LLM Stream Error (${res.status}): ${errText || res.statusText}`);
    }

    let accumulated = '';
    for await (const chunkData of parseSSEStream(res)) {
      if (chunkData === '[DONE]') break;
      try {
        const json = JSON.parse(chunkData);
        const delta = json.choices?.[0]?.delta?.content;
        if (delta) {
          accumulated += delta;
          onToken(delta);
        }
      } catch {}
    }

    return accumulated;
  }
}

export const ai = new AIEngine();

// Web Speech STT Recognition
export class SpeechRecognitionManager {
  private recognition: any = null;
  public isListening = false;
  public onResult?: (text: string) => void;
  public onStateChange?: (listening: boolean) => void;

  constructor() {
    const SpeechRecognition = 
      (window as unknown as { SpeechRecognition: any }).SpeechRecognition || 
      (window as unknown as { webkitSpeechRecognition: any }).webkitSpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'id-ID';

      this.recognition.onstart = () => {
        this.isListening = true;
        if (this.onStateChange) this.onStateChange(true);
      };

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (this.onResult && transcript) {
          this.onResult(transcript);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.onStateChange) this.onStateChange(false);
      };

      this.recognition.onerror = () => {
        this.isListening = false;
        if (this.onStateChange) this.onStateChange(false);
      };
    }
  }

  toggle(lang?: string) {
    if (!this.recognition) {
      alert('Speech recognition is not supported in this browser. Please use Chrome, Edge or Safari.');
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
    } else {
      if (lang) this.recognition.lang = lang;
      this.recognition.start();
    }
  }
}

export const stt = new SpeechRecognitionManager();
