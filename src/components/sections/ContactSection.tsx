"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Calendar, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up to your email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mt-4 mb-6 leading-tight">
              Let&apos;s Build Something
              <br />
              <span className="text-gold-dark">That Lasts</span>
            </h2>
            <p className="max-w-2xl mx-auto text-warm-gray text-lg leading-relaxed">
              The fastest path is a free 30-minute strategy call: no pitch,
              just a conversation about your ministry and what would actually
              help. Prefer to write first? Send a message below.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-cream-dark/50 p-8 lg:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                    Send a Message
                  </h3>
                  <p className="text-warm-gray-light text-xs">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-text mb-1.5 tracking-wide"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-section-alt border border-cream-dark/50 text-charcoal text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-text mb-1.5 tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-section-alt border border-cream-dark/50 text-charcoal text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"
                      placeholder="you@church.org"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-text mb-1.5 tracking-wide"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-section-alt border border-cream-dark/50 text-charcoal text-sm focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Consulting Services</option>
                    <option>Simply Pray</option>
                    <option>HopeStack</option>
                    <option>AI & Technology</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-text mb-1.5 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-section-alt border border-cream-dark/50 text-charcoal text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  aria-live="polite"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm cursor-pointer disabled:cursor-default transition-all duration-300 ${
                    submitted
                      ? "bg-green-600 text-white"
                      : "bg-gold text-charcoal hover:bg-gold-light shadow-md shadow-gold/20"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Calendar booking card */}
          <AnimatedSection delay={200}>
            <div className="flex flex-col gap-6">
              {/* Strategy call card */}
              <div className="bg-gradient-to-br from-charcoal to-navy rounded-2xl p-8 lg:p-10 text-cream flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                    <Calendar size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      Schedule a Strategy Call
                    </h3>
                    <p className="text-cream/60 text-xs">
                      Free 30-minute consultation
                    </p>
                  </div>
                </div>

                <p className="text-cream/65 text-sm leading-relaxed mb-6">
                  Book a free strategy session to discuss your church&apos;s
                  needs, explore how our tools can serve you, or learn about our
                  AI consulting services.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Church systems & process review",
                    "Technology stack evaluation",
                    "AI / LLM deployment options",
                    "Custom solution exploration",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-cream/60 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="https://calendly.com/grace-chapel/strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 text-sm"
                >
                  <Calendar size={16} />
                  Book Your Free Call
                </a>
              </div>

              {/* Direct email */}
              <div className="rounded-2xl bg-white border border-cream-dark/50 p-6 text-center">
                <p className="text-warm-gray text-sm">
                  Prefer email?{" "}
                  <a
                    href="mailto:hello@solomonsolutions.tech"
                    className="text-gold-dark font-semibold hover:text-gold transition-colors"
                  >
                    hello@solomonsolutions.tech
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
