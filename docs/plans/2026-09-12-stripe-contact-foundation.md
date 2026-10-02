# Solomon Solutions Stripe and Contact Foundation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the misleading `mailto:` contact form with verified server-side delivery and establish a safe, invoice-first Stripe operating workflow for the Solomon Solutions parent company.

**Architecture:** The browser posts a small validated payload to a same-origin Next.js Route Handler. The handler applies abuse checks and sends a plain-text inquiry through Resend with a restricted sending key and an idempotency key; Vercel Firewall provides the durable production rate limit. Payments stay on Stripe-hosted invoice or Payment Link pages, so the website receives no Stripe secret until a specific authenticated server-side Stripe operation is approved.

**Tech Stack:** Next.js 16.2 App Router, React 19.2, TypeScript, Zod, Resend Node SDK, Vitest, React Testing Library, Vercel Firewall, Stripe Invoicing/Payment Links/Billing hosted surfaces

---

## Guardrails

- Work in `/Users/joshuakirk/.codex/worktrees/solomon-stripe-contact` on branch `codex/stripe-contact-foundation`.
- Follow @vercel:email for Resend, @stripe:stripe-best-practices for payment architecture, @front-end-testing for user-visible form tests, and @verification-before-completion before claiming completion.
- Read the checked-in Next.js 16.2 guides before changing form or Route Handler code:
  - `node_modules/next/dist/docs/01-app/02-guides/forms.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md`
  - `node_modules/next/dist/docs/01-app/02-guides/environment-variables.md`
- Do not add Stripe Elements, embedded Checkout, a customer login, a portal-session endpoint, or Financial Connections.
- Do not add a Stripe secret key merely to prove connectivity. The approved invoice-first workflow has no website-side Stripe API operation.
- Do not use live Stripe mode, send a live invoice, publish a Vercel firewall rule, deploy, or move money without explicit authorization.
- Do not commit credentials, contact-message content, provider response bodies, or personal information to logs or fixtures.

## Task 1: Install the Minimal Contact and Test Dependencies

**Files:**

- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.mts`

**Step 1: Install runtime dependencies**

Run:

```bash
npm install zod resend
```

Expected: `zod` and `resend` appear under `dependencies`; no Stripe package is added.

**Step 2: Install the Next.js-recommended unit-test stack**

Run:

```bash
npm install --save-dev vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom @testing-library/user-event vite-tsconfig-paths
```

Expected: the packages appear under `devDependencies` and the install exits 0.

**Step 3: Add deterministic test scripts**

Add to `package.json`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

Do not make the default `test` command watch indefinitely.

**Step 4: Configure Vitest**

Create `vitest.config.mts`:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    restoreMocks: true,
  },
});
```

**Step 5: Prove the empty suite and existing quality gate run**

Run:

```bash
npm test -- --passWithNoTests
npm run lint
```

Expected: both commands exit 0.

**Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.mts
git commit -m "test: add contact form test harness"
```

## Task 2: Define and Test the Contact Request Contract

**Files:**

- Create: `src/lib/contact/schema.ts`
- Create: `src/lib/contact/schema.test.ts`

**Step 1: Write the failing contract tests**

Cover only the high-value boundaries:

```ts
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
  it("normalizes a valid inquiry", () => {
    expect(parseContactSubmission({ ...validSubmission, name: "  Ada Lovelace  " })).toEqual({ ok: true, data: validSubmission });
  });

  it.each([
    ["invalid email", { ...validSubmission, email: "not-an-email" }],
    ["unknown subject", { ...validSubmission, subject: "Free money" }],
    ["oversized message", { ...validSubmission, message: "x".repeat(4001) }],
    ["header-breaking name", { ...validSubmission, name: "Ada\r\nBcc: attacker@example.org" }],
  ])("rejects %s", (_label, payload) => {
    expect(parseContactSubmission(payload)).toEqual({ ok: false });
  });

  it("classifies a filled honeypot without exposing it as validation feedback", () => {
    expect(parseContactSubmission({ ...validSubmission, website: "https://spam.example" })).toEqual({ ok: false, spam: true });
  });
});
```

**Step 2: Run the test and verify RED**

Run:

```bash
npm test -- src/lib/contact/schema.test.ts
```

Expected: FAIL because `./schema` does not exist.

**Step 3: Implement the minimal schema**

In `src/lib/contact/schema.ts`:

- export a single `CONTACT_SUBJECTS` tuple matching the six existing select options;
- accept only UUID request IDs;
- trim human-readable fields;
- require name length 2–100 and reject CR/LF in the name;
- require a valid email no longer than 254 characters;
- require message length 10–4000;
- require `website` to be empty, returning `{ ok: false, spam: true }` when filled;
- return a discriminated union so callers cannot use unvalidated input.

Use this public shape:

```ts
export type ContactSubmission = {
  requestId: string;
  name: string;
  email: string;
  subject: (typeof CONTACT_SUBJECTS)[number];
  message: string;
  website: "";
};

