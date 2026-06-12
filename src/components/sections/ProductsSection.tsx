import AnimatedSection from "@/components/AnimatedSection";
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
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-warm-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Our Products
            </span>
            <h2 className="mt-5 mb-7 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl">
              Tools Built for Ministry
            </h2>
            <p className="text-lg leading-relaxed text-warm-gray">
              Purpose-driven products designed to serve the unique needs of
              churches, leaders, and individuals.
            </p>
          </div>
        </AnimatedSection>

        <div className="border-t border-charcoal/10">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 150}>
              <article className="grid grid-cols-1 gap-8 border-b border-charcoal/10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-16">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <product.icon
                      size={20}
                      aria-hidden="true"
                      style={{ color: product.accent }}
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray-light">
                      {product.tagline}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-charcoal md:text-4xl">
                    {product.name}
                  </h3>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark transition-colors hover:text-charcoal"
                  >
                    {product.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div className="lg:col-span-7">
                  <p className="mb-7 max-w-2xl text-[15px] leading-relaxed text-warm-gray">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 border-b border-charcoal/5 pb-3 text-sm text-slate-text"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: product.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
