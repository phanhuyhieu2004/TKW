import React, { useMemo, useState } from "react";

function formatPrice(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function Pricing() {
  const [billing, setBilling] = useState("monthly"); // monthly | yearly

  const plans = useMemo(
    () => [
      {
        name: "Starter",
        desc: "For prototypes and early builds.",
        monthly: 29,
        yearly: 23,
        bullets: [
          "Chat Completions",
          "Embeddings",
          "200K requests / month",
          "Community support",
        ],
      },
      {
        name: "Growth",
        desc: "For production apps at scale.",
        monthly: 79,
        yearly: 63,
        highlighted: true,
        bullets: [
          "Everything in Starter",
          "Streaming + retries",
          "2M requests / month",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        desc: "Compliance, performance, and SLAs.",
        monthly: 199,
        yearly: 159,
        bullets: [
          "Dedicated throughput",
          "SOC2-ready controls",
          "Custom retention",
          "SLA + onboarding",
        ],
      },
    ],
    [],
  );

  const isYearly = billing === "yearly";

  return (
    <section id="pricing" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pricing that scales with you
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Start small, upgrade when you need more throughput. No hidden
              fees.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <span
              className={`text-sm ${!isYearly ? "text-white" : "text-white/60"}`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setBilling(isYearly ? "monthly" : "yearly")}
              className="relative h-6 w-12 rounded-full bg-white/10 transition-colors"
              aria-label="Toggle yearly billing"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${isYearly ? "text-white" : "text-white/60"}`}
            >
              Yearly{" "}
              <span className="ml-1 rounded-full bg-brand-500/20 px-2 py-0.5 text-[11px] font-semibold text-brand-200">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price = isYearly ? p.yearly : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative rounded-3xl border p-6 sm:p-7 backdrop-blur ${
                  p.highlighted
                    ? "border-brand-300/30 bg-white/10 shadow-soft"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                    Most popular
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {p.name}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{p.desc}</div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-semibold text-white">
                      {formatPrice(price)}
                    </div>
                    <div className="text-sm text-white/60">/ month</div>
                  </div>
                  <div className="mt-2 text-xs text-white/55">
                    {isYearly
                      ? "Billed yearly • switch or cancel anytime."
                      : "Billed monthly • switch or cancel anytime."}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-lg bg-brand-500/20 text-brand-200">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <a
                    href="#"
                    className={`block w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                      p.highlighted
                        ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white hover:brightness-110"
                        : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {p.name === "Enterprise" ? "Contact sales" : "Choose plan"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">
                Need custom usage?
              </div>
              <div className="mt-2 text-sm text-white/70">
                We can tailor throughput, latency targets, and retention rules
                for your workload.
              </div>
            </div>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
