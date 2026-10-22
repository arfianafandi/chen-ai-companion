import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export type CameraPreset = 'face' | 'chat' | 'full';

export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;

  // Performance & Quality
  public pixelRatio = 1.0;
  public particlesEnabled = true;
  private particleUpdateTick = 0;

  // Lighting
  private keyLight: THREE.DirectionalLight;
  private rimLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private fillLight: THREE.PointLight;

  // Cyber Stage
  private stageGroup: THREE.Group;
  private particles: THREE.Points;

  // Camera animation targets (Calibrated to Chen's height: Eyes y=18.88, Head y=18.38, Height=22.25)
  private targetCameraPos = new THREE.Vector3(0, 16.6, 14.5);
  private targetControlsTarget = new THREE.Vector3(0, 16.2, 0);

  constructor(container: HTMLElement) {
    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera (38deg FOV for flattering anime proportions)
    this.camera = new THREE.PerspectiveCamera(
      38,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Start at Chat preset
    this.camera.position.set(0, 16.6, 14.5);

    // 3. Renderer (Defaulting to 1.0 pixel ratio for instant 60 FPS performance)
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(1.0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap; // PCF is 3x faster than PCFSoft
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08; // Calibrated for anime cel-shading contrast
    container.appendChild(this.renderer.domElement);

    // 4. Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.target.set(0, 16.5, 0);
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 55.0;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.05; // Do not go under floor

    // 5. Lights (Calibrated to match the Endfield cutscene tone)
    // Cool industrial teal-slate ambient (prevents muddy black shadows without washing out skin)
    this.ambientLight = new THREE.AmbientLight(0x88b0ba, 1.05);
    this.scene.add(this.ambientLight);

    // Main Key Light (Warm flattering anime portrait light)
    this.keyLight = new THREE.DirectionalLight(0xfff2e6, 2.1);
    this.keyLight.position.set(6.5, 25, 13);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.width = 1024;
    this.keyLight.shadow.mapSize.height = 1024;
    this.keyLight.shadow.camera.near = 0.5;
    this.keyLight.shadow.camera.far = 60;
    this.keyLight.shadow.camera.left = -15;
    this.keyLight.shadow.camera.right = 15;
    this.keyLight.shadow.camera.top = 28;
    this.keyLight.shadow.camera.bottom = -2;
    this.keyLight.shadow.bias = -0.0004;
    this.scene.add(this.keyLight);

    // Cool Rim Light for anime hair contours, crystal horns & jacket edges
    this.rimLight = new THREE.DirectionalLight(0x28d8ff, 1.75);
    this.rimLight.position.set(-9, 23, -11);
    this.scene.add(this.rimLight);

    // Soft front fill light on Chen's face (natural peach skin tone)
    this.fillLight = new THREE.PointLight(0xffe4cc, 0.75, 25);
    this.fillLight.position.set(0, 18.5, 5.5);
    this.scene.add(this.fillLight);

    // 6. Stage & Environment
    this.stageGroup = new THREE.Group();
    this.createCyberStage();
    this.particles = this.createFloatingParticles();
    this.scene.add(this.stageGroup);
    this.scene.add(this.particles);

    // 7. Handle Resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private createCyberStage() {
    // Pedestal Disc
    const baseGeo = new THREE.CylinderGeometry(8.5, 9.0, 0.4, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x111418,
      roughness: 0.35,
      metalness: 0.8,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.2;
    baseMesh.receiveShadow = true;
    this.stageGroup.add(baseMesh);

    // Glowing Inner Ring (Arknights Endfield signature yellow #FFE600)
    const ringGeo = new THREE.RingGeometry(7.8, 8.0, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffde00,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.01;
    this.stageGroup.add(ringMesh);

    // Floor Grid
    const grid = new THREE.GridHelper(30, 30, 0xffde00, 0x1f2937);
    grid.position.y = 0.005;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.35;
    this.stageGroup.add(grid);
  }

  private createFloatingParticles(): THREE.Points {
    const count = 150;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = Math.random() * 26;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffe066,
      size: 0.18,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    return new THREE.Points(geo, mat);
  }

  setCameraPreset(preset: CameraPreset) {
    switch (preset) {
      case 'face':
        // Close-up on Chen's face (Eyes y=18.88)
        this.targetCameraPos.set(0, 18.7, 6.8);
        this.targetControlsTarget.set(0, 18.5, 0);
        break;
      case 'chat':
        // Portrait / Upper body shot (Head & chest clearly visible and centered)
        this.targetCameraPos.set(0, 16.6, 14.5);
        this.targetControlsTarget.set(0, 16.2, 0);
        break;
      case 'full':
        // Full body shot from boots (y=0) to horn tips (y=22.25), balanced above bottom deck
        this.targetCameraPos.set(0, 11.0, 34.0);
        this.targetControlsTarget.set(0, 10.5, 0);
        break;
    }
  }

  setLightingMood(mood: 'cyber' | 'sunset' | 'studio') {
    switch (mood) {
      case 'cyber':
        this.ambientLight.color.setHex(0x88b0ba);
        this.keyLight.color.setHex(0xfff2e6);
        this.rimLight.color.setHex(0x28d8ff);
        break;
      case 'sunset':
        this.ambientLight.color.setHex(0xffdfd0);
        this.keyLight.color.setHex(0xffa550);
        this.rimLight.color.setHex(0xff3366);
        break;
      case 'studio':
        this.ambientLight.color.setHex(0xffffff);
        this.keyLight.color.setHex(0xfff8ee);
        this.rimLight.color.setHex(0xe0eaff);
        break;
    }
  }

  toggleStage(visible: boolean) {
    this.stageGroup.visible = visible;
  }

  toggleParticles(visible: boolean) {
    this.particlesEnabled = visible;
    this.particles.visible = visible;
  }

  setPixelRatio(ratio: number) {
    this.pixelRatio = ratio;
    this.renderer.setPixelRatio(ratio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setShadowQuality(quality: 'off' | 'low' | 'medium' | 'high') {
    if (quality === 'off') {
      this.renderer.shadowMap.enabled = false;
      this.keyLight.castShadow = false;
    } else {
      this.renderer.shadowMap.enabled = true;
      this.keyLight.castShadow = true;
      if (quality === 'low') {
        this.renderer.shadowMap.type = THREE.BasicShadowMap;
        this.keyLight.shadow.mapSize.set(512, 512);
      } else if (quality === 'medium') {
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        this.keyLight.shadow.mapSize.set(1024, 1024);
      } else {
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.keyLight.shadow.mapSize.set(2048, 2048);
      }
      if (this.keyLight.shadow.map) {
        this.keyLight.shadow.map.dispose();
        (this.keyLight.shadow as any).map = null;
      }
    }
    this.renderer.shadowMap.needsUpdate = true;
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render(delta: number) {
    // Smooth Camera Transition to target
    this.camera.position.lerp(this.targetCameraPos, delta * 4.0);
    this.controls.target.lerp(this.targetControlsTarget, delta * 4.0);
    this.controls.update();

    // Animate upward drift of sci-fi dust particles (throttled for high performance)
    if (this.particles.visible && this.particlesEnabled) {
      this.particleUpdateTick++;
      // Only update buffer every 2nd frame to save CPU-GPU transfer bandwidth
      if (this.particleUpdateTick % 2 === 0) {
        const positions = this.particles.geometry.attributes.position.array as Float32Array;
        const speed = delta * 1.6;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += speed;
          if (positions[i + 1] > 26) {
            positions[i + 1] = 0;
          }
        }
        this.particles.geometry.attributes.position.needsUpdate = true;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}
