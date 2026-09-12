import { describe, expect, it } from "vitest";
import { createContactHandler } from "./route";

const siteOrigin = "https://solomonsolutions.tech";
const validSubmission = {
  requestId: "8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
  name: "Ada Lovelace",
  email: "ada@example.org",
  subject: "Consulting Services",
  message: "We need help adopting AI responsibly.",
  website: "",
};

function contactRequest(body: string, origin = siteOrigin) {
  return new Request(`${siteOrigin}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body,
  });
}

describe("POST /api/contact", () => {
  it("delivers a valid same-origin inquiry and returns the generic success response", async () => {
    const sent: unknown[] = [];
    const handler = createContactHandler({
      siteOrigin,
      sendEmail: async (message) => {
        sent.push(message);
      },
    });

    const response = await handler(contactRequest(JSON.stringify(validSubmission)));

    expect(response.status).toBe(201);
    expect(await response.json()).toEqual({ ok: true });
    expect(sent).toEqual([
      {
        replyTo: validSubmission.email,
        subject: "Website inquiry: Consulting Services",
        text: [
          "Name: Ada Lovelace",
          "Email: ada@example.org",
          "Subject: Consulting Services",
          "Request ID: 8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
          "",
          "We need help adopting AI responsibly.",
        ].join("\n"),
        idempotencyKey: "contact/8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
      },
    ]);
  });

  it.each([
    ["malformed JSON", "{"],
    ["invalid fields", JSON.stringify({ ...validSubmission, email: "not-an-email" })],
  ])("rejects %s without sending", async (_caseName, body) => {
    const sent: unknown[] = [];
    const handler = createContactHandler({
      siteOrigin,
      sendEmail: async (message) => {
        sent.push(message);
      },
    });

    const response = await handler(contactRequest(body));

    expect(response.status).toBe(400);
    expect(sent).toEqual([]);
  });

  it("acknowledges a filled honeypot without sending", async () => {
    const sent: unknown[] = [];
    const handler = createContactHandler({
      siteOrigin,
      sendEmail: async (message) => {
        sent.push(message);
      },
    });

    const response = await handler(
      contactRequest(JSON.stringify({ ...validSubmission, website: "https://spam.example" })),
    );

    expect(response.status).toBe(201);
    expect(await response.json()).toEqual({ ok: true });
    expect(sent).toEqual([]);
  });

  it("rejects a body larger than 16 KiB", async () => {
    const sent: unknown[] = [];
    const handler = createContactHandler({
      siteOrigin,
      sendEmail: async (message) => {
        sent.push(message);
      },
    });

    const response = await handler(contactRequest("x".repeat(16 * 1024 + 1)));

    expect(response.status).toBe(413);
    expect(sent).toEqual([]);
  });

  it("rejects a request from another origin", async () => {
    const sent: unknown[] = [];
    const handler = createContactHandler({
      siteOrigin,
      sendEmail: async (message) => {
        sent.push(message);
      },
    });

    const response = await handler(contactRequest(JSON.stringify(validSubmission), "https://attacker.example"));

    expect(response.status).toBe(403);
    expect(sent).toEqual([]);
  });

  it("returns a generic recoverable response when delivery fails", async () => {
    const handler = createContactHandler({
      siteOrigin,
      sendEmail: async () => ({ error: { message: "provider details must remain private" } }),
    });

    const response = await handler(contactRequest(JSON.stringify(validSubmission)));

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      ok: false,
      error: "Unable to send your message right now. Please try again later.",
    });
  });
});
