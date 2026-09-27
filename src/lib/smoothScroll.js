import Lenis from "lenis";

let lenis = null;

export function initSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  let raf;
  const loop = (time) => {
    lenis.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    lenis.destroy();
    lenis = null;
  };
}

export function stopScroll(stopped) {
  if (!lenis) return;
  if (stopped) lenis.stop();
  else lenis.start();
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -20 });
  else el.scrollIntoView({ behavior: "smooth" });
}
