"use client";

import React from "react";
import Link from "next/link";

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
        image: "/projects/Self-drive.jpeg",
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

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <style>
        {`
          .project-card {
            background-color: #000;
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition:
              transform 180ms cubic-bezier(0.25, 0.8, 0.25, 1),
              box-shadow 180ms cubic-bezier(0.25, 0.8, 0.25, 1),
              border-color 180ms cubic-bezier(0.25, 0.8, 0.25, 1);
            box-shadow: 0 16px 32px rgba(0,0,0,0.65);
          }

          .project-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 24px 48px rgba(0,0,0,0.85);
            border-color: rgba(255,255,255,0.28);
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          @media (max-width: 480px) {
            .projects-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
        `}
      </style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#f5f5f7",
            marginBottom: "12px",
          }}
        >
          Selected Projects.
        </h2>
        <p
          style={{
            fontSize: "clamp(19px, 3vw, 24px)",
            color: "#86868b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.4",
          }}
        >
          A deeper dive into my code.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#f5f5f7",
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              {cat.name}
            </h3>

            <div className="projects-grid">
              {cat.projects.map((p) => {
                const showDeepDive =
                  cat.name === "AI / ML & Computer Vision" && p.slug;

                return (
                  <article key={p.title} className="project-card">
                    {/* Image */}
                    <div
                      style={{
                        height: "180px",
                        width: "100%",
                        backgroundColor: "#050505",
                        backgroundImage: `url(${p.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                      }}
                    >
                      {p.featured && (
                        <span
                          style={{
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            background: "rgba(255, 255, 255, 0.96)",
                            color: "#000",
                            fontSize: "10px",
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: "999px",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        padding: "18px 18px 16px",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#f5f5f7",
                            margin: "0 0 4px",
                            lineHeight: "1.3",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {p.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "#9ca3af",
                            margin: "0 0 6px",
                            fontWeight: 500,
                          }}
                        >
                          {p.tag}
                        </p>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#a1a1aa",
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {p.tech}
                        </p>
                      </div>

                      {/* Links */}
                      <div
                        style={{
                          marginTop: "18px",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        }}
                      >
                        {showDeepDive && (
                          <Link
                            href={`/projects/${p.slug}`}
                            style={{
                              fontSize: "13px",
                              fontWeight: 500,
                              color: "#2997ff",
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            Technical Deep Dive <span style={{ fontSize: "15px" }}>›</span>
                          </Link>
                        )}

                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#d4d4d8",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                        >
                          Source Code ↗
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
