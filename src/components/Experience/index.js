import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Star from "../Star";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section" data-scene="2,-5,0.3">
      <div className="container">
        <SectionHeading index="02" label="Experience" ar="الخبرات" title="Where I've *shipped* real products." />

        <div className="timeline" ref={listRef}>
          <div className="timeline__track" aria-hidden="true">
            <motion.div className="timeline__fill" style={{ scaleY: fill }} />
          </div>
          <ol className="timeline__list">

          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              className="timeline__item"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
            >
              <div className="timeline__meta">
                <span className="timeline__period mono">{job.period}</span>
                <span className="timeline__company">{job.company}</span>
              </div>

              <div className="timeline__node" aria-hidden="true">
                <Star />
              </div>

              <article className="timeline__card glass">
                <span className="timeline__no mono">{String(experience.length - i).padStart(2, "0")}</span>
                <h3>{job.role}</h3>
                <p className="timeline__company--inline mono">
                  {job.company} · {job.period}
                </p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="timeline__tags">
                  {job.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
