import { forwardRef, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { FiArrowUpRight, FiCpu, FiServer, FiSmartphone, FiMonitor, FiLayers } from "react-icons/fi";
import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa";
import { projects } from "../../data/profile";
import SectionHeading from "../SectionHeading";
import "./style.css";

const ease = [0.16, 1, 0.3, 1];

const categories = {
  ai: { label: "AI · Web", icon: FiCpu },
  mobile: { label: "Mobile", icon: FiSmartphone },
  web: { label: "Web", icon: FiMonitor },
  fullstack: { label: "Full-stack", icon: FiLayers },
};

const linkTypes = [
  ["appStore", "App Store", FaApple],
  ["googlePlay", "Google Play", FaGooglePlay],
  ["live", "Live site", FiArrowUpRight],
  ["api", "API docs", FiServer],
  ["github", "Source", FaGithub],
];

const tints = ["#12d98a", "#46f5cf", "#e6bd6f", "#2fbf71"];

const featured = projects.filter((p) => p.featured);
const archive = projects.filter((p) => !p.featured);

// Writes pointer position into CSS variables for the tilt + spotlight
// without re-rendering React on every mouse move.
function useTilt(strength = 8) {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--ry", `${(px - 0.5) * strength}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * strength}deg`);
  };
  const onMouseLeave = () => {
    ref.current.style.setProperty("--ry", "0deg");
    ref.current.style.setProperty("--rx", "0deg");
  };
  return { ref, onMouseMove, onMouseLeave };
}

function Links({ links, compact }) {
  return (
    <div className={`project-links ${compact ? "project-links--compact" : ""}`}>
      {linkTypes
        .filter(([key]) => links[key])
        .map(([key, label, Icon]) => (
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={compact ? label : undefined}
            title={compact ? label : undefined}
          >
            <Icon />
            {!compact && <span>{label}</span>}
          </a>
        ))}
    </div>
  );
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (e) {
    return "";
  }
}

// Procedurally drawn device mockup standing in for a screenshot.
function Mockup({ project, tint }) {
  const initials = project.title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  if (project.category === "mobile") {
    return (
      <div className="mock-phone" style={{ "--tint": tint }}>
        <div className="mock-phone__notch" />
        <div className="mock-phone__screen">
          <div className="mock-row mock-row--head">
            <span className="mock-avatar">{initials}</span>
            <span className="mock-line" style={{ width: "55%" }} />
          </div>
          <div className="mock-map">
            <span className="mock-pin" />
          </div>
          <div className="mock-tiles">
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="mock-line" style={{ width: "80%" }} />
          <span className="mock-line" style={{ width: "60%" }} />
          <div className="mock-tabbar">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  const url = hostOf(project.links.live || "");
  return (
    <div className="mock-browser" style={{ "--tint": tint }}>
      <div className="mock-browser__bar">
        <i />
        <i />
        <i />
        <span className="mock-browser__url mono">{url}</span>
      </div>
      {project.mockup === "builder" ? (
        <BuilderBody />
      ) : project.mockup === "triage" ? (
        <TriageBody />
      ) : (
        <div className="mock-browser__body">
          <aside>
            <span className="mock-avatar">{initials}</span>
            <span className="mock-line" />
            <span className="mock-line" />
            <span className="mock-line" />
          </aside>
          <div className="mock-browser__main">
            <div className="mock-kpis">
              <span />
              <span />
              <span />
            </div>
            <svg className="mock-chart" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0 50 C30 45 40 20 70 28 S120 50 140 22 S180 8 200 14" fill="none" stroke="var(--tint)" strokeWidth="2" />
              <path d="M0 50 C30 45 40 20 70 28 S120 50 140 22 S180 8 200 14 V60 H0Z" fill="var(--tint)" opacity="0.12" />
            </svg>
            <span className="mock-line" style={{ width: "70%" }} />
            <span className="mock-line" style={{ width: "45%" }} />
          </div>
        </div>
      )}
    </div>
  );
}

// Page builder: component palette · canvas with a selected block · props panel.
function BuilderBody() {
  return (
    <div className="mock-builder">
      <aside className="mock-builder__palette">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} />
        ))}
      </aside>
      <div className="mock-builder__canvas">
        <span className="mock-builder__nav" />
        <div className="mock-builder__hero is-selected">
          <span className="mock-line" style={{ width: "60%" }} />
          <span className="mock-line" style={{ width: "40%" }} />
          <em className="mono">&lt;Hero /&gt;</em>
        </div>
        <div className="mock-builder__cards">
          <span />
          <span />
          <span />
        </div>
      </div>
      <aside className="mock-builder__props">
        <span className="mock-line" />
        <span className="mock-line" style={{ width: "70%" }} />
        <span className="mock-toggle" />
        <span className="mock-line" style={{ width: "85%" }} />
        <span className="mock-builder__export mono">TSX ↓</span>
      </aside>
    </div>
  );
}

