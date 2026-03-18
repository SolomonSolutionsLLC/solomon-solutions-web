import AnimatedSection from "@/components/AnimatedSection";
import { Wrench, Cog, Compass } from "lucide-react";

const services = [
  {
    icon: Wrench,
    label: "Build Tools",
    title: "Digital Tools for Growth",
    description:
      "We create digital tools that help people think, grow, and live faithfully. From prayer apps to counseling platforms, our products serve the practical needs of ministry.",
    accent: "from-gold/20 to-gold/5",
  },
  {
    icon: Cog,
    label: "Develop Systems",
    title: "Systems That Scale",
    description:
      "We design practical systems that help churches and leaders operate more effectively. Structure without bureaucracy. Clarity without complexity.",
    accent: "from-navy/10 to-navy/5",
  },
  {
    icon: Compass,
    label: "Provide Guidance",
    title: "Strategic Consulting",
    description:
      "We offer consulting and technical support to help leaders implement clear, scalable solutions. From church systems to private AI deployment, we walk alongside you.",
    accent: "from-charcoal/10 to-charcoal/5",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Our Approach
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mt-4 mb-6 leading-tight">
              What We Do
            </h2>
            <p className="max-w-2xl mx-auto text-warm-gray text-lg leading-relaxed">
              We don&apos;t just give advice. We build the tools to execute it,
              the systems to sustain it, and the strategy to scale it.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.label} delay={i * 150}>
              <div className="group relative h-full flex flex-col p-8 lg:p-10 rounded-2xl bg-white border border-cream-dark/50 hover:border-gold/20 transition-all duration-500 hover:shadow-lg hover:shadow-charcoal/5 overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} group-hover:h-1.5 transition-all duration-500`}
                />

                {/* Number */}
                <span className="text-gold/20 font-[family-name:var(--font-display)] text-6xl font-bold absolute top-4 right-6">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-6 relative z-10">
                  <service.icon size={24} className="text-gold-dark" />
                </div>

                {/* Label */}
                <span className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  {service.label}
                </span>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-[15px] flex-1">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
