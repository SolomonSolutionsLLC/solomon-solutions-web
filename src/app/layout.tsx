import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solomonsolutions.tech"),
  title: "Solomon Solutions | Software, Systems & Counsel for Churches",
  description:
    "Built by a pastor, engineered for the church. Solomon Solutions creates prayer, care, and AI tools for ministry, plus the systems and strategic counsel to make them work together.",
  keywords: [
    "church technology",
    "ministry tools",
    "church consulting",
    "prayer app",
    "biblical counseling software",
    "private AI for churches",
    "church systems",
    "Solomon Solutions",
  ],
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "Solomon Solutions | Software, Systems & Counsel for Churches",
    description:
      "Built by a pastor, engineered for the church. Prayer, care, and AI tools for ministry, plus the systems and counsel to make them work together.",
    url: "https://solomonsolutions.tech",
    siteName: "Solomon Solutions",
    type: "website",
    images: ["/solomon-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
