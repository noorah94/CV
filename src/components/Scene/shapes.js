// Point-cloud generators. Each returns a Float32Array of `count * 3` positions
// centred on the origin, roughly within a 6-unit tall box.

const TAU = Math.PI * 2;
const rand = (a, b) => a + Math.random() * (b - a);

function lerpPoint(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

// Najdi eight-pointed star (Khatam): two interlaced squares with a band,
// an inner ring and a faint dust fill.
export function octagram(count, R = 3) {
  const out = new Float32Array(count * 3);
  const squares = [0, Math.PI / 4].map((offset) =>
    [0, 1, 2, 3].map((k) => {
      const a = offset + (k * Math.PI) / 2;
      return [Math.cos(a) * R, Math.sin(a) * R];
    })
  );
  for (let i = 0; i < count; i++) {
    const r = Math.random();
    let x, y, z = rand(-0.12, 0.12);
    if (r < 0.72) {
      const sq = squares[i % 2];
      const k = Math.floor(Math.random() * 4);
      const band = Math.random() < 0.5 ? 1 : 0.9; // double line = interlace band
      const [px, py] = lerpPoint(sq[k], sq[(k + 1) % 4], Math.random());
      x = px * band;
      y = py * band;
    } else if (r < 0.86) {
      const a = Math.random() * TAU;
      const rr = R * (Math.random() < 0.5 ? 0.42 : 0.36);
      x = Math.cos(a) * rr;
      y = Math.sin(a) * rr;
    } else {
      const a = Math.random() * TAU;
      const rr = Math.sqrt(Math.random()) * R * 0.9;
      x = Math.cos(a) * rr;
      y = Math.sin(a) * rr;
      z = rand(-0.6, 0.6);
    }
    out.set([x, y, z], i * 3);
  }
  return out;
}

// Wireframe globe: meridians, parallels and a scattered surface.
export function globe(count, R = 3) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = Math.random();
    let theta, phi;
    if (r < 0.45) {
      theta = (Math.floor(Math.random() * 12) / 12) * TAU;
      phi = Math.random() * Math.PI;
    } else if (r < 0.8) {
      theta = Math.random() * TAU;
      phi = ((Math.floor(Math.random() * 8) + 1) / 9) * Math.PI;
    } else {
      theta = Math.random() * TAU;
      phi = Math.acos(rand(-1, 1));
    }
    out.set(
      [
        R * Math.sin(phi) * Math.cos(theta),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.sin(theta),
      ],
      i * 3
    );
  }
  return out;
}

