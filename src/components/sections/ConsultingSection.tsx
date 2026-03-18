import AnimatedSection from "@/components/AnimatedSection";
import {
  Church,
  Brain,
  Server,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const focusAreas = [
  {
    icon: Church,
    title: "Church Systems & Discipleship",
    description:
      "Design and implement systems that help your church disciple effectively, track care, and steward resources with clarity.",
  },
  {
    icon: Users,
    title: "Leadership & Ministry Structure",
    description:
      "Build organizational structures that empower teams, clarify roles, and multiply leaders at every level of ministry.",
  },
  {
    icon: Server,
    title: "Technology Integration",
    description:
      "Evaluate and implement the right technology stack for your church — from communication to management to giving platforms.",
  },
  {
    icon: Brain,
    title: "AI & Open-Source LLM Setup",
    description:
      "Deploy private AI tools on your own infrastructure. We help pastors and leaders leverage open-source LLMs on VPS — practical, private, powerful.",
  },
];

const outcomes = [
  "Clarity in your systems and processes",
  "Efficiency that frees your team to focus on mission",
  "Scalability that grows with your ministry",
  "Technology that serves, not complicates",
];

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/30 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Consulting Services
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-cream font-bold mt-4 mb-6 leading-tight">
              Strategic Guidance for
              <br />
              <span className="text-gold">Churches & Leaders</span>
            </h2>
            <p className="max-w-2xl mx-auto text-cream/50 text-lg leading-relaxed">
              Specialized consulting for pastors, churches, and ministry
              leaders who are ready to build effective systems and lead
              with intention.
            </p>
          </div>
        </AnimatedSection>

        {/* Focus areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {focusAreas.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 100}>
              <div className="group p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <area.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-2">
                      {area.title}
                    </h3>
                    <p className="text-cream/40 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Outcomes + CTA */}
        <AnimatedSection delay={400}>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/15 p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cream mb-2">
                    What You&apos;ll Gain
                  </h3>
                  <p className="text-cream/40 text-sm mb-6">
                    For pastors, churches, and ministry leaders ready to build
                    with intention.
                  </p>
                  <ul className="space-y-3">
                    {outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-cream/70 text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center md:text-right">
                  <a
                    href="https://calendly.com/grace-chapel/strategy-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    Schedule a Strategy Call
                    <ArrowRight size={18} />
                  </a>
                  <p className="text-cream/30 text-xs mt-3">
                    Free 30-minute consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
