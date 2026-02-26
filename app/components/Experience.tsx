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
      "Integrated Jenkins pipelines to automate CI/CD workflows, streamlining execution within the SDLC."
    ]
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
      "Built React components and custom hooks for data‑driven views, improving state management across the web client."
    ]
  },
  {
    company: "Wow Kebabish",
    title: "Web Developer",
    period: "Nov 2023 – Sep 2024",
    type: "Contract",
    bullets: [
      "Developed and maintained full‑stack features with Next.js and React, focusing on responsive layouts.",
      "Integrated REST APIs to support dynamic menus and content updates across devices.",
      "Collaborated directly with stakeholders to iterate on UI changes and tighten the feedback loop."
    ]
  }
];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px 24px", // Reduced top padding for mobile
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)", // Responsive font size
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#f5f5f7",
          marginBottom: "16px",
          textAlign: "center"
        }}
      >
        Work Experience
      </h2>
      <p
        style={{
          fontSize: "clamp(18px, 4vw, 21px)", // Responsive body
          color: "#86868b",
          maxWidth: "600px",
          margin: "0 auto 60px",
          lineHeight: "1.4",
          textAlign: "center"
        }}
      >
        Building reliability and scale at every level.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px" // Slightly tighter gap
        }}
      >
        {experience.map((role, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingBottom: "40px",
              borderBottom: i !== experience.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none"
            }}
          >
            {/* Header Row - Wraps on Mobile */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              {/* Left Side: Company & Title */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "280px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#f5f5f7",
                      margin: 0,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {role.company}
                  </h3>
                  {role.tag && (
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#000",
                        background: "#fff",
                        padding: "4px 8px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {role.tag}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#a1a1aa",
                    margin: 0,
                    fontWeight: 500
                  }}
                >
                  {role.title}
                </p>
              </div>

              {/* Right Side: Date & Type (Stacks on mobile if needed) */}
              <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#f5f5f7",
                    margin: 0,
                    fontWeight: 500,
                    fontVariantNumeric: "tabular-nums",
                    whiteSpace: "nowrap"
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
                    whiteSpace: "nowrap"
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
                gap: "12px"
              }}
            >
              {role.bullets.map((b, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#d1d1d6",
                    paddingLeft: "18px",
                    position: "relative"
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "10px",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#636366"
                    }}
                  />
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
