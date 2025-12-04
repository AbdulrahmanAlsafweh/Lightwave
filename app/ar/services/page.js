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
    title: "إنترنت الألياف (FTTH / FTTB)",
    description: "سرعات متناظرة للبث والألعاب والعمل عن بعد مع مراقبة استباقية.",
    highlights: ["حتى 1 جيجابت متناظرة", "IPv6 وخيارات عنوان ثابت", "راوترات واي فاي 6 وMesh"],
  },
  {
    title: "Netplay للبث",
    description: "بث محلي بعناوين عربية وعالمية، بجودة HD/4K وبروفايلات عائلية.",
    highlights: ["إصدارات أسبوعية جديدة", "تنزيل للمشاهدة دون اتصال", "بروفايلات وضبط أبوي"],
  },
  {
    title: "IPTV والقنوات المباشرة",
    description: "رياضة وأخبار وقنوات مميزة مع إعادة وتشغيل من البداية وتجربة متعددة الأجهزة.",
    highlights: ["تطبيقات تلفزيونات وSTB", "دليل قنوات وCatch-up كامل", "حزم مع الألياف لأفضل جودة"],
  },
  {
    title: "منتجات متصلة",
    description: "أجهزة نوصي بها ونختبرها: واي فاي 6 Mesh، ONT، وأجهزة بث.",
    highlights: ["تصميم واي فاي للمنزل والعمل", "تركيب وضبط في الموقع", "ضمان ودعم محلي"],
  },
];

const plans = [
  {
    name: "ألياف منزلية",
    speed: "200-500 Mbps",
    bestFor: "بث، منازل ذكية، ألعاب",
    includes: "خيارات راوتر واي فاي 6، IPTV أساسي، جاهزة لنت بلاي",
  },
  {
    name: "بريميوم + نت بلاي",
    speed: "حتى 1 جيجابت",
    bestFor: "عائلات 4K، صناع محتوى، واي فاي متعدد الغرف",
    includes: "نت بلاي + IPTV، Mesh واي فاي، دعم أولوية",
  },
  {
    name: "أعمال مع SLA",
    speed: "حسب الطلب",
    bestFor: "مكاتب، مقاهي، ضيافة",
    includes: "روابط مزدوجة، SLA، واي فاي مُدار ودعم ميداني",
  },
];

const steps = [
  { title: "فحص التغطية", text: "شارك موقعك واحتياجك: ألياف، نت بلاي، IPTV، أو أجهزة." },
  { title: "التصميم والتركيب", text: "مسح، تمديد كابلات، ONT، ضبط واي فاي، وإعداد IPTV/نت بلاي لكل شاشة." },
  { title: "المراقبة والدعم", text: "مركز عمليات 24/7، دعم ثنائي اللغة، تنبيهات استباقية، وزيارات ميدانية أولوية." },
];

