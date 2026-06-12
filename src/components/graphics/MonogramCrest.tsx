"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Interactive brand crest: the SS monogram tilts gently toward the cursor
 * and a gold sheen sweeps across on pointer movement. Static when the user
 * prefers reduced motion or on touch devices without a fine pointer.
 */
export default function MonogramCrest({ size = 150 }: { size?: number }) {
  const frame = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setInteractive(true);

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const el = frame.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width * 2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height * 2)));
        el.style.transform = `perspective(700px) rotateY(${dx * 7}deg) rotateX(${dy * -7}deg)`;
        const sheen = el.querySelector<HTMLElement>("[data-sheen]");
        if (sheen) {
          sheen.style.opacity = "1";
          sheen.style.backgroundPosition = `${50 + dx * 60}% ${50 + dy * 60}%`;
        }
      });
    };
    const onLeave = () => {
      const el = frame.current;
      if (!el) return;
      el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)";
      const sheen = el.querySelector<HTMLElement>("[data-sheen]");
      if (sheen) sheen.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={frame}
      className="relative inline-block transition-transform duration-300 ease-out will-change-transform"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-mark.png"
        alt="Solomon Solutions interlocked SS monogram"
        width={size}
        height={size}
        priority
        className="select-none"
      />
      {interactive && (
        <div
          data-sheen
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(120px circle at 50% 50%, rgba(201,168,76,0.28), transparent 65%)",
            backgroundSize: "200% 200%",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
}
