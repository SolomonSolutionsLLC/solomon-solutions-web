"use client";

import { useState, useEffect } from "react";
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center p-1 bg-cream transition-all duration-300 ${
              scrolled ? "border border-gold/30" : "border border-white/20"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.png"
              alt="Solomon Solutions monogram"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`font-[family-name:var(--font-display)] text-lg font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-cream" : "text-white"
            }`}
          >
            Solomon Solutions
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-cream/70" : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-gold text-charcoal text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-md shadow-gold/20"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg cursor-pointer transition-colors ${
            scrolled ? "text-cream" : "text-white"
          }`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal/98 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-cream/70 hover:text-gold transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center px-5 py-3 bg-gold text-charcoal text-sm font-semibold rounded-lg"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
