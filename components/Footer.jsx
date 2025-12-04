export default function Footer() {
  const year = new Date().getFullYear();

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
                <p className="text-lg font-semibold text-slate-900">Lightwave</p>
                <p className="text-xs text-slate-500">Fiber • Netplay • IPTV</p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-slate-600">
              Connecting Syria with resilient fiber, local streaming through Netplay, IPTV, and reliable connected products.
            </p>
            <div className="flex gap-2">
              <span className="badge-soft text-[11px]">24/7 support</span>
              <span className="badge-soft text-[11px]">Syria-wide rollout</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="transition hover:text-brand-primary"><a href="/">Home</a></li>
              <li className="transition hover:text-brand-primary"><a href="/services">Services</a></li>
              <li className="transition hover:text-brand-primary"><a href="/about">About us</a></li>
              <li className="transition hover:text-brand-primary"><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Fiber internet (FTTH)</li>
              <li>Netplay streaming</li>
              <li>IPTV and live TV</li>
              <li>Routers & Wi-Fi systems</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Phone: +963 (0)11 555 1234</p>
              <p>Email: hello@lightwave.sy</p>
              <p>HQ: Damascus, Syria</p>
              <p>Support: 24/7 • Arabic & English</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Lightwave. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            <span className="badge-soft text-[11px]">Low-latency fiber</span>
            <span className="badge-soft text-[11px]">SLA for business</span>
            <span className="badge-soft text-[11px]">Netplay originals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
