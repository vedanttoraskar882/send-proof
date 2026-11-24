import React, { useState } from 'react';
import { practicalScenarios } from '../data/scenarioData';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  FileText, 
  Send, 
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScenarioPreview: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(practicalScenarios[0].id);

  const activeScenario = practicalScenarios.find((s) => s.id === activeTabId) || practicalScenarios[0];

  const getRecommendationBadge = (rec: string) => {
    switch (rec) {
      case 'SEND':
        return (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-100" />
            <span>SEND</span>
          </div>
        );
      case 'HOLD':
        return (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-600 text-white font-bold text-sm shadow-sm">
            <XCircle className="w-4 h-4 text-red-100" />
            <span>HOLD</span>
          </div>
        );
      case 'RE-PERMISSION':
        return (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-600 text-white font-bold text-sm shadow-sm">
            <AlertTriangle className="w-4 h-4 text-amber-100" />
            <span>RE-PERMISSION</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-20 pt-16 border-t border-surface-border">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
          INTERACTIVE DEMONSTRATION
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy-primary mt-1">
          See How Consent Evidence Changes a Campaign Decision
        </h3>
        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-content-secondary">
          <Info className="w-3.5 h-3.5 text-teal-primary" />
          <span>Illustrative Scenario — No Real Customer Data</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-surface-border shadow-regtech overflow-hidden">
        
        {/* Scenario Select Tabs */}
        <div className="flex border-b border-surface-border bg-surface-light p-1.5 gap-1.5 overflow-x-auto">
          {practicalScenarios.map((scen) => {
            const isActive = scen.id === activeTabId;
            return (
              <button
                key={scen.id}
                type="button"
                onClick={() => setActiveTabId(scen.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
                  isActive
                    ? 'bg-white text-navy-primary shadow-sm border border-surface-border'
                    : 'text-content-secondary hover:text-navy-primary hover:bg-slate-200/50'
                }`}
              >
                <span>{scen.tabLabel}</span>
                {scen.recommendation === 'SEND' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                )}
                {scen.recommendation === 'HOLD' && (
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                )}
                {scen.recommendation === 'RE-PERMISSION' && (
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 space-y-6"
          >
            {/* Top Row: Original Consent vs Planned Campaign */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Box: Original Consent Wording */}
              <div className="p-5 rounded-xl bg-surface-light border border-surface-border space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-navy-primary">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-teal-primary" />
                    Original Consent Record
                  </span>
                  <span className="text-[10px] text-content-muted font-normal">{activeScenario.formVersion}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-teal-primary/30 text-sm font-medium text-navy-primary italic">
                  "{activeScenario.originalConsent}"
                </div>
                <div className="flex items-center justify-between text-xs text-content-secondary">
                  <span>Source: {activeScenario.consentSource}</span>
                  <span className="text-teal-deep font-semibold">Captured & SHA-256 Hashed</span>
                </div>
              </div>

              {/* Right Box: Planned Marketing Campaign */}
              <div className="p-5 rounded-xl bg-surface-light border border-surface-border space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-navy-primary">
                  <span className="flex items-center gap-1.5">
                    <Send className="w-4 h-4 text-teal-primary" />
                    Proposed Campaign Metadata
                  </span>
                  <span className="text-[10px] text-content-muted font-normal">{activeScenario.campaignType}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-surface-border text-sm font-medium text-navy-primary">
                  {activeScenario.plannedCampaign}
                </div>
                <div className="flex items-center justify-between text-xs text-content-secondary">
                  <span>Target: {activeScenario.targetSegment}</span>
                  <span className="text-slate-500">Pre-send Check</span>
                </div>
              </div>

            </div>

            {/* Bottom Row: Pre-Send Advisory Recommendation */}
            <div className="p-5 rounded-xl border border-surface-border bg-slate-50/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-content-secondary block">
                    Advisory Recommendation
                  </span>
                  <h4 className="text-base font-bold text-navy-primary">
                    {activeScenario.scenarioName}
                  </h4>
                </div>
                <div>
                  {getRecommendationBadge(activeScenario.recommendation)}
                </div>
              </div>

              {/* Explanation Quote Box */}
              <div className="p-4 rounded-lg bg-white border border-surface-border text-sm text-content-primary leading-relaxed font-medium">
                {activeScenario.explanation}
              </div>

              {/* Factor Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                {activeScenario.evidenceFactors.map((factor) => (
                  <div key={factor.label} className="p-2.5 rounded-lg bg-white border border-surface-border flex items-start gap-2">
                    {factor.status === 'pass' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {factor.status === 'fail' && (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    )}
                    {factor.status === 'warn' && (
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="font-semibold text-navy-primary block">{factor.label}</span>
                      <span className="text-content-secondary text-[11px] leading-tight block mt-0.5">
                        {factor.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Safe notice */}
        <div className="px-6 py-3 bg-surface-light border-t border-surface-border text-center text-xs text-content-muted">
          Predefined frontend demonstration only. SendProof does not upload data, provide legal certifications or send email campaigns.
        </div>

      </div>
    </div>
  );
};
