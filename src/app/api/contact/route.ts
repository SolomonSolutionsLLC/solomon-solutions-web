import { Resend } from "resend";
import { getContactConfig } from "@/lib/contact/config";
import { buildContactEmail } from "@/lib/contact/email";
import { parseContactSubmission } from "@/lib/contact/schema";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;
const DELIVERY_FAILURE = "Unable to send your message right now. Please try again later.";

type OutboundEmail = ReturnType<typeof buildContactEmail> & {
  idempotencyKey: string;
};

type SendEmail = (message: OutboundEmail) => Promise<{ error?: unknown } | void>;

type ContactHandlerOptions = {
  siteOrigin: string;
  sendEmail: SendEmail;
};

function json(body: object, status: number): Response {
  return Response.json(body, { status });
}

export function createContactHandler({ siteOrigin, sendEmail }: ContactHandlerOptions) {
  return async function handleContact(request: Request): Promise<Response> {
    if (request.headers.get("origin") !== siteOrigin) {
      return json({ ok: false, error: "Forbidden" }, 403);
    }

    let body: string;
    try {
      body = await request.text();
    } catch {
      return json({ ok: false, error: "Invalid request" }, 400);
    }

    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: "Request body too large" }, 413);
    }

    let input: unknown;
    try {
      input = JSON.parse(body);
    } catch {
      return json({ ok: false, error: "Invalid request" }, 400);
    }

    const parsed = parseContactSubmission(input);
    if (!parsed.ok) {
      if (parsed.spam) return json({ ok: true }, 201);
      return json({ ok: false, error: "Invalid request" }, 400);
    }

    const email = buildContactEmail(parsed.data);
    try {
      const result = await sendEmail({
        ...email,
        idempotencyKey: `contact/${parsed.data.requestId}`,
      });
      if (result?.error) return json({ ok: false, error: DELIVERY_FAILURE }, 503);
    } catch {
      return json({ ok: false, error: DELIVERY_FAILURE }, 503);
    }

    return json({ ok: true }, 201);
  };
}

export async function POST(request: Request): Promise<Response> {
  let config: ReturnType<typeof getContactConfig>;
  try {
    config = getContactConfig();
  } catch {
    return json({ ok: false, error: DELIVERY_FAILURE }, 503);
  }

  const resend = new Resend(config.apiKey);
  return createContactHandler({
    siteOrigin: config.siteOrigin,
    sendEmail: async ({ idempotencyKey, ...email }) =>
      resend.emails.send(
        {
          from: config.from,
          to: [config.to],
          replyTo: email.replyTo,
          subject: email.subject,
          text: email.text,
        },
        { idempotencyKey },
      ),
  })(request);
}
