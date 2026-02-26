"use client";

import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        position: "relative",
        padding: "48px 16px 72px", // a bit tighter and smaller side padding for phones
        overflow: "hidden",
      }}
    >
      {/* Name */}
      <h1
        style={{
          fontSize: "clamp(32px, 8vw, 64px)", // smaller minimum for phones
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#f5f5f7",
          lineHeight: "1.1",
          marginBottom: "10px",
          maxWidth: "800px",
        }}
      >
        Naveed Ahmed Syed
      </h1>

      {/* Title */}
      <p
        style={{
          fontSize: "clamp(16px, 4vw, 22px)",
          fontWeight: 500,
          color: "#86868b",
          margin: "0 0 20px",
          letterSpacing: "-0.01em",
        }}
      >
        Software Engineer
      </p>

      {/* Flag + location */}
      <div
        style={{
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            borderRadius: "6px",
            overflow: "hidden",
            display: "inline-block",
          }}
        >
          <Image
            src="/projects/canada.png"
            alt="Canada"
            width={40}
            height={20}
            style={{
              display: "block",
              objectFit: "cover",
              width: "40px", // slightly smaller so it doesn’t dominate on phones
              height: "auto",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "#7c7c80",
          }}
        >
          Toronto, ON
        </span>
      </div>

      {/* About label */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#6e6e73",
          marginBottom: "14px",
        }}
      >
        About Me
      </p>

      {/* Summary */}
      <p
        style={{
          maxWidth: "520px",
          fontSize: "clamp(14px, 3.5vw, 18px)",
          lineHeight: "1.6",
          color: "#a1a1aa",
          margin: "0 auto 32px",
        }}
      >
        I work in{" "}
        <span style={{ color: "#f5f5f7", fontWeight: 600 }}>C++</span>,{" "}
        <span style={{ color: "#f5f5f7", fontWeight: 600 }}>Python</span>,{" "}
        <span style={{ color: "#f5f5f7", fontWeight: 600 }}>Swift</span>, and{" "}
        <span style={{ color: "#f5f5f7", fontWeight: 600 }}>JavaScript</span>{" "}
        across systems programming, full‑stack web development, applied machine
        learning, and test automation.
      </p>

      {/* Resume CTA */}
      <a
        href="/Resume.pdf"
        download
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 28px",
          height: "46px", // slightly shorter for phones but still a good target
          borderRadius: "999px",
          background: "linear-gradient(135deg, #ffffff, #e5e5f0)",
          color: "#000000",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 16px 40px rgba(0,0,0,0.75)",
          transition:
            "transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.2s ease-out",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "0 22px 54px rgba(0,0,0,0.9)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.75)";
        }}
      >
        Download Resume
      </a>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#86868b",
            fontWeight: 600,
          }}
        >
          Scroll
        </span>

        <div
          style={{
            width: "1px",
            height: "32px",
            background: "rgba(255,255,255,0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-100%",
              left: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(to top, rgba(255,255,255,0), #fff)",
              animation:
                "scrollUp 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          0% {
            bottom: -50%;
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            bottom: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
