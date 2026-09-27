import { useEffect, useRef, useState } from "react";

// Arabic letters + binary: the glyphs a string passes through while decoding.
const GLYPHS = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي01<>/{}";

// Cycles through `words`, decoding each one glyph by glyph.
export default function Scramble({ words, start = true, hold = 2600 }) {
  const [text, setText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    if (!start) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(words[0]);
      return undefined;
    }
    let raf;
    let timer;
    const decode = (target) => {
      const begin = performance.now();
      const frame = (now) => {
        const progress = (now - begin) / 900;
        const revealed = Math.floor(progress * target.length);
        let out = "";
        for (let i = 0; i < target.length; i++) {
          if (i < revealed || target[i] === " ") out += target[i];
          else if (i < revealed + 6) out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setText(out);
        if (revealed < target.length) raf = requestAnimationFrame(frame);
        else
          timer = setTimeout(() => {
            index.current = (index.current + 1) % words.length;
            decode(words[index.current]);
          }, hold);
      };
      raf = requestAnimationFrame(frame);
    };
    decode(words[index.current]);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [words, start, hold]);

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
