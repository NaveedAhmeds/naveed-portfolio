"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  slug?: string;
  title: string;
  tag: string;
  tech: string;
  bullets: string[];
  image: string;
  link: string;
  featured?: boolean;
};

type Category = {
  name: string;
  layout?: "grid";
  projects: Project[];
};

const categories: Category[] = [
  {
    name: "AI / ML & Computer Vision",
    layout: "grid",
    projects: [
      {
        slug: "self-driving-sim",
        title: "Self‑Driving Car Simulator",
        tag: "ML · Computer Vision",
        tech: "Python · TensorFlow · OpenCV · Flask",
        image: "/projects/self-drive.jpeg",
        link: "https://github.com/NaveedAhmeds/Neural-Pilot-Cloning",
        featured: true,
        bullets: [],
      },
      {
        slug: "smile-detector",
        title: "Smile Detector Pipeline",
        tag: "Computer Vision",
        tech: "Python · OpenCV",
        image: "/projects/smile-detector.webp",
        link: "https://github.com/NaveedAhmeds/Realtime-ml-smile-detector",
        bullets: [],
      },
    ],
  },
  {
    name: "Automation & Tooling",
    layout: "grid",
    projects: [
      {
        slug: "matrix-auto-login",
        title: "SSH Login Automation",
        tag: "Automation",
        tech: "Python · Bash · Tkinter",
        image: "/projects/matrix.png",
        link: "https://github.com/NaveedAhmeds/matrixAutoLogin",
        bullets: [],
      },
      {
        slug: "dave",
        title: "D.A.V.E. Converter",
        tag: "Desktop Tool",
        tech: "Python · Tkinter",
        image: "/projects/dave.jpg",
        link: "https://github.com/NaveedAhmeds/DAVE",
        bullets: [],
      },
    ],
  },
  {
    name: "Application Development",
    layout: "grid",
    projects: [
      {
        slug: "hotel-reservation",
        title: "Hotel Reservation System",
        tag: "Java App",
        tech: "Java · JavaFX · OOP",
        image: "/projects/hotel.png",
        link: "https://github.com/your-user/hotel-reservation",
        bullets: [],
      },
    ],
  },
  {
    name: "Full‑Stack Web Development",
    layout: "grid",
    projects: [
      {
        slug: "historian",
        title: "Historian – Art Discovery",
        tag: "Full‑Stack",
        tech: "Next.js · React · Jotai · JWT",
        image: "/projects/historian-2.jpg",
        link: "https://github.com/NaveedAhmeds/Historian",
        bullets: [],
      },
    ],
  },
  {
    name: "Open Source",
    layout: "grid",
    projects: [
      {
        slug: "vscode",
        title: "Visual Studio Code Contributions",
        tag: "Open Source · Editor",
        tech: "TypeScript · React · VS Code API",
        image: "/projects/micro.avif",
        link: "https://github.com/microsoft/vscode",
        bullets: [],
      },
      {
        slug: "vital-box",
        title: "Vital Box – AI Supplement Advisor",
        tag: "Open Source · AI",
        tech: "Next.js · Gemini API · MongoDB",
        image: "/projects/Supplements.webp",
        link: "https://github.com/GauravVedak/Vital-Box",
        bullets: [],
      },
    ],
  },
];

