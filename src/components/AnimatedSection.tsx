"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds, kept for API compatibility with the original component. */
  delay?: number;
}

/**
 * In-view rise/fade reveal driven by motion. Reduced-motion handling comes
 * from the site-wide MotionConfig (transforms jump, opacity still eases), so
 * this keeps a single render path and hydrates cleanly.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.85, ease: EASE_OUT, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
