import React from "react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-2xl border border-white/10 bg-[#1b1031]/60 backdrop-blur-md animate-[pop_420ms_ease-out_both]">
          <div className="flex items-center justify-between py-3 pl-4 pr-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-soft relative overflow-hidden">
                <span className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0)_60%)] animate-[shimmer_3.5s_ease-in-out_infinite]" />
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">NebulaAI</div>
                <div className="text-[11px] text-white/60">AI API Platform</div>
              </div>
            </div>

            <nav className="hidden items-center gap-7 md:flex">
              {[
                { href: "#pricing", label: "Pricing" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#faq", label: "FAQ" },
              ].map((x) => (
                <a
                  key={x.href}
                  href={x.href}
                  className="text-sm text-white/70 hover:text-white transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-brand-500 after:to-brand-700 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {x.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#pricing"
                className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors hover:shadow-soft"
              >
                View plans
              </a>

              <a
                href="#"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition-all relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0)_60%)] translate-x-[-60%] group-hover:translate-x-[60%] transition-transform duration-700" />
                <span className="relative">Get started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
