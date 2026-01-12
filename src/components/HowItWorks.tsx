import { Search, Wrench, Activity } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Leakage Diagnostic",
      duration: "60–90 min",
      description: "We analyze your current systems and identify loss vectors across cash, inventory, payroll, and procurement.",
    },
    {
      icon: Wrench,
      title: "Build Sprint",
      duration: "2–4 weeks",
      description: "Custom AI models and automation pipelines are built specifically for your business operations.",
    },
    {
      icon: Activity,
      title: "Fraud Ops",
      duration: "Monthly",
      description: "Continuous monitoring, alerts, and evidence collection. We tune and optimize as patterns evolve.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            How it works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-slate-950">
                    <span className="text-sm">{i + 1}</span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="mb-2 text-white">{step.title}</h3>
                  <div className="text-sm text-blue-400 mb-4">{step.duration}</div>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