export default function ServicesAr() {
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
          <p className="badge-soft text-xs">الخدمات</p>
          <h1 className="text-4xl font-semibold text-slate-900">كل ما تحتاجه: ألياف، نت بلاي، IPTV، وأجهزة.</h1>
          <p className="max-w-3xl text-slate-600">
            لايت ويف تقدم تجربة واحدة متصلة: ألياف سريعة، نت بلاي للبث مثل نتفليكس، IPTV للقنوات المباشرة، ومنتجات تجعل
            الواي فاي قويًا في كل غرفة.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <motion.div key={service.title} variants={fadeUp} className="glass-panel border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">لايت ويف</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
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
            <h2 className="text-3xl font-semibold text-slate-900">الخطط والحزم</h2>
            <p className="text-sm text-slate-600">نمزج الألياف ونت بلاي وIPTV والأجهزة لتناسب منزلك أو عملك.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">{plan.name}</p>
                <p className="text-sm text-brand-primary">{plan.speed}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.bestFor}</p>
                <p className="mt-3 text-xs text-slate-500">{plan.includes}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">باقات مؤسسات مخصصة وروابط مضمونة وSLAs متاحة عند الطلب.</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="glass-panel grid gap-8 border border-slate-200 p-6 lg:grid-cols-5 lg:items-center lg:p-8"
        >
          <div className="space-y-5 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-primary">
              Netplay قيد التشغيل
            </div>
            <div className="flex items-start gap-3">
              <img src="/netplay/logo.png" alt="شعار نت بلاي" className="h-12 w-auto" />
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-slate-900">بث يشبه التلفزيون لكن محلي وأسرع.</p>
                <p className="text-sm text-slate-600">
                  أفلام ومسلسلات عربية وعالمية، أطفال ورياضة—مهيأة على شبكة لايت ويف.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                بث تكيفي HD/4K مع تخزين محلي لإلغاء التقطيع
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                إعادة تشغيل للقنوات المباشرة وCatch-up
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                حزم مع الألياف وIPTV لأعلى جودة
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="/ar/contact"
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                اطلب حزمة نت بلاي
              </a>
              <a
                href="/ar/services"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                كل الخطط
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-soft via-transparent to-white" aria-hidden="true" />
            <video
              src="/netplay/netplay-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="relative aspect-[16/9] w-full rounded-3xl pointer-events-none select-none"
              aria-label="عرض نت بلاي"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="glass-panel grid gap-8 border border-slate-200 p-6 lg:grid-cols-5 lg:items-center lg:p-8"
        >
          <div className="space-y-5 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-primary">
              IPTV معرض
            </div>
            <div className="flex items-start gap-3">
              <img src="/iptv/logo.png" alt="شعار IPTV" className="h-12 w-auto" />
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-slate-900">قنوات مباشرة ورياضية لحظية الإحساس.</p>
                <p className="text-sm text-slate-600">
                  قنوات واضحة، تنقل سريع، إعادة وتشغيل من البداية—تُبث عبر ألياف لايت ويف للمشاهدة السلسة.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                دليل قنوات كامل مع إعادة وCatch-up
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                رياضة وأخبار وترفيه بخيارات HD/4K
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                يعمل على أجهزة STB أو تطبيقات التلفزيون الذكي
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="/ar/contact"
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                أضف IPTV مع الألياف
              </a>
              <a
                href="/ar/services"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                كل الخطط
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-soft via-transparent to-white" aria-hidden="true" />
            <video
              src="/iptv/iptv-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="relative aspect-[16/9] w-full rounded-3xl pointer-events-none select-none"
              aria-label="عرض IPTV"
            />
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp} className="glass-panel border border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand-primary">
                  {index + 1}
                </span>
                <p className="text-lg font-semibold text-slate-900">{step.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="glass-panel relative overflow-hidden grid gap-6 border border-slate-200 p-6 md:grid-cols-5 md:items-center"
        >
          <div className="pointer-events-none absolute inset-0 z-0 pattern-strong" aria-hidden />
          <div className="relative z-10 space-y-3 md:col-span-3">
            <p className="badge-soft text-xs">نخدم سوريا</p>
            <h3 className="text-2xl font-semibold text-slate-900">تغطية تتوسع كل ربع.</h3>
            <p className="text-slate-600">
              من مقر إدلب إلى حلب وحماة، نوسع المسارات والتخزين والفرق الميدانية لنحافظ على سرعة التركيب والجاهزية.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/ar/contact"
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                تحقق من التغطية
              </a>
              <a
                href="/ar/about"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                عن شبكتنا
              </a>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200">
            <img src="/support/map.png" alt="خريطة التغطية" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/15 to-transparent" aria-hidden />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="glass-panel flex flex-col gap-4 border border-slate-200 p-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="badge-soft text-xs">تحتاج إرشادًا؟</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">ندلك على الحزمة المناسبة.</h3>
            <p className="text-slate-600">أخبرنا كيف تستخدم الإنترنت ونصمم لك ألياف، نت بلاي، وIPTV تناسبك.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/ar/contact"
              className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              تواصل مع لايت ويف
            </a>
            <a
              href="/ar/about"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
            >
              عن شبكتنا
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
