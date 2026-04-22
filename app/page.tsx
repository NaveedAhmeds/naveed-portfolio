"use client";

import { useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { SectionReveal } from "./components/SectionReveal";
import styles from "./page.module.css";

/* ─── Types & pure helpers ────────────────────────────────────────────────── */

interface Star {
  x: number;
  y: number;
  baseR: number;
  phase: number;
  speed: number;
  minA: number;
  maxA: number;
  color: string;
  bright: boolean;
  burstPhase: number;
  burstSpeed: number;
}

const PALETTE = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#cce4ff", "#ddf0ff", "#ffe8cc"];

function pickColor(): string {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

function buildStars(w: number, h: number): Star[] {
  const out: Star[] = [];
  const count = Math.floor((w * h) / 1400);
  for (let i = 0; i < count; i++) {
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      baseR: 0.3 + Math.random() * 1.0,
      phase: Math.random() * Math.PI * 2,
      speed: 1.2 + Math.random() * 3.5,
      minA: 0.02 + Math.random() * 0.06,
      maxA: 0.7 + Math.random() * 0.3,
      color: pickColor(),
      bright: false,
      burstPhase: Math.random() * Math.PI * 2,
      burstSpeed: 0.4 + Math.random() * 1.2,
    });
  }
  for (let i = 0; i < 22; i++) {
    out.push({
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
  return out;
}

function renderFrame(ctx: CanvasRenderingContext2D, stars: Star[], t: number): void {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (const s of stars) {
    const wave1 = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
    const wave2 = 0.5 + 0.5 * Math.sin(t * s.burstSpeed + s.burstPhase);
    const combined = wave1 * wave2;
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
}

/* ─── Component ───────────────────────────────────────────────────────────── */

function StarlightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Non-null assertion — we've already guarded above, and 2d is always available
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let stars: Star[] = [];
    let rafId = 0;
    let t = 0;

    function resize(): void {
      const el = canvasRef.current;
      if (!el) return;
      const dpr = window.devicePixelRatio || 1;
      el.width = window.innerWidth * dpr;
      el.height = window.innerHeight * dpr;
      el.style.width = `${window.innerWidth}px`;
      el.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = buildStars(window.innerWidth, window.innerHeight);
    }

    function loop(): void {
      t += 0.018;
      renderFrame(ctx, stars, t);
      rafId = requestAnimationFrame(loop);
    }

    resize();
    rafId = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.starlightCanvas} />;
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

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