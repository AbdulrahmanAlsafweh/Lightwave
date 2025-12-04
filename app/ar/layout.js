import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Noto_Sans_Arabic } from "next/font/google";

const arabicSans = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-sans" });
const arabicDisplay = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-display" });

export const metadata = {
  title: "لايت ويف | إنترنت ألياف، نت بلاي و IPTV في سوريا",
  description: "لايت ويف تقدم إنترنت ألياف، نت بلاي للبث، IPTV ومنتجات متصلة للمنازل والشركات في سوريا.",
};

const navLinksAr = [
  { name: "الرئيسية", href: "/ar" },
  { name: "الخدمات", href: "/ar/services" },
  { name: "من نحن", href: "/ar/about" },
  { name: "تواصل معنا", href: "/ar/contact" },
];

const footerStringsAr = {
  brandName: "لايت ويف",
  brandTagline: "إنترنت ألياف · نت بلاي · IPTV",
  blurb: "نربط سوريا بإنترنت ألياف موثوق، بث محلي عبر نت بلاي، IPTV، ومنتجات متكاملة للمنزل والعمل.",
  exploreTitle: "تصفح",
  exploreLinks: [
    { label: "الرئيسية", href: "/ar" },
    { label: "الخدمات", href: "/ar/services" },
    { label: "من نحن", href: "/ar/about" },
    { label: "تواصل معنا", href: "/ar/contact" },
  ],
  servicesTitle: "الخدمات",
  services: ["إنترنت الألياف (FTTH)", "نت بلاي للبث", "IPTV والقنوات المباشرة", "أجهزة الراوتر والواي فاي"],
  contactTitle: "تواصل",
  contact: ["هاتف: ‎+963 (0)11 555 1234", "البريد: hello@lightwave.sy", "المقر: دمشق، سوريا", "دعم 24/7 · عربي وإنكليزي"],
  rightsText: `© ${new Date().getFullYear()} لايت ويف. جميع الحقوق محفوظة.`,
};

const footerBadgesAr = ["دعم 24/7", "اتصال بزمن تأخير منخفض", "خطط أعمال و SLA", "نت بلاي محلي"];

export default function ArabicLayout({ children }) {
  return (
    <div dir="rtl" lang="ar" className={`${arabicSans.variable} ${arabicDisplay.variable}`}>
      <Navbar
        links={navLinksAr}
        ctaLabel="اشترك الآن"
        badgeLabel="نخدم سوريا"
        tagline="إنترنت ألياف · نت بلاي · IPTV"
        brandName="لايت ويف"
        contactHref="/ar/contact"
        showLocaleSwitch
      />
      <main className="relative z-10">{children}</main>
      <Footer strings={footerStringsAr} badgeSet={footerBadgesAr} />
    </div>
  );
}
