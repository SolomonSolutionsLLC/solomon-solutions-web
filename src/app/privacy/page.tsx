import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Analytics & Privacy",
  description: "Optional Google Analytics on the Solomon Solutions public website and how to control your choice.",
  alternates: { canonical: "/privacy" },
};

export default function WebsitePrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 text-charcoal">
      <Link href="/" className="text-gold-text underline">Back to Solomon Solutions</Link>
      <h1 className="mt-8 mb-4 font-[family-name:var(--font-display)] text-4xl">Website analytics &amp; privacy</h1>
      <p className="mb-8">This notice describes optional analytics on the Solomon Solutions public marketing website. It does not describe data handling inside our separate products or replace their privacy notices.</p>
      <section id="website-analytics" className="space-y-5 leading-relaxed">
        <h2 className="text-2xl font-semibold">Optional Google Analytics</h2>
        <p>With your permission, we use Google Analytics to understand visits to selected public marketing pages. Google receives the public page address, cookie identifiers, basic visit and browser/device information, and your IP address as part of the network request. We remove URL query parameters and fragments from the page information we send and do not send referral-page URLs.</p>
        <p>This integration does not track form entries or submissions, link clicks, or activity in our separate applications, administration areas, or other subdomains. Advertising features are disabled.</p>
        <p>Google Analytics does not load before you accept. You can reject analytics and still use the website. We remember your choice in this browser for 180 days. Analytics cookies are limited to this website host and are set to expire after 180 days without automatic renewal.</p>
        <p>You can change your choice using Analytics settings. Rejecting analytics stops future collection and removes this integration’s analytics cookies from this browser. It does not erase information already sent to Google. Browser Do Not Track and Global Privacy Control signals keep analytics off.</p>
        <p>See <a className="underline text-gold-text" href="https://policies.google.com/technologies/partner-sites">how Google processes information from sites using its services</a>.</p>
        <h2 className="pt-4 text-2xl font-semibold">Other website interactions</h2>
        <p>Analytics consent is separate from information you choose to provide when contacting us or subscribing to updates. Please do not send sensitive counseling, health, or prayer information through public website forms.</p>
        <h2 className="pt-4 text-2xl font-semibold">Questions</h2>
        <p>Contact <a className="underline text-gold-text" href="mailto:hello@solomonsolutions.tech">hello@solomonsolutions.tech</a> with website privacy questions.</p>
      </section>
    </main>
  );
}
