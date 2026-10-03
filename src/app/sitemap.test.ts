import { describe, expect, it } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

describe("public marketing sitemap", () => {
  it("lists only existing public canonical pages without fabricated update dates", () => {
    const entries = sitemap();
    expect(entries).toEqual([
      { url: "https://solomonsolutions.tech", changeFrequency: "monthly", priority: 1 },
      { url: "https://solomonsolutions.tech/privacy", changeFrequency: "yearly", priority: 0.3 },
    ]);
    expect(sitemap()).toEqual(entries);
    for (const entry of entries) expect(entry).not.toHaveProperty("lastModified");
    expect(robots().sitemap).toBe("https://solomonsolutions.tech/sitemap.xml");
  });
});
