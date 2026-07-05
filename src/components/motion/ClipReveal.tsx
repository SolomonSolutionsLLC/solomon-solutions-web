"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Reveals its child by unclipping from the chosen edge, like a wash of paint
 * drawn across the surface. Reduced motion (via site-wide MotionConfig)
 * snaps the clip open.
 */
export default function ClipReveal({
  children,
  className = "",
  from = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  from?: "left" | "bottom";
  delay?: number;
}) {
  const hidden =
    from === "left" ? "inset(0 100% 0 0)" : "inset(100% 0 0 0)";

  return (
    <motion.div
      className={className}
      initial={{ clipPath: hidden }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, ease: EASE_OUT, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
