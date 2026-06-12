"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import MonogramCrest from "@/components/graphics/MonogramCrest";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-1000 ${delay} ${
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream">
      {/* Faint gold grid, paper texture feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(176,141,58,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,58,0.5) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24 text-center">
        <div className={reveal("delay-100")}>
          <MonogramCrest size={132} />
        </div>

        <p
          className={`mt-8 mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark ${reveal(
            "delay-200"
          )}`}
        >
          Technology &middot; Systems &middot; Counsel
        </p>

        <h1
          className={`font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-[4.4rem] ${reveal(
            "delay-300"
          )}`}
        >
          Built by a pastor.
          <br />
          <span className="italic text-gold-dark">Engineered for the church.</span>
        </h1>

        <p
          className={`mx-auto mt-8 mb-12 max-w-2xl text-lg leading-relaxed text-warm-gray md:text-xl ${reveal(
            "delay-500"
          )}`}
        >
          Solomon Solutions builds the software, systems, and strategy ministry
          leaders actually need: prayer and care tools, church operations,
          and private AI. Grounded in Scripture, built to last.
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${reveal(
            "delay-700"
          )}`}
        >
          <a
            href="https://calendly.com/grace-chapel/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-gold-dark"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#platforms"
            className="group inline-flex items-center gap-2 px-4 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/70 transition-colors duration-300 hover:text-gold-dark"
          >
            Explore Our Tools
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          className={`mx-auto mt-16 flex max-w-md items-center gap-4 text-charcoal/30 ${reveal(
            "delay-1000"
          )}`}
        >
          <span className="h-px flex-1 bg-charcoal/15" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
            Wisdom &middot; Strategy &middot; Stewardship
          </span>
          <span className="h-px flex-1 bg-charcoal/15" />
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#why"
          aria-label="Scroll to mission section"
          className="text-charcoal/30 transition-colors hover:text-gold-dark"
        >
          <ChevronDown size={26} />
        </a>
      </div>
    </section>
  );
}
