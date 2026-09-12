# Solomon Solutions Contact and Stripe Foundation Design

**Date:** 2026-09-12
**Status:** Approved
**Business:** SolomonSolutions.tech — AI adoption consulting for businesses and non-profits

## Context

The existing contact form does not deliver a message to Solomon Solutions. It constructs a `mailto:` URL, opens the visitor's local email application, and immediately presents a success-like state. Delivery therefore depends on the visitor having a configured email client and completing a separate send action.

Stripe is organized under the SolomonSolutions organization with distinct accounts for the parent consulting company and its products. The ChatGPT Stripe app is connected only to the parent-company sandbox, not to the HopeStack or SimplyPray accounts and not to live mode.

The immediate business need is to turn qualified consulting conversations into paid engagements without building a customer account system before it is useful.

## Decision

Adopt an invoice-first workflow:

1. A visitor submits the website contact form directly to a server endpoint.
2. Solomon Solutions qualifies the engagement through email or a strategy call.
3. Solomon Solutions creates and emails a Stripe-hosted invoice from the parent-company Stripe account.
4. The client pays on Stripe's hosted invoice page and receives Stripe's receipt and invoice history by email.
5. Add Payment Links only for clearly defined, fixed-price offerings.
6. Add authenticated customer billing pages only when recurring retainers or a real application account justify them.

This keeps payment data off the website, avoids premature authentication and billing UI, and matches the custom nature of consulting work.

## Contact Form Architecture

The browser submits structured JSON to a same-origin Next.js server endpoint. The server:

- validates the name, email, subject, and message;
- rejects honeypot submissions and malformed or oversized input;
- applies a durable rate limit keyed by a privacy-conscious client identifier;
- sends the inquiry to `hello@solomonsolutions.tech` through a transactional email provider;
- sets the visitor's email as `Reply-To`, while using a verified Solomon Solutions sender;
- returns a minimal success or error response without exposing provider details.

The frontend shows distinct idle, submitting, success, validation-error, and delivery-error states. It only announces success after the server confirms that the email provider accepted the message. The form remains keyboard accessible, preserves entered data after a failed attempt, and prevents accidental duplicate submissions while a request is active.

Initial spam controls are server-side validation, a visually hidden honeypot, origin checks, payload limits, and a durable rate limit. A challenge widget is a later escalation only if observed abuse warrants it.

## Stripe Workflow

### Custom consulting engagements

Use Stripe Invoicing from the parent-company account. Create the customer and invoice in the Stripe Dashboard after scope and price are agreed, then email the Stripe-hosted invoice. Enable card and eligible bank-payment methods in Stripe rather than implementing payment fields on SolomonSolutions.tech.

### Fixed-price services

Use Stripe Payment Links when a service has a stable description, price, refund policy, and fulfillment process. A Payment Link may be presented as a normal call-to-action on the site. Stripe hosts checkout; the browser never receives a secret API key.

### Recurring retainers

Use Stripe Billing for future retainers. When recurring billing becomes active, provide Stripe's hosted Customer Portal for payment-method changes, invoice history, and subscription management. Customer identity must be verified server-side before creating a portal session. A full custom billing dashboard is out of scope.

### Financial Connections

Do not add a custom Financial Connections flow in the first release. Ordinary invoice or Checkout bank payments can use Stripe's hosted flows. Add Financial Connections only if Solomon Solutions later needs a client's permissioned bank-account data for a defined business purpose beyond accepting a payment.

## Account and Environment Boundaries

- Develop and test only in a dedicated parent-company Stripe sandbox.
- Keep HopeStack and SimplyPray isolated in their own Stripe accounts.
- Do not perform live-mode setup, send live invoices, or move money during implementation.
- Use least-privilege restricted server keys for any future Stripe API calls.
- Store secret and webhook-signing keys only in server-side environment variables; never prefix them with `NEXT_PUBLIC_` or include them in source control.
- Use separate webhook endpoints and signing secrets for sandbox and live environments.

The first invoice-first release does not require a Stripe secret key in the website because invoices are created in the Dashboard and payment happens on Stripe-hosted pages. API keys should be introduced only alongside a specific server-side Stripe operation.

## Security and Reliability

- Never collect card or bank credentials in the Solomon Solutions frontend.
- Verify Stripe webhook signatures against the raw request body before trusting an event.
- Treat webhook delivery as asynchronous, duplicateable, and potentially out of order; persist event IDs before adding webhook-driven business actions.
- Use idempotency keys for future server-initiated Stripe writes.
- Avoid logging contact messages, API secrets, payment details, or full webhook bodies.
- Do not enable automatic tax until the relevant tax registrations and business rules are confirmed.
- Keep all third-party credentials in local and deployment secret stores.

## Testing and Acceptance

Contact-form acceptance requires proof that:

- valid submissions reach the configured inbox in a non-production test;
- invalid, oversized, honeypot, and rate-limited submissions are rejected;
- provider failures produce a recoverable error without falsely announcing success;
- duplicate clicks create at most one active request;
- keyboard and screen-reader status behavior is preserved.

Stripe acceptance begins in sandbox and uses Stripe-hosted test invoices or Payment Links. Live-mode activation is a separate, explicit operational step after business identity, payout bank account, branding, statement descriptor, invoice defaults, support details, and tax settings are reviewed.

## Rollout

1. Replace the `mailto:` form with reliable server-side delivery and verify it end to end.
2. Configure and test the parent-company Stripe sandbox's invoice defaults and hosted payment experience.
3. Document the manual invoice workflow for qualified consulting clients.
4. Add a fixed-price Payment Link only after an offering and price are approved.
5. Add Billing and the hosted Customer Portal only when the first recurring retainer requires them.
6. Add Financial Connections only for an approved bank-data use case.

## Non-goals

- A custom sign-in system or client dashboard
- On-site card or bank-entry fields
- Cross-account money movement between the parent, HopeStack, and SimplyPray
- Live invoices, charges, payouts, or production deployment
- A custom Financial Connections flow without a defined data-use requirement
