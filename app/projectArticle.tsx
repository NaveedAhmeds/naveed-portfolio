"use client";

import React from "react";
import Link from "next/link";
import type { ProjectDetail } from "@/app/data/projectDetails";

export default function ProjectArticle({ project }: { project: ProjectDetail }) {
  return (
    <main style={{ backgroundColor: "#000", color: "#f5f5f7", minHeight: "100vh" }}>
      
      {/* 1. HERO SECTION */}
      <header
        style={{
          padding: "96px 24px 64px", 
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px"
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#86868b",
            marginBottom: "0"
          }}
        >
          Technical Deep Dive
        </span>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            background: "linear-gradient(180deg, #fff, #a1a1aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 4vw, 22px)",
            lineHeight: "1.5",
            fontWeight: 500,
            color: "#86868b",
            maxWidth: "720px",
            margin: "12px auto 0"
          }}
        >
          {project.intro}
        </p>
      </header>

      {/* 2. MEDIA & TEXT SECTIONS */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "80px" }}>
        {project.sections?.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={s.heading}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "40px",
                alignItems: "center",
              }}
            >
              {/* Text Side */}
              <div style={{ padding: "0", order: isEven ? 0 : 1 }}> 
                <h2
                  style={{
                    fontSize: "28px", 
                    fontWeight: 600,
                    marginBottom: "16px",
                    color: "#f5f5f7",
                    lineHeight: "1.2"
                  }}
                >
                  {s.heading}
                </h2>
                <p
                  style={{
                    fontSize: "17px", 
                    lineHeight: "1.6",
                    color: "#a1a1aa",
                    fontWeight: 400
                  }}
                >
                  {s.body}
                </p>
              </div>

              {/* Image Side */}
              {s.image && (
                <div
                  style={{
                    order: isEven ? 1 : 0,
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "#1d1d1f"
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* 3. CINEMATIC DEMO */}
      {project.video && (
        <section
          style={{
            marginTop: "100px",
            padding: "0 24px",
            textAlign: "center"
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#86868b",
                marginBottom: "24px"
              }}
            >
              See it in Action
            </h2>
            
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#000"
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${project.video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.video.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  pointerEvents: "none"
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Project Demo"
              />
            </div>
            {project.video.caption && (
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "14px",
                  color: "#6e6e73",
                  fontStyle: "italic"
                }}
              >
                {project.video.caption}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 4. TECH SPECS */}
      {project.architecture && (
        <section
          style={{
            marginTop: "100px",
            padding: "80px 24px",
            background: "#000",
            borderTop: "1px solid #1d1d1f"
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 600,
                marginBottom: "48px",
                color: "#f5f5f7"
              }}
            >
              Architecture & Stack.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "48px"
              }}
            >
              {/* Stack Column */}
              <div>
                <h3
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#86868b",
                    marginBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    paddingBottom: "8px"
                  }}
                >
                  Technologies
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.architecture.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.08)",
                        color: "#e5e5e5",
                        fontSize: "13px",
                        fontWeight: 500,
                        border: "1px solid rgba(255,255,255,0.05)"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights Column */}
              <div>
                 <h3
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#86868b",
                    marginBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    paddingBottom: "8px"
                  }}
                >
                  Key Highlights
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {project.architecture.bullets.map((b, i) => (
                     <li key={i} style={{ fontSize: "15px", lineHeight: "1.5", color: "#d1d1d6", paddingLeft: "16px", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: "9px", width: "4px", height: "4px", borderRadius: "50%", background: "#86868b" }} />
                        {b}
                     </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FOOTER NAV */}
      <footer
        style={{
          padding: "60px 24px",
          textAlign: "center",
          background: "#000",
          borderTop: "1px solid #1d1d1f"
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#2997ff",
            fontSize: "15px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "opacity 0.2s"
          }}
        >
          <span style={{ fontSize: "18px" }}>←</span> Back to Projects
        </Link>
      </footer>
    </main>
  );
}
