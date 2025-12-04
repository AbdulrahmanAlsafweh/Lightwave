export default function Footer({ strings, badgeSet = [] }) {
  const year = new Date().getFullYear();

  const {
    brandName = "Lightwave",
    brandTagline = "Fiber • Netplay • IPTV",
    blurb,
    exploreTitle,
    exploreLinks = [],
    servicesTitle,
    services = [],
    contactTitle,
    contact = [],
    rightsText = `© ${year} Lightwave. All rights reserved.`,
  } = strings || {};

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute -left-24 top-10 h-40 w-40 rounded-full bg-brand-soft blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-44 w-44 rounded-full bg-brand-light/40 blur-3xl" aria-hidden="true" />

        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-glow">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-light opacity-20" />
                <div className="relative flex h-full w-full items-center justify-center text-sm font-bold text-brand-primary">LW</div>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">{brandName}</p>
                <p className="text-xs text-slate-500">{brandTagline}</p>
              </div>
            </div>
            {blurb ? <p className="max-w-xs text-sm text-slate-600">{blurb}</p> : null}
            {badgeSet?.length ? (
              <div className="flex gap-2">
                {badgeSet.map((badge) => (
                  <span key={badge} className="badge-soft text-[11px]">
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">{exploreTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {exploreLinks.map((link) => (
                <li key={link.href} className="transition hover:text-brand-primary">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">{servicesTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">{contactTitle}</h3>
            <div className="space-y-2 text-sm text-slate-600">
              {contact.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{rightsText}</p>
          <div className="flex flex-wrap gap-2">
            {badgeSet.map((badge) => (
              <span key={badge} className="badge-soft text-[11px]">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
