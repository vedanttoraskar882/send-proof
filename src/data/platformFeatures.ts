export interface PrimaryModule {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  keyFunctionality: string[];
  plannedRelease: string;
  highlightNote?: string;
  visualType: 'fingerprint' | 'graph' | 'scope' | 'freshness' | 'recommendations' | 'evidence';
}

export interface AdditionalCapability {
  id: string;
  title: string;
  description: string;
}

export interface IntegrationItem {
  name: string;
  category: 'email-tool' | 'capture-source' | 'api-crm';
  roadmapPhase: string;
  releaseTimeline: string;
  description: string;
}

export interface RoadmapStage {
  stageNumber: string;
  title: string;
  timing: string;
  milestones: string[];
  isCurrent?: boolean;
}

export const primaryModules: PrimaryModule[] = [
  {
    id: "module-01",
    moduleNumber: "MODULE 01",
    title: "Consent Capture & Normalisation",
    description: "Collect consent events from existing marketing systems and transform fragmented records into a consistent evidence format.",
    keyFunctionality: [
      "Read-only data collection",
      "Website form consent capture",
      "Checkout opt-in capture",
      "Email platform consent records",
      "CSV imports and offline consent records",
      "Original consent wording preservation",
      "Capture source and timestamp recording",
      "Capture method and form version logging",
      "SHA-256 evidence fingerprinting"
    ],
    plannedRelease: "MVP, Month 3",
    highlightNote: "The cryptographic SHA-256 fingerprint creates a verifiable record that helps identify whether a captured consent event has been altered. This is independent hashing, not blockchain technology.",
    visualType: "fingerprint"
  },
  {
    id: "module-02",
    moduleNumber: "MODULE 02",
    title: "Consent Provenance & Fragility Graph",
    description: "Establish a traceable relationship between each subscriber, consent event, audience segment and marketing campaign.",
    keyFunctionality: [
      "Subscriber-to-consent mapping",
      "Consent-to-segment mapping",
      "Segment-to-campaign mapping",
      "Original evidence source traceability",
      "Missing consent identification",
      "Weak evidence identification",
      "Fragility indicators across lists",
      "Complete consent history visibility"
    ],
    plannedRelease: "MVP, Month 3",
    highlightNote: "Maintains a direct four-point lineage: Subscriber → Consent Event → Segment → Campaign.",
    visualType: "graph"
  },
  {
    id: "module-03",
    moduleNumber: "MODULE 03",
    title: "Scope-Drift Detection Engine",
    description: "Compare the proposed purpose of a marketing campaign against the original wording agreed to by subscribers.",
    keyFunctionality: [
      "Consent wording classification",
      "Campaign metadata classification",
      "Purpose and product scope assessment",
      "Identification of incompatible campaign types",
      "User confirmation of proposed classifications",
      "Versioned rule application",
      "Explainable, deterministic assessment results"
    ],
    plannedRelease: "Month 6",
    highlightNote: "Built using an established phrase library, pattern rules and user-confirmed classifications—not an AI or machine learning engine. SendProof evaluates campaign metadata without storing message bodies.",
    visualType: "scope"
  },
  {
    id: "module-04",
    moduleNumber: "MODULE 04",
    title: "Freshness & Contradiction Scoring",
    description: "Evaluate the strength of consent evidence using its age, capture method, source stability and subsequent subscriber signals.",
    keyFunctionality: [
      "Explainable freshness scoring",
      "Source reliability indicators",
      "Contradiction detection across platforms",
      "Unsubscribe and complaint visibility",
      "Consent fragility assessment",
      "Visible factor-by-factor score breakdown"
    ],
    plannedRelease: "Month 6",
    highlightNote: "Consent evidence weakens over time depending on context, capture method, and contradictory signals. SendProof does not treat consent as automatically expiring after an arbitrary universal period.",
    visualType: "freshness"
  },
  {
    id: "module-05",
    moduleNumber: "MODULE 05",
    title: "Soft Opt-In & Pre-Send Decision Gate",
    description: "Evaluate the available consent evidence and applicable eligibility conditions before providing an advisory recommendation for a planned campaign.",
    keyFunctionality: [
      "Subscriber Type Test (Individual, Sole Trader, Ordinary Partnership, Corporate)",
      "Corporate subscriber identity and opt-out checks",
      "Soft Opt-In Eligibility Test (sale/negotiation origin check)",
      "Own similar products/services check",
      "Initial and subsequent opt-out verification",
      "Three clear advisory outcomes: Send, Hold, Re-permission"
    ],
    plannedRelease: "Subscriber Type Test: Month 6 | Soft Opt-In & Decision Gate: Month 12",
    highlightNote: "Advisory decision support only. SendProof does not send emails, modify mailing lists or automatically block outgoing campaigns in your email provider.",
    visualType: "recommendations"
  },
  {
    id: "module-06",
    moduleNumber: "MODULE 06",
    title: "Evidence Export & Safety Boundary",
    description: "Generate structured, timestamped evidence packs that explain the relationship between original consent records and assessed marketing campaigns.",
    keyFunctionality: [
      "Complete customer and assessment scope summary",
      "Export timestamp and applied rule set version",
      "Original consent wording, form version and SHA-256 fingerprint",
      "Relevant campaign history and audience segment data",
      "Scope-fit, freshness, and soft opt-in evaluation details",
      "Unsubscribe and complaint records with integrity statement",
      "Strict read-only safety boundary with planned role-based access"
    ],
    plannedRelease: "Monthly Exports: Month 7 | On-Demand Exports: Month 12",
    highlightNote: "Evidence packs support internal reviews, subscriber complaint resolution, client audits, and ICO enquiries. They do not constitute official compliance certificates or legal certification.",
    visualType: "evidence"
  }
];

