"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeStagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const serviceDetails = [
  {
    title: "Fiber Internet (FTTH / FTTB)",
    description: "Symmetrical speeds built for streaming, gaming, and remote work with proactive monitoring.",
    highlights: ["Up to 1 Gbps symmetrical", "IPv6 + static IP options", "Wi‑Fi 6 routers and mesh add-ons"],
  },
  {
    title: "Netplay Streaming",
    description: "Local streaming with Arabic and international titles, adaptive HD/4K quality, and family profiles.",
    highlights: ["Weekly new releases", "Downloads for offline viewing", "Profiles and parental controls"],
  },
  {
    title: "IPTV & Live TV",
    description: "Sports, news, and premium channels with restart TV, replay, and multi-device experiences.",
    highlights: ["Set-top boxes or smart TV apps", "Full EPG and catch-up", "Bundles with fiber for best quality"],
  },
  {
    title: "Connected Products",
    description: "Hardware we recommend, test, and support—Wi‑Fi 6 mesh, ONTs, and streaming devices.",
    highlights: ["Home and business Wi‑Fi design", "On-site installation and tuning", "Local warranty and support"],
  },
];

const plans = [
  {
    name: "Home Fiber",
    speed: "200–500 Mbps",
    bestFor: "Streaming, smart homes, gaming",
    includes: "Wi‑Fi 6 router options, basic IPTV, Netplay bundle ready",
  },
  {
    name: "Premium + Netplay",
    speed: "Up to 1 Gbps",
    bestFor: "4K families, creators, multi-room Wi‑Fi",
    includes: "Netplay + IPTV, mesh Wi‑Fi, priority support",
  },
  {
    name: "Business SLA",
    speed: "Custom",
    bestFor: "Offices, cafés, hospitality",
    includes: "Dual links, SLAs, managed Wi‑Fi and on-site support",
  },
];

const steps = [
  { title: "Check availability", text: "Share your location and service needs—fiber, Netplay, IPTV, or hardware." },
  { title: "Design & install", text: "Survey, cabling, ONT, Wi‑Fi tuning, and IPTV/Netplay setup for every screen." },
  { title: "Monitor & support", text: "24/7 NOC, bilingual support, proactive alerts, and priority field visits." },
];

export default function Services() {
  return (
    <div className="px-6 pb-20 pt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeStagger}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <p className="badge-soft text-xs">Services</p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Everything you need—fiber, Netplay, IPTV, and hardware.
          </h1>
          <p className="max-w-3xl text-slate-600">
            Lightwave delivers one connected experience: fast fiber, Netplay
            streaming like Netflix, IPTV for live channels, and products that
            make Wi‑Fi strong in every room.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="glass-panel border border-slate-200 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h2>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  Lightwave
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="glass-panel space-y-4 border border-slate-200 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-semibold text-slate-900">
              Plans and bundles
            </h2>
            <p className="text-sm text-slate-600">
              We combine fiber, Netplay, IPTV, and hardware to fit your home or
              business.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-slate-200 bg-brand-soft p-4"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {plan.name}
                </p>
                <p className="text-sm text-brand-primary">{plan.speed}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.bestFor}</p>
                <p className="mt-3 text-xs text-slate-500">{plan.includes}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Custom enterprise packages, dedicated links, and SLAs are available
            on request.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-panel grid gap-8 border border-slate-200 p-6 lg:grid-cols-5 lg:items-center lg:p-8">
          <div className="space-y-5 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-primary">
              Netplay in action
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/netplay/logo.png"
                alt="Netplay logo"
                className="h-12 w-auto"
              />
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-slate-900">
                  Stream it like TV, but local and faster.
                </p>
                <p className="text-sm text-slate-600">
                  Arabic and international movies, series, kids, and sports—optimized on the Lightwave network.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                Adaptive HD/4K with local caching for zero buffering
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                Restart TV and replay for live channels
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                Bundle with fiber and IPTV for the best quality
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="/en/contact"
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Ask for a Netplay bundle
              </a>
              <a
                href="/en/services"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                All plans
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card lg:col-span-3">
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-soft via-transparent to-white"
              aria-hidden="true"
            />
            <video
              src="/netplay/netplay-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="relative aspect-[16/9] w-full rounded-3xl pointer-events-none select-none"
              aria-label="Netplay demo playback"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-panel grid gap-8 border border-slate-200 p-6 lg:grid-cols-5 lg:items-center lg:p-8">
          <div className="space-y-5 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-primary">
              IPTV showcase
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/iptv/logo.png"
                alt="IPTV logo"
                className="h-12 w-auto"
              />
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-slate-900">
                  Live TV and sports that feel instantaneous.
                </p>
                <p className="text-sm text-slate-600">
                  Crisp channels, fast zapping, restart TV, and replay—streamed over Lightwave fiber for smooth live viewing.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                Full EPG with restart and catch-up for key channels
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                Sports, news, and entertainment with HD/4K options
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                Works on set-top boxes or smart TV apps
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="/en/contact"
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Bundle IPTV with fiber
              </a>
              <a
                href="/en/services"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                All plans
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card lg:col-span-3">
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-soft via-transparent to-white"
              aria-hidden="true"
            />
            <video
              src="/iptv/iptv-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="relative aspect-[16/9] w-full rounded-3xl pointer-events-none select-none"
              aria-label="IPTV demo playback"
            />
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="glass-panel border border-slate-200 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand-primary">
                  {index + 1}
                </span>
                <p className="text-lg font-semibold text-slate-900">
                  {step.title}
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="glass-panel relative overflow-hidden grid gap-6 border border-slate-200 p-6 md:grid-cols-5 md:items-center">
          <div className="pointer-events-none absolute inset-0 z-0 pattern-strong" aria-hidden />
          <div className="relative z-10 space-y-3 md:col-span-3">
            <p className="badge-soft text-xs">Serving Syria</p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Coverage that grows every quarter.
            </h3>
            <p className="text-slate-600">
              From Idlib HQ out to Aleppo and Hama, we expand routes, caches, and field teams to keep installs fast and uptime high.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/en/contact"
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Check coverage
              </a>
              <a
                href="/en/about"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                About our network
              </a>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200">
            <img src="/support/map.png" alt="Coverage map" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/15 to-transparent" aria-hidden />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-panel flex flex-col gap-4 border border-slate-200 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="badge-soft text-xs">Need guidance?</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
              Let us recommend the right bundle.
            </h3>
            <p className="text-slate-600">
              Tell us how you use the internet and we will design fiber,
              Netplay, and IPTV that fit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/en/contact"
              className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Talk to Lightwave
            </a>
            <a
              href="/en/about"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                About our network
              </a>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
