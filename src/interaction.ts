import * as THREE from 'three';
import type { BodyPart, EmotionType, TouchReaction } from './types';
import { ChenCharacter } from './character';
import { affection } from './affection';
import { sfx, tts, chenVoice } from './audio';

export const TOUCH_REACTIONS: Record<BodyPart, TouchReaction[]> = {
  head: [
    {
      part: 'head',
      name: 'Headpat',
      expression: 'happy',
      dialogue: 'E-eh? Patting my head like this... It feels quite warm, Administrator. [EMOTE:happy]',
      affectionGain: 6,
      soundType: 'heart',
      voiceKey: 'headpat_1',
    },
    {
      part: 'head',
      name: 'Headpat',
      expression: 'blush',
      dialogue: 'I am a trained field specialist, you know... But if it is you, I do not mind. [EMOTE:blush]',
      affectionGain: 6,
      soundType: 'heart',
      voiceKey: 'headpat_2',
    },
    {
      part: 'head',
      name: 'Gentle Stroke',
      expression: 'smile',
      dialogue: 'Hehe, your hand is very gentle. Please stay like this for a moment. [EMOTE:smile]',
      affectionGain: 7,
      soundType: 'heart',
      voiceKey: 'headpat_1',
    },
  ],
  cheek: [
    {
      part: 'cheek',
      name: 'Colek Pipi Kenyal',
      expression: 'pout',
      dialogue: 'Muu... pipiku dicolek-colek kenyal! Memangnya pipiku mirip kue mochi, Administrator? [EMOTE:pout]',
      affectionGain: 4,
      soundType: 'squish',
      voiceKey: 'cheek_1',
    },
    {
      part: 'cheek',
      name: 'Pipi Kenyal',
      expression: 'blush',
      dialogue: 'A-ah! Kenapa mencolek pipiku tiba-tiba... rasanya kenyal dan geli! Wajahku jadi hangat sekarang... [EMOTE:blush]',
      affectionGain: 4,
      soundType: 'squish',
      voiceKey: 'cheek_1',
    },
    {
      part: 'cheek',
      name: 'Colek Reflex',
      expression: 'tehepero',
      dialogue: 'Wha—! Refleks mencolek pipi yang cepat! Pipiku kenyal kan? Hehe, tapi jangan sering-sering! [EMOTE:tehepero]',
      affectionGain: 4,
      soundType: 'squish',
      voiceKey: 'cheek_1',
    },
  ],
  chest: [
    {
      part: 'chest',
      name: 'Sensasi Kenyal',
      expression: 'blush',
      dialogue: 'A-Administrator?! K-kenapa dicolek seperti itu... terasa kenyal bukan berarti boleh ditekan-tekan terus! [EMOTE:blush]',
      affectionGain: 4,
      soundType: 'squish',
      voiceKey: 'chest_1',
    },
    {
      part: 'chest',
      name: 'Pinch & Poke',
      expression: 'surprised',
      dialogue: 'Hyaaa?! Mengagetkan sekali! Armor taktisku bukan mainan pereda stres, Administrator! [EMOTE:surprised]',
      affectionGain: 4,
      soundType: 'squish',
      voiceKey: 'chest_1',
    },
    {
      part: 'chest',
      name: 'Heartbeat Check',
      expression: 'jitome',
      dialogue: 'Detak jantungku baru saja melonjak empat puluh persen... dan ini sepenuhnya salahmu! [EMOTE:jitome]',
      affectionGain: 3,
      soundType: 'blush',
      voiceKey: 'chest_1',
    },
  ],
  hand: [
    {
      part: 'hand',
      name: 'Hand Hold',
      expression: 'smile',
      dialogue: 'My hands are calloused from gripping swords, but... holding hands with you gives me strength. [EMOTE:smile]',
      affectionGain: 5,
      soundType: 'martial',
      voiceKey: 'hand_1',
    },
    {
      part: 'hand',
      name: 'Martial Fist Bump',
      expression: 'serious',
      dialogue: 'Two blades, one resolve! Ready for deployment at your command! [EMOTE:serious]',
      affectionGain: 5,
      soundType: 'martial',
      voiceKey: 'swords_1',
    },
  ],
  leg: [
    {
      part: 'leg',
      name: 'Leg Tap',
      expression: 'surprised',
      dialogue: 'My stance is rock solid! Even if you try to sweep my legs, I will not budge. [EMOTE:surprised]',
      affectionGain: 3,
      soundType: 'martial',
      voiceKey: 'swords_1',
    },
  ],
};

export class InteractionManager {
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private chen: ChenCharacter;
  private camera: THREE.Camera;
  private container: HTMLElement;
  public onTouchDialogue?: (text: string, emotion: EmotionType) => void;

