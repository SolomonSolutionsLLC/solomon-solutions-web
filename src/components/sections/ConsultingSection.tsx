"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ConsultingAccordion from "@/components/ConsultingAccordion";
import KeilaForm from "@/components/KeilaForm";
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
      "Evaluate and implement the right technology stack for your church, from communication to management to giving platforms.",
  },
  {
    icon: Brain,
    title: "AI & Open-Source LLM Setup",
    description:
      "Deploy private AI tools on your own infrastructure. We help pastors and leaders leverage open-source LLMs on a VPS: practical, private, powerful.",
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
    <section
      id="consulting"
      className="relative overflow-hidden bg-charcoal py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gold/[0.04] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Consulting Services
            </span>
            <h2 className="mt-5 mb-7 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl">
              Strategic Guidance for
              <br />
              <span className="italic text-gold">Churches &amp; Leaders</span>
            </h2>
            <p className="text-lg leading-relaxed text-cream/65">
              For pastors, churches, and ministry leaders ready to trade
              duct-taped processes for systems that hold, and to put new
              technology to work without handing your data to someone else.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection delay={150} className="lg:col-span-7">
            <p className="mb-5 font-[family-name:var(--font-display)] text-xl font-semibold italic text-gold/90">
              Here&apos;s how we can help you:
            </p>
            <ConsultingAccordion items={focusAreas} />
          </AnimatedSection>

          <AnimatedSection delay={300} className="lg:col-span-5">
            <div className="border border-gold/25 p-8 lg:p-10">
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-cream">
                What You&apos;ll Gain
              </h3>
              <p className="mb-7 text-sm text-cream/60">
                For pastors, churches, and ministry leaders ready to build
                with intention.
              </p>
              <ul className="mb-9 space-y-3.5">
                {outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-sm text-cream/75"
                  >
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-gold"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/grace-chapel/strategy-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:bg-gold-light"
              >
                Schedule a Strategy Call
                <ArrowRight size={14} />
              </a>
              <p className="mt-4 text-center text-xs text-cream/60">
                Free 30-minute consultation
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={450}>
          <div className="mx-auto mt-16 max-w-md text-center">
            <p className="mb-6 text-sm leading-relaxed text-cream/65">
              Not ready to talk yet? Get{" "}
              <span className="text-gold">The Pastor&apos;s Guide to AI</span> —
              practical, private AI for ministry, delivered to your inbox.
            </p>
            <KeilaForm
              formId="nfrm_LNGLYZD3"
              title="Get The Pastor's Guide to AI"
              minHeight={520}
              className="overflow-hidden rounded-xl border border-gold/25"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
