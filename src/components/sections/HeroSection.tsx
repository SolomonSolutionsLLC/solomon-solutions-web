"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MonogramCrest from "@/components/graphics/MonogramCrest";
import LoomScene from "@/components/graphics/LoomScene";
import GrainOverlay from "@/components/graphics/GrainOverlay";
import KineticHeading from "@/components/motion/KineticHeading";
import { EASE_OUT, SPRING_SOFT } from "@/lib/motion";

export default function HeroSection() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Gentle parallax: background layers linger as the content scrolls away.
  // (Style-driven, so it is gated on reduced-motion manually.)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE_OUT, delay },
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
    >
      {/* Layer 1: cathedral light */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          y: reduced ? undefined : bgY,
          background:
            "radial-gradient(1100px 750px at 50% -8%, #1f2f52, #16213e 72%)",
        }}
      />
      {/* Layer 2: drafting grid, fading at the edges */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.09]"
        style={{
          y: reduced ? undefined : bgY,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.55) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at 50% 32%, black 38%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 32%, black 38%, transparent 78%)",
        }}
      />
      {/* Layer 3: the living loom */}
      <LoomScene />
      <GrainOverlay tone="dark" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24 text-center"
        style={
          reduced ? undefined : { y: contentY, opacity: contentOpacity }
        }
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...SPRING_SOFT, delay: 0.1 }}
        >
          <span className="inline-block rounded-full bg-cream p-5 ring-1 ring-gold/40 shadow-2xl shadow-navy-deep/60">
            <MonogramCrest size={116} />
          </span>
        </motion.div>

        <motion.p
          className="mt-8 mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light"
          {...enter(0.3)}
        >
          Technology &middot; Systems &middot; Counsel
        </motion.p>

        <KineticHeading
          as="h1"
          delay={450}
          className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-[4.4rem]"
          lines={[
            { text: "Built by a pastor." },
            {
              text: "Engineered for the church.",
              className: "italic text-gold",
            },
          ]}
        />

        <motion.p
          className="mx-auto mt-8 mb-12 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl"
          {...enter(0.8)}
        >
          Solomon Solutions builds the software, systems, and strategy ministry
          leaders actually need: prayer and care tools, church operations,
          and private AI. Grounded in Scripture, built to last.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          {...enter(1.0)}
        >
          <a
            href="https://calendly.com/grace-chapel/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold-light hover:shadow-gold/35 active:scale-[0.98]"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#platforms"
            className="group inline-flex items-center gap-2 px-4 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:text-gold-light"
          >
            Explore Our Tools
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 flex max-w-md items-center gap-4 text-cream/60"
          {...enter(1.3)}
        >
          <span className="h-px flex-1 bg-gold/25" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
            Wisdom &middot; Strategy &middot; Stewardship
          </span>
          <span className="h-px flex-1 bg-gold/25" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <a
          href="#why"
          aria-label="Scroll to mission section"
          className="text-cream/30 transition-colors hover:text-gold-light"
        >
          <ChevronDown size={26} />
        </a>
      </motion.div>
    </section>
  );
}
