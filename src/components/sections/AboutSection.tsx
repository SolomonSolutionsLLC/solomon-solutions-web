import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Philosophy */}
          <AnimatedSection>
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-charcoal font-bold mt-4 mb-6 leading-tight">
                Built on Conviction,
                <br />
                Driven by Purpose
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed text-[15px]">
                <p>
                  Solomon Solutions was born from a simple belief: the Church
                  deserves excellent tools and thoughtful systems. Too often,
                  ministry leaders navigate outdated technology and fragmented
                  processes that drain energy instead of multiplying impact.
                </p>
                <p>
                  We approach every project with the same question King Solomon
                  asked — not for wealth or power, but for discernment.
                  That pursuit shapes everything we build, from the simplest
                  prayer app to the most complex church management system.
                </p>
                <p>
                  Our work sits at the intersection of biblical conviction,
                  strategic thinking, and modern technology. When these three
                  converge, leaders are empowered to build something that lasts.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Quote card */}
          <AnimatedSection delay={200}>
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl border border-gold/10" />
              <div className="absolute -inset-6 rounded-3xl border border-gold/5" />

              <div className="relative rounded-2xl bg-gradient-to-br from-charcoal to-navy p-8 lg:p-10">
                <Quote
                  size={40}
                  className="text-gold/20 mb-4"
                />
                <blockquote className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-cream/90 leading-relaxed mb-6 italic">
                  If any of you lacks wisdom, let him ask God, who gives
                  generously to all without reproach, and it will be given him.
                </blockquote>
                <cite className="text-gold text-sm font-semibold not-italic tracking-wide">
                  — James 1:5
                </cite>

                {/* Decorative dots */}
                <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gold/10"
                    />
                  ))}
                </div>
              </div>

              {/* Philosophy pillars */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Wisdom", sublabel: "Scripture-Informed" },
                  { label: "Strategy", sublabel: "Systems-Driven" },
                  { label: "Stewardship", sublabel: "Mission-Focused" },
                ].map((pillar) => (
                  <div
                    key={pillar.label}
                    className="text-center p-4 rounded-xl bg-section-alt border border-cream-dark/30"
                  >
                    <p className="font-[family-name:var(--font-display)] text-charcoal font-semibold text-sm">
                      {pillar.label}
                    </p>
                    <p className="text-warm-gray-light text-[11px] mt-0.5">
                      {pillar.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
