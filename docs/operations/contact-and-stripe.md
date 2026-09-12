# Contact and Stripe operations runbook

## Contact email

Verify the `solomonsolutions.tech` sending domain in Resend (DNS records must
be present and verified before sending). Create a sending-only, restricted
credential for the site; do not use an account-wide key. Keep credentials out
of source control, screenshots, logs, and tickets.

Configure the four variables in `.env.example` separately in local `.env.local`,
Vercel Preview, and Vercel Production. Enter values through the relevant
secret/environment-variable UI or local secret store; never display secret
values in command output or documentation. Use the production domain and
recipient only in Production; local and Preview testing must use controlled,
synthetic test content and an approved test inbox.

### Synthetic contact smoke test

1. Submit the real contact form with synthetic details and a unique subject
   token (for example, `CONTACT-SMOKE-20260912-<random>`).
2. Confirm the Resend event/API reports the message accepted, recording only
   the token, timestamp, and non-secret status.
3. Confirm the same token in the controlled test inbox and verify sender,
   recipient, subject, body, and reply-to behavior.
4. Record provider-accepted and inbox-delivered as separate results. Provider
   acceptance is not proof of inbox delivery; investigate bounces, blocks, or
   delays independently.

## Stripe sandbox boundary

Any Stripe work in this release is limited to the exact parent-company Stripe
sandbox account: `Solomon Solutions LLC Joshua Kirk MBR % Joshua Kirk MBR sandbox`.
Stop immediately if a request, screen, key, customer, invoice, or action is
associated with HopeStack, SimplyPray, or live mode.

In that sandbox, review invoice defaults before use:

- business identity and support email;
- branding, memo, and footer defaults;
- enabled payment methods;
- payment terms and reminder schedule;
- a synthetic test customer.

The operating workflow is: qualify the lead -> agree written scope and price
-> create the customer -> review the draft invoice -> send the hosted invoice
-> confirm it is paid.

Use a Payment Link for a repeatable, fixed-price self-service purchase with no
lead-specific invoice workflow. Use Billing and the hosted Customer Portal for
an identified customer, invoices/subscriptions, payment-method management, or
customer self-service. Portal identity verification is future server-side work
and is not established by this runbook. Defer Financial Connections until an
approved data-use and consent case exists.

## Live-mode gate and operational limits

Live mode requires explicit Joshua authorization and a fresh review of identity,
support details, branding, payment methods, terms, reminders, customer data,
and reconciliation. This task performs no deploy, firewall publish, live
invoice, or money movement.

Vercel Firewall rate limiting is not active or production-ready until it is
separately authorized, observed, configured, and enforced.

If the mail provider is unavailable, the emergency fallback is a `mailto:`
link only. The UI must say honestly that this opens the user's mail client and
does not claim that a message was delivered.

No Stripe SDK or Stripe key is needed: this release performs no website-side
Stripe operation.
