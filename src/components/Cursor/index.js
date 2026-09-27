import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./style.css";

// Glowing ring that trails the pointer and grows over interactive elements.
// Only rendered for fine pointers (mouse / trackpad).
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHover(!!e.target.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={`cursor-ring ${hover ? "is-hover" : ""}`}
        style={{ x: sx, y: sy }}
      />
    </>
  );
}
