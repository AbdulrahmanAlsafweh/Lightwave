import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lightwave.sy";
const metadataBaseUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
const baseMetadata = {
  title: "Lightwave | Fiber Internet, Netplay & IPTV in Syria",
  description:
    "Lightwave delivers fiber internet, Netplay streaming, IPTV, and connected products for homes and businesses across Syria.",
};

export const metadata = {
  ...baseMetadata,
  metadataBase: new URL(metadataBaseUrl),
  keywords: [
    "Lightwave",
    "fiber internet Syria",
    "FTTH Syria",
    "Netplay streaming",
    "IPTV Syria",
    "low latency internet",
    "business internet Syria",
    "mesh WiFi",
    "broadband Syria",
  ],
  openGraph: {
    ...baseMetadata,
    url: metadataBaseUrl,
    siteName: "Lightwave",
    locale: "en_US",
    alternateLocale: ["ar_SY"],
    type: "website",
    images: ["/hero/hero-bg.png"],
  },
  twitter: {
    card: "summary_large_image",
    ...baseMetadata,
    images: ["/hero/hero-bg.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-SY": "/ar",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-white text-slate-800 antialiased">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-wave-fade opacity-70" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-light" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
