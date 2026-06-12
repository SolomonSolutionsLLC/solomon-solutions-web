"use client";

import { useEffect, useRef, useState } from "react";

export interface OrbitNode {
  name: string;
  short: string;
  href: string;
  color: string;
}

/**
 * Interactive ecosystem map: four platform nodes orbit the SS monogram hub.
 * Orbit drifts slowly; hovering a node (or its matching list row) pauses the
 * drift and highlights the connection. Static layout under reduced motion.
 */
export default function EcosystemOrbit({
  nodes,
  activeIndex,
  onActiveChange,
}: {
  nodes: OrbitNode[];
  activeIndex: number | null;
  onActiveChange: (i: number | null) => void;
}) {
  const [angle, setAngle] = useState(0);
  const paused = useRef(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced.current) return;

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused.current) {
        setAngle((a) => (a + dt * 0.0045) % 360);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    paused.current = activeIndex !== null;
  }, [activeIndex]);

  const C = 230;
  const R = 158;

  return (
    <svg
      viewBox="0 0 460 460"
      role="img"
      aria-label="Map of the Solomon Solutions platform ecosystem: Simply Pray, HopeStack, HeartwardChat, and The Wisdom Walk orbiting the Solomon Solutions monogram"
      className="w-full max-w-[460px] mx-auto"
    >
      <circle
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke="#c9a84c"
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeDasharray="3 6"
      />
      <circle cx={C} cy={C} r={104} fill="none" stroke="#1a1a2e" strokeOpacity="0.08" strokeWidth="1" />

      {nodes.map((node, i) => {
        const a = ((angle + (360 / nodes.length) * i) * Math.PI) / 180;
        const x = C + R * Math.cos(a);
        const y = C + R * Math.sin(a);
        const active = activeIndex === i;
        return (
          <g key={node.name}>
            <line
              x1={C}
              y1={C}
              x2={x}
              y2={y}
              stroke={active ? "#b08d3a" : "#1a1a2e"}
              strokeOpacity={active ? 0.5 : 0.07}
              strokeWidth="1"
            />
            <a
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${node.name}: ${node.short}`}
              onPointerEnter={() => onActiveChange(i)}
              onPointerLeave={() => onActiveChange(null)}
              onFocus={() => onActiveChange(i)}
              onBlur={() => onActiveChange(null)}
            >
              <circle
                cx={x}
                cy={y}
                r={active ? 36 : 30}
                fill="#fdfcfa"
                stroke={active ? node.color : "#1a1a2e"}
                strokeOpacity={active ? 1 : 0.18}
                strokeWidth={active ? 2 : 1}
                style={{ transition: "r 250ms ease-out" }}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="11"
                fontWeight={active ? 700 : 500}
                fill={active ? node.color : "#3a3a4e"}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {node.short}
              </text>
            </a>
          </g>
        );
      })}

      <circle cx={C} cy={C} r={56} fill="#faf7f0" stroke="#c9a84c" strokeOpacity="0.45" strokeWidth="1.5" />
      <image
        href="/logo-mark.png"
        x={C - 30}
        y={C - 30}
        width="60"
        height="60"
      />
    </svg>
  );
}
