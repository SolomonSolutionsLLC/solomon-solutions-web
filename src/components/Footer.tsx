import Image from "next/image";
import { Heart } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Simply Pray", href: "https://simplypray.io" },
    { label: "HopeStack", href: "https://hopestack.tech" },
    { label: "HeartwardChat", href: "https://heartwardchat.com" },
  ],
  Resources: [
    { label: "The Wisdom Walk", href: "https://thewisdomwalk.com" },
    { label: "Consulting", href: "#consulting" },
    { label: "About", href: "#about" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Schedule a Call", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-cream p-1">
                <Image
                  src="/logo-mark.png"
                  alt="Solomon Solutions monogram"
                  width={30}
                  height={30}
                />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream">
                Solomon Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Software, systems, and counsel for churches and leaders. Built
              by a pastor, engineered for the church.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:text-gold"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Solomon Solutions LLC. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-xs">
            Built with <Heart size={12} aria-hidden="true" className="text-gold" /> and wisdom
          </p>
        </div>
      </div>
    </footer>
  );
}
