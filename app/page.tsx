import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { SectionReveal } from "./components/SectionReveal";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Hero />

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <section id="experience" />
        <SectionReveal delay={50}>
          <Experience />
        </SectionReveal>

        <section id="projects" />
        <SectionReveal delay={50}>
          <Projects />
        </SectionReveal>

        <SectionReveal delay={50}>
          <Contact />
        </SectionReveal>
      </div>
    </div>
  );
}
