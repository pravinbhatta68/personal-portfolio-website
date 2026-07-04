import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-premium backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,219,255,0.24),transparent_32%),radial-gradient(circle_at_76%_62%,rgba(155,124,255,0.22),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-45" />
      <Image
        src="/images/ai-dashboard.png"
        alt="AI marketing dashboard interface illustration"
        width={760}
        height={640}
        priority
        className="relative z-10 h-full min-h-[360px] w-full rounded-3xl object-cover opacity-95"
      />
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
