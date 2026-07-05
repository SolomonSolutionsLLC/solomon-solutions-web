/**
 * Paper-grain texture overlay. Pure SVG feTurbulence noise inlined as a data
 * URI: no network request, tiles seamlessly, costs nothing at runtime.
 * Use `tone="dark"` on navy/charcoal sections (lighter grain, screen blend).
 */
export default function GrainOverlay({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const opacity = tone === "dark" ? "opacity-[0.05]" : "opacity-[0.035]";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${opacity} ${
        tone === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
      } ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "160px 160px",
      }}
    />
  );
}
