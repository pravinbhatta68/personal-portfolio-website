const bars = [
  ["SEO", 66, "from-cyan-200 via-blue-300 to-blue-500"],
  ["Leads", 82, "from-emerald-200 via-cyan-300 to-teal-500"],
  ["Content", 92, "from-fuchsia-200 via-violet-300 to-purple-500"],
  ["ROI", 76, "from-amber-200 via-pink-300 to-rose-500"],
];

export function HeroVisual() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 shadow-premium backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(91,219,255,0.34),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(244,114,182,0.2),transparent_28%),radial-gradient(circle_at_58%_86%,rgba(16,185,129,0.24),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-45" />
      <div className="relative z-10 min-h-[410px] rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">AI Marketing OS</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Growth command center</h3>
          </div>
          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/15 px-4 py-2 text-right">
            <p className="text-xs text-emerald-100/70">Pipeline</p>
            <p className="text-lg font-semibold text-emerald-200">+48%</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Campaign ROI", "3.8x", "text-cyan-200"],
            ["Lead Quality", "92%", "text-emerald-200"],
            ["Content Speed", "5.4x", "text-pink-200"],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-xs text-white/52">{label}</p>
              <p className={`mt-2 text-2xl font-semibold ${color}`}>{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Channel lift</p>
            <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-100">Live analytics</span>
          </div>
          <div className="flex h-40 items-end gap-4">
            {bars.map(([label, value, gradient]) => (
              <div key={label} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-32 w-full items-end rounded-2xl bg-black/24 p-1.5">
                  <div
                    className={`w-full rounded-xl bg-gradient-to-t ${gradient} shadow-glow transition-all duration-700`}
                    style={{ height: `${value}%` }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <p className="text-xs text-white/48">Next best action</p>
            <p className="mt-2 text-sm font-semibold text-white">Launch AI lead nurture sequence</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <p className="text-xs text-white/48">Automation health</p>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300" />
            </div>
          </div>
        </div>
      </div>
      {["AI Strategy", "Automation", "SEO Signals"].map((label, index) => (
        <div
          key={label}
          className="absolute z-20 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-xs font-semibold text-white/82 shadow-glow backdrop-blur-xl"
          style={{
            left: index === 1 ? "58%" : index === 2 ? "14%" : "8%",
            top: index === 1 ? "20%" : index === 2 ? "72%" : "12%",
            animation: `float ${6 + index}s ease-in-out infinite`,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
