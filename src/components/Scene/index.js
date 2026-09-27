import { useEffect, useRef } from "react";
import * as THREE from "three";
import { octagram, globe, phone, palm } from "./shapes";
import "./style.css";

// Sections opt in with data-scene="shape,x,opacity":
//   shape: 0 star · 1 globe · 2 phone · 3 palm
//   x: horizontal offset of the cloud on wide screens
//   opacity: how present the cloud is behind that section

const morphVertex = /* glsl */ `
  attribute vec3 aP0;
  attribute vec3 aP1;
  attribute vec3 aP2;
  attribute vec3 aP3;
  attribute float aRand;
  attribute vec3 aColor;
  uniform float uMorph;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vAlpha;

  float stage(float m, float d) {
    return smoothstep(d, d + 0.65, clamp(m, 0.0, 1.0));
  }

  void main() {
    float d = aRand * 0.35;
    float t1 = stage(uMorph, d);
    float t2 = stage(uMorph - 1.0, d);
    float t3 = stage(uMorph - 2.0, d);
    vec3 p = mix(aP0, aP1, t1);
    p = mix(p, aP2, t2);
    p = mix(p, aP3, t3);

    // Particles burst outward mid-flight, then settle into the new shape.
    float flight = t1 * (1.0 - t1) + t2 * (1.0 - t2) + t3 * (1.0 - t3);
    p += normalize(p + vec3(0.0001)) * flight * 3.0 * aRand;
    p += vec3(
      sin(uTime * 0.8 + aRand * 40.0),
      cos(uTime * 0.7 + aRand * 30.0),
      sin(uTime * 0.6 + aRand * 20.0)
    ) * 0.03;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (0.5 + aRand) / -mv.z;
    vColor = aColor;
    vAlpha = 0.55 + 0.45 * sin(uTime * 1.6 + aRand * 60.0);
  }
`;

const dunesVertex = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vDepth;
  varying float vHeight;

  void main() {
    vec3 p = position;
    // Endless drift toward the camera.
    p.z = mod(p.z + uTime * 0.7 + 40.0, 40.0) - 34.0;
    float h = sin(p.x * 0.22 + p.z * 0.12 + uTime * 0.15) * 0.9
            + sin(p.x * 0.55 - p.z * 0.3 + uTime * 0.25) * 0.3
            + sin(p.z * 0.45 + uTime * 0.1) * 0.45;
    p.y += h;
    vHeight = h;
    vDepth = smoothstep(-34.0, -18.0, p.z) * (1.0 - smoothstep(2.0, 6.0, p.z));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio / -mv.z;
  }
`;

const dotFragment = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = pow(smoothstep(0.5, 0.0, d), 1.6);
    gl_FragColor = vec4(vColor, a * vAlpha * uOpacity);
  }
`;

const dunesFragment = /* glsl */ `
  uniform float uOpacity;
  uniform vec3 uLow;
  uniform vec3 uHigh;
  varying float vDepth;
  varying float vHeight;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.1, d);
    vec3 c = mix(uLow, uHigh, smoothstep(-0.8, 1.2, vHeight));
    gl_FragColor = vec4(c, a * vDepth * uOpacity);
  }
`;

function readSceneTargets() {
  const nodes = document.querySelectorAll("[data-scene]");
  const mid = window.innerHeight * 0.5;
  let best = null;
  let bestDist = Infinity;
  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const dist =
      rect.top <= mid && rect.bottom >= mid
        ? 0
        : Math.min(Math.abs(rect.top - mid), Math.abs(rect.bottom - mid));
    if (dist < bestDist) {
      bestDist = dist;
      best = node;
    }
  });
  if (!best) return { shape: 0, x: 0, opacity: 1 };
  const [shape, x, opacity] = best.dataset.scene.split(",").map(Number);
  return { shape, x, opacity };
}

