import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Target, Crown } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Theology Meets Technology",
    description:
      "We start with Scripture, not trends. Every tool and system we design is grounded in biblical conviction, because lasting solutions require a foundation that doesn't shift.",
  },
  {
    icon: Target,
    title: "Built for Faithfulness",
    description:
      "We help leaders steward their calling well by creating systems that serve the mission of the Church with excellence and integrity, not just efficiency.",
  },
  {
    icon: Crown,
    title: "Measured by Kingdom Impact",
    description:
      "Every product and service is evaluated by a single metric: does it help the people of God do the work of God more effectively? If it doesn't serve the mission, we don't build it.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Our Mission
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mt-4 mb-6 leading-tight">
              Why We Exist
            </h2>
            <p className="max-w-2xl mx-auto text-warm-gray text-lg leading-relaxed">
              Most ministry software is built by vendors who have never
              counseled a grieving member, planned a discipleship pathway, or
              led a congregation through change. The result: tools that serve
              metrics instead of mission.
            </p>
            <p className="max-w-2xl mx-auto text-warm-gray text-lg leading-relaxed mt-4">
              Solomon Solutions exists at the intersection of theology,
              technology, and discipleship, building what ministry leaders
              actually need the way a fellow pastor would build it.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 150}>
              <div className="group relative p-8 lg:p-10 rounded-2xl bg-white border border-cream-dark/50 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <pillar.icon size={22} className="text-gold" />
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-[15px]">
                  {pillar.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gold/0 group-hover:bg-gold/30 transition-all duration-500 rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
