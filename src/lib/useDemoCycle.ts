"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Drives an auto-advancing product demo responsibly:
 * - advances only while on screen and the tab is visible
 * - pauses on hover / focus-within (WCAG 2.2.2 pause mechanism)
 * - stops after `maxCycles` full loops (restarts if scrolled away and back)
 * - stays on the first frame under prefers-reduced-motion
 */
export function useDemoCycle(
  ref: RefObject<HTMLElement | null>,
  length: number,
  intervalMs: number,
  maxCycles = 2
) {
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const pausedRef = useRef(false);

  // Pause while the pointer or keyboard focus is inside the demo.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resume);
    return () => {
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resume);
    };
  }, [ref]);

  useEffect(() => {
    if (!inView || reduced) return;
    let advances = 0;
    const id = setInterval(() => {
      if (document.hidden || pausedRef.current) return;
      if (advances >= length * maxCycles) {
        clearInterval(id);
        return;
      }
      advances += 1;
      setStep((s) => (s + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [inView, reduced, length, intervalMs, maxCycles]);

  return step;
}
