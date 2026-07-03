"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly does BhanuWorks build?",
      answer: "We design and engineer business websites, custom web applications, SaaS products, automated back-offices, online ordering systems, and AI customer agents.",
    },
    {
      question: "How does fixed-project pricing work?",
      answer: "We agree on project scope, cost, and milestones before writing code. You get predictable, transparent pricing with no unexpected hourly invoices.",
    },
    {
      question: "Do we work directly with developers?",
      answer: "Yes. You collaborate directly with the engineers building your product. This eliminates project management delays and increases launch speeds.",
    },
    {
      question: "Can you migrate our legacy business data?",
      answer: "Yes. We safely migrate existing customer databases, files, and spreadsheets to secure modern environments, verifying integrity before launch.",
    },
    {
      question: "Do you offer post-launch maintenance?",
      answer: "Yes. We provide monthly support plans covering speed optimization, security updates, and software modifications as your business grows.",
    },
  ];

  return (
    <section id="faq" className="pt-16 pb-16 md:pt-20 md:pb-24 bg-bg-primary border-t border-border-muted relative select-none">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Headers & Premium Workspace Photography (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:-mt-6">
            <div className="flex flex-col gap-4">
              <span className="section-tag self-start">Information</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-text-primary tracking-tight leading-[1.05]">
                Frequently Asked Questions
              </h2>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal max-w-sm">
                Everything you need to know about our scope processes, tech integrations, billing models, and business philosophy.
              </p>
            </div>

            {/* Premium Team Planning / Design Visual (Real Image) */}
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border-muted shadow-lg relative group">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
                alt="Product design and scoping session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: FAQ Accordion List (7 columns) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = activeIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border-muted bg-bg-secondary/20 overflow-hidden hover:border-border-active transition-all duration-300"
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="w-full text-left py-5 px-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-bg-secondary cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-light text-lg sm:text-xl text-text-primary">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-bg-secondary border border-border-muted flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-accent-primary" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-text-secondary" />
                      )}
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-6 pt-1 border-t border-border-muted/30 text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
