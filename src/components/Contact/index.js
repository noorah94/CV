import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp, FiCheck, FiCopy } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "../../data/profile";
import { scrollToId } from "../../lib/smoothScroll";
import SectionHeading from "../SectionHeading";
import Sadu from "../Sadu";
import Star from "../Star";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const socials = [
    { href: `mailto:${profile.email}`, label: "Email", icon: MdEmail },
    { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
    { href: profile.github, label: "GitHub", icon: FaGithub },
  ];

  return (
    <section id="contact" className="contact" data-scene="3,4,0.95">
      <div className="container contact__inner">
        <SectionHeading index="06" label="Contact" ar="تواصل" title="Let's build what's *next.*" />

        <motion.p
          className="contact__ar ar"
          lang="ar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          لنبنِ المستقبل معًا
        </motion.p>

        <motion.div
          className="contact__email"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          <a href={`mailto:${profile.email}`} className="contact__address">
            {profile.email}
          </a>
          <button className="contact__copy" onClick={copy} aria-label="Copy email address">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "done" : "copy"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied" : "Copy"}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>

        <div className="contact__socials">
          {socials.map(({ href, label, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact__social"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease }}
            >
              <Icon />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="footer">
        <Sadu />
        <div className="container footer__inner">
          <span className="footer__brand">
            <Star className="footer__star" />
            {profile.name} © {new Date().getFullYear()}
          </span>
          <span className="mono footer__made">Crafted in Saudi Arabia · صُنع في السعودية</span>
          <button className="footer__top" onClick={() => scrollToId("hero")}>
            Back to top <FiArrowUp />
          </button>
        </div>
      </footer>
    </section>
  );
}
