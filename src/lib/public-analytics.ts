/** Public marketing analytics. Fail closed; never pass visitor-provided data. */
export const CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;
export type AnalyticsChoice = "accepted" | "rejected";
export type PublicAnalyticsConfig = {
  measurementId: string;
  enabled: boolean;
  hosts: readonly string[];
  canonicalOrigin: string;
  pages: Readonly<Record<string, string>>;
  storageKey: string;
  privacyHref: string;
  settingsPaths?: readonly string[];
};

export function readConsent(raw: string | null, now = Date.now()): AnalyticsChoice | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (value.version !== 1 || !["accepted", "rejected"].includes(value.choice)) return null;
    if (!Number.isFinite(value.savedAt) || value.savedAt > now || now - value.savedAt >= CONSENT_LIFETIME_MS) return null;
    return value.choice;
  } catch { return null; }
}

export function encodeConsent(choice: AnalyticsChoice, now = Date.now()): string {
  return JSON.stringify({ version: 1, choice, savedAt: now });
}

export function hasPrivacySignal(browser: Window): boolean {
  return browser.navigator.doNotTrack === "1" ||
    (browser.navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function publicPage(config: PublicAnalyticsConfig, location: Pick<Location, "protocol" | "hostname" | "port">, pathname: string) {
  if (!config.enabled || !/^G-[A-Z0-9]{6,20}$/.test(config.measurementId)) return null;
  if (location.protocol !== "https:" || location.port || !config.hosts.includes(location.hostname)) return null;
  if (!Object.hasOwn(config.pages, pathname)) return null;
  return {
    page_location: `${config.canonicalOrigin}${pathname}`,
    page_title: config.pages[pathname],
    page_referrer: "",
  };
}

type AnalyticsWindow = Window & { dataLayer?: unknown[]; [key: `ga-disable-${string}`]: boolean };

export function createPublicAnalytics(config: PublicAnalyticsConfig, browser: Window) {
  const target = browser as AnalyticsWindow;
  let initialized = false;
  let lastPath: string | null = null;
  const disableKey = `ga-disable-${config.measurementId}` as const;

  // Keep this signature: gtag consumes arguments objects from the data layer.
  function gtag(...args: unknown[]) {
    void args; // Retain the typed call signature while preserving Google’s documented queue format.
    target.dataLayer ??= [];
    // eslint-disable-next-line prefer-rest-params -- Google’s standard gtag queue uses Arguments objects.
    target.dataLayer.push(arguments);
  }

  function stop(clearCookies = false) {
    target[disableKey] = true;
    if (clearCookies && config.hosts.includes(browser.location.hostname) && browser.location.protocol === "https:") {
      // This integration creates host-only cookies; never touch app-subdomain cookies.
      for (const name of ["_ga", `_ga_${config.measurementId.slice(2)}`]) {
        browser.document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
      }
    }
  }

  function track(pathname: string, choice: AnalyticsChoice | null) {
    const page = publicPage(config, browser.location, pathname);
    if (choice !== "accepted" || hasPrivacySignal(browser) || !page) {
      stop(choice !== "accepted" || hasPrivacySignal(browser));
      lastPath = null;
      return;
    }
    target[disableKey] = false;
    if (lastPath === pathname) return;
    const options = {
      ...page,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: "none",
      cookie_expires: CONSENT_LIFETIME_MS / 1000,
      cookie_update: false,
      cookie_flags: "SameSite=Lax;Secure",
      ignore_referrer: true,
      // Intentionally give up campaign attribution rather than read arbitrary URL data.
      campaign_id: "", campaign_source: "", campaign_medium: "",
      campaign_name: "", campaign_term: "", campaign_content: "",
    };
    if (!initialized) {
      // BASIC consent: even the Google script is absent until consent is accepted.
      gtag("consent", "default", {
        analytics_storage: "denied", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied",
      });
      gtag("set", "ads_data_redaction", true);
      gtag("set", "url_passthrough", false);
      gtag("consent", "update", {
        analytics_storage: "granted", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied",
      });
      gtag("js", new Date());
      gtag("set", options);
      gtag("config", config.measurementId, options);
      const script = browser.document.createElement("script");
      script.id = "public-site-google-analytics";
      script.async = true;
      script.referrerPolicy = "no-referrer";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`;
      browser.document.head.appendChild(script);
      initialized = true;
    } else {
      gtag("set", options);
      gtag("config", config.measurementId, { ...options, update: true });
    }
    gtag("event", "page_view", { ...page, send_to: config.measurementId });
    lastPath = pathname;
  }

  return { track, stop };
}
