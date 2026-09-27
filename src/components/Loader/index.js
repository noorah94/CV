import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Star from "../Star";
import "./style.css";

const DURATION = 1600;

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 200 : DURATION;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min((now - start) / total, 1);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setVisible(false), reduce ? 0 : 250);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="loader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-label="Loading"
        >
          <div className="loader__star">
            <Star drawn={progress / 100} />
            <span className="loader__ar ar">ن</span>
          </div>
          <div className="loader__meta mono">
            <span>INITIALIZING PORTFOLIO</span>
            <span>{String(progress).padStart(3, "0")}%</span>
          </div>
          <div className="loader__bar">
            <span style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
