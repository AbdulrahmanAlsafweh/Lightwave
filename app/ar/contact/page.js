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
  service: "إنترنت الألياف",
  message: "",
};

export default function ContactAr() {
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
          <p className="badge-soft text-xs">تواصل</p>
          <h1 className="text-4xl font-semibold text-slate-900">أخبرنا أين أنت وماذا تحتاج.</h1>
          <p className="max-w-3xl text-slate-600">
            نؤكد التغطية، نوصي بالحزمة المناسبة، ونحدد موعد التركيب. الدعم متوفر 24/7 بالعربية والإنجليزية.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="glass-panel space-y-3 border border-slate-200 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">اتصل أو زرنا</h2>
              <p className="text-sm text-slate-600">
                هاتف: ‎+963 (0)11 555 1234
                <br />
                بريد: hello@lightwave.sy
                <br />
                المقر: إدلب، سوريا
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">الدعم</p>
                  <p className="text-lg font-semibold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500">عربي وإنجليزي</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">مدة التركيب</p>
                  <p className="text-lg font-semibold text-slate-900">أقل من 48 ساعة</p>
                  <p className="text-xs text-slate-500">حيث تتوفر التغطية</p>
                </div>
              </div>
            </div>

            <div className="glass-panel space-y-3 border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">كيف نساعدك</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  توفر الألياف ومواعيد التركيب
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  حزم نت بلاي وIPTV لمنزلك
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  روابط أعمال وSLAs وتصميم واي فاي
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  توصيات أجهزة وتغطية منزلك
                </li>
              </ul>
            </div>
            <div className="glass-panel overflow-hidden border border-slate-200">
              <Image
                src="/support/team.png"
                alt="فريق دعم لايت ويف"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" aria-hidden />
            </div>
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="glass-panel space-y-4 border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">شاركنا التفاصيل</h2>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">رد سريع</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-800">
                الاسم
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800">
                البريد الإلكتروني
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
                الهاتف (اختياري)
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800">
                المدينة / المنطقة
                <input
                  required
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-800 sm:col-span-2">
                الخدمة المطلوبة
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                >
                  <option>إنترنت الألياف</option>
                  <option>نت بلاي للبث</option>
                  <option>IPTV</option>
                  <option>أجهزة / واي فاي</option>
                  <option>أعمال مع SLA</option>
                </select>
              </label>
              <label className="space-y-1 text-sm text-slate-800 sm:col-span-2">
                كيف يمكننا المساعدة؟
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
                {status === "loading" ? "يتم الإرسال..." : status === "sent" ? "تم الإرسال!" : "أرسل إلى لايت ويف"}
              </button>
              {status === "error" && <p className="text-sm text-amber-600">حدث خطأ. حاول مرة أخرى.</p>}
              {status === "sent" && <p className="text-sm text-emerald-600">استلمنا طلبك.</p>}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
