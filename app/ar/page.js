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
    title: "إنترنت الألياف",
    badge: "FTTH",
    description: "سرعات متناظرة تصل إلى 1 جيجابت مع مسارات منخفضة التأخير ومراقبة استباقية.",
    points: ["أجهزة راوتر وواي فاي 6 وMesh", "IPv6 وخيارات عنوان ثابت", "تركيب وضبط احترافي"],
    image: "/services/fiber.png",
  },
  {
    title: "نت بلاي للبث",
    badge: "VOD",
    description: "منصة بث محلية بأفلام ومسلسلات عربية وعالمية، بجودة HD/4K وتحديثات أسبوعية.",
    points: ["بروفايلات عائلية", "تحديثات مستمرة", "بث تكيفي محلي"],
    image: "/services/netplay.png",
  },
  {
    title: "IPTV والقنوات الحية",
    badge: "IPTV",
    description: "رياضة وأخبار وقنوات مميزة مع إعادة وتشغيل من البداية وتطبيقات متعددة الأجهزة.",
    points: ["دليل قنوات وCatch-up", "قنوات محلية وعالمية", "يعمل على STB أو تطبيقات التلفزيون"],
    image: "/services/iptv.png",
  },
  {
    title: "منتجات متصلة",
    badge: "Store",
    description: "أجهزة واي فاي Mesh، ONT، وصناديق بث نوصي بها ونختبرها وندعمها.",
    points: ["تصميم تغطية للمنزل والعمل", "خيارات واي فاي مُدارة", "ضمان ودعم محلي"],
    image: "/services/hardware.png",
  },
];

const metrics = [
  { label: "جاهزية الشبكة", value: "99.96%" },
  { label: "مدن وبلدات", value: "12+" },
  { label: "دعم", value: "24/7" },
  { label: "مدة التركيب", value: "<48 ساعة" },
];

const products = [
  { name: "حزم واي فاي 6 Mesh", detail: "تغطية متواصلة مع تحكم عبر التطبيق لكل غرف البيت." },
  { name: "أجهزة ONT آمنة", detail: "مضبوطة ومهيأة لشبكة لايت ويف." },
  { name: "صندوق نت بلاي TV", detail: "بث نت بلاي، IPTV، وكاست في جهاز واحد." },
];

