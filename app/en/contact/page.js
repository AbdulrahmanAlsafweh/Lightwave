"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  service: "Fiber Internet",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="px-6 pb-20 pt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mx-auto max-w-6xl space-y-10"
      >
        <div className="space-y-3">
          <p className="badge-soft text-xs">Contact</p>
          <h1 className="text-4xl font-semibold text-slate-900">Tell us where you are and what you need.</h1>
          <p className="max-w-3xl text-slate-600">
            We will confirm coverage, recommend the right bundle, and schedule installation. Support is available 24/7 in Arabic and
            English.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="glass-panel space-y-3 border border-slate-200 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Call or visit</h2>
              <p className="text-sm text-slate-600">
                Phone: +963 (0)11 555 1234
                <br />
                Email: hello@lightwave.sy
                <br />
                HQ: Idlib, Syria
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Support</p>
                  <p className="text-lg font-semibold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500">Arabic & English</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Install time</p>
                  <p className="text-lg font-semibold text-slate-900">Under 48 hrs</p>
                  <p className="text-xs text-slate-500">Where coverage exists</p>
                </div>
              </div>
            </div>

            <div className="glass-panel space-y-3 border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">What we can help with</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  Fiber availability and installation dates
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  Netplay and IPTV bundles for your household
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  Business links, SLAs, and managed Wi‑Fi
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  Hardware recommendations and coverage mapping
                </li>
              </ul>
            </div>
            <div className="glass-panel overflow-hidden border border-slate-200">
              <Image
                src="/support/team.png"
                alt="Lightwave support team"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" aria-hidden />
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glass-panel space-y-4 border border-slate-200 p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Share your details</h2>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">Quick reply</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-800">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800">
                Phone (optional)
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800">
                City / area
                <input
                  required
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800 sm:col-span-2">
                Service interested in
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                >
                  <option>Fiber Internet</option>
                  <option>Netplay Streaming</option>
                  <option>IPTV</option>
                  <option>Wi‑Fi / Hardware</option>
                  <option>Business SLA</option>
                </select>
              </label>
              <label className="space-y-1 text-sm text-slate-800 sm:col-span-2">
                How can we help?
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : status === "sent" ? "Sent!" : "Send to Lightwave"}
              </button>
              {status === "error" && <p className="text-sm text-amber-600">Something went wrong. Please try again.</p>}
              {status === "sent" && <p className="text-sm text-emerald-600">We received your request.</p>}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
