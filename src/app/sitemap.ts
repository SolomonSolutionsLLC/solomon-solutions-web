import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until verified content-update dates are available.
  // A build/request timestamp does not describe when a page changed.
  return [
    {
      url: "https://solomonsolutions.tech",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://solomonsolutions.tech/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
