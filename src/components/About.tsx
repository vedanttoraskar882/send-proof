import React from 'react';
import { 
  Target, 
  FileQuestion, 
  GitMerge, 
  Clock, 
  ShieldAlert, 
  ArrowRight, 
  Database, 
  Cpu, 
  Send,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { FounderProfile } from './FounderProfile';

export const About: React.FC = () => {
  const problems = [
    {
      title: "Scope Drift",
      description: "Marketing campaigns evolve beyond the purpose or product scope described in the subscriber's original consent wording.",
      icon: Target,
    },
    {
      title: "Orphaned Consent",
      description: "Website forms are updated or deleted, making it difficult to establish exactly what subscribers were originally told.",
      icon: FileQuestion,
    },
    {
      title: "Merged Mailing Lists",
      description: "Audience lists from different systems, brands or acquisitions are combined despite having different consent terms.",
      icon: GitMerge,
    },
    {
      title: "Stale Consent",
      description: "Older consent records may no longer reflect a subscriber's current expectations or preferences, particularly during re-engagement campaigns.",
      icon: Clock,
    },
    {
      title: "Assumed Soft Opt-In",
      description: "Businesses may rely on soft opt-in without sufficient evidence that the relevant conditions have been met.",
      icon: ShieldAlert,
    },
  ];

  const comparisonRows = [
    {
      capability: "Consent Evidence",
      conventional: "Contact-level opt-in flags",
      sendproof: "Send-level consent traceability",
    },
    {
      capability: "Original Consent Wording",
      conventional: "May depend on existing forms",
      sendproof: "Preserved wording and form version",
    },
    {
      capability: "Campaign Scope",
      conventional: "General subscription categories",
      sendproof: "Campaign-to-consent scope assessment",
    },
    {
      capability: "Consent Freshness",
      conventional: "Periodic manual review",
      sendproof: "Explainable freshness scoring",
    },
    {
      capability: "Contradictory Preferences",
      conventional: "Records held across separate systems",
      sendproof: "Combined contradiction detection",
    },
    {
      capability: "Assessment Timing",
      conventional: "Periodic audit or manual review",
      sendproof: "Planned assessment before each send",
    },
    {
      capability: "Evidence Output",
      conventional: "General platform exports",
      sendproof: "Timestamped evidence packs",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-light border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
            ABOUT SENDPROOF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-primary tracking-tight">
            Bridging the Gap Between Consent and Campaigns
          </h2>
          <div className="text-base sm:text-lg text-content-secondary leading-relaxed pt-2 space-y-4 text-left sm:text-center">
            <p>
              Businesses often capture marketing consent through website forms, checkout processes and email platforms. Over time, forms change, mailing lists merge, subscribers withdraw consent and marketing campaigns evolve.
            </p>
            <p>
              The original wording that authorised a subscriber's inclusion in a campaign can become difficult to locate, verify or interpret.
            </p>
            <p className="font-medium text-navy-primary">
              SendProof is designed to connect these fragmented records and provide a traceable relationship between the subscriber, original consent, audience segment and marketing campaign.
            </p>
          </div>
        </div>

        {/* Subsection 1: The Consent Evidence Problem */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-primary">
              The Consent Evidence Problem
            </h3>
            <p className="text-sm text-content-secondary mt-1">
              Five common operational challenges that lead to consent ambiguity and regulatory exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <div 
                  key={prob.title}
                  className={`p-6 rounded-2xl bg-white border border-surface-border shadow-regtech hover:shadow-regtech-hover transition-all flex flex-col justify-between ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-teal-light text-teal-deep">
                        <Icon className="w-6 h-6 text-teal-primary" />
                      </div>
                      <span className="text-xs font-semibold text-content-muted">
                        Issue 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold font-display text-navy-primary mb-2">
                      {prob.title}
                    </h4>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subsection 2: One Independent Evidence Layer */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-primary">
              One Independent Evidence Layer
            </h3>
            <p className="text-sm text-content-secondary mt-1">
              Connecting capture points to ongoing marketing activities with verifiable provenance.
            </p>
          </div>

          {/* Visual Comparison Flowchart Diagram */}
          <div className="bg-navy-primary rounded-2xl p-6 sm:p-10 text-white shadow-regtech-dark border border-navy-light/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-navy opacity-40 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
              
              {/* LEFT: Consent Sources */}
              <div className="lg:col-span-3 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-light mb-1">
                  <Database className="w-4 h-4 text-teal-primary" />
                  <span>Consent Sources</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-medium">
                  {['Website forms', 'Checkout opt-ins', 'Email platform consent logs', 'CSV imports', 'Offline sign-up records'].map((source) => (
                    <div key={source} className="p-2.5 rounded-lg bg-navy-secondary/80 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-200">{source}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-primary shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* FLOW ARROW 1 */}
              <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
                <div className="p-2 rounded-full bg-teal-primary/20 text-teal-light border border-teal-primary/30">
                  <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                </div>
              </div>

              {/* CENTRE: SendProof Evidence Engine */}
              <div className="lg:col-span-3 p-5 sm:p-6 rounded-xl bg-gradient-to-b from-navy-secondary to-navy-dark border-2 border-teal-primary/50 shadow-teal-glow space-y-3.5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Cpu className="w-5 h-5 text-teal-primary" />
                  <span className="font-display font-extrabold text-base tracking-wide text-white">
                    SEND<span className="text-teal-primary">PROOF</span>
                  </span>
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-teal-light bg-teal-primary/20 py-1 px-2.5 rounded-full inline-block">
                  Evidence & Assessment Layer
                </div>
                <div className="space-y-2 text-xs text-left pt-1">
                  <div className="p-2 rounded bg-navy-primary/90 border border-teal-primary/30 text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                    <span>Consent normalisation</span>
                  </div>
                  <div className="p-2 rounded bg-navy-primary/90 border border-teal-primary/30 text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                    <span>Provenance graph</span>
                  </div>
                  <div className="p-2 rounded bg-navy-primary/90 border border-teal-primary/30 text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                    <span>Evidence assessment</span>
                  </div>
                  <div className="p-2 rounded bg-navy-primary/90 border border-teal-primary/30 text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                    <span>Advisory decision gate</span>
                  </div>
                </div>
              </div>

              {/* FLOW ARROW 2 */}
              <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
                <div className="p-2 rounded-full bg-teal-primary/20 text-teal-light border border-teal-primary/30">
                  <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                </div>
              </div>

              {/* RIGHT: Marketing Activities */}
              <div className="lg:col-span-3 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-light mb-1">
                  <Send className="w-4 h-4 text-teal-primary" />
                  <span>Marketing Activities</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-medium">
                  {['Regular newsletters', 'Product promotions', 'Re-engagement campaigns', 'Partner offers', 'Merged audience campaigns'].map((act) => (
                    <div key={act} className="p-2.5 rounded-lg bg-navy-secondary/80 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-200">{act}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Supporting Statement Banner */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm sm:text-base text-teal-light font-medium max-w-3xl mx-auto">
                "SendProof connects the consent side and the campaign side without replacing existing email marketing platforms or modifying their data."
              </p>
            </div>
          </div>
        </div>

        {/* Subsection 3: Designed to Work Differently (Comparison Table) */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-primary">
              Designed to Work Differently
            </h3>
            <p className="text-sm text-content-secondary mt-1">
              How SendProof's proposed evidence layer differs from conventional list management tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-surface-border bg-white shadow-regtech">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-navy-primary text-white border-b border-surface-border">
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs">
                    Capability
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-slate-300">
                    Conventional Approach
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-teal-light bg-navy-secondary">
                    SendProof Approach
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {comparisonRows.map((row, index) => (
                  <tr 
                    key={row.capability} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-surface-light/60'}
                  >
                    <td className="py-3.5 px-5 font-semibold text-navy-primary">
                      {row.capability}
                    </td>
                    <td className="py-3.5 px-5 text-content-secondary flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{row.conventional}</span>
                    </td>
                    <td className="py-3.5 px-5 font-medium text-teal-deep bg-teal-light/20 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                      <span>{row.sendproof}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-content-muted mt-3 text-center italic">
            Comparison describes the proposed SendProof approach and common conventional workflows. Individual products may offer additional functionality.
          </p>
        </div>

        {/* Subsection 4: Founder Profile Component */}
        <FounderProfile />

      </div>
    </section>
  );
};
