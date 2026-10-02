type ContactConfig = {
  apiKey: string;
  from: string;
  to: string;
  siteOrigin: string;
};

function requiredEnvironmentValue(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error("Invalid contact configuration");
  return value;
}

function isEmailAddress(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isSenderAddress(value: string): boolean {
  const displayAddress = /^[^\r\n<>]+ <([^\s@<>]+@[^\s@<>]+\.[^\s@<>]+)>$/.exec(value);
  return isEmailAddress(value) || Boolean(displayAddress && isEmailAddress(displayAddress[1]));
}

export function getContactConfig(): ContactConfig {
  const apiKey = requiredEnvironmentValue("RESEND_API_KEY");
  const from = requiredEnvironmentValue("CONTACT_FROM_EMAIL");
  const to = requiredEnvironmentValue("CONTACT_TO_EMAIL");
  const siteUrl = requiredEnvironmentValue("SITE_URL");

  if (!isSenderAddress(from) || !isEmailAddress(to)) {
    throw new Error("Invalid contact configuration");
  }

  let siteUrlObject: URL;
  try {
    siteUrlObject = new URL(siteUrl);
  } catch {
    throw new Error("Invalid contact configuration");
  }

  if (process.env.NODE_ENV !== "development" && siteUrlObject.protocol !== "https:") {
    throw new Error("Invalid contact configuration");
  }

  if (siteUrlObject.protocol !== "http:" && siteUrlObject.protocol !== "https:") {
    throw new Error("Invalid contact configuration");
  }

  return { apiKey, from, to, siteOrigin: siteUrlObject.origin };
}
