import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Do I need new cameras or hardware?",
      answer: "No. We integrate with your existing CCTV, POS systems, and data sources. No new hardware installation required.",
    },
    {
      question: "Do you replace my POS system?",
      answer: "No, we integrate with it. We connect to your existing POS, payment processors, inventory systems, and other data sources through secure API connections or data exports.",
    },
    {
      question: "How fast until the first alert?",
      answer: "Typically 7 days after we receive data access. This includes time for our AI models to learn your baseline patterns and calibrate detection thresholds.",
    },
    {
      question: "What if I get false positives?",
      answer: "Our models continuously learn and improve. We tune detection sensitivity during monthly fraud ops reviews, and you can provide feedback on any alert to help the system improve.",
    },
    {
      question: "Can I customize which modules I use?",
      answer: "Absolutely. Pick and mix the detection modules that matter most to your business. You can add or remove modules as your needs evolve.",
    },
    {
      question: "How is employee privacy protected?",
      answer: "We follow strict NDPA/GDPR guidelines with consent workflows, purpose limitation, data minimization, and role-based access controls. All monitoring is disclosed via workplace signage.",
    },
    {
      question: "What happens to the evidence bundles?",
      answer: "Evidence is encrypted, timestamped, and stored with chain-of-custody logging. You can download bundles anytime for investigations or audits. Data is auto-deleted per your retention policy.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