const allProjects = categories.flatMap((c) => c.projects);

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 16px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <style>{`
        .project-card {
          background-color: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          contain: layout style paint;
          transition:
            transform 160ms cubic-bezier(0.25, 0.8, 0.25, 1),
            box-shadow 160ms cubic-bezier(0.25, 0.8, 0.25, 1),
            border-color 160ms cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          will-change: transform;
        }

        .project-card:hover {
          transform: translateY(-4px) translateZ(0);
          box-shadow: 0 20px 48px rgba(0,0,0,0.85);
          border-color: rgba(255,255,255,0.22);
        }

        /* Mobile: compact image height */
        .project-img-wrap {
          position: relative;
          height: 120px;
          width: 100%;
          background-color: #050505;
          overflow: hidden;
        }

        .project-img-wrap img {
          transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .project-card:hover .project-img-wrap img {
          transform: scale(1.04) translateZ(0);
        }

        /* Mobile content padding tighter */
        .project-content {
          padding: 12px 12px 12px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          gap: 10px;
        }

        .project-title {
          font-size: 13px;
          font-weight: 600;
          color: #f5f5f7;
          margin: 0 0 2px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .project-tag {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #9ca3af;
          margin: 0 0 4px;
          font-weight: 500;
        }

        .project-tech {
          font-size: 11px;
          color: #71717a;
          margin: 0;
          font-weight: 400;
          line-height: 1.4;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .source-link {
          font-size: 11px;
          font-weight: 500;
          color: #d4d4d8;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .source-link:hover {
          color: #ffffff;
        }

        .deep-dive-link {
          font-size: 11px;
          font-weight: 500;
          color: #2997ff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 3px;
          transition: opacity 160ms ease;
        }

        .deep-dive-link:hover {
          opacity: 0.75;
        }

        /* 2 columns on ALL sizes including mobile */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        /* Tablet and up: bigger image, more padding */
        @media (min-width: 600px) {
          .project-img-wrap {
            height: 160px;
          }

          .project-content {
            padding: 16px;
          }

          .project-title {
            font-size: 16px;
          }

          .project-tag {
            font-size: 11px;
          }

          .project-tech {
            font-size: 12px;
          }

          .deep-dive-link,
          .source-link {
            font-size: 12px;
          }

          .projects-grid {
            gap: 16px;
          }
        }

        /* Desktop: full size */
        @media (min-width: 900px) {
          .project-img-wrap {
            height: 200px;
          }

          .project-content {
            padding: 18px 18px 16px;
          }

          .project-title {
            font-size: 18px;
          }

          .project-tag {
            font-size: 12px;
          }

          .project-tech {
            font-size: 13px;
          }

          .deep-dive-link,
          .source-link {
            font-size: 13px;
          }

          .projects-grid {
            gap: 24px;
          }
        }

        /* Category heading */
        .cat-heading {
          font-size: 18px;
          font-weight: 600;
          color: #f5f5f7;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        @media (min-width: 600px) {
          .cat-heading {
            font-size: 22px;
          }
        }

        @media (min-width: 900px) {
          .cat-heading {
            font-size: 24px;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#f5f5f7",
            marginBottom: "10px",
          }}
        >
          Selected Projects.
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 22px)",
            color: "#86868b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.4",
          }}
        >
          A deeper dive into my code.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="cat-heading">{cat.name}</h3>

            <div className="projects-grid">
              {cat.projects.map((p) => {
                const globalIndex = allProjects.indexOf(p);
                const showDeepDive =
                  cat.name === "AI / ML & Computer Vision" && p.slug;

                return (
                  <article key={p.title} className="project-card">
                    {/* Image */}
                    <div className="project-img-wrap">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 560px"
                        style={{ objectFit: "cover" }}
                        priority={globalIndex < 2}
                        loading={globalIndex < 2 ? "eager" : "lazy"}
                      />
                      {p.featured && (
                        <span
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            background: "rgba(255,255,255,0.96)",
                            color: "#000",
                            fontSize: "9px",
                            fontWeight: 700,
                            padding: "3px 8px",
                            borderRadius: "999px",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            zIndex: 1,
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="project-content">
                      <div>
                        <h4 className="project-title">{p.title}</h4>
                        <p className="project-tag">{p.tag}</p>
                        <p className="project-tech">{p.tech}</p>
                      </div>

                      <div className="project-links">
                        {showDeepDive && (
                          <Link
                            href={`/projects/${p.slug}`}
                            className="deep-dive-link"
                            prefetch={true}
                          >
                            Deep Dive <span style={{ fontSize: "13px" }}>›</span>
                          </Link>
                        )}
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="source-link"
                        >
                          Source ↗
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
