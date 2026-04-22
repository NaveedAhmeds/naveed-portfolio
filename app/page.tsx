"use client";

import { useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { SectionReveal } from "./components/SectionReveal";
import styles from "./page.module.css";

function StarlightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    interface Star {
      x: number;
      y: number;
      baseR: number;
      phase: number;
      speed: number;
      minA: number;
      maxA: number;
      color: string;
      bright?: boolean;
      // for burst twinkling
      burstPhase: number;
      burstSpeed: number;
    }

    let stars: Star[] = [];
    let rafId: number;
    let t = 0;

    const palette = [
      "#ffffff", "#ffffff", "#ffffff", "#ffffff",
      "#cce4ff", "#ddf0ff", "#ffe8cc",
    ];

    function pickColor() {
      return palette[Math.floor(Math.random() * palette.length)];
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      initStars();
    }

    function initStars() {
      stars = [];
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.floor((w * h) / 1400);

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          baseR: 0.3 + Math.random() * 1.0,
          phase: Math.random() * Math.PI * 2,
          speed: 1.2 + Math.random() * 3.5,       // fast primary flicker
          minA: 0.02 + Math.random() * 0.06,       // nearly invisible at trough
          maxA: 0.7 + Math.random() * 0.3,         // bright at peak
          color: pickColor(),
          burstPhase: Math.random() * Math.PI * 2,
          burstSpeed: 0.4 + Math.random() * 1.2,   // slower secondary wave
        });
      }

      // Bright feature stars — more dramatic swing
      for (let i = 0; i < 22; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          baseR: 1.1 + Math.random() * 0.8,
          phase: Math.random() * Math.PI * 2,
          speed: 0.8 + Math.random() * 2.2,
          minA: 0.05,
          maxA: 1.0,
          color: "#ffffff",
          bright: true,
          burstPhase: Math.random() * Math.PI * 2,
          burstSpeed: 0.3 + Math.random() * 0.8,
        });
      }
    }

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.018; // faster tick

      for (const s of stars) {
        // Two sine waves multiplied together = erratic, punchy flicker
        const wave1 = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        const wave2 = 0.5 + 0.5 * Math.sin(t * s.burstSpeed + s.burstPhase);
        const combined = wave1 * wave2; // drops near 0 often, spikes to 1
        const alpha = s.minA + (s.maxA - s.minA) * combined;

        ctx.save();
        ctx.globalAlpha = alpha;

        if (s.bright) {
          const glowR = s.baseR * 7 * (0.6 + 0.4 * combined);
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
          glow.addColorStop(0, "rgba(255,255,255,0.7)");
          glow.addColorStop(0.35, "rgba(255,255,255,0.15)");
          glow.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.baseR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.starlightCanvas} />;
}

export default function Page() {
  return (
    <div className={styles.page}>
      <StarlightCanvas />

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