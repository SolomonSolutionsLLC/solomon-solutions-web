import AnimatedSection from "@/components/AnimatedSection";
import ClipReveal from "@/components/motion/ClipReveal";

export default function AboutSection() {
  return (
    <section id="about" className="bg-warm-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: Philosophy */}
          <AnimatedSection className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-text">
              About Us
            </span>
            <h2 className="mt-5 mb-8 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl">
              Built on Conviction,
              <br />
              Driven by Purpose
            </h2>
            <div className="max-w-xl space-y-5 text-[15px] leading-relaxed text-warm-gray">
              <p>
                For years I lived on both sides of this problem. As a pastor,
                I sat in the office after everyone went home, wrestling with
                church software that was never built for the church: clunky
                databases and vendors who had never once made a hospital
                visit. As an engineer, I knew better tools were possible.
                Eventually I stopped waiting for someone else to build them.
              </p>
              <p>
                The name comes from a prayer. When God invited Solomon to ask
                for anything, Solomon asked for wisdom to lead God&apos;s
                people. That is the request behind everything we take on
                here. We ask God for wisdom, and then we build with care,
                whether the project is a simple prayer app or a counseling
                platform holding a congregation&apos;s most fragile moments.
              </p>
              <p>
                The convictions are simple. Scripture sets the direction. The
                systems have to hold up in a real church office, and the
                technology has to serve the people doing the caring. When a
                tool gets that order right, a pastor&apos;s week gets lighter
                and the ministry gets stronger. That is the kind of work that
                lasts.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <p className="text-sm">
                <span className="font-semibold text-charcoal">Joshua Kirk</span>
                <span className="text-warm-gray">
                  {" "}
                  &middot; Pastor &amp; Founder
                </span>
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Scripture panel, the page's one drenched-gold surface */}
          <AnimatedSection delay={200} className="lg:col-span-5">
            <ClipReveal from="left">
            <figure className="relative bg-gold p-8 pt-14 lg:p-10 lg:pt-16">
              <div
                aria-hidden="true"
                className="absolute -top-4 left-5 font-[family-name:var(--font-display)] text-8xl leading-none text-navy/20"
              >
                &ldquo;
              </div>
              <blockquote className="font-[family-name:var(--font-display)] text-xl italic leading-relaxed text-navy md:text-2xl">
                If any of you lacks wisdom, let him ask God, who gives
                generously to all without reproach, and it will be given him.
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold tracking-[0.18em] text-navy/80">
                &mdash; JAMES 1:5
              </figcaption>
            </figure>
            </ClipReveal>

            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 bg-navy px-4 py-5">
              {[
                { label: "Wisdom", sublabel: "Scripture-Informed" },
                { label: "Strategy", sublabel: "Systems-Driven" },
                { label: "Stewardship", sublabel: "Mission-Focused" },
              ].map((pillar, i) => (
                <span key={pillar.label} className="flex items-baseline gap-x-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-gold">
                      &middot;
                    </span>
                  )}
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-cream">
                    {pillar.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.08em] text-gold-light/90">
                    {pillar.sublabel}
                  </span>
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
