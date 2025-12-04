"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-glow" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-glow">
            <Image src="/assets/logo.png" alt="Lightwave logo" fill sizes="48px" className="object-contain p-1.5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-slate-900">Lightwave</span>
            <span className="text-xs text-slate-500">Fiber • Netplay • IPTV</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-slate-600 transition hover:text-slate-900"
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-brand-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="badge-soft text-[11px]">Serving Syria</span>
          <Link
            href="/contact"
            className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get connected
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-brand-primary md:hidden"
        >
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-slate-800 transition ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-slate-800 transition ${
                open ? "top-1/2 -rotate-45" : "top-2"
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 shadow-lg backdrop-blur">
              <div className="flex flex-col gap-4">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-semibold transition ${
                        active ? "text-brand-primary" : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="mt-2 w-full rounded-xl bg-brand-primary px-4 py-3 text-center font-semibold text-white shadow-glow"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
