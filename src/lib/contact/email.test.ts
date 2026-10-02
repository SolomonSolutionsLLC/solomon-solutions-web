import { describe, expect, it } from "vitest";
import { buildContactEmail } from "./email";

describe("buildContactEmail", () => {
  it("composes a plain-text contact inquiry email", () => {
    expect(
      buildContactEmail({
        requestId: "8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
        name: "Ada Lovelace",
        email: "ada@example.org",
        subject: "Consulting Services",
        message: "We need help adopting AI responsibly.",
        website: "",
      }),
    ).toEqual({
      replyTo: "ada@example.org",
      subject: "Website inquiry: Consulting Services",
      text: [
        "Name: Ada Lovelace",
        "Email: ada@example.org",
        "Subject: Consulting Services",
        "Request ID: 8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
        "",
        "We need help adopting AI responsibly.",
      ].join("\n"),
    });
  });
});
