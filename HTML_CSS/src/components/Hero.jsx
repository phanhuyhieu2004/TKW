import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-brand-900/0" />
      <div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#6f43ff]/20 blur-3xl" />
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-[#8a5cff]/15 blur-2xl" />
      <div className="absolute right-0 top-80 h-72 w-72 rounded-full bg-[#5a2ee6]/15 blur-2xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />
              <span>Fast, secure AI endpoints for modern apps</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build with an AI API that feels effortless.
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              Ship chat, embeddings, and multimodal workflows in minutes. Rate
              limits, retries, and observability included.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition-all"
              >
                See pricing
              </a>

              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
              >
                Read FAQ
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { k: "99.99%", v: "Uptime SLA" },
                { k: "1s", v: "Typical latency" },
                { k: "SOC2", v: "Security-ready" },
              ].map((x) => (
                <div
                  key={x.v}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-white">{x.k}</div>
                  <div className="mt-0.5 text-xs text-white/60">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5a5f]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2dd4bf]" />
                </div>
                <div className="text-xs text-white/60">Request preview</div>
              </div>

              <div className="mt-4 rounded-2xl bg-[#0f071e]/60 border border-white/10 p-4">
                <pre className="whitespace-pre-wrap text-xs leading-relaxed text-white/80">
                  {`curl https://api.nebulaai.com/v1/chat
  -H "Authorization: Bearer $NEBULA_KEY"
  -H "Content-Type: application/json"
  -d '{
    "model": "nebula-chat",
    "messages": [
      {"role":"user","content":"Draft a landing page headline"}
    ]
  }'`}
                </pre>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Streaming", desc: "Token-by-token responses." },
                  { title: "Retries", desc: "Automatic backoff & replay." },
                  { title: "Webhooks", desc: "Receive events in real time." },
                  { title: "Tracing", desc: "Built-in request spans." },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-white">
                      {x.title}
                    </div>
                    <div className="mt-1 text-xs text-white/65">{x.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#6f43ff]/30 blur-3xl" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#8a5cff]/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
