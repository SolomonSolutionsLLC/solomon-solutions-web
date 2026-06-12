import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: Philosophy */}
          <AnimatedSection className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
              About Us
            </span>
            <h2 className="mt-5 mb-8 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl">
              Built on Conviction,
              <br />
              Driven by Purpose
            </h2>
            <div className="max-w-xl space-y-5 text-[15px] leading-relaxed text-warm-gray">
              <p>
                Solomon Solutions was founded by Joshua Kirk, a pastor and
                engineer who spent years watching churches wrestle with
                technology that was never built for them. Outdated tools,
                fragmented processes, vendors who didn&apos;t understand
                ministry. So he started building what he couldn&apos;t find.
              </p>
              <p>
                We approach every project with the same request King Solomon
                made: not for wealth or power, but for wisdom. That pursuit
                shapes everything we build, from the simplest prayer app to
                the most complex care platform.
              </p>
              <p>
                Our work sits at the intersection of biblical conviction,
                strategic thinking, and modern technology. When those three
                converge, leaders are freed to build something that lasts.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold/50" />
              <p className="text-sm">
                <span className="font-semibold text-charcoal">Joshua Kirk</span>
                <span className="text-warm-gray-light">
                  {" "}
                  &middot; Pastor &amp; Founder
                </span>
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Scripture panel */}
          <AnimatedSection delay={200} className="lg:col-span-5">
            <figure className="relative bg-charcoal p-8 lg:p-10">
              <div aria-hidden="true" className="absolute top-0 left-0 h-[3px] w-full bg-gold" />
              <div
                aria-hidden="true"
                className="mb-5 font-[family-name:var(--font-display)] text-6xl leading-none text-gold/30"
              >
                &ldquo;
              </div>
              <blockquote className="font-[family-name:var(--font-display)] text-xl italic leading-relaxed text-cream/90 md:text-2xl">
                If any of you lacks wisdom, let him ask God, who gives
                generously to all without reproach, and it will be given him.
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold tracking-[0.18em] text-gold">
                &mdash; JAMES 1:5
              </figcaption>
            </figure>

            <div className="mt-px grid grid-cols-3 divide-x divide-charcoal/10 border border-charcoal/10 bg-warm-white">
              {[
                { label: "Wisdom", sublabel: "Scripture-Informed" },
                { label: "Strategy", sublabel: "Systems-Driven" },
                { label: "Stewardship", sublabel: "Mission-Focused" },
              ].map((pillar) => (
                <div key={pillar.label} className="px-3 py-5 text-center">
                  <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-charcoal">
                    {pillar.label}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-warm-gray-light">
                    {pillar.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
