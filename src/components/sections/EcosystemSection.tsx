import AnimatedSection from "@/components/AnimatedSection";
import {
  MessageCircle,
  BookOpen,
  Heart,
  Users,
  ArrowUpRight,
} from "lucide-react";

const platforms = [
  {
    icon: MessageCircle,
    name: "HeartwardChat",
    tagline: "Guided by Faith, Powered by AI",
    description:
      "Biblical answers, instantly. AI-guided discipleship conversations rooted in Scripture, for the questions people carry between Sundays.",
    href: "https://heartwardchat.com",
    status: "Coming Soon",
    iconBg: "bg-[#2d5a2d]/10",
    iconColor: "text-[#2d5a2d]",
    hoverBorder: "hover:border-[#2d5a2d]/30",
  },
  {
    icon: BookOpen,
    name: "The Wisdom Walk",
    tagline: "Discipleship, Counseling & Culture",
    description:
      "Articles and resources on discipleship, biblical counseling, and culture. For pastors and leaders engaging the hard questions with wisdom.",
    href: "https://thewisdomwalk.com",
    status: "Active",
    iconBg: "bg-[#B8935A]/10",
    iconColor: "text-[#B8935A]",
    hoverBorder: "hover:border-[#B8935A]/30",
  },
  {
    icon: Heart,
    name: "Simply Pray",
    tagline: "Prayer Made Simple",
    description:
      "Guided iPhone prayer app built on the ACTS model. Scripture-rooted, distraction-free, private by default.",
    href: "https://simplypray.io",
    status: "Coming Soon",
    iconBg: "bg-[#2F5C51]/10",
    iconColor: "text-[#2F5C51]",
    hoverBorder: "hover:border-[#2F5C51]/30",
  },
  {
    icon: Users,
    name: "HopeStack",
    tagline: "Care, Simplified",
    description:
      "The counseling platform built for care teams. Intake, scheduling, notes, and supervision in one secure workspace.",
    href: "https://hopestack.tech",
    status: "Coming Soon",
    iconBg: "bg-[#3B5998]/10",
    iconColor: "text-[#3B5998]",
    hoverBorder: "hover:border-[#3B5998]/30",
  },
];

export default function EcosystemSection() {
  return (
    <section id="platforms" className="py-24 md:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              The Ecosystem
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mt-4 mb-6 leading-tight">
              Our Platforms
            </h2>
            <p className="max-w-2xl mx-auto text-warm-gray text-lg leading-relaxed">
              Four platforms, one mission: prayer, care, discipleship, and
              wisdom for the local church. Each tool serves a distinct need;
              all are built to work together.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, i) => (
            <AnimatedSection key={platform.name} delay={i * 100}>
              <a
                href={platform.href}
                target={platform.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  platform.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group block h-full p-6 lg:p-8 rounded-2xl bg-white border border-cream-dark/50 ${platform.hoverBorder} transition-all duration-500 hover:shadow-lg hover:shadow-charcoal/5 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${platform.iconBg} flex items-center justify-center transition-colors duration-300`}>
                    <platform.icon size={20} className={platform.iconColor} />
                  </div>
                  {platform.status === "Coming Soon" ? (
                    <span className="text-[11px] font-medium text-warm-gray-light bg-cream-dark/60 px-2.5 py-1 rounded-full">
                      Coming Soon
                    </span>
                  ) : (
                    <ArrowUpRight
                      size={18}
                      className="text-warm-gray-light/50 group-hover:text-charcoal/50 transition-colors duration-300"
                    />
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal mb-1">
                  {platform.name}
                </h3>
                <p className="text-warm-gray-light text-xs font-medium mb-2">
                  {platform.tagline}
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {platform.description}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
