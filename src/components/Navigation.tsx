"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Platforms", href: "#platforms" },
  { label: "Consulting", href: "#consulting" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-charcoal md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/60">
            Wisdom-Driven Technology for Churches &amp; Leaders
          </p>
          <a
            href="mailto:hello@solomonsolutions.tech"
            className="text-[11px] font-medium tracking-[0.08em] text-cream/70 transition-colors hover:text-gold"
          >
            hello@solomonsolutions.tech
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 shadow-sm shadow-charcoal/5 backdrop-blur-md"
            : "bg-cream"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt="Solomon Solutions monogram"
              width={38}
              height={38}
            />
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-wide text-charcoal">
              Solomon Solutions
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/70 transition-colors duration-300 hover:text-gold-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-charcoal px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold-dark"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer p-2 text-charcoal md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 border-t border-charcoal/10 bg-cream px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/70 transition-colors hover:text-gold-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block bg-charcoal px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-cream"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