export type ContactParseResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; spam?: true };
```

Do not return raw Zod error objects to the client.

**Step 4: Run the focused test and verify GREEN**

Run:

```bash
npm test -- src/lib/contact/schema.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add src/lib/contact/schema.ts src/lib/contact/schema.test.ts
git commit -m "feat: validate contact submissions"
```

## Task 3: Compose a Safe Plain-Text Inquiry

**Files:**

- Create: `src/lib/contact/email.ts`
- Create: `src/lib/contact/email.test.ts`

**Step 1: Write the failing behavior test**

```ts
import { expect, it } from "vitest";
import { buildContactEmail } from "./email";

it("builds a replyable plain-text consulting inquiry", () => {
  const email = buildContactEmail({
    requestId: "8f950d10-1fb3-4e14-89e2-ff34754b7d8c",
    name: "Ada Lovelace",
    email: "ada@example.org",
    subject: "Consulting Services",
    message: "We need help adopting AI responsibly.",
    website: "",
  });

  expect(email).toEqual({
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
```

**Step 2: Run the test and verify RED**

Run `npm test -- src/lib/contact/email.test.ts`.

Expected: FAIL because `buildContactEmail` does not exist.

**Step 3: Implement the pure formatter**

Implement exactly the tested plain-text shape. Do not render user content as HTML, interpolate the visitor's name into an email address, or place the visitor's email in `from`.

**Step 4: Run the test and verify GREEN**

Run `npm test -- src/lib/contact/email.test.ts`.

Expected: PASS.

**Step 5: Commit**

```bash
git add src/lib/contact/email.ts src/lib/contact/email.test.ts
git commit -m "feat: compose contact inquiry emails"
```

## Task 4: Add the Server-Side Contact Route

**Files:**

- Create: `src/app/api/contact/route.ts`
- Create: `src/app/api/contact/route.test.ts`
- Create: `src/lib/contact/config.ts`

**Step 1: Write failing Route Handler contract tests**

Export a `createContactHandler` factory only to substitute the outbound email boundary in tests. The production `POST` export must use the real Resend sender.

Test these observable cases with real `Request` objects:

1. a valid same-origin request calls the sender once and returns `201 {"ok":true}`;
2. malformed JSON or invalid fields return 400 without calling the sender;
3. a filled honeypot returns the same generic 201 response without sending;
4. payloads larger than 16 KiB return 413;
5. an origin other than `SITE_URL` returns 403;
6. sender failure returns 503 with a generic recoverable message and no provider details.

Use a small recording function for the outbound boundary, not a mock of the Resend SDK:

```ts
const sent: unknown[] = [];
const handler = createContactHandler({
  siteOrigin: "https://solomonsolutions.tech",
  sendEmail: async (message) => {
    sent.push(message);
  },
});
```

**Step 2: Run the route tests and verify RED**

Run `npm test -- src/app/api/contact/route.test.ts`.

Expected: FAIL because the handler does not exist.

**Step 3: Implement strict environment configuration**

In `src/lib/contact/config.ts`, read these server-only variables:

```text
RESEND_API_KEY
CONTACT_FROM_EMAIL
CONTACT_TO_EMAIL
SITE_URL
```

Validate lazily when the production handler executes, not at module import, so `next build` can compile without performing an external operation. `SITE_URL` must parse to an HTTPS origin outside development. Do not expose any variable with `NEXT_PUBLIC_`.

**Step 4: Implement the Route Handler**

In `src/app/api/contact/route.ts`:

- export `runtime = "nodejs"`;
- compare the request `Origin` to the configured `SITE_URL` origin;
- read the request as text and reject when `TextEncoder().encode(body).byteLength > 16 * 1024`;
- parse JSON inside a try/catch;
- use `parseContactSubmission` before constructing email content;
- instantiate `new Resend(apiKey)` on the server;
- send from the verified `CONTACT_FROM_EMAIL`, to `CONTACT_TO_EMAIL`, with the visitor address in `replyTo`;
- pass `{ idempotencyKey: `contact/${requestId}` }` as the second `resend.emails.send` argument;
- treat a Resend `error` as failure;
- never return or log the Resend email ID, request content, or provider error body.

The provider call should have this shape:

```ts
await resend.emails.send(
  {
    from: config.from,
    to: [config.to],
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.text,
  },
  { idempotencyKey: `contact/${submission.requestId}` },
);
```

**Step 5: Run the focused tests and verify GREEN**

Run:

```bash
npm test -- src/app/api/contact/route.test.ts src/lib/contact/schema.test.ts src/lib/contact/email.test.ts
```

Expected: PASS with no network requests.

**Step 6: Commit**

```bash
git add src/app/api/contact/route.ts src/app/api/contact/route.test.ts src/lib/contact/config.ts
git commit -m "feat: deliver contact inquiries server-side"
```

## Task 5: Replace the Misleading Frontend Submission Flow

**Files:**

- Modify: `src/components/sections/ContactSection.tsx:1-162`
- Create: `src/components/sections/ContactSection.test.tsx`

**Step 1: Write failing user-behavior tests**

Using React Testing Library and `userEvent`, verify:

1. a valid submission posts to `/api/contact` with selected values, an empty honeypot, and a UUID request ID;
2. the button says `Sending…` and is disabled while the request is pending;
3. a 201 response announces `Thanks — your message was sent. We'll reply within 24 hours.` and resets visible fields;
4. a non-201 response announces a recoverable error and preserves entered values;
5. a double click while pending causes only one request.

Stub `global.fetch` at the browser boundary; assert request URL, method, content type, and parsed JSON. This tests the component contract, not `fetch` itself.

**Step 2: Run the component test and verify RED**

Run `npm test -- src/components/sections/ContactSection.test.tsx`.

Expected: FAIL because the component still uses `mailto:` and has no real pending/error states.

**Step 3: Implement explicit form states**

Replace `submitted: boolean` with:

```ts
type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };
```

In `handleSubmit`:

- return immediately if already submitting;
- construct a stable request ID once per attempt with `crypto.randomUUID()`;
- post JSON to `/api/contact`;
- treat non-2xx responses and network failures as errors;
- reset the form only after confirmed success;
- do not use `window.location`, a success timeout, or optimistic success.

Add a honeypot input named `website` positioned off-screen, with `tabIndex={-1}` and `autoComplete="off"`. Keep it in the posted payload, but hide it from assistive technology.

The button text must reflect `Send Message`, `Sending…`, or `Message Sent`. Put the response message in a separate `<p role="status" aria-live="polite">`; do not put `aria-live` on the button.

**Step 4: Run the component test and verify GREEN**

Run `npm test -- src/components/sections/ContactSection.test.tsx`.

Expected: PASS.

**Step 5: Run the full local quality gate**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all commands exit 0.

**Step 6: Commit**

```bash
git add src/components/sections/ContactSection.tsx src/components/sections/ContactSection.test.tsx
git commit -m "feat: submit contact form without an email client"
```

## Task 6: Document Configuration and the Invoice-First Workflow

**Files:**

- Modify: `.gitignore`
- Create: `.env.example`
- Create: `docs/operations/contact-and-stripe.md`

**Step 1: Allow a credential-free example env file**

Add after `.env*` in `.gitignore`:

```gitignore
!.env.example
```

**Step 2: Create the environment template**

Create `.env.example` with placeholders only:

```dotenv
RESEND_API_KEY=re_replace_with_restricted_sending_key
CONTACT_FROM_EMAIL=Solomon Solutions <website@solomonsolutions.tech>
CONTACT_TO_EMAIL=hello@solomonsolutions.tech
SITE_URL=https://solomonsolutions.tech
```

Do not add Stripe keys: this release performs no website-side Stripe API call.

**Step 3: Write the operations runbook**

In `docs/operations/contact-and-stripe.md`, document:

- Resend domain verification and a sending-only API key;
- local, preview, and production environment-variable setup;
- an end-to-end contact smoke test using a unique subject token and inbox confirmation;
- the parent-company Stripe boundary versus HopeStack and SimplyPray;
- sandbox invoice settings: business identity, support email, branding, memo/footer defaults, payment methods, payment terms, reminder schedule, and test customer;
- the workflow: qualify lead → agree written scope/price → create customer → review draft invoice → send hosted invoice → confirm paid status;
- when to use a Payment Link and when to use Billing/Customer Portal;
- why Financial Connections remains deferred;
- a live-mode checklist explicitly requiring authorization;
- rollback: restore the email link only as an emergency fallback while keeping the visible delivery failure honest.

**Step 4: Check documentation and secrets**

Run:

```bash
git diff --check
git grep -nE '(s[k]_(live|test)_|r[k]_(live|test)_|r[e]_[A-Za-z0-9]{20,})' -- . ':!.env.example'
```

Expected: the diff check exits 0 and the secret scan prints no matches.

**Step 5: Commit**

```bash
git add .gitignore .env.example docs/operations/contact-and-stripe.md
git commit -m "docs: add contact and Stripe operations runbook"
```

## Task 7: Verify Delivery with Non-Production Credentials

**Files:**

- No committed files
- Local only: `.env.local`

**Step 1: Obtain external prerequisites**

Required user-controlled values:

- a Resend sending-only API key;
- a verified sender on `solomonsolutions.tech`, or Resend's test sender for the first local proof;
- an inbox Joshua can inspect.

Do not paste the key into chat, terminal output, a committed file, or a screenshot. Store it directly in `.env.local` or the deployment secret store.

**Step 2: Start the local application**

Run `npm run dev` and confirm Next.js starts without printing environment values.

**Step 3: Exercise failure boundaries before a real send**

Use the browser to verify required fields, invalid email handling, pending state, and a simulated missing-key delivery error. Confirm the form preserves content and offers direct email as a fallback.

**Step 4: Perform one authorized synthetic test send**

Submit a unique message such as `CONTACT-SMOKE-<timestamp>`. Confirm:

- the UI reports success only after the route returns 201;
- the inquiry reaches the test inbox;
- Reply-To is the synthetic visitor address;
- the email contains the exact subject and message once;
- resubmitting the identical request ID within 24 hours does not create a second email.

Do not use real client information.

**Step 5: Re-run all automated checks**

Run:

```bash
npm test
npm run lint
npm run build
git status --short --branch
```

Expected: tests, lint, and build pass; local environment files remain ignored.

## Task 8: Stage a Production Rate Limit Safely

**Files:**

- No source changes
- External draft only: Vercel Firewall configuration

**Step 1: Verify project linkage and current firewall state**

Run:

```bash
vercel project inspect
vercel firewall overview --json
vercel firewall rules list --expand
```

Expected: the exact Solomon Solutions project is identified. Stop if the project or team is ambiguous.

**Step 2: Stage a log-only contact rule**

Run:

```bash
vercel firewall rules add "Observe contact submissions" \
  --condition '{"type":"path","op":"eq","value":"/api/contact"}' \
  --condition '{"type":"method","op":"eq","value":"POST"}' \
  --action log \
  --yes
```

Expected: a draft rule is created; production behavior is unchanged.

**Step 3: Inspect the exact draft**

Run:

```bash
vercel firewall rules inspect "Observe contact submissions"
vercel firewall diff
```

Expected: only `POST /api/contact` matches and the action is log.

**Step 4: Stop for publication authorization**

The agent must not run `vercel firewall publish --yes`. Ask Joshua to publish the log-only draft, observe legitimate traffic, and only then propose a threshold. Start at 5–10 times the observed legitimate peak and test in preview before enforcing in production.

**Step 5: Record the rule and rollback**

Update `docs/operations/contact-and-stripe.md` in a later authorized change with the rule ID, final threshold, observation date, dashboard link, and command to revert to `log`. Do not claim rate limiting is active while the rule is only drafted or observed.

## Task 9: Validate the Parent-Company Stripe Sandbox

**Files:**

- Modify only if findings differ: `docs/operations/contact-and-stripe.md`

**Step 1: Confirm the account boundary**

Verify the active account is the parent-company sandbox named `Solomon Solutions LLC Joshua Kirk MBR % Joshua Kirk MBR sandbox`. Stop if the account is HopeStack, SimplyPray, or live mode.

**Step 2: Review invoice settings**

Inspect business profile, public details, branding, support email, statement descriptor, default payment methods, invoice footer/memo, payment terms, reminders, and customer email settings. Record gaps before changing account-wide settings.

**Step 3: Create one synthetic sandbox customer and draft invoice**

Use a clearly synthetic customer and Stripe test data. Confirm the hosted invoice page presents the intended brand and enabled payment methods. Do not send a live invoice or use real client data.

**Step 4: Complete the sandbox lifecycle**

Send the sandbox invoice to a controlled test inbox, pay with Stripe test credentials, and verify draft → open → paid status plus receipt delivery. Keep screenshots or IDs in local verification notes without committing personal data.

**Step 5: Decide whether website Stripe code is justified**

- If invoices are sufficient, add no Stripe SDK and close the release.
- If a fixed-price offering has approved price, terms, and fulfillment, create a sandbox Payment Link and plan a simple external CTA.
- If a recurring retainer exists, plan authenticated customer lookup plus Stripe's hosted Customer Portal as a separate security-reviewed feature.
- If a bank-data use case exists beyond collecting payment, write a separate Financial Connections data-use and consent design before coding.

## Final Verification Gate

Before presenting the branch as ready for review, run:

```bash
npm test
npm run lint
npm run build
git diff --check main...HEAD
git status --short --branch
```

Then manually verify:

- no `mailto:` navigation remains in the form submission path;
- the direct email link remains as an honest fallback;
- no secret or personal test data is committed;
- no Stripe SDK or secret exists without a corresponding server-side operation;
- the primary checkout remains untouched;
- external states are labeled separately as configured, drafted, tested, or pending.

Do not push, open a pull request, merge, deploy, publish firewall changes, activate Stripe live mode, or send a live invoice without explicit authorization.
