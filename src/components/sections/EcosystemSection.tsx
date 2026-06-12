"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import EcosystemOrbit from "@/components/graphics/EcosystemOrbit";
import { ArrowUpRight } from "lucide-react";

const platforms = [
  {
    name: "HeartwardChat",
    short: "Heartward",
    tagline: "Guided by Faith, Powered by AI",
    description:
      "Biblical answers, instantly. AI-guided discipleship conversations rooted in Scripture, for the questions people carry between Sundays.",
    href: "https://heartwardchat.com",
    status: "Coming Soon",
    color: "#2d5a2d",
  },
  {
    name: "The Wisdom Walk",
    short: "Wisdom Walk",
    tagline: "Discipleship, Counseling & Culture",
    description:
      "Articles and resources on discipleship, biblical counseling, and culture. For pastors and leaders engaging the hard questions with wisdom.",
    href: "https://thewisdomwalk.com",
    status: "Active",
    color: "#B8935A",
  },
  {
    name: "Simply Pray",
    short: "Simply Pray",
    tagline: "Prayer Made Simple",
    description:
      "Guided iPhone prayer app built on the ACTS model. Scripture-rooted, distraction-free, private by default.",
    href: "https://simplypray.io",
    status: "Coming Soon",
    color: "#2F5C51",
  },
  {
    name: "HopeStack",
    short: "HopeStack",
    tagline: "Care, Simplified",
    description:
      "The counseling platform built for care teams. Intake, scheduling, notes, and supervision in one secure workspace.",
    href: "https://hopestack.tech",
    status: "Coming Soon",
    color: "#3B5998",
  },
];

export default function EcosystemSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="platforms" className="bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
              The Ecosystem
            </span>
            <h2 className="mt-5 mb-7 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl">
              Our Platforms
            </h2>
            <p className="text-lg leading-relaxed text-warm-gray">
              Four platforms, one mission: prayer, care, discipleship, and
              wisdom for the local church. Each tool serves a distinct need;
              all are built to work together.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="hidden lg:block">
            <EcosystemOrbit
              nodes={platforms.map((p) => ({
                name: p.name,
                short: p.short,
                href: p.href,
                color: p.color,
              }))}
              activeIndex={active}
              onActiveChange={setActive}
            />
          </AnimatedSection>

          <div>
            {platforms.map((platform, i) => (
              <AnimatedSection key={platform.name} delay={i * 100}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerEnter={() => setActive(i)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className={`group block border-b border-charcoal/10 py-7 transition-colors duration-300 first:border-t ${
                    active === i ? "bg-warm-white" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6 px-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal">
                          {platform.name}
                        </h3>
                        {platform.status === "Coming Soon" ? (
                          <span className="border border-charcoal/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-gray-light">
                            Coming Soon
                          </span>
                        ) : (
                          <span className="border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-warm-gray-light">
                        {platform.tagline}
                      </p>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-warm-gray">
                        {platform.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-charcoal/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-dark"
                    />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
