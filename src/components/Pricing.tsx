import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tiers = [
    {
      name: "Starter",
      description: "For single-location businesses",
      price: "Custom",
      features: [
        "1-2 detection modules",
        "60-min leakage diagnostic",
        "Monthly fraud ops monitoring",
        "Email alerts & evidence bundles",
        "Basic reporting dashboard",
      ],
    },
    {
      name: "Professional",
      description: "For multi-location operations",
      price: "Custom",
      popular: true,
      features: [
        "3-5 detection modules",
        "90-min leakage diagnostic",
        "Bi-weekly fraud ops review calls",
        "Multi-channel alerts (email, SMS, Slack)",
        "Advanced analytics dashboard",
        "Dedicated success manager",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "All detection modules",
        "Full audit & implementation",
        "Weekly monitoring & tuning",
        "Custom integration support",
        "White-label reporting",
        "SLA guarantees",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Tailored to your business size and needs. No upfront hardware costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                tier.popular
                  ? "bg-blue-500/10 border-blue-400/50 shadow-xl shadow-blue-500/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl mb-2 text-white">{tier.name}</h3>
                <p className="text-sm text-white/50 mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={scrollToContact}
                className={`w-full rounded-xl ${
                  tier.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-white/50">
            All plans include: GDPR/NDPA compliance framework • Secure data handling • Regular model tuning
          </p>
        </div>
      </div>
    </section>
  );
}
