export interface HealthCheckService {
  name: string;
  price: string;
  priceNumeric: number;
  billingPeriod: string;
  earliestBilling: string;
  description: string;
  features: string[];
  operationalNotice: string;
  paymentNotice: string;
  ctaText: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  billingPeriod: string;
  earliestBilling: string;
  suitableFor: string;
  limits: {
    accounts: string;
    subscribers: string;
    connectors: string;
  };
  features: string[];
  notIncluded?: string[];
  isHighlighted?: boolean;
  agencyNote?: string;
  ctaText: string;
}

export interface ComparisonRow {
  feature: string;
  starter: string;
  growth: string;
  agency: string;
}

export const healthCheckPlan: HealthCheckService = {
  name: "Consent Health Check",
  price: "£495",
  priceNumeric: 495,
  billingPeriod: "one-off payment",
  earliestBilling: "Earliest planned billing: Month 4",
  description: "A standalone assessment designed to identify weaknesses in an organisation's existing mailing list and consent evidence.",
  features: [
    "Analysis of mailing list exports",
    "Analysis of consent record exports",
    "Segment-level findings report",
    "Identification of stale consent",
    "Identification of unscoped consent",
    "Identification of unverifiable consent",
    "Review of identified evidence weaknesses",
    "Findings call with recommended actions"
  ],
  operationalNotice: "The business plan targets analysis within five working days.",
  paymentNotice: "£495 one-off. Paid upfront by card when commercially available. Price excludes VAT.",
  ctaText: "Register Interest"
};

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "£149",
    priceNumeric: 149,
    billingPeriod: "/ month",
    earliestBilling: "Earliest planned billing: Month 7",
    suitableFor: "Small and medium-sized businesses operating one email sending account.",
    limits: {
      accounts: "One sending account",
      subscribers: "Up to 10,000 active subscribers",
      connectors: "One email platform connector"
    },
    features: [
      "Consent evidence records",
      "Consent provenance graph",
      "Evidence overview",
      "Campaign scope-fit assessment",
      "Campaign freshness assessment",
      "Subscriber type test",
      "Monthly evidence export",
      "One email platform connector",
      "Soft opt-in test from Month 12",
      "Pre-send decision gate from Month 12"
    ],
    notIncluded: [
      "Multiple email platform connectors",
      "Automatic scope-drift alerts across all segments",
      "On-demand evidence exports",
      "Multi-client dashboard",
      "Co-branded evidence packs"
    ],
    isHighlighted: false,
    ctaText: "Register Interest"
  },
  {
    id: "growth",
    name: "Growth",
    price: "£399",
    priceNumeric: 399,
    billingPeriod: "/ month",
    earliestBilling: "Earliest planned billing: Month 7",
    suitableFor: "Growing SMEs, e-commerce companies and subscription brands managing larger mailing lists or several marketing platforms.",
    limits: {
      accounts: "One sending account",
      subscribers: "Up to 75,000 active subscribers",
      connectors: "Several email platform connectors"
    },
    features: [
      "Consent evidence records",
      "Consent provenance graph",
      "Evidence overview",
      "Campaign scope-fit assessment",
      "Campaign freshness assessment",
      "Subscriber type test",
      "Monthly evidence export",
      "Several email platform connectors",
      "Automatic scope-drift alerts across all segments",
      "Soft opt-in test from Month 12",
      "Pre-send decision gate from Month 12",
      "On-demand evidence exports from Month 12"
    ],
    notIncluded: [
      "Multi-client dashboard",
      "Co-branded evidence packs"
    ],
    isHighlighted: true,
    ctaText: "Register Interest"
  },
  {
    id: "agency",
    name: "Agency",
    price: "£1,200",
    priceNumeric: 1200,
    billingPeriod: "/ month",
    earliestBilling: "Earliest planned billing: Month 13",
    suitableFor: "Digital marketing agencies managing email campaigns on behalf of multiple client organisations.",
    limits: {
      accounts: "Up to 10 connected client accounts per licence",
      subscribers: "Not specified",
      connectors: "Several email platform connectors"
    },
    features: [
      "Consent evidence records per client",
      "Consent provenance graph per client",
      "Evidence overview per client",
      "Campaign scope-fit assessment per client",
      "Campaign freshness assessment per client",
      "Subscriber type test per client",
      "Monthly evidence exports",
      "Several email platform connectors",
      "Automatic scope-drift alerts across all segments",
      "Soft opt-in eligibility test",
      "Pre-send decision gate",
      "On-demand evidence exports",
      "Multi-client dashboard",
      "Separate client views",
      "Co-branded evidence packs"
    ],
    agencyNote: "At full utilisation of all ten connected client accounts, the licence is equivalent to £120 per client account per month.",
    isHighlighted: false,
    ctaText: "Request a Pilot"
  }
];

export const comparisonTableData: ComparisonRow[] = [
  {
    feature: "Monthly price",
    starter: "£149",
    growth: "£399",
    agency: "£1,200"
  },
  {
    feature: "Sending accounts",
    starter: "One",
    growth: "One",
    agency: "Up to 10 connected client accounts"
  },
  {
    feature: "Active subscribers",
    starter: "Up to 10,000",
    growth: "Up to 75,000",
    agency: "Not specified"
  },
  {
    feature: "Consent evidence records",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes, per client"
  },
  {
    feature: "Consent provenance graph",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes, per client"
  },
  {
    feature: "Evidence overview",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes, per client"
  },
  {
    feature: "Campaign scope-fit assessment",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes, per client"
  },
  {
    feature: "Campaign freshness assessment",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes, per client"
  },
  {
    feature: "Subscriber type test",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes, per client"
  },
  {
    feature: "Monthly evidence export",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes"
  },
  {
    feature: "Email platform connectors",
    starter: "One",
    growth: "Several",
    agency: "Several"
  },
  {
    feature: "Automatic scope-drift alerts across all segments",
    starter: "No",
    growth: "Yes",
    agency: "Yes"
  },
  {
    feature: "Soft opt-in test",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes"
  },
  {
    feature: "Pre-send decision gate",
    starter: "Yes",
    growth: "Yes",
    agency: "Yes"
  },
  {
    feature: "On-demand evidence export",
    starter: "No",
    growth: "Yes",
    agency: "Yes"
  },
  {
    feature: "Multi-client dashboard",
    starter: "No",
    growth: "No",
    agency: "Yes"
  },
  {
    feature: "Co-branded evidence packs",
    starter: "No",
    growth: "No",
    agency: "Yes"
  }
];

export const pricingNotes: string[] = [
  "All prices exclude VAT.",
  "Subscriptions are planned to be billed monthly in advance by Direct Debit, with 30 days' notice for cancellation.",
  "The Consent Health Check is a one-off service paid upfront when commercially available.",
  "Starter and Growth billing is planned from Month 7. Agency billing is planned from Month 13.",
  "Soft opt-in assessment, the complete pre-send decision gate and applicable on-demand evidence exports are scheduled for Month 12.",
  "Later features applicable to an existing subscription tier will be introduced at no additional subscription charge.",
  "Pricing reflects the planned commercial offering. Register your interest for future availability."
];
