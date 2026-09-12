import { describe, expect, it } from "vitest";
import { parseContactSubmission } from "./schema";

const validSubmission = {
  requestId: "8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
  name: "Ada Lovelace",
  email: "ada@example.org",
  subject: "Consulting Services",
  message: "We need help adopting AI responsibly.",
  website: "",
};

describe("parseContactSubmission", () => {
  it("normalizes a valid submission", () => {
    expect(
      parseContactSubmission({
        ...validSubmission,
        name: "  Ada Lovelace ",
        email: " ada@example.org ",
        message: " We need help adopting AI responsibly. ",
      }),
    ).toEqual({ ok: true, data: validSubmission });
  });

  it("rejects an invalid email", () => {
    expect(parseContactSubmission({ ...validSubmission, email: "not-an-email" })).toEqual({
      ok: false,
    });
  });

  it("rejects an unknown subject", () => {
    expect(parseContactSubmission({ ...validSubmission, subject: "Other" })).toEqual({
      ok: false,
    });
  });

  it("rejects an oversized message", () => {
    expect(parseContactSubmission({ ...validSubmission, message: "x".repeat(4001) })).toEqual({
      ok: false,
    });
  });

  it("rejects CR/LF header-breaking names", () => {
    expect(
      parseContactSubmission({
        ...validSubmission,
        name: "Ada\r\nBcc: attacker@example.org",
      }),
    ).toEqual({
      ok: false,
    });
  });

  it("classifies a filled website honeypot as spam", () => {
    expect(parseContactSubmission({ ...validSubmission, website: "https://spam.example" })).toEqual({
      ok: false,
      spam: true,
    });
  });
});
