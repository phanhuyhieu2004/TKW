import React, { useMemo, useState } from "react";

const faqs = [
  {
    q: "What can I build with this AI API?",
    a: "Chat/completions, embeddings, streaming responses, webhooks, and multimodal workflows—everything wrapped with sensible rate limits and retries.",
  },
  {
    q: "Do you support streaming and retries?",
    a: "Yes. You get streaming tokens, automatic backoff, and replay-safe semantics so your UI stays responsive even under transient failures.",
  },
  {
    q: "How does billing work?",
    a: "Plans are priced per month with predictable throughput. Switch monthly/yearly anytime. Enterprise supports dedicated throughput and SLAs.",
  },
  {
    q: "Is the API secure and production-ready?",
    a: "We use secure-by-design patterns (key-based auth, least-privilege controls, audit-friendly telemetry). Enterprise includes SOC2-ready controls and onboarding.",
  },
  {
    q: "Can I migrate from another provider?",
    a: "Most apps can migrate by updating endpoints and mapping payload formats. We also include request tracing hooks to help validate parity quickly.",
  },
];

function Chevron({ open }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-transform ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-white/70"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = useMemo(() => faqs, []);

  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Everything you need to know to evaluate NebulaAI and get to
              production quickly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="text-sm font-semibold text-white">
              Still have questions?
            </div>
            <div className="mt-1 text-xs text-white/65">
              Contact sales and we’ll respond quickly.
            </div>
            <a
              href="#"
              className="mt-3 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition-all"
            >
              Talk to us
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {items.map((item, idx) => {
            const open = idx === openIndex;
            return (
              <div
                key={item.q}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                  aria-expanded={open}
                >
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">
                      {item.q}
                    </div>
                    <div className="mt-1 text-xs text-white/55">
                      {open ? "Tap to collapse" : "Tap to expand"}
                    </div>
                  </div>
                  <Chevron open={open} />
                </button>

                <div
                  className={`px-5 pb-5 transition-[max-height,opacity] duration-300 ${
                    open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-sm leading-relaxed text-white/75">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">
                Ready to build with an AI API?
              </div>
              <div className="mt-2 text-sm text-white/70">
                Start free, then upgrade when you’re scaling. No surprises.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition-all"
              >
                Get started
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
              >
                View docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