export default function Scene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = () => window.innerWidth < 900;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    } catch (e) {
      mount.classList.add("scene--fallback");
      return undefined;
    }
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 13);

    // ---- Morphing cloud ----------------------------------------------------
    const count = isSmall() ? 4200 : 7000;
    const geometry = new THREE.BufferGeometry();
    const shapes = [octagram(count), globe(count), phone(count), palm(count)];
    shapes.forEach((arr, i) => geometry.setAttribute(`aP${i}`, new THREE.BufferAttribute(arr, 3)));
    geometry.setAttribute("position", new THREE.BufferAttribute(shapes[0].slice(), 3));

    const rands = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#12d98a"), // Saudi tech green
      new THREE.Color("#46f5cf"), // cyan glow
      new THREE.Color("#0b8a4f"), // deep flag green
      new THREE.Color("#e6bd6f"), // desert gold
    ];
    for (let i = 0; i < count; i++) {
      rands[i] = Math.random();
      const pick = Math.random();
      const c = pick < 0.45 ? palette[0] : pick < 0.65 ? palette[1] : pick < 0.85 ? palette[2] : palette[3];
      colors.set([c.r, c.g, c.b], i * 3);
    }
    geometry.setAttribute("aRand", new THREE.BufferAttribute(rands, 1));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 8);

    const cloudMaterial = new THREE.ShaderMaterial({
      vertexShader: morphVertex,
      fragmentShader: dotFragment,
      uniforms: {
        uMorph: { value: 0 },
        uTime: { value: 0 },
        uSize: { value: isSmall() ? 70 : 90 },
        uPixelRatio: { value: pixelRatio },
        uOpacity: { value: 1 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const cloud = new THREE.Points(geometry, cloudMaterial);
    const cloudGroup = new THREE.Group();
    cloudGroup.add(cloud);
    scene.add(cloudGroup);

    // ---- Dunes ----------------------------------------------------------------
    const cols = isSmall() ? 110 : 180;
    const rows = isSmall() ? 60 : 90;
    const dunePositions = new Float32Array(cols * rows * 3);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const k = (i * rows + j) * 3;
        dunePositions[k] = (i / (cols - 1) - 0.5) * 60;
        dunePositions[k + 1] = 0;
        dunePositions[k + 2] = (j / (rows - 1)) * 40 - 34;
      }
    }
    const duneGeometry = new THREE.BufferGeometry();
    duneGeometry.setAttribute("position", new THREE.BufferAttribute(dunePositions, 3));
    duneGeometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 60);
    const duneMaterial = new THREE.ShaderMaterial({
      vertexShader: dunesVertex,
      fragmentShader: dunesFragment,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 42 },
        uPixelRatio: { value: pixelRatio },
        uOpacity: { value: 0.75 },
        uLow: { value: new THREE.Color("#0a6b3d") },
        uHigh: { value: new THREE.Color("#e6bd6f") },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const dunes = new THREE.Points(duneGeometry, duneMaterial);
    dunes.position.y = -5.2;
    scene.add(dunes);

    // ---- Interaction & loop ---------------------------------------------------
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let target = readSceneTargets();
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        target = readSceneTargets();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      target = readSceneTargets();
    };
    window.addEventListener("resize", onResize);

    const state = { morph: 0, x: target.x, opacity: 0, scrollY: window.scrollY };
    const clock = new THREE.Clock();
    let raf;
    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      const speed = reduceMotion ? 0 : 1;
      const t = clock.elapsedTime * speed;
      const small = isSmall();
      const ease = 1 - Math.pow(0.001, dt); // frame-rate independent lerp

      state.morph += (target.shape - state.morph) * (reduceMotion ? 1 : ease * 0.9);
      state.x += ((small ? 0 : target.x) - state.x) * ease;
      state.opacity += ((small ? target.opacity * 0.45 : target.opacity) - state.opacity) * ease;
      pointer.x += (pointer.tx - pointer.x) * ease;
      pointer.y += (pointer.ty - pointer.y) * ease;

      cloudMaterial.uniforms.uMorph.value = state.morph;
      cloudMaterial.uniforms.uTime.value = t;
      cloudMaterial.uniforms.uOpacity.value = state.opacity;
      duneMaterial.uniforms.uTime.value = t;
      duneMaterial.uniforms.uOpacity.value = 0.35 + 0.45 * Math.max(0, 1 - window.scrollY / window.innerHeight);

      cloudGroup.position.x = state.x;
      cloudGroup.position.y = small ? 1.2 : 0.2;
      cloudGroup.rotation.y = Math.sin(t * 0.25) * 0.55 + pointer.x * 0.35;
      cloudGroup.rotation.x = pointer.y * 0.18 + Math.sin(t * 0.2) * 0.05;
      cloudGroup.scale.setScalar(small ? 0.8 : 1);
      camera.position.x = pointer.x * 0.4;
      camera.position.y = -pointer.y * 0.25;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      cloudMaterial.dispose();
      duneGeometry.dispose();
      duneMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="scene" aria-hidden="true" />;
}
