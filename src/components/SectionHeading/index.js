import { motion } from "framer-motion";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

// "01 — ABOUT · نبذة" label above a title whose words rise into view.
export default function SectionHeading({ index, label, ar, title, children }) {
  const words = title.split(" ");
  return (
    <div className="section-heading">
      <motion.div
        className="section-heading__label mono"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
      >
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" />
        <span>{label}</span>
        <span className="ar section-heading__ar">{ar}</span>
      </motion.div>
      {/* The trigger lives on the h2: the words start clipped by their masks,
          so they would never register as in view themselves. */}
      <motion.h2
        className="section-heading__title"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
      >
        {words.map((word, i) => (
          <span className="word-mask" key={i}>
            <motion.span
              className={word.startsWith("*") ? "accent" : undefined}
              variants={{ hidden: { y: "110%" }, shown: { y: 0 } }}
              transition={{ duration: 1, delay: i * 0.06, ease }}
            >
              {word.replace(/\*/g, "")}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {children && (
        <motion.p
          className="section-heading__lede"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}
