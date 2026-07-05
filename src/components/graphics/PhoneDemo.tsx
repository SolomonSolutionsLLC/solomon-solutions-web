"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { useDemoCycle } from "@/lib/useDemoCycle";

const GREEN = "#2F5C51";
const GREEN_SOFT = "#3d7263";
const CYCLE_MS = 3400;

const steps = [
  {
    key: "A",
    name: "Adoration",
    prompt: "Praise God for who He is",
    verse: "Great is the LORD, and greatly to be praised.",
    ref: "Psalm 145:3",
  },
  {
    key: "C",
    name: "Confession",
    prompt: "Confess it plainly",
    verse:
      "If we confess our sins, he is faithful and just to forgive us our sins.",
    ref: "1 John 1:9",
  },
  {
    key: "T",
    name: "Thanksgiving",
    prompt: "Name His gifts",
    verse: "Give thanks to the LORD, for he is good.",
    ref: "Psalm 107:1",
  },
  {
    key: "S",
    name: "Supplication",
    prompt: "Ask boldly",
    verse: "Let your requests be made known to God.",
    ref: "Philippians 4:6",
  },
];

/**
 * Simply Pray demo: an iPhone that quietly walks the ACTS prayer flow.
 * Cycle lifecycle (in-view, tab-visible, hover-pause, 2 loops) is handled by
 * useDemoCycle. Decorative for assistive tech; the real copy sits beside it.
 */
export default function PhoneDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const step = useDemoCycle(ref, steps.length, CYCLE_MS);
  const s = steps[step];

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Animated preview of the Simply Pray guided prayer flow: Adoration, Confession, Thanksgiving, Supplication"
      className="relative mx-auto w-[248px] select-none"
    >
      <div aria-hidden="true">
      {/* Halo */}
      <div
        className="absolute -inset-8 rounded-full opacity-60 blur-2xl"
        style={{ background: `radial-gradient(closest-side, ${GREEN}22, transparent)` }}
      />

      {/* Device frame */}
      <div className="relative rounded-[2.6rem] border border-charcoal/15 bg-charcoal p-[7px] shadow-2xl shadow-charcoal/25">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#f7f5ee]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-charcoal" />

          {/* Status bar */}
          <div className="absolute inset-x-0 top-3 z-10 flex items-center justify-between px-6 text-[9px] font-semibold text-charcoal/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-[7px] w-[11px] rounded-[1px] border border-charcoal/50">
                <span className="block h-full w-3/4 bg-charcoal/60" />
              </span>
            </span>
          </div>

          <div className="relative flex h-[470px] flex-col px-5 pb-5 pt-12">
            {/* App header */}
            <div className="mb-4 flex items-center justify-between">
              <span
                className="font-[family-name:var(--font-display)] text-[15px] font-bold"
                style={{ color: GREEN }}
              >
                Simply Pray
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/40">
                ACTS
              </span>
            </div>

            {/* Step pips */}
            <div className="mb-5 flex gap-1.5">
              {steps.map((p, i) => (
                <div
                  key={p.key}
                  className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-charcoal/10"
                >
                  <motion.div
                    key={`${p.key}-${i === step ? `on-${step}` : i < step ? "done" : "todo"}`}
                    className="absolute inset-y-0 left-0 w-full rounded-full"
                    style={{ backgroundColor: GREEN, originX: 0 }}
                    initial={{ scaleX: i < step ? 1 : 0 }}
                    animate={{ scaleX: i <= step ? 1 : 0 }}
                    transition={
                      i === step
                        ? { duration: CYCLE_MS / 1000 - 0.2, ease: "linear" }
                        : { duration: 0.3 }
                    }
                  />
                </div>
              ))}
            </div>

            {/* Screen content */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={s.key}
                className="flex flex-1 flex-col"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-lg font-bold text-[#f7f5ee]"
                  style={{ backgroundColor: GREEN }}
                >
                  {s.key}
                </div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: GREEN_SOFT }}
                >
                  {s.name}
                </p>
                <h4 className="mt-1.5 font-[family-name:var(--font-display)] text-[21px] font-bold leading-snug text-charcoal">
                  {s.prompt}
                </h4>

                <div className="mt-4 rounded-xl border border-charcoal/8 bg-white/70 p-4">
                  <p className="font-[family-name:var(--font-display)] text-[13.5px] italic leading-relaxed text-slate-text">
                    &ldquo;{s.verse}&rdquo;
                  </p>
                  <p
                    className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: GREEN_SOFT }}
                  >
                    {s.ref}
                  </p>
                </div>

                <div className="mt-auto">
                  <div
                    className="flex h-11 items-center justify-center rounded-xl text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f7f5ee]"
                    style={{ backgroundColor: GREEN }}
                  >
                    {step === steps.length - 1 ? "Amen" : "Continue"}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
