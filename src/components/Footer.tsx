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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cream border border-gold/30 flex items-center justify-center p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-mark.png"
                  alt="Solomon Solutions monogram"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-[family-name:var(--font-display)] text-cream text-lg font-semibold">
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
              <h4 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-gold transition-colors duration-300"
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

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Solomon Solutions LLC. All rights
            reserved.
          </p>
          <p className="text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-gold" /> and wisdom
          </p>
        </div>
      </div>
    </footer>
  );
}
