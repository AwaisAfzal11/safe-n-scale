import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Glass badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/80">AI-Powered Fraud Detection</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
          Custom anti-theft systems. No new hardware.
        </h1>
        
        <p className="text-xl text-white/60 max-w-3xl mx-auto">
          We build and run AI + automation that detects, deters, and documents losses across cash/POS, inventory, payroll, and procurement—tailored per client.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            onClick={() => scrollToSection("contact")}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl border border-blue-400/20"
          >
            Book a 10-minute fit call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            onClick={() => scrollToSection("how-it-works")}
            variant="outline"
            className="group bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 px-8 py-6 rounded-xl"
          >
            <PlayCircle className="w-4 h-4 mr-2" />
            See how it works
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          {[
            { value: "7 days", label: "To first alert" },
            { value: "0", label: "New hardware" },
            { value: "100%", label: "Audit-ready evidence" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="text-3xl bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
