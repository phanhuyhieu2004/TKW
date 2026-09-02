import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="min-h-screen bg-[#12091f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-brand-900/20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(138,92,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(95,30,230,0.18),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(59,28,128,0.22),transparent_55%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-soft" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    NebulaAI
                  </div>
                  <div className="text-xs text-white/60">AI API Platform</div>
                </div>
              </div>

              <p className="mt-4 max-w-md text-sm text-white/70">
                Modern AI endpoints designed for production: streaming, retries,
                observability, and clean developer ergonomics.
              </p>
            </div>

            <div className="flex gap-10">
              <div>
                <div className="text-sm font-semibold text-white">Product</div>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <a
                    href="#pricing"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                  <a
                    href="#testimonials"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#faq"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">Company</div>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/55">
            <div>
              © {new Date().getFullYear()} NebulaAI. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
