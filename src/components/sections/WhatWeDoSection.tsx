import AnimatedSection from "@/components/AnimatedSection";
import { Wrench, Cog, Compass } from "lucide-react";

const services = [
  {
    icon: Wrench,
    number: "01",
    label: "Build Tools",
    title: "Software That Serves",
    description:
      "Prayer apps, counseling platforms, AI discipleship tools: purpose-built products that meet real ministry needs, not generic software bent to fit them.",
  },
  {
    icon: Cog,
    number: "02",
    label: "Develop Systems",
    title: "Systems That Hold",
    description:
      "Intake, care, discipleship, operations: we design the processes behind the ministry so nothing falls through the cracks. Structure without bureaucracy. Clarity without complexity.",
  },
  {
    icon: Compass,
    number: "03",
    label: "Provide Counsel",
    title: "Counsel That Clarifies",
    description:
      "Strategic consulting for churches and leaders, from evaluating your technology stack to deploying private AI on your own infrastructure. We walk alongside you until it works.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <AnimatedSection className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
                Our Approach
              </span>
              <h2 className="mt-5 mb-7 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl">
                What We Do
              </h2>
              <p className="text-lg leading-relaxed text-warm-gray">
                We don&apos;t just give advice. We build the tools to execute
                it, the systems to sustain it, and the strategy to scale it.
              </p>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.label} delay={i * 120}>
                <div className="group border-t border-charcoal/10 py-10 first:border-t-0 first:pt-0 lg:py-12">
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <div className="flex shrink-0 items-baseline gap-4 sm:w-36">
                      <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-gold/50">
                        {service.number}
                      </span>
                      <service.icon
                        size={18}
                        aria-hidden="true"
                        className="text-charcoal/35 transition-colors duration-300 group-hover:text-gold-dark"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                        {service.label}
                      </span>
                      <h3 className="mt-2 mb-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-charcoal">
                        {service.title}
                      </h3>
                      <p className="max-w-xl text-[15px] leading-relaxed text-warm-gray">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
