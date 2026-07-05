/**
 * Shared motion vocabulary for the site.
 * One easing family + one spring family so every animation feels related.
 */
import type { Transition, Variants } from "motion/react";

/** Exponential ease-out: fast arrival, long settle. The house curve. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Gentle spring for physical elements (cards, mockups, chips). */
export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 1,
};

/** Container that staggers its children's variants. */
export const staggerChildren = (stagger = 0.09, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Word/line entrance used by kinetic headings: rises out of an overflow mask. */
export const maskRise: Variants = {
  hidden: { y: "112%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

/** Horizontal rule that draws itself in. */
export const drawX: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE_OUT },
  },
};

/** In-view options shared across scroll reveals. */
export const VIEWPORT_ONCE = { once: true, amount: 0.15 } as const;
