import type { PublicAnalyticsConfig } from "./public-analytics";

// Verified 2026-10-02: ads, Signals, user data, enhanced events and detailed collection are off.
const PRIVACY_SETTINGS_VERIFIED = true;

export const publicAnalyticsConfig: PublicAnalyticsConfig = {
  // Production-only code gate; NEXT_PUBLIC_GA_ENABLED=false remains an emergency kill switch.
  enabled: PRIVACY_SETTINGS_VERIFIED && process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ENABLED !== "false" && process.env.VERCEL_ENV !== "preview" && process.env.VERCEL_ENV !== "development",
  measurementId: "G-4F78RQMB26",
  hosts: ["solomonsolutions.tech", "www.solomonsolutions.tech"],
  canonicalOrigin: "https://solomonsolutions.tech",
  storageKey: "solomon-public-analytics-consent-v1",
  privacyHref: "/privacy#website-analytics",
  pages: {
    "/": "Solomon Solutions | Software, systems and counsel",
    "/privacy": "Solomon Solutions | Website analytics and privacy",
  },
};
