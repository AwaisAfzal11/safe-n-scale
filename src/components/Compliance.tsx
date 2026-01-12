import { Shield, Eye, Lock, Users } from "lucide-react";

export function Compliance() {
  const features = [
    {
      icon: Shield,
      title: "NDPA-Aligned",
      description: "Full consent pack with employee notification and acknowledgment workflows",
    },
    {
      icon: Eye,
      title: "Transparent Signage",
      description: "Clear workplace monitoring notices that meet regional privacy requirements",
    },
    {
      icon: Lock,
      title: "Limited Purpose",
      description: "Data collected solely for fraud detection. Automatic retention limits enforced",
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Granular permissions ensure only authorized personnel view sensitive evidence",
    },
  ];

  return (
    <section id="compliance" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            Compliance & Ethics
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Privacy-first fraud detection. We help you stay compliant while protecting your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-green-500/5 backdrop-blur-xl border border-green-400/20">
          <p className="text-sm text-white/70 text-center">
            <span className="text-green-400">✓ GDPR Compliant</span>
            <span className="mx-3 text-white/30">•</span>
            <span className="text-green-400">✓ SOC 2 Type II</span>
            <span className="mx-3 text-white/30">•</span>
            <span className="text-green-400">✓ ISO 27001</span>
          </p>
        </div>
      </div>
    </section>
  );
}
