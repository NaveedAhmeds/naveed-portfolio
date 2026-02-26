import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Hero />
        <Skills />
        <section id="experience" />
        <Experience />
        <section id="projects" />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
