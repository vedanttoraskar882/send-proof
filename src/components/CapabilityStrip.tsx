import React from 'react';
import { Plug, GitFork, ShieldCheck, FileCheck } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    {
      badge: "CONNECT",
      title: "Connect",
      description: "Read consent from existing marketing systems.",
      icon: Plug,
    },
    {
      badge: "TRACE",
      title: "Trace",
      description: "Link subscribers to the evidence behind their consent.",
      icon: GitFork,
    },
    {
      badge: "TEST",
      title: "Test",
      description: "Assess planned campaigns against relevant evidence.",
      icon: ShieldCheck,
    },
    {
      badge: "PROVE",
      title: "Prove",
      description: "Generate timestamped evidence packs.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="bg-white border-y border-surface-border relative z-10 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.badge}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-light border border-surface-border/70 hover:border-teal-primary/30 transition-all hover:shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-teal-light text-teal-deep shrink-0">
                  <Icon className="w-6 h-6 text-teal-primary" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-teal-deep uppercase">
                    {item.badge}
                  </span>
                  <p className="text-sm font-medium text-content-primary mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
