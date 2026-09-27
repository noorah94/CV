import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "../../data/profile";
import { scrollToId } from "../../lib/smoothScroll";
import Scramble from "../Scramble";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

function useKsaTime() {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Riyadh",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero({ ready }) {
  const time = useKsaTime();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -160]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const [first, last] = profile.name.split(" ");
  const rise = (delay) => ({
    initial: { y: "110%" },
    animate: ready ? { y: 0 } : undefined,
    transition: { duration: 1.2, delay, ease },
  });
  const fade = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1, delay, ease },
  });

  return (
    <section id="hero" className="hero" data-scene="0,4.1,1">
      <motion.div className="container hero__inner" style={{ y, opacity }}>
        <motion.div className="chip hero__status" {...fade(0.1)}>
          <span className="pulse" /> Open to new opportunities
        </motion.div>

        <h1 className="hero__name">
          <span className="word-mask">
            <motion.span {...rise(0.15)}>{first}</motion.span>
          </span>
          <br />
          <span className="word-mask">
            <motion.span className="accent" {...rise(0.25)}>
              {last}
            </motion.span>
          </span>
        </h1>

        <motion.p className="hero__ar ar" lang="ar" {...fade(0.45)}>
          {profile.nameAr}
        </motion.p>

        <motion.p className="hero__role mono" {...fade(0.55)}>
          <span className="hero__prompt">&gt;_</span>
          <Scramble words={profile.roles} start={ready} />
          <span className="caret" />
        </motion.p>

        <motion.p className="hero__tagline" {...fade(0.65)}>
          {profile.tagline}
        </motion.p>

        <motion.div className="hero__actions" {...fade(0.75)}>
          <a
            href="#work"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("work");
            }}
          >
            View my work <FiArrowUpRight />
          </a>
          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MdEmail />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="hero__hud mono" {...fade(1)}>
        <div>
          <span className="hud-label">LOCAL TIME</span>
          <span>KSA {time} · UTC+3</span>
        </div>
        <button className="hero__scroll" onClick={() => scrollToId("about")}>
          <FiArrowDown /> Scroll to explore
        </button>
        <div className="hero__hud-right">
          <span className="hud-label">CORE STACK</span>
          <span>Flutter · Next.js · .NET · AI</span>
        </div>
      </motion.div>

      <div className="hero__frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
