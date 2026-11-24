import React from 'react';
import { 
  healthCheckPlan, 
  subscriptionPlans, 
  comparisonTableData, 
  pricingNotes 
} from '../data/pricingPlans';
import { 
  Building2, 
  Briefcase, 
  ShieldAlert, 
  ShoppingCart, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Calendar, 
  Clock
} from 'lucide-react';

interface MarketPricingProps {
  onRequestPilot: () => void;
}

export const MarketPricing: React.FC<MarketPricingProps> = ({ onRequestPilot }) => {
  const customerSegments = [
    {
      cardNum: "01",
      title: "UK Small and Medium-Sized Businesses",
      description: "UK businesses with 10 to 249 employees that run regular email marketing campaigns, often without dedicated in-house data protection specialists.",
      requirements: [
        "Consent record visibility",
        "Mailing list reviews",
        "Campaign assessment",
        "Evidence for customer complaints",
        "Identification of unreliable consent"
      ],
      commercialOffering: "Consent Health Check, Starter and Growth",
      icon: Building2,
    },
    {
      cardNum: "02",
      title: "Digital Marketing Agencies",
      description: "Agencies managing email marketing programmes across multiple SME clients and seeking a centralised view of consent evidence.",
      requirements: [
        "Multi-client monitoring",
        "Separate client views",
        "Campaign evidence",
        "Consent fragility identification",
        "Co-branded evidence packs"
      ],
      commercialOffering: "Agency subscription",
      icon: Briefcase,
    },
    {
      cardNum: "03",
      title: "Outsourced DPOs & Privacy Consultancies",
      description: "Data protection professionals and privacy consultancies seeking continuous consent evidence between periodic client audits.",
      requirements: [
        "Evidence visibility",
        "Identification of consent weaknesses",
        "Client referral opportunities",
        "Supporting evidence for audit work"
      ],
      commercialOffering: "Referral of client Consent Health Checks. The referred client pays SendProof directly.",
      icon: ShieldAlert,
    },
    {
      cardNum: "04",
      title: "E-commerce & Subscription Brands",
      description: "Online retailers and subscription businesses managing large mailing lists built across multiple forms, systems and customer acquisition campaigns.",
      requirements: [
        "Dormant-list assessment",
        "Merged audience review",
        "Re-engagement assessment",
        "Multiple email platform connectors",
        "Large subscriber capacity"
      ],
      commercialOffering: "Consent Health Check and Growth",
      icon: ShoppingCart,
    },
  ];

  return (
    <section id="market-pricing" className="py-20 lg:py-28 bg-white border-b border-surface-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
            MARKET & PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-primary tracking-tight">
            Built for Businesses That Take Consent Seriously
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed pt-2">
            SendProof is designed for organisations that rely on email marketing and need a clearer understanding of the consent evidence supporting their campaigns.
          </p>
        </div>

        {/* 4 Target Customer Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {customerSegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div 
                key={segment.cardNum}
                className="p-6 sm:p-7 rounded-2xl bg-surface-light border border-surface-border hover:border-teal-primary/40 shadow-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-deep uppercase">
                      Segment {segment.cardNum}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white border border-surface-border text-teal-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-navy-primary mb-2">
                    {segment.title}
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed mb-4">
                    {segment.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-surface-border/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-content-primary block mb-2">
                      Common Requirements:
                    </span>
                    {segment.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-content-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-surface-border/70 bg-white/70 -mx-6 -mb-6 p-4 rounded-b-2xl border-t">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-deep block">
                    Relevant Commercial Offering:
                  </span>
                  <span className="text-xs font-semibold text-navy-primary mt-0.5 block">
                    {segment.commercialOffering}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Market Opportunity Statistics Strip */}
        <div className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-navy-primary via-navy-secondary to-navy-dark text-white shadow-regtech-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                46,078
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-teal-light">
                Estimated Serviceable UK Businesses
              </div>
              <span className="text-[11px] text-slate-400 block">Market Estimate</span>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 pt-6 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                £123.8 Million
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-teal-light">
                Estimated Annual Serviceable Market
              </div>
              <span className="text-[11px] text-slate-400 block">Market Estimate</span>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-300 max-w-2xl mx-auto">
            Based on SendProof's business plan estimates for consumer-facing UK businesses with 10 to 249 employees using CRM software. Figures represent market opportunity estimates, not SendProof's current customer base or earned revenue.
          </div>
        </div>

        {/* Exact Pricing Sub-Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
            PLANNED SUBSCRIPTIONS & SERVICES
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-primary tracking-tight">
            Transparent Pricing. Clear Consent Evidence.
          </h3>
          <p className="text-base text-content-secondary leading-relaxed pt-1">
            Start with a standalone Consent Health Check or choose a planned subscription based on the size and complexity of your email marketing operations.
          </p>
        </div>

        {/* Standalone Horizontal Card: Consent Health Check */}
        <div className="mb-12 rounded-2xl border-2 border-teal-primary/40 bg-gradient-to-br from-white to-teal-subtle/30 shadow-regtech p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left Info */}
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-light text-teal-deep border border-teal-primary/30 uppercase tracking-wider">
                  Standalone Service
                </span>
                <span className="text-xs text-content-secondary flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-primary" />
                  {healthCheckPlan.earliestBilling}
                </span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-primary">
                  {healthCheckPlan.name}
                </h4>
                <p className="text-sm text-content-secondary mt-1.5 leading-relaxed">
                  {healthCheckPlan.description}
                </p>
              </div>

              {/* 8 Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {healthCheckPlan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-navy-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-content-muted flex items-center gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-teal-primary" />
                <span>{healthCheckPlan.operationalNotice}</span>
              </div>
            </div>

            {/* Right Price & CTA */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end p-6 rounded-xl bg-white border border-surface-border shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-navy-primary">
                {healthCheckPlan.price}
              </div>
              <div className="text-xs text-content-secondary font-medium uppercase tracking-wider mt-0.5">
                {healthCheckPlan.billingPeriod}
              </div>
              <div className="text-[11px] text-content-muted mt-1">
                Paid upfront when commercially available. Excludes VAT.
              </div>

              <button
                type="button"
                onClick={onRequestPilot}
                className="mt-5 w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-primary hover:bg-teal-deep rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary"
              >
                {healthCheckPlan.ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* 3 Subscription Pricing Cards: Starter, Growth, Agency */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl bg-white shadow-regtech p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.isHighlighted
                  ? 'border-2 border-teal-primary shadow-regtech-hover ring-1 ring-teal-primary/30'
                  : 'border border-surface-border'
              }`}
            >
              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-bold font-display text-navy-primary">
                    {plan.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-content-muted">
                    {plan.earliestBilling}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-4xl sm:text-5xl font-extrabold font-display text-navy-primary">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-content-secondary">
                    {plan.billingPeriod}
                  </span>
                </div>

                <p className="text-xs text-content-secondary min-h-[36px] mb-4">
                  {plan.suitableFor}
                </p>

                {/* Account Limitations */}
                <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border text-xs space-y-1.5 mb-5 font-medium">
                  <div className="text-navy-primary flex items-center justify-between">
                    <span className="text-content-muted">Sending Accounts:</span>
                    <span className="font-semibold">{plan.limits.accounts}</span>
                  </div>
                  <div className="text-navy-primary flex items-center justify-between">
                    <span className="text-content-muted">Active Subscribers:</span>
                    <span className="font-semibold">{plan.limits.subscribers}</span>
                  </div>
                  <div className="text-navy-primary flex items-center justify-between">
                    <span className="text-content-muted">Connectors:</span>
                    <span className="font-semibold">{plan.limits.connectors}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-content-primary block mb-2">
                    Included Functionality:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-content-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {/* Not Included Section (if applicable) */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 mt-3 border-t border-surface-border/70 space-y-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-content-muted block">
                        Not Included:
                      </span>
                      {plan.notIncluded.map((notFeat, j) => (
                        <div key={j} className="flex items-start gap-2 text-[11px] text-content-muted">
                          <XCircle className="w-3 h-3 text-slate-300 shrink-0 mt-0.5" />
                          <span>{notFeat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Agency Utilisation Note */}
                  {plan.agencyNote && (
                    <div className="mt-3 p-2.5 rounded-lg bg-teal-light/60 border border-teal-primary/20 text-[11px] text-teal-deep font-medium leading-relaxed">
                      {plan.agencyNote}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-surface-border">
                <button
                  type="button"
                  onClick={onRequestPilot}
                  className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    plan.isHighlighted
                      ? 'bg-teal-primary hover:bg-teal-deep text-white shadow-sm'
                      : 'bg-navy-primary hover:bg-navy-secondary text-white'
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Subscription Feature Comparison Table */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-2xl font-bold font-display text-navy-primary">
              Subscription Feature Comparison
            </h4>
            <p className="text-sm text-content-secondary mt-1">
              Detailed breakdown of features across planned commercial tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-surface-border bg-white shadow-regtech">
            <table className="w-full text-left text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-navy-primary text-white border-b border-surface-border">
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs">
                    Feature
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-center">
                    Starter
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-center bg-navy-secondary text-teal-light">
                    Growth
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-center">
                    Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {comparisonTableData.map((row, idx) => (
                  <tr 
                    key={row.feature} 
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-light/60'}
                  >
                    <td className="py-3 px-5 font-semibold text-navy-primary text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-3 px-5 text-center text-xs sm:text-sm text-content-secondary">
                      {row.starter}
                    </td>
                    <td className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-teal-deep bg-teal-light/20">
                      {row.growth}
                    </td>
                    <td className="py-3 px-5 text-center text-xs sm:text-sm text-content-secondary font-medium">
                      {row.agency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commercial Notes & Disclaimers */}
        <div className="p-6 rounded-2xl bg-surface-light border border-surface-border text-xs text-content-secondary space-y-2">
          <span className="font-bold text-navy-primary block uppercase tracking-wider text-[11px] mb-1">
            Commercial & Billing Terms:
          </span>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 list-disc pl-4">
            {pricingNotes.map((note, index) => (
              <li key={index} className="leading-relaxed">
                {note}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
