import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
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

const SITE_URL = "https://solomonsolutions.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Solomon Solutions | Software, Systems & Counsel for Churches",
    template: "%s | Solomon Solutions",
  },
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
    "ministry software",
    "Solomon Solutions",
  ],
  authors: [{ name: "Joshua Kirk" }],
  creator: "Solomon Solutions LLC",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "Solomon Solutions | Software, Systems & Counsel for Churches",
    description:
      "Built by a pastor, engineered for the church. Prayer, care, and AI tools for ministry, plus the systems and counsel to make them work together.",
    url: SITE_URL,
    siteName: "Solomon Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/solomon-logo.png",
        width: 1000,
        height: 1000,
        alt: "Solomon Solutions logo: interlocked SS monogram in navy and gold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solomon Solutions | Software, Systems & Counsel for Churches",
    description:
      "Built by a pastor, engineered for the church. Prayer, care, and AI tools for ministry.",
    images: ["/solomon-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Solomon Solutions LLC",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/solomon-logo.png`,
      },
      slogan: "Built by a pastor. Engineered for the church.",
      description:
        "Solomon Solutions builds ministry software (Simply Pray, HopeStack, HeartwardChat, The Wisdom Walk) and provides systems and AI consulting for churches and ministry leaders.",
      email: "hello@solomonsolutions.tech",
      founder: {
        "@type": "Person",
        name: "Joshua Kirk",
        jobTitle: "Pastor & Founder",
      },
      sameAs: [
        "https://simplypray.io",
        "https://hopestack.tech",
        "https://heartwardchat.com",
        "https://thewisdomwalk.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Solomon Solutions",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#consulting`,
      name: "Church Systems & AI Consulting",
      serviceType: "Ministry technology consulting",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Strategic consulting for pastors, churches, and ministry leaders: church systems and discipleship design, leadership structure, technology integration, and private open-source LLM deployment.",
      areaServed: "US",
      url: `${SITE_URL}/#consulting`,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#simplypray`,
      name: "Simply Pray",
      url: "https://simplypray.io",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      description:
        "A guided iPhone prayer app built on the ACTS model: Adoration, Confession, Thanksgiving, Supplication. Scripture-rooted, distraction-free, private by default.",
      author: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#hopestack`,
      name: "HopeStack",
      url: "https://hopestack.tech",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The counseling platform built for church care teams: intake, scheduling, notes, and supervision in one secure, HIPAA-aligned workspace.",
      author: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#heartwardchat`,
      name: "HeartwardChat",
      url: "https://heartwardchat.com",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      description:
        "AI-guided discipleship conversations rooted in Scripture, for the questions people carry between Sundays.",
      author: { "@id": `${SITE_URL}/#organization` },
    },
  ],
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
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          // Static, locally-defined JSON-LD; escape "<" so the payload can
          // never terminate the script element (per Next.js guidance).
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <noscript>
          {/* Motion ships entrance states as inline styles; without JS,
              force everything visible. */}
          <style>{`
            [style*="opacity:0"], [style*="opacity: 0"] { opacity: 1 !important; }
            [style*="translateY"], [style*="scaleX"] { transform: none !important; }
            [style*="clip-path"] { clip-path: none !important; }
          `}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
