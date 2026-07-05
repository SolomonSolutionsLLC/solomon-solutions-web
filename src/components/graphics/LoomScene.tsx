"use client";

import { useEffect, useRef } from "react";

/**
 * The Loom: a living canvas scene for the hero.
 *
 * Golden threads drift and weave across a deep navy ground while dust motes
 * rise through a shaft of light, like late-afternoon sun through a sanctuary
 * window. Pointer movement leans the whole weave a few degrees.
 *
 * - Runs only while on screen and while the tab is visible.
 * - Renders a single static frame under prefers-reduced-motion.
 * - DPR capped at 2; ~70 cheap strokes per frame, gradient cached.
 */
export default function LoomScene({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let t = reduced ? 40 : 0; // reduced-motion renders one woven frame
    let last = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let leanX = 0.5;
    let leanY = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      shaftCache = null;
      if (reduced) draw();
    };

    // Deterministic pseudo-random per thread index, so resize is stable.
    const rnd = (i: number, salt: number) => {
      const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    const THREADS = 26;
    const MOTES = 42;

    // Shaft gradient is cached and rebuilt only when the lean moves it.
    let shaftCache: { g: CanvasGradient; cx: number; cy: number } | null = null;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const cx = w * (0.5 + (leanX - 0.5) * 0.06);
      const cy = h * (0.34 + (leanY - 0.5) * 0.05);

      // Shaft of light from above
      if (
        !shaftCache ||
        Math.abs(shaftCache.cx - cx) > 0.5 ||
        Math.abs(shaftCache.cy - cy) > 0.5
      ) {
        const g = ctx.createRadialGradient(cx, -h * 0.15, 0, cx, cy, h * 0.95);
        g.addColorStop(0, "rgba(223,192,106,0.10)");
        g.addColorStop(0.45, "rgba(201,168,76,0.045)");
        g.addColorStop(1, "rgba(201,168,76,0)");
        shaftCache = { g, cx, cy };
      }
      ctx.fillStyle = shaftCache.g;
      ctx.fillRect(0, 0, w, h);

      // Threads: long bezier strands drifting horizontally
      for (let i = 0; i < THREADS; i++) {
        const seed = rnd(i, 1);
        const speed = 0.05 + seed * 0.08;
        const phase = t * speed + seed * Math.PI * 2;
        const yBase = h * (0.12 + 0.76 * rnd(i, 2));
        const amp = h * (0.03 + 0.09 * rnd(i, 3));
        const drift = Math.sin(phase) * amp;
        const drift2 = Math.cos(phase * 0.7 + 1.3) * amp * 0.8;

        const nearLight =
          1 - Math.min(1, Math.abs(yBase + drift - cy) / (h * 0.6));
        const alpha = 0.05 + nearLight * 0.16 + rnd(i, 4) * 0.03;

        ctx.beginPath();
        ctx.moveTo(-40, yBase + drift);
        ctx.bezierCurveTo(
          w * 0.3,
          yBase + drift2 - amp * 0.6,
          w * 0.66,
          yBase + drift * 0.5 + amp * 0.5,
          w + 40,
          yBase + drift2
        );
        ctx.strokeStyle = `rgba(201,168,76,${alpha.toFixed(3)})`;
        ctx.lineWidth = 0.6 + rnd(i, 5) * 0.9;
        ctx.stroke();
      }

      // Dust motes rising through the light
      for (let i = 0; i < MOTES; i++) {
        const seed = rnd(i, 7);
        const speed = 0.008 + seed * 0.02;
        const x =
          w * rnd(i, 8) +
          Math.sin(t * (0.2 + seed * 0.3) + i) * (14 + seed * 18);
        const y = h - ((t * speed * h * 0.08 + rnd(i, 9) * h) % (h * 1.1)) + h * 0.05;
        const nearLight = 1 - Math.min(1, Math.hypot(x - cx, y - cy) / (h * 0.75));
        const a = Math.max(0, 0.04 + nearLight * 0.22) * (0.5 + seed * 0.5);
        const r = 0.7 + seed * 1.6;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223,192,106,${a.toFixed(3)})`;
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(now - last, 100); // clamp stalls
      last = now;
      t += dt / 1000;
      // ease pointer lean toward target
      leanX += (pointerX - leanX) * 0.04;
      leanY += (pointerY - leanY) * 0.04;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointer = (e: PointerEvent) => {
      pointerX = e.clientX / window.innerWidth;
      pointerY = e.clientY / window.innerHeight;
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else if (inView) start();
    };

    let inView = false;
    const io = new IntersectionObserver(
      (entries) => {
        // Entries batch oldest-first; only the newest record matters.
        inView = entries[entries.length - 1].isIntersecting;
        if (inView && !document.hidden) start();
        else stop();
      },
      { threshold: 0.05 }
    );

    resize();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduced) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
