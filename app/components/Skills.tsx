"use client";

import React from "react";

const skills = {
  languages: ["C", "C++", "Python", "Swift", "JavaScript", "TypeScript"],
  frameworks: [
    "React",
    "Next.js",
    "Express.js",
    "Flask",
    "TensorFlow",
    "scikit-learn",
    "pandas",
    "OpenCV",
  ],
};

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 24px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "#f5f5f7",
            marginBottom: "16px",
          }}
        >
          Skills
        </h2>
        <p
          style={{
            fontSize: "clamp(18px, 4vw, 21px)",
            color: "#86868b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.4",
          }}
        >
          Focused on modern C++/Python systems, ML tooling, and production web apps.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <SkillRow label="Languages" items={skills.languages} />
        <SkillRow label="Frameworks & libraries" items={skills.frameworks} />
      </div>
    </section>
  );
}

type SkillRowProps = {
  label: string;
  items: string[];
};

function SkillRow({ label, items }: SkillRowProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingBottom: "40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
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
        {label}
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {items.map((item) => (
          <span
            key={item}
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#d1d1d6",
              padding: "7px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.03)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
