"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy to-charcoal-light" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.04] rounded-full blur-[120px]" />

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy-light/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Tagline */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Wisdom-Driven Technology
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-bold leading-[1.1] tracking-tight mb-8 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tools & Strategy
          <br />
          <span className="text-gold">for the Kingdom</span>
        </h1>

        {/* Subtext */}
        <p
          className={`max-w-2xl mx-auto text-cream/50 text-lg md:text-xl leading-relaxed mb-12 transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We build practical tools and strategic systems that empower churches
          and leaders to magnify their ministries and advance God&apos;s kingdom.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[800ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#what-we-do"
            className="px-8 py-3.5 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Explore Our Work
          </a>
          <a
            href="#platforms"
            className="px-8 py-3.5 border border-cream/15 text-cream/70 font-medium rounded-lg hover:border-gold/40 hover:text-gold transition-all duration-300"
          >
            View Our Tools
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#why" className="text-cream/20 hover:text-gold/50 transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>

      {/* Bottom edge gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
