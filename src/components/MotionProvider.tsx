"use client";

import { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/**
 * Site-wide motion policy: honor the user's reduced-motion preference at the
 * library level (transforms jump to their final state, opacity still eases),
 * so components keep a single render path and hydration stays clean.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
