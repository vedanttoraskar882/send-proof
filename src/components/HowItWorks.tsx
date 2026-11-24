import React from 'react';
import { workflowSteps } from '../data/workflowSteps';
import { 
  Plug, 
  Database, 
  Network, 
  ShieldCheck, 
  FileCheck, 
  ArrowRight, 
  ArrowDown,
  CheckCircle2
} from 'lucide-react';
import { ScenarioPreview } from './ScenarioPreview';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plug': return Plug;
      case 'Database': return Database;
      case 'Network': return Network;
      case 'ShieldCheck': return ShieldCheck;
      case 'FileCheck': return FileCheck;
      default: return Plug;
    }
  };

  const dataFlowSteps = [
    { label: "Consent Sources", sub: "Forms, Checkout, CSV", color: "bg-slate-100 text-navy-primary border-slate-300" },
    { label: "Normalised Evidence", sub: "Standard Format + SHA-256", color: "bg-teal-light text-teal-deep border-teal-primary/30" },
    { label: "Provenance Graph", sub: "Subscriber Lineage", color: "bg-slate-100 text-navy-primary border-slate-300" },
    { label: "Campaign Assessment", sub: "Scope & Freshness Checks", color: "bg-slate-100 text-navy-primary border-slate-300" },
    { label: "Send / Hold / Re-permission", sub: "Advisory Gate", color: "bg-navy-primary text-white border-navy-light" },
    { label: "Evidence Pack", sub: "Deterministic Export", color: "bg-teal-primary text-white border-teal-deep" },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface-light border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
            HOW SENDPROOF WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-primary tracking-tight">
            Five Steps from Consent to Evidence
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed pt-2">
            SendProof is designed to transform fragmented consent records into a traceable campaign assessment and structured evidence pack.
          </p>
        </div>

        {/* 5-Step Connected Workflow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
            {workflowSteps.map((step, idx) => {
              const Icon = getStepIcon(step.iconName);
              return (
                <div 
                  key={step.stepNumber}
                  className="relative p-5 rounded-2xl bg-white border border-surface-border shadow-regtech hover:shadow-regtech-hover transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: Step Number badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-light text-teal-deep">
                        STEP {step.stepNumber}
                      </span>
                      <span className="text-[10px] font-bold text-content-muted uppercase tracking-wider">
                        {step.badge}
                      </span>
                    </div>

                    {/* Step Icon & Title */}
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-surface-light text-teal-primary w-fit border border-surface-border">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold font-display text-navy-primary leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-content-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Supporting Details */}
                  <div className="pt-3 border-t border-surface-border/70">
                    <ul className="space-y-1 text-[11px] text-content-secondary">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-teal-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Desktop Step Connector Arrow (between items) */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-surface-border shadow-sm items-center justify-center text-teal-primary">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated Data-Flow Illustration Below the Workflow */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-regtech">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-deep">
              Continuous Traceability Pipeline
            </span>
            <h4 className="text-lg font-bold font-display text-navy-primary mt-0.5">
              Deterministic End-to-End Consent Data Flow
            </h4>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            {dataFlowSteps.map((flow, index) => (
              <React.Fragment key={flow.label}>
                <div className={`w-full md:w-auto flex-1 p-3.5 rounded-xl border ${flow.color} shadow-sm transition-transform hover:scale-102`}>
                  <div className="text-xs font-bold leading-tight">{flow.label}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">{flow.sub}</div>
                </div>

                {index < dataFlowSteps.length - 1 && (
                  <div className="text-teal-primary shrink-0">
                    <ArrowRight className="w-4 h-4 hidden md:block" />
                    <ArrowDown className="w-4 h-4 block md:hidden my-1" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Practical Use Case Demonstration Subsection */}
        <ScenarioPreview />

      </div>
    </section>
  );
};
