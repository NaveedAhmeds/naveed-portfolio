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
        padding: "48px 16px 72px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollUp {
          0%   { transform: translateY(100%); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(-200%); opacity: 0; }
        }

        .hero-name {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.05s;
        }

        .hero-title {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.15s;
        }

        .hero-location {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.25s;
        }

        .hero-about-label {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.35s;
        }

        .hero-summary {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.45s;
        }

        .hero-cta {
          animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.55s;
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 28px;
          height: 46px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffffff, #e5e5f0);
          color: #000000;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 16px 40px rgba(0,0,0,0.75);
          transition:
            transform 160ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 160ms ease-out;
          cursor: pointer;
          will-change: transform;
        }

        .resume-btn:hover {
          transform: scale(1.03) translateZ(0);
          box-shadow: 0 22px 54px rgba(0,0,0,0.9);
        }

        .resume-btn:active {
          transform: scale(0.98) translateZ(0);
          box-shadow: 0 10px 28px rgba(0,0,0,0.6);
        }

        .scroll-line-track {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }

        .scroll-line-fill {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(to bottom, rgba(255,255,255,0), #fff);
          animation: scrollUp 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform;
        }
      `}</style>

      {/* Name */}
      <h1
        className="hero-name"
        style={{
          fontSize: "clamp(32px, 8vw, 64px)",
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
        className="hero-title"
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
        className="hero-location"
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
            priority
            style={{
              display: "block",
              objectFit: "cover",
              width: "40px",
              height: "auto",
            }}
          />
        </div>
        <span style={{ fontSize: "12px", color: "#7c7c80" }}>
          Toronto, ON
        </span>
      </div>

      {/* About label */}
      <p
        className="hero-about-label"
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
        className="hero-summary"
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
      <div className="hero-cta">
        <a
          href="/Naveed_Ahmed_Syed_Resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>

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
        <div className="scroll-line-track">
          <div className="scroll-line-fill" />
        </div>
      </div>
    </section>
  );
}