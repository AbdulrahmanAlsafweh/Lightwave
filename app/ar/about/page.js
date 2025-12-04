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
  { title: "مصمم لسوريا", text: "فرق محلية، دعم ثنائي اللغة، وبنية مهيأة للواقع المحلي." },
  { title: "استمرارية بالتصميم", text: "مسارات احتياطية، تخزين مراقب لنت بلاي، وSLAs للأعمال." },
  { title: "دعم بشري", text: "مهندسون يزورونك، يشرحون بوضوح، ويغلقون الطلب حتى تتصل." },
];

const milestones = [
  { year: "2025", detail: "إطلاق لايت ويف من مقر إدلب مع أعمدة ألياف مرنة لسوريا." },
  { year: "2026", detail: "تشغيل عقد نت بلاي وIPTV في شمال غرب سوريا مع تخزين محلي." },
  { year: "2027", detail: "اتفاقيات SLA وتصميم واي فاي للأعمال في إدلب وحلب وحماة." },
  { year: "2028", detail: "توسيع الربط المباشر وعقد التخزين لتحسين موثوقية بث 4K." },
];

const coverage = [
  { title: "مقر إدلب والمحيط", text: "مركز أساسي مع فرق استجابة أولوية وتركيب أسرع." },
  { title: "حلب وحماة", text: "توسع إقليمي مع تخزين مراقب وفرق ميدانية مخصصة." },
  { title: "في أنحاء سوريا", text: "روابط مُدارة، تحويل احتياطي، وSLAs للمكاتب والضيافة والحرم الجامعي." },
];

export default function AboutAr() {
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
            <p className="badge-soft text-xs">عن لايت ويف</p>
            <h1 className="text-4xl font-semibold text-slate-900">نربط سوريا بالألياف والبث والرعاية.</h1>
            <p className="max-w-3xl text-slate-600">
              لايت ويف مزود سوري يقدم إنترنت ألياف، بث نت بلاي، IPTV، ومنتجات متصلة. نبني التكرار داخل الشبكة، نوظف محليًا،
              وندعم كل تركيب بفريق يرد على الهاتف.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "تأسست", value: "2025" },
                { label: "متوسط الجاهزية", value: "99.96%" },
                { label: "الدعم", value: "ثنائي اللغة 24/7" },
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
            <h2 className="text-3xl font-semibold text-slate-900">لماذا أسسنا لايت ويف</h2>
            <p className="text-slate-600">
              الإنترنت الموثوق يفتح الفرص. أنشأنا لايت ويف لنقدم شبكة متينة داخل سوريا، مع خدمات بث وIPTV تحترم طريقة المشاهدة
              الفعلية. كل تركيب يتم تصميمه وتنفيذه ودعمه محليًا.
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
            <h2 className="text-2xl font-semibold text-slate-900">محطات أساسية</h2>
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
            <h2 className="text-3xl font-semibold text-slate-900">التغطية اليوم</h2>
            <p className="text-sm text-slate-600">نوسع التغطية كل ربع بمسارات ألياف جديدة وتخزين إضافي.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {coverage.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-200 bg-brand-soft p-4">
                <p className="text-lg font-semibold text-slate-900">{area.title}</p>
                <p className="mt-1 text-sm text-slate-600">{area.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">أخبرنا بعنوانك وسنؤكد التغطية أو نبني مسارًا لتوصيلك.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