export default function HomeAr() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0 pattern-strong" aria-hidden="true" />
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
              إنترنت الألياف في سوريا
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                لايت ويف. ألياف سريعة تدعم نت بلاي، IPTV، وكل ما تبثه.
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                تجربة بيضاء وعصرية مبنية على ألياف موثوقة، مسارات منخفضة التأخير، ودعم محلي. اجمع الإنترنت مع نت بلاي
                للبث، IPTV، وأجهزة متصلة في مكان واحد.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href="/ar/contact"
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                تحقق من التوفر
              </Link>
              <Link
                href="/ar/services"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                استكشف الخدمات
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="glass-panel px-4 py-3 text-sm">
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
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
                alt="أبطال ألياف لايت ويف"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-600">حالة الشبكة الحية</p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">مستقرة</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs text-slate-500">زمن التأخير</p>
                    <p className="text-2xl font-semibold text-slate-900">4.8 ms</p>
                    <p className="text-xs text-slate-500">مركز إدلب إلى IX المحلي</p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs text-slate-500">Netplay CDN</p>
                    <p className="text-2xl font-semibold text-slate-900">12</p>
                    <p className="text-xs text-slate-500">عقد تخزين محلية</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="badge-soft">جاهزية 99.96%</span>
                  <span className="badge-soft">تركيب احترافي</span>
                  <span className="badge-soft">تمدد في سوريا</span>
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
              <p className="badge-soft text-xs">كل شيء في مكان واحد</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">خدمات للمنازل والشركات</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                إنترنت ألياف سريع، نت بلاي للبث، IPTV للفعاليات المباشرة، وأجهزة متصلة مصممة لتعمل معًا تحت علامة واحدة.
              </p>
            </div>
            <Link href="/ar/services" className="text-sm font-semibold text-brand-primary hover:text-brand-secondary">
              عرض التفاصيل →
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
                      <p className="text-sm font-semibold text-brand-primary">{service.badge}</p>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">لايت ويف</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                    <div className="grid gap-2">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-center gap-2 text-sm text-slate-700">
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
            <p className="badge-soft text-xs">نت بلاي و IPTV</p>
            <h2 className="text-3xl font-semibold text-slate-900">بث محلي مع Netplay.</h2>
            <p className="text-slate-600">
              شاهد على أي جهاز مع بث تكيفي وتخزين محلي، وحزم تجمع نت بلاي مع إنترنت الألياف وIPTV. أعد تشغيل القنوات
              المباشرة، تابع الأعمال الأصلية، وأبق العائلة متصلة.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">Netplay</p>
                <p>أفلام · مسلسلات · أطفال</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">IPTV</p>
                <p>قنوات مباشرة · رياضة · أخبار</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="badge-soft">بدون تقليل سرعة</span>
              <span className="badge-soft">تخزين محلي</span>
              <span className="badge-soft">تحكم عائلي</span>
            </div>
            <Link
              href="/ar/services"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              اكتشف الخطط
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="glass-panel relative overflow-hidden border border-slate-200 p-6">
            <div className="absolute right-6 top-6 h-20 w-20 animate-float rounded-full bg-brand-soft" aria-hidden />
            <div className="absolute -left-10 bottom-6 h-24 w-24 animate-float rounded-full bg-brand-light/50" aria-hidden />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-sm">
                <p className="text-slate-600">يعرض الآن على نت بلاي</p>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs text-brand-primary">يُبث الآن</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-900">اختيارات السينما</p>
                  <span className="text-xs text-slate-500">HD / 4K</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">أعمال عربية وعالمية منسقة أسبوعيًا.</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-700">
                  <div className="rounded-lg border border-slate-200 bg-brand-soft p-3">
                    <p className="font-semibold text-slate-900">دراما</p>
                    <p>حلقات جديدة</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-brand-soft p-3">
                    <p className="font-semibold text-slate-900">أطفال</p>
                    <p>ملفات آمنة</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-brand-soft p-3">
                    <p className="font-semibold text-slate-900">رياضة</p>
                    <p>مباشر + إعادة</p>
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
              <p className="badge-soft text-xs">التغطية والموثوقية</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">مصممة للجاهزية في سوريا</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                مسارات مزدوجة، تخزين إقليمي لنت بلاي، مراقبة استباقية، وفرق ميدانية في المدن الرئيسية لتحافظ على اتصالك.
              </p>
            </div>
            <Link href="/ar/contact" className="text-sm font-semibold text-brand-primary hover:text-brand-secondary">
              تحدث مع فريقنا →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "مسارات احتياطية",
                text: "مسارات ألياف أساسية واحتياطية مع تحويل تلقائي للخدمات الحساسة.",
              },
              {
                title: "فرق ميدانية محلية",
                text: "فِرق تركيب ودعم في إدلب، حلب، حماة، مع توسع داخل سوريا.",
              },
              {
                title: "مراقبة استباقية",
                text: "مركز عمليات على مدار الساعة مع تنبيهات فورية وفحص صحة التخزين والارتباطات.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-panel border border-slate-200 p-5">
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-card md:grid-cols-2">
          <div className="space-y-3">
            <p className="badge-soft text-xs">متجر الأجهزة</p>
            <h2 className="text-3xl font-semibold text-slate-900">منتجات تبقي كل غرفة متصلة.</h2>
            <p className="text-slate-600">
              اختر حزم واي فاي 6 Mesh، صناديق بث لنت بلاي وIPTV، أو أجهزة أعمال نوصي بها ونختبرها وندعمها.
            </p>
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.name} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-brand-soft p-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                  <div>
                    <p className="font-semibold text-slate-900">{product.name}</p>
                    <p className="text-sm text-slate-600">{product.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden border border-slate-200 p-6">
            <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-brand-soft" aria-hidden="true" />
            <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-brand-light/50" aria-hidden="true" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">التركيب</p>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">محترفون</span>
              </div>
              <p className="text-2xl font-semibold text-slate-900">من نقطة الألياف إلى الواي فاي المنزلي، نهتم بكل شيء.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  مسح ومسارات وكابلات نظيفة
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  ضبط ONT والواي فاي لكل غرفة
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  إعداد IPTV ونت بلاي على التلفزيونات والهواتف
                </li>
              </ul>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">مشاريع الأعمال</p>
                  <p>اتفاقيات SLA، روابط مزدوجة، وواي فاي مُدار للمكاتب والمقاهي والضيافة.</p>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src="/products/multiple-products.png"
                    alt="منتجات لايت ويف"
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-white via-brand-soft to-white px-6 py-10 shadow-card sm:px-10">
          <div className="pointer-events-none absolute inset-0 z-0 pattern-strong" aria-hidden />
          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="badge-soft text-xs">جاهزون للتوصيل</p>
              <h3 className="text-3xl font-semibold text-slate-900">دع لايت ويف تبني اتصالك.</h3>
              <p className="max-w-xl text-slate-600">
                أخبرنا بموقعك، وسنحدد زيارة سريعة، نؤكد التغطية، ونفعل الخطة المناسبة.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/ar/contact"
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                تواصل مع لايت ويف
              </Link>
              <Link
                href="/ar/about"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                تعرف على فريقنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
