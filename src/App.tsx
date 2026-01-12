import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { HowItWorks } from "./components/HowItWorks";
import { Modules } from "./components/Modules";
import { Evidence } from "./components/Evidence";
import { Pricing } from "./components/Pricing";
import { Compliance } from "./components/Compliance";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <Navigation />
      
      <main className="relative">
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <Modules />
        <Evidence />
        <Pricing />
        <Compliance />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-white/60">
            Detect. Deter. Document. No new hardware.
          </p>
        </div>
      </footer>
    </div>
  );
}