// Triage queue: patients ranked by acuity with an AI assessment badge.
function TriageBody() {
  const rows = [
    ["#ff5d5d", 92],
    ["#ffa24c", 74],
    ["#f5d565", 51],
    ["var(--tint)", 28],
  ];
  return (
    <div className="mock-triage">
      <div className="mock-triage__head">
        <span className="mock-line" style={{ width: "34%" }} />
        <span className="mock-ai mono">✦ AI triage</span>
      </div>
      {rows.map(([color, score], i) => (
        <div className="mock-triage__row" key={i} style={{ "--level": color }}>
          <span className="mock-triage__level mono">{i + 1}</span>
          <div className="mock-triage__info">
            <span className="mock-line" style={{ width: `${70 - i * 8}%` }} />
            <span className="mock-line" style={{ width: `${45 - i * 5}%` }} />
          </div>
          <span className="mock-triage__score">
            <i style={{ width: `${score}%` }} />
          </span>
        </div>
      ))}
    </div>
  );
}

function FeaturedCard({ project, index }) {
  const tilt = useTilt(6);
  const tint = tints[index % tints.length];
  const Cat = categories[project.category];
  const CatIcon = Cat.icon;
  return (
    <motion.article
      className={`feature feature--${index}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: (index % 2) * 0.12, ease }}
    >
      <div className="feature__inner" {...tilt} style={{ "--tint": tint }} data-cursor>
        <div className="feature__cover">
          <div className="feature__grid" />
          <div className="feature__glow" />
          <Mockup project={project} tint={tint} />
        </div>
        <div className="feature__body">
          <div className="feature__meta mono">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="feature__cat">
              <CatIcon /> {Cat.label}
            </span>
          </div>
          <h3>{project.title}</h3>
          {project.subtitle && <p className="feature__subtitle">{project.subtitle}</p>}
          <p className="feature__desc">{project.description}</p>
          <div className="feature__tools">
            {project.tools.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
          <Links links={project.links} />
        </div>
        <div className="spotlight" />
      </div>
    </motion.article>
  );
}

const ArchiveCard = forwardRef(function ArchiveCard({ project, index }, ref) {
  const tilt = useTilt(10);
  const Cat = categories[project.category];
  const CatIcon = Cat.icon;
  return (
    <motion.article
      layout
      ref={ref}
      className="archive-card"
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="archive-card__inner glass" {...tilt}>
        <div className="archive-card__top">
          <span className="archive-card__icon">
            <CatIcon />
          </span>
          <span className="mono archive-card__no">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="archive-card__foot">
          <span className="archive-card__tools mono">{project.tools.join(" · ")}</span>
          <Links links={project.links} compact />
        </div>
        <div className="spotlight" />
      </div>
    </motion.article>
  );
});

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [
    ["all", "All", archive.length],
    ...Object.entries(categories)
      .map(([key, { label }]) => [key, label, archive.filter((p) => p.category === key).length])
      .filter(([, , n]) => n > 0),
  ];
  const visible = filter === "all" ? archive : archive.filter((p) => p.category === filter);

  return (
    <section id="work" className="section" data-scene="2,4.8,0.18">
      <div className="container">
        <SectionHeading index="03" label="Selected work" ar="المشاريع" title="Products in the *hands* of real users.">
          AI-powered platforms for digital government and healthcare, government apps live on the App
          Store and Google Play, full-stack dashboards, and a lab of Flutter experiments.
        </SectionHeading>

        <div className="features">
          {featured.map((project, i) => (
            <FeaturedCard project={project} index={i} key={project.title} />
          ))}
        </div>

        <div className="archive">
          <div className="archive__head">
            <h3>
              Project archive <span className="ar">الأرشيف</span>
            </h3>
            <LayoutGroup id="filters">
              <div className="filters" role="tablist" aria-label="Filter projects">
                {filters.map(([key, label, n]) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={filter === key}
                    className={`filter ${filter === key ? "is-active" : ""}`}
                    onClick={() => setFilter(key)}
                  >
                    {filter === key && (
                      <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                    )}
                    <span className="filter__label">
                      {label} <sup className="mono">{n}</sup>
                    </span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </div>

          <motion.div layout className="archive__grid">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <ArchiveCard project={project} index={archive.indexOf(project)} key={project.title} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
