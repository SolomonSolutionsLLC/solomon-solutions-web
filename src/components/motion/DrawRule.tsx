"use client";

import { motion } from "motion/react";
import { drawX } from "@/lib/motion";

/**
 * A rule that draws itself in from the left when scrolled into view.
 * Used for the gold seams and headline underscores.
 */
export default function DrawRule({
  className = "",
  origin = "left",
}: {
  className?: string;
  origin?: "left" | "center";
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block ${className}`}
      style={{ originX: origin === "left" ? 0 : 0.5 }}
      variants={drawX}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }}
    />
  );
}
