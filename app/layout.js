import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Lightwave | Fiber Internet, Netplay & IPTV in Syria",
  description:
    "Lightwave delivers fiber internet, Netplay streaming, IPTV, and connected products for homes and businesses across Syria.",
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
