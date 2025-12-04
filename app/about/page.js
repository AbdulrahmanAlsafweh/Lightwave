"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeStagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const pillars = [
  { title: "Built for Syria", text: "Local teams, bilingual support, and infrastructure tuned for regional realities." },
  { title: "Uninterrupted by design", text: "Redundant paths, monitored caches for Netplay, and SLAs for businesses." },
  { title: "Human support", text: "Engineers who show up, explain clearly, and close the loop until you are online." },
];

const milestones = [
  { year: "2025", detail: "Lightwave launches from Idlib HQ with resilient fiber backbones built for Syria." },
  { year: "2026", detail: "Netplay and IPTV nodes activated across northwest Syria with local caching." },
  { year: "2027", detail: "Enterprise SLAs and Wi‑Fi design for businesses in Idlib, Aleppo, and Hama." },
  { year: "2028", detail: "Expanded peering and additional cache sites to improve 4K streaming reliability." },
];

const coverage = [
  { title: "Idlib HQ & surroundings", text: "Primary hub with priority response teams and quickest installs." },
  { title: "Aleppo & Hama", text: "Regional rollout with monitored caches and dedicated field crews." },
  { title: "Across Syria", text: "Managed links, failover, and SLAs for offices, hospitality, and campuses." },
];

export default function About() {
  return (
    <div className="px-6 pb-20 pt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeStagger}
        className="mx-auto max-w-5xl space-y-12"
      >
        <motion.div variants={fadeUp} className="glass-panel relative overflow-hidden border border-slate-200 p-8 shadow-card">
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-brand-soft blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-32 w-32 rounded-full bg-brand-light/50 blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            <p className="badge-soft text-xs">About Lightwave</p>
            <h1 className="text-4xl font-semibold text-slate-900">Connecting Syria with fiber, streaming, and care.</h1>
            <p className="max-w-3xl text-slate-600">
              Lightwave is a Syrian-born provider delivering fiber internet, Netplay streaming, IPTV, and connected products. We build
              redundancy into the network, hire locally, and support every install with people who pick up the phone.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Founded", value: "2025" },
                { label: "Avg. uptime", value: "99.96%" },
                { label: "Support", value: "24/7 bilingual" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-brand-soft p-4">
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Why we built Lightwave</h2>
            <p className="text-slate-600">
              Reliable internet unlocks opportunity. We created Lightwave to deliver a network that is resilient inside Syria, paired
              with entertainment and IPTV services that respect the way people actually watch. Every deployment is designed, installed,
              and supported locally.
            </p>
            <div className="space-y-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="glass-panel border border-slate-200 p-4">
                  <p className="text-lg font-semibold text-slate-900">{pillar.title}</p>
                  <p className="text-sm text-slate-600">{pillar.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel space-y-4 border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.year} className="flex gap-3 rounded-xl border border-slate-200 bg-brand-soft p-4">
                  <div className="text-sm font-semibold text-brand-primary">{item.year}</div>
                  <p className="text-sm text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="glass-panel space-y-4 border border-slate-200 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-semibold text-slate-900">Coverage today</h2>
            <p className="text-sm text-slate-600">Expanding footprints every quarter with new fiber routes and caches.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {coverage.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">{area.title}</p>
                <p className="mt-1 text-sm text-slate-600">{area.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Tell us your address and we will confirm coverage or build a path to connect you.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