  constructor(chen: ChenCharacter, camera: THREE.Camera, container: HTMLElement) {
    this.chen = chen;
    this.camera = camera;
    this.container = container;

    this.setupListeners();
  }

  private setupListeners() {
    this.container.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.container.addEventListener('pointermove', this.onPointerMove.bind(this));
  }

  // Update Look-at Target for Head tracking
  private onPointerMove(e: PointerEvent) {
    if (this.chen.isDancing) return;

    const rect = this.container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    // Project point into 3D world space at Chen's depth
    const vector = new THREE.Vector3(x, y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = 16.0;
    const targetPos = this.camera.position.clone().add(dir.multiplyScalar(distance));

    // Constrain height around Chen's head (y: 16 - 22)
    targetPos.y = Math.max(15, Math.min(23, targetPos.y));
    this.chen.targetLookAt.copy(targetPos);
  }

  private onPointerDown(e: PointerEvent) {
    // Only trigger on primary button
    if (e.button !== 0) return;

    // Check if clicked an overlay UI element
    if ((e.target as HTMLElement).closest('.hud-overlay, button, input, .panel, .modal, .studio-drawer, .speech-bubble, .hud-top, .hud-bottom-deck')) {
      return;
    }

    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Test against interactive hitbox meshes first
    const hitMeshes = this.chen.hitBoxes.map(h => h.mesh);
    const intersects = this.raycaster.intersectObjects(hitMeshes, true);

    if (intersects.length > 0) {
      const hitObj = intersects[0].object;
      const part = hitObj.userData.bodyPart as BodyPart;
      const hitPoint = intersects[0].point;
      this.triggerTouchReaction(part, e.clientX, e.clientY, hitPoint);
      return;
    }

    // Fallback: Test against whole character mesh
    if (this.chen.root) {
      const charIntersects = this.raycaster.intersectObject(this.chen.root, true);
      if (charIntersects.length > 0) {
        // Estimate part by hit point coordinates calibrated strictly to Chen's dimensions
        const hitPoint = charIntersects[0].point;
        let detectedPart: BodyPart = 'leg';
        if (hitPoint.y > 19.2) detectedPart = 'head';
        else if (hitPoint.y > 17.5) detectedPart = 'cheek';
        // Only classify as chest if ray hits the front breast protrusion (not shoulders, ribs, collar, or belly)
        else if (hitPoint.y >= 14.6 && hitPoint.y <= 17.1 && Math.abs(hitPoint.x) <= 1.45 && hitPoint.z >= 0.25) {
          detectedPart = 'chest';
        }
        else if (hitPoint.y > 9.0 && Math.abs(hitPoint.x) > 1.8) detectedPart = 'hand';
        else detectedPart = 'leg';

        this.triggerTouchReaction(detectedPart, e.clientX, e.clientY, hitPoint);
      }
    }
  }

  triggerTouchReaction(part: BodyPart, clientX: number, clientY: number, hitPoint?: THREE.Vector3) {
    // 0. For chest and cheek: purely physical squishy touch without dialogue, voice lines, emotion changes, or popups
    if (part === 'chest' || part === 'cheek') {
      this.chen.triggerTouchSpring(part, hitPoint, 1.0);
      sfx.playSquishSound();
      return;
    }

    const list = TOUCH_REACTIONS[part] || TOUCH_REACTIONS.head;
    const reaction = list[Math.floor(Math.random() * list.length)];

    // Trigger soft-body spring for other parts
    this.chen.triggerTouchSpring(part, hitPoint, 1.0);

    // 1. Play tactile sound
    if (reaction.soundType === 'squish') sfx.playSquishSound();
    else if (reaction.soundType === 'heart') sfx.playHeartChime();
    else if (reaction.soundType === 'blush') sfx.playBlushSound();
    else if (reaction.soundType === 'martial') sfx.playMartialSound();
    else sfx.playClick();

    // 2. Set Emotion
    this.chen.setEmotion(reaction.expression);

    // 3. Add XP & Show Floating Popup
    affection.addXp(reaction.affectionGain);
    this.createFloatingPopup(
      `+${reaction.affectionGain} 💖 ${reaction.name}`,
      clientX,
      clientY
    );

    // 4. Speak & Dialogue (Prioritize Authentic Chen Voice Audio)
    if (this.onTouchDialogue) {
      this.onTouchDialogue(reaction.dialogue, reaction.expression);
    }

    if (reaction.voiceKey) {
      chenVoice.playVoice(reaction.voiceKey);
    } else {
      tts.speak(reaction.dialogue);
    }
  }

  private createFloatingPopup(text: string, x: number, y: number) {
    const el = document.createElement('div');
    el.className = 'floating-heart-popup';
    el.innerText = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1200);
  }
}
