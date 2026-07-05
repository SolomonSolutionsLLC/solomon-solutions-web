import AnimatedSection from "@/components/AnimatedSection";
import KineticHeading from "@/components/motion/KineticHeading";

const pillars = [
  {
    number: "01",
    title: "Theology Meets Technology",
    description:
      "We start with Scripture, not trends. Every tool and system we design is grounded in biblical conviction, because lasting solutions require a foundation that doesn't shift.",
  },
  {
    number: "02",
    title: "Built for Faithfulness",
    description:
      "We help leaders steward their calling well by creating systems that serve the mission of the Church with excellence and integrity, not just efficiency.",
  },
  {
    number: "03",
    title: "Measured by Kingdom Impact",
    description:
      "Every product and service is evaluated by a single metric: does it help the people of God do the work of God more effectively? If it doesn't serve the mission, we don't build it.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="bg-warm-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-text">
              Our Mission
            </span>
            <KineticHeading
              as="h2"
              className="mt-5 mb-7 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl"
              lines={[{ text: "Why We Exist" }]}
            />
            <p className="text-lg leading-relaxed text-warm-gray">
              Most ministry software is built by vendors who have never
              counseled a grieving member, planned a discipleship pathway, or
              led a congregation through change. The result: tools that serve
              metrics instead of mission.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              Solomon Solutions exists at the intersection of theology,
              technology, and discipleship, building what ministry leaders
              actually need the way a fellow pastor would build it.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-charcoal/10">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 150}>
              <div className="md:px-10 lg:px-12">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-navy">
                    {pillar.number}
                  </span>
                  <span aria-hidden="true" className="h-2 w-2 bg-gold" />
                </div>
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-warm-gray">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
