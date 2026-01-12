import { DollarSign, Package, Users, Building2, TrendingUp } from "lucide-react";
import { useState } from "react";

export function Modules() {
  const [selectedModules, setSelectedModules] = useState<number[]>([]);

  const modules = [
    {
      icon: DollarSign,
      title: "Cash/POS Anomalies",
      description: "Transaction pattern analysis, void abuse detection, discount misuse tracking",
    },
    {
      icon: Package,
      title: "Inventory Variance",
      description: "Shrinkage detection, receiving discrepancies, cycle count anomalies",
    },
    {
      icon: Users,
      title: "Payroll/HR Checks",
      description: "Ghost employees, time-clock fraud, unauthorized overtime patterns",
    },
    {
      icon: Building2,
      title: "Vendor/AP Anomalies",
      description: "Duplicate invoices, pricing inconsistencies, unauthorized vendors",
    },
    {
      icon: TrendingUp,
      title: "Procurement Flags",
      description: "Price variance alerts, quantity discrepancies, supplier collusion patterns",
    },
  ];

  const toggleModule = (index: number) => {
    if (selectedModules.includes(index)) {
      setSelectedModules(selectedModules.filter((i) => i !== index));
    } else {
      setSelectedModules([...selectedModules, index]);
    }
  };

  return (
    <section id="modules" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            Modules
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Pick and mix the detection modules you need. Each one integrates seamlessly with your existing systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, i) => {
            const Icon = module.icon;
            const isSelected = selectedModules.includes(i);
            
            return (
              <button
                key={i}
                onClick={() => toggleModule(i)}
                className={`group p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 text-left ${
                  isSelected
                    ? "bg-blue-500/20 border-blue-400/50 shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-blue-500/30"
                        : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isSelected ? "text-blue-300" : "text-blue-400"}`} />
                  </div>
                  
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <h3 className="mb-2 text-white">{module.title}</h3>
                <p className="text-sm text-white/50">{module.description}</p>
              </button>
            );
          })}
        </div>
        
        {selectedModules.length > 0 && (
          <div className="mt-8 p-6 rounded-2xl bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 text-center">
            <p className="text-blue-200">
              {selectedModules.length} module{selectedModules.length !== 1 ? "s" : ""} selected
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
