const KEILA_BASE = "https://newsletter.solomonsolutions.tech/forms";

type KeilaFormProps = {
  /** Keila form id, e.g. "nfrm_LNGLYZD3" */
  formId: string;
  /** Accessible iframe title */
  title: string;
  /** Min iframe height in px (default 480) */
  minHeight?: number;
  /** Wrapper classes (border/bg/rounding live with the caller) */
  className?: string;
};

/**
 * Embeds a self-hosted Keila signup form via iframe.
 * Keila sets `frame-ancestors *` + CSRF-off, so no headers are needed here.
 * If a CSP is ever added to next.config.ts, allowlist:
 *   frame-src https://newsletter.solomonsolutions.tech
 */
export default function KeilaForm({
  formId,
  title,
  minHeight = 480,
  className = "",
}: KeilaFormProps) {
  return (
    <div className={className}>
      <iframe
        src={`${KEILA_BASE}/${formId}`}
        title={title}
        loading="lazy"
        style={{ width: "100%", border: 0, minHeight }}
      />
    </div>
  );
}