export const additionalCapabilities: AdditionalCapability[] = [
  {
    id: "cap-01",
    title: "Consent Health Check",
    description: "Analysis of existing mailing list and consent exports to identify stale, unscoped and unverifiable consent."
  },
  {
    id: "cap-02",
    title: "Evidence Overview",
    description: "A visual overview of strong, weak and missing consent evidence across audience segments."
  },
  {
    id: "cap-03",
    title: "Campaign Check",
    description: "Campaign scope and consent freshness results, followed by the complete advisory decision gate when released."
  },
  {
    id: "cap-04",
    title: "Subscriber Evidence",
    description: "Individual subscriber consent history and associated campaign history."
  },
  {
    id: "cap-05",
    title: "Agency Portfolio",
    description: "A planned multi-client interface for consent fragility monitoring, separate client views and co-branded evidence packs."
  },
  {
    id: "cap-06",
    title: "Connections & Settings",
    description: "Planned management of connector status, retention settings, user permissions and rule set versions."
  }
];

export const plannedIntegrations: IntegrationItem[] = [
  {
    name: "Website Forms",
    category: "capture-source",
    roadmapPhase: "MVP / Month 3",
    releaseTimeline: "Planned Release: Month 3",
    description: "Capture consent events, exact wording, and form version metadata at the point of subscriber sign-up."
  },
  {
    name: "Checkout Opt-Ins",
    category: "capture-source",
    roadmapPhase: "MVP / Month 3",
    releaseTimeline: "Planned Release: Month 3",
    description: "Record e-commerce checkout opt-in events, timestamped customer choices, and soft opt-in context."
  },
  {
    name: "Mailchimp",
    category: "email-tool",
    roadmapPhase: "MVP / Month 3",
    releaseTimeline: "Planned Release: Month 3",
    description: "Read-only connection to import audiences, campaign metadata, and unsubscribes without altering list data."
  },
  {
    name: "CSV Imports",
    category: "capture-source",
    roadmapPhase: "MVP / Month 3",
    releaseTimeline: "Planned Release: Month 3",
    description: "Import historical consent records, event logs, and offline sign-up sheets with SHA-256 fingerprinting."
  },
  {
    name: "Klaviyo",
    category: "email-tool",
    roadmapPhase: "Month 6",
    releaseTimeline: "Planned Release: Month 6",
    description: "Read-only integration for e-commerce segments, dynamic flows, and campaign-level consent provenance."
  },
  {
    name: "HubSpot",
    category: "email-tool",
    roadmapPhase: "Months 13–24",
    releaseTimeline: "Planned Release: Months 13–24",
    description: "Synchronise CRM marketing lists, subscription types, and multi-channel communication consent history."
  },
  {
    name: "ActiveCampaign",
    category: "email-tool",
    roadmapPhase: "Months 13–24",
    releaseTimeline: "Planned Release: Months 13–24",
    description: "Connect automation campaign triggers and contact tags to verified consent provenance records."
  },
  {
    name: "Brevo",
    category: "email-tool",
    roadmapPhase: "Months 13–24",
    releaseTimeline: "Planned Release: Months 13–24",
    description: "Import transactional and marketing contact lists for pre-send campaign scope verification."
  },
  {
    name: "Public API & CRM Imports",
    category: "api-crm",
    roadmapPhase: "Months 25–33",
    releaseTimeline: "Planned Release: Months 25–33",
    description: "Developer API endpoints for custom enterprise consent pipelines and external CRM systems."
  }
];

export const productRoadmap: RoadmapStage[] = [
  {
    stageNumber: "Stage 1",
    title: "Design Complete",
    timing: "Current Phase",
    isCurrent: true,
    milestones: [
      "Six core system elements specified",
      "Consent record schema defined",
      "Provenance graph model defined",
      "Assessment logic specified",
      "Novelty search completed"
    ]
  },
  {
    stageNumber: "Stage 2",
    title: "MVP Release",
    timing: "Month 3",
    milestones: [
      "Consent capture connectors (Website forms, Checkout, Mailchimp, CSV)",
      "Normalisation and SHA-256 fingerprinting",
      "Consent provenance graph engine",
      "Evidence overview interface",
      "Consent Health Check report generator",
      "Connection and retention settings"
    ]
  },
  {
    stageNumber: "Stage 3",
    title: "Pilot Development",
    timing: "Months 4–6",
    milestones: [
      "Commercial Consent Health Checks from Month 4",
      "Four planned unpaid pilot organisations (2 SMEs and 2 digital marketing agencies)",
      "Klaviyo connector implementation",
      "Scope-drift assessment engine",
      "Freshness and contradiction scoring",
      "Subscriber type test module"
    ]
  },
  {
    stageNumber: "Stage 4",
    title: "Commercial Development",
    timing: "Months 7–12",
    milestones: [
      "Starter and Growth subscriptions from Month 7",
      "Monthly evidence export functionality from Month 7",
      "Soft opt-in eligibility test in Month 12",
      "Complete pre-send decision gate in Month 12",
      "On-demand evidence exports in Month 12"
    ]
  },
  {
    stageNumber: "Stage 5",
    title: "Agency & Expansion",
    timing: "Month 13 Onwards",
    milestones: [
      "Agency subscription launch from Month 13",
      "Multi-client dashboard with separate client views",
      "Co-branded evidence pack generation",
      "HubSpot, ActiveCampaign and Brevo connectors across Months 13–24",
      "Public API and CRM imports across Months 25–33"
    ]
  }
];
