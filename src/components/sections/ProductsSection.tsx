import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Users, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Heart,
    name: "Simply Pray",
    tagline: "Prayer Made Simple",
    description:
      "An iPhone app designed to help you build and sustain a meaningful prayer life. Simply Pray provides structure and guidance for daily prayer through the ACTS framework, helping you move beyond scattered thoughts into focused, faithful communion with God.",
    features: [
      "ACTS prayer framework",
      "Daily prayer reminders",
      "Scripture-guided prayer",
      "Progress tracking",
    ],
    cta: "Learn More",
    href: "https://simplypray.io",
    gradient: "from-[#EBF5F1] to-[#F2E8D6]",
    iconBg: "bg-[#EBF5F1]",
    iconColor: "text-[#2F5C51]",
    dotColor: "bg-[#2F5C51]",
  },
  {
    icon: Users,
    name: "HopeStack",
    tagline: "Care, Simplified",
    description:
      "The counseling platform built for care teams. HopeStack streamlines intake, scheduling, notes, and supervision in one secure workspace — giving your team the tools to steward your congregation\u2019s most vulnerable moments with excellence.",
    features: [
      "Role-aware dashboards",
      "Counseling workflows",
      "HIPAA-aligned security",
      "3-click commitment",
    ],
    cta: "Learn More",
    href: "https://hopestack.tech",
    gradient: "from-[#E8EDF5] to-[#F0F4FA]",
    iconBg: "bg-[#E8EDF5]",
    iconColor: "text-[#3B5998]",
    dotColor: "bg-[#3B5998]",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Our Products
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mt-4 mb-6 leading-tight">
              Tools Built for Ministry
            </h2>
            <p className="max-w-2xl mx-auto text-warm-gray text-lg leading-relaxed">
              Purpose-driven products designed to serve the unique needs of
              churches, leaders, and individuals.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 200}>
              <div className="group relative h-full flex flex-col rounded-2xl border border-cream-dark/50 bg-white overflow-hidden hover:border-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-charcoal/5">
                {/* Top gradient band */}
                <div
                  className={`h-2 bg-gradient-to-r ${product.gradient}`}
                />

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <product.icon
                        size={24}
                        className={product.iconColor}
                      />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal">
                        {product.name}
                      </h3>
                      <p className="text-warm-gray-light text-sm font-medium">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-warm-gray leading-relaxed text-[15px] mb-6 flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-text"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${product.dotColor} shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      product.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:text-gold transition-colors group/cta"
                  >
                    {product.cta}
                    <ArrowRight
                      size={16}
                      className="group-hover/cta:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
