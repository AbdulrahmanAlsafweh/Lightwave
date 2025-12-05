import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const navLinksEn = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const footerStringsEn = {
  brandName: "Lightwave",
  brandTagline: "Fiber • Netplay • IPTV • Landline",
  blurb:
    "Connecting Syria with resilient fiber, local streaming through Netplay, IPTV, and reliable connected products.",
  exploreTitle: "Explore",
  exploreLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  servicesTitle: "Services",
  services: [
    "Fiber internet (FTTH)",
    "Netplay streaming",
    "IPTV and live TV",
    "Routers & Wi-Fi systems",
  ],
  contactTitle: "Contact",
  contact: [
    "Phone: +963 (0)11 555 1234",
    "Email: hello@lightwave.sy",
    "HQ: Damascus, Syria",
    "Support: 24/7 • Arabic & English",
  ],
  rightsText: `© ${new Date().getFullYear()} Lightwave. All rights reserved.`,
};

const footerBadgesEn = ["Low-latency fiber", "SLA for business", "Netplay originals"];

export default function EnglishLayout({ children }) {
  return (
    <>
      <Navbar
        links={navLinksEn}
        ctaLabel="Get connected"
        badgeLabel="Serving Syria"
        tagline="Fiber • Netplay • IPTV"
        brandName="Lightwave"
        contactHref="/contact"
        showLocaleSwitch
      />
      <main className="relative z-10">{children}</main>
      <Footer strings={footerStringsEn} badgeSet={footerBadgesEn} />
    </>
  );
}
