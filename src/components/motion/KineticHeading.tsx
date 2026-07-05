"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { maskRise, staggerChildren } from "@/lib/motion";

export interface KineticLine {
  /** Plain text only (no HTML entities); rendered as text nodes. */
  text: string;
  className?: string;
}

/**
 * Word-level mask reveal for display headings: each word rises out of an
 * overflow-hidden slot, staggered left to right, line by line. Under reduced
 * motion the site-wide MotionConfig makes words appear in place.
 */
export default function KineticHeading({
  lines,
  as: Tag = "h1",
  className = "",
  delay = 0,
  once = true,
}: {
  lines: KineticLine[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      variants={staggerChildren(0.075, delay / 1000)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
    >
      {lines.map((line, lineIndex) => {
        const words = line.text.split(/\s+/).filter(Boolean);
        return (
          <span key={lineIndex} className={`block ${line.className ?? ""}`}>
            {words.map((word, wordIndex) => (
              <Fragment key={wordIndex}>
                <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-top">
                  <motion.span variants={maskRise} className="inline-block">
                    {word}
                  </motion.span>
                </span>
                {wordIndex < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
}
