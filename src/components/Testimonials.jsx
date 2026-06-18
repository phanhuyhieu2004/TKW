import React from "react";

const testimonials = [
  {
    name: "Mina K.",
    role: "CTO, Finch Labs",
    quote:
      "NebulaAI’s API made it trivial to ship streaming chat with retry semantics. The developer experience feels like a premium SDK.",
  },
  {
    name: "Daniel R.",
    role: "Engineering Lead, OrbitOps",
    quote:
      "We moved from prototype to production without rewriting everything. Latency is predictable and the observability hooks are excellent.",
  },
  {
    name: "Sofia L.",
    role: "Founder, QueryCraft",
    quote:
      "Pricing clarity + fast integration. Our support team loves the telemetry, and customers notice the responsiveness immediately.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Trusted by teams shipping AI
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              From prototypes to production workloads—teams choose NebulaAI for
              speed, reliability, and clarity.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <span className="text-sm font-semibold text-white">4.9</span>
            <span className="text-sm text-white/70">Avg. developer rating</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur shadow-soft"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{t.role}</div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-brand-700/10 border border-white/10">
                  <span className="text-brand-200 font-semibold">“</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/75">
                {t.quote}
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-brand-300/90">
                    ★
                  </span>
                ))}
                <span className="ml-2 text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  Verified usage
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-500/0 via-brand-500/30 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