// Smartphone: rounded frame, notch, and a UI made of dotted blocks.
export function phone(count, w = 3, h = 6, radius = 0.5) {
  const out = new Float32Array(count * 3);
  const frame = () => {
    // Walk the perimeter of a rounded rectangle.
    const straightW = w - 2 * radius;
    const straightH = h - 2 * radius;
    const arc = (Math.PI / 2) * radius;
    const per = 2 * straightW + 2 * straightH + 4 * arc;
    let d = Math.random() * per;
    const segs = [
      [straightW, (t) => [-w / 2 + radius + t, h / 2]],
      [arc, (t) => corner(w / 2 - radius, h / 2 - radius, Math.PI / 2 - t / radius)],
      [straightH, (t) => [w / 2, h / 2 - radius - t]],
      [arc, (t) => corner(w / 2 - radius, -h / 2 + radius, -t / radius)],
      [straightW, (t) => [w / 2 - radius - t, -h / 2]],
      [arc, (t) => corner(-w / 2 + radius, -h / 2 + radius, -Math.PI / 2 - t / radius)],
      [straightH, (t) => [-w / 2, -h / 2 + radius + t]],
      [arc, (t) => corner(-w / 2 + radius, h / 2 - radius, Math.PI - t / radius)],
    ];
    for (const [len, fn] of segs) {
      if (d <= len) return fn(d);
      d -= len;
    }
    return [0, 0];
  };
  const corner = (cx, cy, a) => [cx + Math.cos(a) * radius, cy + Math.sin(a) * radius];

  // UI blocks inside the screen: [x, y, width, height]
  const blocks = [
    [-1.15, 2.2, 2.3, 0.35],
    [-1.15, 1.2, 2.3, 0.75],
    [-1.15, 0.1, 1.05, 0.9],
    [0.1, 0.1, 1.05, 0.9],
    [-1.15, -1.0, 2.3, 0.3],
    [-1.15, -1.5, 1.6, 0.3],
    [-1.15, -2.45, 2.3, 0.45],
  ];
  for (let i = 0; i < count; i++) {
    const r = Math.random();
    let x, y, z = 0;
    if (r < 0.5) {
      [x, y] = frame();
      z = Math.random() < 0.5 ? -0.18 : 0.18;
    } else if (r < 0.54) {
      const a = Math.random() * TAU;
      x = Math.cos(a) * 0.09;
      y = h / 2 - 0.35 + Math.sin(a) * 0.09;
    } else if (r < 0.58) {
      x = rand(-0.5, 0.5);
      y = -h / 2 + 0.22;
    } else {
      const [bx, by, bw, bh] = blocks[Math.floor(Math.random() * blocks.length)];
      const edge = Math.random() < 0.55;
      if (edge) {
        const t = Math.random() * 2 * (bw + bh);
        if (t < bw) [x, y] = [bx + t, by];
        else if (t < bw + bh) [x, y] = [bx + bw, by - (t - bw)];
        else if (t < 2 * bw + bh) [x, y] = [bx + bw - (t - bw - bh), by - bh];
        else [x, y] = [bx, by - bh + (t - 2 * bw - bh)];
      } else {
        x = bx + Math.random() * bw;
        y = by - Math.random() * bh;
      }
      z = 0.05;
    }
    out.set([x, y, z], i * 3);
  }
  return out;
}

// Date palm: curved trunk with ring bands and arching fronds with leaflets.
export function palm(count) {
  const out = new Float32Array(count * 3);
  const base = -3.4;
  const trunkH = 4.8;
  const trunk = (t) => [Math.sin(t * 1.4) * 0.45, base + t * trunkH];
  const top = trunk(1);
  const fronds = 12;

  for (let i = 0; i < count; i++) {
    const r = Math.random();
    let x, y, z;
    if (r < 0.3) {
      // Trunk: bias toward ring bands for a textured look.
      let t = Math.random();
      if (Math.random() < 0.6) t = Math.round(t * 22) / 22;
      const [cx, cy] = trunk(t);
      const rad = 0.24 * (1 - 0.35 * t);
      const a = Math.random() * TAU;
      x = cx + Math.cos(a) * rad;
      y = cy;
      z = Math.sin(a) * rad;
    } else if (r < 0.95) {
      const f = Math.floor(Math.random() * fronds);
      const theta = (f / fronds) * TAU + (f % 2) * 0.2;
      const lift = f % 3 === 0 ? 1.3 : f % 3 === 1 ? 0.9 : 0.5;
      const L = 2.7 + (f % 2) * 0.4;
      const s = Math.pow(Math.random(), 0.8);
      const dir = [Math.cos(theta), Math.sin(theta)];
      const perp = [-dir[1], dir[0]];
      let px = top[0] + dir[0] * s * L;
      let pz = dir[1] * s * L;
      let py = top[1] + lift * s - 2.1 * s * s;
      if (Math.random() < 0.7) {
        // Leaflet hanging off the rachis
        const side = Math.random() < 0.5 ? -1 : 1;
        const len = 0.55 * Math.sin(Math.PI * Math.min(s * 1.1, 1)) * Math.random();
        px += perp[0] * side * len;
        pz += perp[1] * side * len;
        py -= len * 0.6;
      }
      x = px;
      y = py;
      z = pz;
    } else {
      // Date clusters under the crown
      const a = Math.random() * TAU;
      const rr = 0.35 * Math.sqrt(Math.random());
      x = top[0] + Math.cos(a) * 0.45 + rand(-0.12, 0.12);
      y = top[1] - 0.35 - rr;
      z = Math.sin(a) * 0.45 + rand(-0.12, 0.12);
    }
    out.set([x, y, z], i * 3);
  }
  return out;
}
