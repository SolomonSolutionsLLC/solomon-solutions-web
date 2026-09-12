import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ContactSection from "./ContactSection";

function jsonResponse(status: number) {
  return new Response(JSON.stringify({ ok: status === 201 }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function completeForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
  await user.type(screen.getByLabelText(/email/i), "ada@example.org");
  await user.selectOptions(screen.getByLabelText(/subject/i), "Consulting Services");
  await user.type(
    screen.getByLabelText(/message/i),
    "We need help adopting AI responsibly.",
  );
}

describe("ContactSection", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    );
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("posts the selected contact values and an empty honeypot", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(201));
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    render(<ContactSection />);
    await completeForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    );
    const request = fetchMock.mock.calls[0][1];
    expect(JSON.parse(request.body)).toMatchObject({
      name: "Ada Lovelace",
      email: "ada@example.org",
      subject: "Consulting Services",
      message: "We need help adopting AI responsibly.",
      website: "",
    });
    expect(JSON.parse(request.body).requestId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    );
  });

  it("shows a disabled sending state while the request is pending", async () => {
    let resolveRequest: (response: Response) => void;
    const fetchMock = vi.fn(
      () => new Promise<Response>((resolve) => { resolveRequest = resolve; }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    render(<ContactSection />);
    await completeForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(screen.getByRole("button", { name: "Sending…" })).toHaveProperty("disabled", true);
    resolveRequest!(jsonResponse(201));
    await screen.findByRole("button", { name: "Message Sent" });
  });

  it("announces success and resets the visible fields after a 201 response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(201)));
    const user = userEvent.setup();

    render(<ContactSection />);
    await completeForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect((await screen.findByRole("status")).textContent).toBe(
      "Thanks — your message was sent. We'll reply within 24 hours.",
    );
    expect(screen.getByLabelText(/name/i)).toHaveProperty("value", "");
    expect(screen.getByLabelText(/email/i)).toHaveProperty("value", "");
    expect(screen.getByLabelText(/subject/i)).toHaveProperty("value", "General Inquiry");
    expect(screen.getByLabelText(/message/i)).toHaveProperty("value", "");
  });

  it("announces a recoverable delivery error and preserves entered values", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(503)));
    const user = userEvent.setup();

    render(<ContactSection />);
    await completeForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect((await screen.findByRole("status")).textContent).toMatch(
      /couldn't send your message/i,
    );
    expect(screen.getByLabelText(/name/i)).toHaveProperty("value", "Ada Lovelace");
    expect(screen.getByLabelText(/email/i)).toHaveProperty("value", "ada@example.org");
    expect(screen.getByLabelText(/subject/i)).toHaveProperty("value", "Consulting Services");
    expect(screen.getByLabelText(/message/i)).toHaveProperty(
      "value",
      "We need help adopting AI responsibly.",
    );
  });

  it("submits exactly once when double-clicked while the request is pending", async () => {
    let resolveRequest: (response: Response) => void;
    const fetchMock = vi.fn(
      () => new Promise<Response>((resolve) => { resolveRequest = resolve; }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    render(<ContactSection />);
    await completeForm(user);
    await user.dblClick(screen.getByRole("button", { name: "Send Message" }));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    resolveRequest!(jsonResponse(201));
    await screen.findByRole("button", { name: "Message Sent" });
  });
});
