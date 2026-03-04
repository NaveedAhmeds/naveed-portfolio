"use client";

import React from "react";

type Role = {
  company: string;
  title: string;
  period: string;
  type: string;
  bullets: string[];
  tag?: string;
  highlightType?: boolean;
};

const experience: Role[] = [
  {
    company: "PAR Technology",
    title: "QA Automation Engineer",
    period: "Jan 2025 – Apr 2025",
    type: "Co-op",
    tag: "FEATURED",
    bullets: [
      "Automated POS test cases using JavaScript in TestComplete, executed on AWS EC2 for scalable distributed testing.",
      "Developed Selenium web test suites in C# and performed API testing for backend validation.",
      "Integrated Jenkins pipelines to automate CI/CD workflows, streamlining execution within the SDLC.",
    ],
  },
  {
    company: "Open Policy",
    title: "Software Engineer",
    period: "May 2025 – Dec 2025",
    type: "Contract",
    tag: "LATEST",
    bullets: [
      "Developed backend services using JavaScript and Express to handle API integrations and data processing for the core platform.",
      "Contributed to the native iOS application using Swift and SwiftUI, implementing screens that mirrored the web dashboard.",
      "Built React components and custom hooks for data‑driven views, improving state management across the web client.",
    ],
  },
  {
    company: "Wow Kebabish",
    title: "Web Developer",
    period: "Nov 2023 – Sep 2024",
    type: "Contract",
    bullets: [
      "Developed and maintained full‑stack features with Next.js and React, focusing on responsive layouts.",
      "Integrated REST APIs to support dynamic menus and content updates across devices.",
      "Collaborated directly with stakeholders to iterate on UI changes and tighten the feedback loop.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px 24px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .exp-header {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.05s;
        }

        .exp-subheading {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.15s;
        }

        .exp-role {
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
        }

        .exp-role:nth-child(1) { animation-delay: 0.2s; }
        .exp-role:nth-child(2) { animation-delay: 0.35s; }
        .exp-role:nth-child(3) { animation-delay: 0.5s; }

        .exp-tag {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #000;
          background: #fff;
          padding: 4px 8px;
          border-radius: 999px;
          white-space: nowrap;
          transition: transform 160ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .exp-tag:hover {
          transform: scale(1.05) translateZ(0);
        }

        .exp-bullet {
          font-size: 16px;
          line-height: 1.5;
          color: #d1d1d6;
          padding-left: 18px;
          position: relative;
          transition: color 160ms ease;
        }

        .exp-bullet:hover {
          color: #f5f5f7;
        }

        .exp-bullet::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #636366;
          transition: background 160ms ease;
        }

        .exp-bullet:hover::before {
          background: #a1a1aa;
        }
      `}</style>

      <h2
        className="exp-header"
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          letterSpacing: "-0.03em",
          color: "#f5f5f7",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Work Experience
      </h2>
      <p
        className="exp-subheading"
        style={{
          fontSize: "clamp(18px, 4vw, 21px)",
          color: "#86868b",
          maxWidth: "600px",
          margin: "0 auto 60px",
          lineHeight: "1.4",
          textAlign: "center",
        }}
      >
        Building reliability and scale at every level.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {experience.map((role, i) => (
          <div
            key={i}
            className="exp-role"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingBottom: "40px",
              borderBottom:
                i !== experience.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
            }}
          >
            {/* Header Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {/* Left: Company & Title */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "280px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#f5f5f7",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {role.company}
                  </h3>
                  {role.tag && (
                    <span className="exp-tag">{role.tag}</span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#a1a1aa",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {role.title}
                </p>
              </div>

              {/* Right: Date & Type */}
              <div
                style={{
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "#f5f5f7",
                    margin: 0,
                    fontWeight: 500,
                    fontVariantNumeric: "tabular-nums",
                    whiteSpace: "nowrap",
                  }}
                >
                  {role.period}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: role.highlightType ? "#60a5fa" : "#86868b",
                    margin: "4px 0 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {role.type}
                </p>
              </div>
            </div>

            {/* Bullets */}
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {role.bullets.map((b, idx) => (
                <li key={idx} className="exp-bullet">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
