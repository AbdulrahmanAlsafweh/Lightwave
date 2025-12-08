"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeStagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    title: "Fiber Internet",
    badge: "FTTH",
    description:
      "Symmetrical speeds up to 1 Gbps for homes and offices with low latency routing.",
    points: [
      "Wi‑Fi 6 routers & mesh",
      "IPv6 + static IP options",
      "Pro install and tuning",
    ],
    image: "/services/fiber.png",
  },
  {
    title: "Netplay Streaming",
    badge: "VOD",
    description:
      "Our Netflix-style platform with Arabic and international movies, series, kids, and originals.",
    points: ["Adaptive HD/4K", "Family profiles", "Fresh titles weekly"],
    image: "/services/netplay.png",
  },
  {
    title: "IPTV & Live TV",
    badge: "IPTV",
    description:
      "Sports, news, and premium TV with restart, replay, and multi-device apps.",
    points: [
      "Catch-up & EPG",
      "Local + global channels",
      "Set-top or smart TV apps",
    ],
    image: "/services/iptv.png",
  },
  {
    title: "Connected Products",
    badge: "Store",
    description:
      "Wi‑Fi mesh kits, ONTs, streaming boxes, and business routers—tested for Lightwave.",
    points: ["Coverage design", "Managed Wi‑Fi options", "Local warranty"],
    image: "/services/hardware.png",
  },
];

const metrics = [
  { label: "Network uptime", value: "99.96%" },
  { label: "Cities & towns", value: "12+" },
  { label: "Support", value: "24/7" },
  { label: "Install time", value: "<48 hrs" },
];

