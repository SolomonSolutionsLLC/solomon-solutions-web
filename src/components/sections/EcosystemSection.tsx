"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import EcosystemOrbit from "@/components/graphics/EcosystemOrbit";
import KineticHeading from "@/components/motion/KineticHeading";
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
    // accent brightened for legibility on navy
    bright: "#7fae6e",
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
    bright: "#d3af72",
  },
  {
    name: "Simply Pray",
    short: "Simply Pray",
    tagline: "Prayer Made Simple",
    description:
      "Guided iPhone prayer app built on the ACTS model with secure, shareable prayer lists. Scripture-rooted, distraction-free, private by default.",
    href: "https://simplypray.io",
    status: "Coming Soon",
    color: "#2F5C51",
    bright: "#79b3a2",
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
    bright: "#8ba3d6",
  },
];

export default function EcosystemSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="platforms" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-16 max-w-2xl border-b border-cream/10 pb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              The Ecosystem
            </span>
            <KineticHeading
              as="h2"
              className="mt-5 mb-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl"
              lines={[{ text: "Our Platforms" }]}
            />
            <p className="text-lg leading-relaxed text-cream/70">
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
                  className={`group block border-b border-cream/10 py-7 transition-colors duration-300 first:border-t ${
                    active === i ? "bg-navy-light" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6 px-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cream">
                          {platform.name}
                        </h3>
                        {platform.status === "Coming Soon" ? (
                          <span className="border border-cream/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/60">
                            Coming Soon
                          </span>
                        ) : (
                          <span className="border border-gold/50 bg-gold/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-light">
                            Active
                          </span>
                        )}
                      </div>
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-[2px] w-8"
                        style={{ backgroundColor: platform.bright }}
                      />
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55">
                        {platform.tagline}
                      </p>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/70">
                        {platform.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-cream/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-light"
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
