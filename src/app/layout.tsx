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
  title: "Solomon Solutions | Wisdom-Driven Technology for Churches & Leaders",
  description:
    "We cultivate wisdom and help churches, leaders, and individuals live and lead with clarity, faithfulness, and lasting impact for the glory of God.",
  keywords: [
    "church technology",
    "ministry tools",
    "church consulting",
    "prayer app",
    "counseling CRM",
    "church systems",
    "Solomon Solutions",
  ],
  openGraph: {
    title: "Solomon Solutions | Wisdom-Driven Technology",
    description:
      "Tools, systems, and guidance for churches and leaders seeking clarity and lasting impact.",
    url: "https://solomonsolutions.tech",
    siteName: "Solomon Solutions",
    type: "website",
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