const products = [
  { name: "Wi‑Fi 6 Mesh Kits", detail: "Seamless roaming and app control for whole-home coverage." },
  { name: "Optical Network Terminals", detail: "Secure ONTs tuned for Lightwave fiber." },
  { name: "Netplay TV Box", detail: "Access Netplay, IPTV, and casting in one device." },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 z-0 pattern-strong"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-6 top-6 h-56 w-56 rounded-full bg-brand-soft blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-brand-light/50 blur-3xl"
          aria-hidden="true"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeStagger}
          className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
            >
              Fiber optic internet in Syria
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                Lightwave. Bright, fast fiber that powers Netplay, IPTV, and
                everything you stream.
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                A white, modern experience built on reliable fiber, low latency
                routes, and local support. Pair your internet with Netplay
                streaming, IPTV, and connected hardware—all in one place.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/en/contact"
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Check availability
              </Link>
              <Link
                href="/en/services"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                Explore services
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {metrics.map((item) => (
                <div key={item.label} className="glass-panel px-4 py-3 text-sm">
                  <p className="text-2xl font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel relative overflow-hidden border border-slate-200 p-0 shadow-card"
          >
            <div className="relative">
              <Image
                src="/hero/hero-bg.png"
                alt="Lightwave fiber hero"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-600">Live network health</p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Operational
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs text-slate-500">Fiber latency</p>
                    <p className="text-2xl font-semibold text-slate-900">
                      4.8 ms
                    </p>
                    <p className="text-xs text-slate-500">
                      Idlib core to local IX
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs text-slate-500">Netplay CDN</p>
                    <p className="text-2xl font-semibold text-slate-900">12</p>
                    <p className="text-xs text-slate-500">Local cache nodes</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="badge-soft">99.96% uptime</span>
                  <span className="badge-soft">Pro installs</span>
                  <span className="badge-soft">Syria-wide rollout</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="badge-soft text-xs">All in one</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Services for homes and businesses
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Fast fiber, Netplay streaming, IPTV for live events, and
                connected hardware—designed to work together under one brand.
              </p>
            </div>
            <Link
              href="/en/services"
              className="text-sm font-semibold text-brand-primary hover:text-brand-secondary"
            >
              View detailed services →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="glass-panel relative overflow-hidden border border-slate-200 p-0"
              >
                <div className="grid gap-0 md:grid-cols-5">
                  <div className="relative md:col-span-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={700}
                      className="h-full w-full rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-2xl object-cover md:rounded-tr-none md:rounded-br-2xl"
                    />
                  </div>
                  <div className="space-y-3 p-6 md:col-span-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-brand-primary">
                        {service.badge}
                      </p>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                        Lightwave
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                    <div className="grid gap-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <span className="h-2 w-2 rounded-full bg-brand-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-card md:grid-cols-2">
          <div className="space-y-4">
            <p className="badge-soft text-xs">Netplay & IPTV</p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Streaming made local with Netplay.
            </h2>
            <p className="text-slate-600">
              Watch on any device with adaptive streaming, regional caching, and
              bundles that pair Netplay with Lightwave fiber and IPTV. Restart
              live channels, stream originals, and keep the family connected.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">Netplay</p>
                <p>Movies • Series • Kids</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">IPTV</p>
                <p>Live TV • Sports • News</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="badge-soft">No throttling</span>
              <span className="badge-soft">Local CDN</span>
              <span className="badge-soft">Parental controls</span>
            </div>
            <Link
              href="/en/services"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Discover plans
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="glass-panel relative overflow-hidden border border-slate-200 p-6">
            <div
              className="absolute right-6 top-6 h-20 w-20 animate-float rounded-full bg-brand-soft"
              aria-hidden
            />
            <div
              className="absolute -left-10 bottom-6 h-24 w-24 animate-float rounded-full bg-brand-light/50"
              aria-hidden
            />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-sm">
                <p className="text-slate-600">Tonight on Netplay</p>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs text-brand-primary">
                  Streaming
                </span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-900">
                    Cinema Picks
                  </p>
                  <span className="text-xs text-slate-500">HD / 4K</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Hand-curated Arabic and international titles updated weekly.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-700">
                  <div className="rounded-lg border border-slate-200 bg-brand-soft p-3">
                    <p className="font-semibold text-slate-900">Drama</p>
                    <p>New episodes</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-brand-soft p-3">
                    <p className="font-semibold text-slate-900">Kids</p>
                    <p>Safe profiles</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-brand-soft p-3">
                    <p className="font-semibold text-slate-900">Sports</p>
                    <p>Live + replay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="badge-soft text-xs">Coverage & reliability</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                Engineered for uptime across Syria
              </h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                Redundant paths, regional caching for Netplay, proactive
                monitoring, and field teams in major cities to keep you online.
              </p>
            </div>
            <Link
              href="/en/contact"
              className="text-sm font-semibold text-brand-primary hover:text-brand-secondary"
            >
              Talk with our team →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Redundant routes",
                text: "Primary and secondary fiber paths with automated failover for critical services.",
              },
              {
                title: "Local field teams",
                text: "Installers and support across Idlib, Aleppo, Hama, and expanding inside Syria.",
              },
              {
                title: "Proactive monitoring",
                text: "24/7 NOC with real-time alerts, packet loss tracking, and Netplay cache health.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-panel border border-slate-200 p-5"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-card md:grid-cols-2">
          <div className="space-y-3">
            <p className="badge-soft text-xs">Hardware store</p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Products that keep every room online.
            </h2>
            <p className="text-slate-600">
              Choose Wi‑Fi 6 mesh kits, streaming boxes for Netplay and IPTV, or
              business routers—tested and supported by Lightwave.
            </p>
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-brand-soft p-4"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      {product.name}
                    </p>
                    <p className="text-sm text-slate-600">{product.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden border border-slate-200 p-6">
            <div
              className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-brand-soft"
              aria-hidden="true"
            />
            <div
              className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-brand-light/50"
              aria-hidden="true"
            />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">Installation</p>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  Professionals
                </span>
              </div>
              <p className="text-2xl font-semibold text-slate-900">
                From fiber drop to in-home Wi‑Fi, we handle it.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  Survey, routing, and clean cabling
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  ONT and Wi‑Fi tuning for every room
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  IPTV and Netplay setup on TVs and phones
                </li>
              </ul>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">
                    Business projects
                  </p>
                  <p>
                    Custom SLAs, dual links, and managed Wi‑Fi for offices,
                    cafés, and hospitality.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src="/products/multiple-products.png"
                    alt="Lightwave products"
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden  rounded-3xl border border-slate-200 bg-gradient-to-r from-white via-brand-soft to-white px-6 py-10 shadow-card sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 z-0 pattern-strong"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="badge-soft text-xs">Ready to move</p>
              <h3 className="text-3xl font-semibold text-slate-900">
                Let Lightwave build your connection.
              </h3>
              <p className="max-w-xl text-slate-600">
                Tell us where you are, and we will schedule a quick site check,
                confirm coverage, and activate the right plan.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/en/contact"
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Contact Lightwave
              </Link>
              <Link
                href="/en/about"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                About our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
