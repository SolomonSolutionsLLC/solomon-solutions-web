"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import KineticHeading from "@/components/motion/KineticHeading";
import { Mail, Calendar, Send, CheckCircle2 } from "lucide-react";

const inputClasses =
  "w-full border border-charcoal/15 bg-warm-white px-4 py-3.5 text-sm text-charcoal placeholder:text-warm-gray/70 transition-colors focus:border-gold-text focus:outline-none";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `${data.get("subject")} — message from ${data.get("name")}`
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    window.location.href = `mailto:hello@solomonsolutions.tech?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              Get In Touch
            </span>
            <KineticHeading
              as="h2"
              className="mt-5 mb-7 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl"
              lines={[
                { text: "Let's Build Something" },
                { text: "That Lasts", className: "italic" },
              ]}
            />
            <p className="text-lg leading-relaxed text-cream/70">
              The fastest path is a free 30-minute strategy call: no pitch,
              just a conversation about your ministry and what would actually
              help. Prefer to write first? Send a message below.
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <AnimatedSection>
            <div className="bg-cream p-8 ring-1 ring-gold/30 lg:p-10">
              <div className="mb-8 flex items-center gap-3">
                <Mail size={18} aria-hidden="true" className="text-gold-text" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                    Send a Message
                  </h3>
                  <p className="text-xs text-warm-gray">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-text"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-text"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className={inputClasses}
                      placeholder="you@church.org"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-text"
                  >
                    Subject
                  </label>
                  <select id="subject" name="subject" className={inputClasses}>
                    <option>General Inquiry</option>
                    <option>Consulting Services</option>
                    <option>Simply Pray</option>
                    <option>HopeStack</option>
                    <option>AI &amp; Technology</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${inputClasses} resize-none`}
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  aria-live="polite"
                  className={`flex w-full cursor-pointer items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 disabled:cursor-default ${
                    submitted
                      ? "bg-navy text-gold-light"
                      : "btn-sheen bg-gold text-charcoal hover:bg-gold-light"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={16} />
                      Opening Your Email App
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Strategy call panel */}
          <AnimatedSection delay={200}>
            <div className="flex h-full flex-col gap-6">
              <div className="flex-1 border border-gold/25 bg-navy-light p-8 text-cream lg:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <Calendar size={18} aria-hidden="true" className="text-gold" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      Schedule a Strategy Call
                    </h3>
                    <p className="text-xs text-cream/60">
                      Free 30-minute consultation
                    </p>
                  </div>
                </div>

                <p className="mb-7 text-sm leading-relaxed text-cream/65">
                  Book a free strategy session to discuss your church&apos;s
                  needs, explore how our tools can serve you, or learn about our
                  AI consulting services.
                </p>

                <ul className="mb-9 space-y-3">
                  {[
                    "Church systems & process review",
                    "Technology stack evaluation",
                    "AI / LLM deployment options",
                    "Custom solution exploration",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-cream/70"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/grace-chapel/strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:bg-gold-light active:scale-[0.99]"
                >
                  <Calendar size={14} />
                  Book Your Free Call
                </a>
              </div>

              <div className="border border-gold/20 bg-navy-light p-6 text-center">
                <p className="text-sm text-cream/70">
                  Prefer email?{" "}
                  <a
                    href="mailto:hello@solomonsolutions.tech"
                    className="font-semibold text-gold-light transition-colors hover:text-gold"
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
