import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { initSmoothScroll, stopScroll } from "./lib/smoothScroll";
import Scene from "./components/Scene";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => initSmoothScroll(), []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", !loaded);
    stopScroll(!loaded);
  }, [loaded]);

  return (
    <MotionConfig reducedMotion="user">
      <Scene />
      <div className="vignette" />
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={loaded} />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <div className="grain" aria-hidden="true" />
    </MotionConfig>
  );
}

export default App;
