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

async function readRequestBody(request: Request): Promise<
  { body: string } | { error: "Invalid request" | "Request body too large" }
> {
  const contentLength = request.headers.get("content-length");
  if (contentLength !== null) {
    if (!/^\d+$/.test(contentLength)) return { error: "Invalid request" };
    if (BigInt(contentLength) > BigInt(MAX_BODY_BYTES)) {
      return { error: "Request body too large" };
    }
  }

  if (!request.body) return { body: "" };

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let byteLength = 0;
  let body = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      byteLength += value.byteLength;
      if (byteLength > MAX_BODY_BYTES) {
        await reader.cancel();
        return { error: "Request body too large" };
      }

      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
    return { body };
  } catch {
    return { error: "Invalid request" };
  } finally {
    reader.releaseLock();
  }
}

export function createContactHandler({ siteOrigin, sendEmail }: ContactHandlerOptions) {
  return async function handleContact(request: Request): Promise<Response> {
    if (request.headers.get("origin") !== siteOrigin) {
      return json({ ok: false, error: "Forbidden" }, 403);
    }

    const bodyResult = await readRequestBody(request);
    if ("error" in bodyResult) {
      return json(
        { ok: false, error: bodyResult.error },
        bodyResult.error === "Request body too large" ? 413 : 400,
      );
    }

    let input: unknown;
    try {
      input = JSON.parse(bodyResult.body);
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
