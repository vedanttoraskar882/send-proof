import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  // First question open by default per Section 17 requirements
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface-light border-b border-surface-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-primary tracking-tight">
            Everything You Need to Know About SendProof
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed pt-2">
            Clear, straightforward answers about our independent consent evidence architecture, commercial terms, and planned pilot releases.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            const headingId = `faq-heading-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-surface-border bg-white shadow-sm overflow-hidden transition-all hover:border-teal-primary/30"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary"
                >
                  <span className="text-base sm:text-lg font-bold text-navy-primary flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-teal-deep shrink-0">
                      Q{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-colors ${
                    isOpen ? 'bg-teal-primary text-white' : 'bg-surface-light text-content-secondary'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-content-secondary leading-relaxed border-t border-surface-border/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
