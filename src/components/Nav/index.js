import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { scrollToId, stopScroll } from "../../lib/smoothScroll";
import Star from "../Star";
import "./style.css";

export const sections = [
  { id: "about", label: "About", ar: "نبذة" },
  { id: "experience", label: "Experience", ar: "الخبرات" },
  { id: "work", label: "Work", ar: "المشاريع" },
  { id: "awards", label: "Awards", ar: "الإنجازات" },
  { id: "education", label: "Education", ar: "التعليم" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...sections, { id: "hero" }, { id: "contact" }].forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    stopScroll(open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.div className="nav-progress" style={{ scaleX: progress }} />
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#hero" className="nav__brand" onClick={go("hero")} aria-label="Back to top">
          <Star className="nav__star" />
          <span>Noorah</span>
          <span className="nav__brand-ar ar">نورة</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={go(s.id)}
              className={active === s.id ? "is-active" : ""}
              aria-current={active === s.id ? "true" : undefined}
            >
              {active === s.id && (
                <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span className="nav__label">{s.label}</span>
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={go("contact")} className="btn btn--primary nav__cta">
          Let's talk
        </a>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="menu"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            aria-label="Mobile"
          >
            {[...sections, { id: "contact", label: "Contact", ar: "تواصل" }].map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                onClick={go(s.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mono">0{i + 1}</span>
                {s.label}
                <span className="ar">{s.ar}</span>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
