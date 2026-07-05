import AnimatedSection from "@/components/AnimatedSection";
import KineticHeading from "@/components/motion/KineticHeading";
import GrainOverlay from "@/components/graphics/GrainOverlay";
import PhoneDemo from "@/components/graphics/PhoneDemo";
import DashboardDemo from "@/components/graphics/DashboardDemo";
import { Heart, Users, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Heart,
    name: "Simply Pray",
    tagline: "Prayer Made Simple",
    description:
      "A guided iPhone prayer app built on the ACTS model: Adoration, Confession, Thanksgiving, Supplication. No feeds, no streak guilt, no distractions. Scripture at every step, and a growing record of answered prayer you can return to for years.",
    features: [
      "ACTS prayer framework",
      "Scripture-guided prayer",
      "Answered-prayer record",
      "Private by default",
    ],
    cta: "Join the Waitlist",
    href: "https://simplypray.io",
    accent: "#2F5C51",
    wash: "#e0dac3",
    demo: "phone" as const,
  },
  {
    icon: Users,
    name: "HopeStack",
    tagline: "Care, Simplified",
    description:
      "The counseling platform built for care teams. HopeStack brings intake, scheduling, notes, and supervision into one secure workspace, so the people stewarding your congregation’s most vulnerable moments spend their time on care, not coordination.",
    features: [
      "Role-aware dashboards",
      "Counseling workflows",
      "HIPAA-aligned security",
      "Supervision built in",
    ],
    cta: "Learn More",
    href: "https://hopestack.tech",
    accent: "#3B5998",
    wash: "#e1d9c8",
    demo: "dashboard" as const,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative bg-parchment py-24 md:py-32">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-16 grid grid-cols-1 items-end gap-6 border-b border-charcoal/15 pb-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-text">
                Our Products
              </span>
              <KineticHeading
                as="h2"
                className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl"
                lines={[{ text: "Tools Built for Ministry" }]}
              />
            </div>
            <p className="text-lg leading-relaxed text-slate-text lg:col-span-5 lg:col-start-8">
              Purpose-driven products designed to serve the unique needs of
              churches, leaders, and individuals.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 120}>
              <article
                className="grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-12 lg:gap-14 lg:py-14"
                style={{
                  backgroundColor: product.wash,
                  borderTop: `2px solid ${product.accent}`,
                }}
              >
                <div
                  className={`lg:col-span-7 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center"
                      style={{ backgroundColor: product.accent }}
                    >
                      <product.icon
                        size={19}
                        aria-hidden="true"
                        className="text-cream"
                      />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-text">
                      {product.tagline}
                    </span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy md:text-4xl">
                    {product.name}
                  </h3>
                  <p className="mt-5 mb-7 max-w-2xl text-[15px] leading-relaxed text-slate-text">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-text"
                      >
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0"
                          style={{ backgroundColor: product.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:text-charcoal"
                    style={{ color: product.accent }}
                  >
                    {product.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {product.demo === "phone" ? <PhoneDemo /> : <DashboardDemo />}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
