import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { education } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

export default function Education() {
  return (
    <section id="education" className="section" data-scene="1,4.2,0.4">
      <div className="container">
        <SectionHeading index="05" label="Education" ar="التعليم" title="Grounded in *computer* science." />

        <div className="edu">
          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              className="edu__card glass"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12, ease }}
            >
              <div className="edu__top">
                <span className="mono edu__no">0{i + 1}</span>
                <span className="edu__grade">
                  {item.grade}
                  <small className="mono">GPA</small>
                </span>
              </div>
              <h3>{item.degree}</h3>
              <p className="edu__school">{item.school}</p>
              <div className="edu__details">
                {item.details.map((d) => (
                  <span className="chip" key={d}>
                    {d}
                  </span>
                ))}
              </div>
              {item.link && (
                <a className="edu__link" href={item.link} target="_blank" rel="noopener noreferrer">
                  Coursework projects <FiArrowUpRight />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
