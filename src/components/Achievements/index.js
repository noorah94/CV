import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { achievements } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import Star from "../Star";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

export default function Achievements() {
  return (
    <section id="awards" className="section" data-scene="0,-4.2,0.35">
      <div className="container">
        <SectionHeading index="04" label="Achievements" ar="الإنجازات" title="Recognised for *secure* design." />

        {achievements.map((item) => (
          <motion.article
            key={item.title}
            className="award"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease }}
          >
            <div className="award__medal" aria-hidden="true">
              <div className="award__rays" />
              <Star className="award__star" />
              <span className="award__rank">
                {item.rank}
                <sup>st</sup>
              </span>
            </div>

            <div className="award__body">
              <p className="award__title mono">{item.title}</p>
              <h3>{item.project}</h3>
              <p className="award__place">{item.place}</p>
              <ul>
                {item.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
              <a className="btn btn--ghost" href={item.link} target="_blank" rel="noopener noreferrer">
                Project files <FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
