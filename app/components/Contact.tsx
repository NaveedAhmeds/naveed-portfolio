import Link from "next/link";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Contact</p>

        <h2 className={styles.heading}>
          Open to contributions and new opportunities.
        </h2>

        <p className={styles.subheading}>
          If you&apos;re working on tools, infrastructure, or ML‑driven products,
          feel free to reach out.
        </p>

        <div className={styles.links}>
          <a
            href="mailto:syednaveed2006@gmail.com"
            className={styles.link}
          >
            syednaveed2006@gmail.com
          </a>

          <Link
            href="https://github.com/NaveedAhmeds"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/naveed-ahmed-syed-17862132a"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
