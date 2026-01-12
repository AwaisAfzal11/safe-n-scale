import { Cpu, Link2, FileCheck, Bell } from "lucide-react";

export function WhatWeDo() {
  const features = [
    {
      icon: Cpu,
      title: "Pure Software",
      description: "No hardware installation required",
    },
    {
      icon: Link2,
      title: "Plug & Play",
      description: "Integrate with payments, POS, CSVs, CCTV",
    },
    {
      icon: FileCheck,
      title: "Audit-Ready",
      description: "Evidence bundled with every alert",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "AI-powered anomaly detection",
    },
  ];

  return (
    <section id="what-we-do" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            What we do
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Pure software. Plug into what you already use (payments, POS, CSVs, CCTV). 
            Alerts that come with audit-ready evidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
