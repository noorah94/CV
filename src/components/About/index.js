import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { profile, stack, projects } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: projects.length, suffix: "", label: "Projects built & shipped" },
  { value: profile.yearsExperience, suffix: "+", label: "Years in professional development" },
  { value: 1, suffix: "st", label: "Place — Takaful competition" },
  { value: 4.5, suffix: "/5", decimals: 1, label: "Bachelor's GPA, IT" },
];

function Counter({ value, decimals = 0, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));
  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration: 2,
      ease,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);
  return (
    <span ref={ref}>
      {display}
      <span className="stat__suffix">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section" data-scene="1,4.2,0.55">
      <div className="container">
        <SectionHeading index="01" label="About" ar="نبذة" title="Building the *future,* one app at a time." />

        <div className="about__grid">
          <div>
            <motion.p
              className="about__text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease }}
            >
              {profile.about}
            </motion.p>

            <div className="about__groups">
              {stack.map((group, g) => (
                <motion.div
                  key={group.title}
                  className="about__group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, delay: g * 0.1, ease }}
                >
                  <div className="about__group-head">
                    <span className="mono">{group.title}</span>
                    <span className="ar">{group.ar}</span>
                  </div>
                  <div className="about__chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat glass"
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, delay: i * 0.1, ease }}
              >
                <span className="stat__index mono">[0{i + 1}]</span>
                <span className="stat__value">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
