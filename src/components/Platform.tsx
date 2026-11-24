import React from 'react';
import { 
  primaryModules, 
  additionalCapabilities, 
  plannedIntegrations, 
  productRoadmap 
} from '../data/platformFeatures';
import type { PrimaryModule } from '../data/platformFeatures';
import { 
  Fingerprint, 
  Network, 
  ScanSearch, 
  Clock, 
  ShieldCheck, 
  FileCheck2, 
  CheckCircle2, 
  Calendar,
  Layers,
  Lock,
  GitBranch,
  FileText
} from 'lucide-react';

export const Platform: React.FC = () => {
  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'module-01': return Fingerprint;
      case 'module-02': return Network;
      case 'module-03': return ScanSearch;
      case 'module-04': return Clock;
      case 'module-05': return ShieldCheck;
      case 'module-06': return FileCheck2;
      default: return Layers;
    }
  };

  const renderVisualIllustration = (module: PrimaryModule) => {
    switch (module.visualType) {
      case 'fingerprint':
        return (
          <div className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs space-y-1.5 font-mono">
            <div className="flex items-center justify-between text-[11px] text-content-secondary">
              <span className="font-semibold text-navy-primary">SHA-256 Hash Verification</span>
              <span className="text-teal-deep font-bold">SHA-256</span>
            </div>
            <div className="p-1.5 rounded bg-white border border-surface-border text-[10px] text-content-primary truncate">
              b84a91f42e3998b47a1923e59c03b12384a91f42e...
            </div>
            <div className="text-[10px] text-content-muted font-sans flex items-center gap-1">
              <Lock className="w-3 h-3 text-teal-primary" />
              <span>Cryptographic integrity verification (independent hashing)</span>
            </div>
          </div>
        );

      case 'graph':
        return (
          <div className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs space-y-2">
            <div className="text-[11px] font-semibold text-navy-primary flex items-center gap-1">
              <GitBranch className="w-3.5 h-3.5 text-teal-primary" />
              <span>Provenance Lineage</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-content-primary">
              <span className="px-1.5 py-0.5 rounded bg-white border border-surface-border">Sub</span>
              <span className="text-teal-primary">→</span>
              <span className="px-1.5 py-0.5 rounded bg-teal-light text-teal-deep font-semibold">Consent</span>
              <span className="text-teal-primary">→</span>
              <span className="px-1.5 py-0.5 rounded bg-white border border-surface-border">Segment</span>
              <span className="text-teal-primary">→</span>
              <span className="px-1.5 py-0.5 rounded bg-navy-primary text-white">Campaign</span>
            </div>
          </div>
        );

      case 'scope':
        return (
          <div className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs space-y-1.5">
            <div className="text-[11px] font-semibold text-navy-primary">Classification Matching</div>
            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              <div className="p-1.5 rounded bg-white border border-surface-border">
                <span className="text-content-muted block">Consent Class:</span>
                <span className="font-semibold text-navy-primary">Product news & offers</span>
              </div>
              <div className="p-1.5 rounded bg-white border border-surface-border">
                <span className="text-content-muted block">Campaign Scope:</span>
                <span className="font-semibold text-teal-deep">Own similar products</span>
              </div>
            </div>
          </div>
        );

      case 'freshness':
        return (
          <div className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs space-y-2">
            <div className="flex justify-between items-center text-[11px] font-semibold">
              <span className="text-navy-primary">Freshness & Stability Index</span>
              <span className="text-teal-deep">84 / 100</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-teal-primary h-full rounded-full" style={{ width: '84%' }} />
            </div>
            <div className="grid grid-cols-4 gap-1 text-[9px] text-center text-content-secondary">
              <span className="p-1 rounded bg-white border border-surface-border">Age: 45d</span>
              <span className="p-1 rounded bg-white border border-surface-border">Double Opt-in</span>
              <span className="p-1 rounded bg-white border border-surface-border">Form Live</span>
              <span className="p-1 rounded bg-white border border-surface-border">0 Unsub</span>
            </div>
          </div>
        );

      case 'recommendations':
        return (
          <div className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs space-y-2">
            <div className="text-[11px] font-semibold text-navy-primary">Advisory Recommendation Gate</div>
            <div className="grid grid-cols-3 gap-1 text-center font-bold text-[10px]">
              <span className="py-1 px-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                SEND
              </span>
              <span className="py-1 px-1 rounded bg-red-100 text-red-800 border border-red-300">
                HOLD
              </span>
              <span className="py-1 px-1 rounded bg-amber-100 text-amber-800 border border-amber-300 truncate">
                RE-PERMISSION
              </span>
            </div>
            <div className="text-[9px] text-content-muted text-center italic">
              Advisory decision support — customer retains send responsibility
            </div>
          </div>
        );

      case 'evidence':
        return (
          <div className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-navy-primary flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-teal-primary" />
                Evidence Pack Spec
              </span>
              <span className="text-[10px] text-teal-deep font-semibold">Audit Ready</span>
            </div>
            <div className="flex flex-wrap gap-1 text-[9px]">
              <span className="px-1.5 py-0.5 rounded bg-white border border-surface-border">Timestamped Wording</span>
              <span className="px-1.5 py-0.5 rounded bg-white border border-surface-border">Rule Set v2.0</span>
              <span className="px-1.5 py-0.5 rounded bg-white border border-surface-border">Fingerprint Log</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="platform" className="py-20 lg:py-28 bg-white border-b border-surface-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
            THE SENDPROOF PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-primary tracking-tight">
            From Fragmented Consent to Traceable Evidence
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed pt-2">
            SendProof brings together consent capture, provenance mapping, campaign scope assessment, freshness scoring and evidence generation within a single proposed read-only platform.
          </p>
        </div>

        {/* 6 Primary Feature Cards (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {primaryModules.map((module) => {
            const Icon = getModuleIcon(module.id);
            return (
              <div 
                key={module.id}
                className="rounded-2xl border border-surface-border bg-white shadow-regtech hover:shadow-regtech-hover transition-all flex flex-col justify-between p-6 sm:p-7 relative group"
              >
                <div className="space-y-4">
                  {/* Card Header: Module Number & Release Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-teal-deep uppercase">
                      {module.moduleNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-navy-primary border border-surface-border">
                      <Calendar className="w-3 h-3 text-teal-primary" />
                      {module.plannedRelease}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 pt-1">
                    <div className="p-3 rounded-xl bg-teal-light text-teal-deep shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-teal-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-navy-primary leading-snug">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {module.description}
                  </p>

                  {/* Key Functionality List */}
                  <div className="pt-2 border-t border-surface-border/70 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-content-primary block">
                      Planned Key Functionality:
                    </span>
                    <ul className="space-y-1.5 text-xs text-content-secondary">
                      {module.keyFunctionality.map((func, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0 mt-0.5" />
                          <span>{func}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Illustration & Highlight Note */}
                <div className="mt-6 pt-4 border-t border-surface-border/70 space-y-3">
                  {renderVisualIllustration(module)}
                  {module.highlightNote && (
                    <p className="text-[11px] text-content-muted leading-tight">
                      {module.highlightNote}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Subsection: Additional Platform Capabilities */}
        <div className="mb-20 pt-10 border-t border-surface-border">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-primary">
              Additional Platform Capabilities
            </h3>
            <p className="text-sm text-content-secondary mt-1">
              Supporting interfaces designed for consent auditing, campaign previews, and multi-client workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCapabilities.map((cap, idx) => (
              <div 
                key={cap.id}
                className="p-5 rounded-xl bg-surface-light border border-surface-border/80 hover:border-teal-primary/40 transition-colors"
              >
                <div className="text-xs font-bold text-teal-deep uppercase mb-1">
                  Capability 0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-navy-primary mb-1.5">
                  {cap.title}
                </h4>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-content-muted text-center italic mt-4">
            Platform features reflect planned commercial capabilities scheduled for phased release.
          </p>
        </div>

        {/* Subsection: Planned Platform Integrations */}
        <div className="mb-20 pt-10 border-t border-surface-border">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
              COMPATIBILITY & ECOSYSTEM
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-primary mt-1">
              Built Around Your Existing Marketing Systems
            </h3>
            <p className="text-sm text-content-secondary mt-2">
              SendProof is designed to work alongside the tools businesses already use, creating an independent evidence layer without replacing their existing marketing infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plannedIntegrations.map((item) => (
              <div 
                key={item.name}
                className="p-5 rounded-xl bg-white border border-surface-border shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-navy-primary">{item.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Planned
                    </span>
                  </div>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-surface-border/70 flex items-center justify-between text-[11px] text-teal-deep font-medium">
                  <span>{item.releaseTimeline}</span>
                  <span className="text-slate-400 text-[10px]">Read-Only</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-surface-border text-center text-xs text-content-secondary max-w-3xl mx-auto">
            All listed integrations represent planned commercial releases. SendProof connects via read-only APIs and does not claim official endorsement or partnership with third-party software providers.
          </div>
        </div>

        {/* Subsection: Product Development Roadmap */}
        <div className="pt-10 border-t border-surface-border">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
              RELEASE TIMELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-primary mt-1">
              Planned Product Development
            </h3>
            <p className="text-sm text-content-secondary mt-2">
              A transparent view of SendProof's phased commercial rollout from design complete to multi-client expansion.
            </p>
          </div>

          {/* Roadmap Grid / Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {productRoadmap.map((stage) => (
              <div 
                key={stage.stageNumber}
                className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                  stage.isCurrent 
                    ? 'bg-navy-primary text-white border-teal-primary/60 shadow-md ring-2 ring-teal-primary/30' 
                    : 'bg-white text-content-primary border-surface-border shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${
                      stage.isCurrent ? 'text-teal-light' : 'text-teal-deep'
                    }`}>
                      {stage.stageNumber}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      stage.isCurrent ? 'bg-teal-primary text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {stage.timing}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold font-display mb-3 ${
                    stage.isCurrent ? 'text-white' : 'text-navy-primary'
                  }`}>
                    {stage.title}
                  </h4>

                  <ul className={`space-y-1.5 text-xs ${
                    stage.isCurrent ? 'text-slate-200' : 'text-content-secondary'
                  }`}>
                    {stage.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${
                          stage.isCurrent ? 'bg-teal-light' : 'bg-teal-primary'
                        }`} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-content-muted italic mt-6">
            All milestones describe planned development activities and future releases, not completed commercial achievements.
          </div>
        </div>

      </div>
    </section>
  );
};
