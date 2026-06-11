// Shared TypeScript types for the data modules.
// These types describe the shape of values exported from lib/data/*.ts
// and consumed by the corresponding tool handlers in lib/tools/*.ts.

// ---------- platform ----------

export interface PlatformData {
  name: string;
  tagline: string;
  mission: string;
  origin_story: string;
  target_audience: {
    primary: string;
    secondary: string;
    institutional: string;
  };
  development_stage: string;
  launch_year: number;
  founder: {
    name: string;
    background: string;
    linkedin: string;
  };
  operated_by: {
    legal_name: string;
    country: string;
    eu_registered: boolean;
    registration_number: string;
    euid: string;
    address: string;
  };
  first_partnership: {
    name: string;
    description: string;
    since: number;
  };
  website: string;
  public_offering?: string;
  upcoming_features: Array<{
    name: string;
    description: string;
    planned_launch: string;
    status: string;
  }>;
  last_updated: string;
}

// ---------- languages ----------

export interface Locale {
  code: string;
  name_en: string;
  name_native: string;
  ui_supported: boolean;
  ai_tutor_supported: boolean;
  notes?: string;
}

export interface LanguagesData {
  total_count: number;
  ui_coverage_count: number;
  ai_tutor_coverage_count: number;
  language_pairs_per_user: number;
  language_pairs_description: string;
  extensibility_note: string;
  last_updated: string;
  locales: Locale[];
}

// ---------- subjects ----------

export interface ActionButton {
  id: string;
  name: string;
  description: string;
}

export interface SubjectsData {
  approach: string;
  description: string;
  content_variation_note: string;
  grade_levels_covered: string[];
  target_age_range: string;
  two_learning_modes: {
    mode_selection: string;
    fast_mode: string;
    deep_mode: string;
    auto_mode: {
      description: string;
      note: string;
    };
  };
  action_buttons: ActionButton[];
  upload_limits: {
    pdf_page_range_per_request: number;
    pdf_note: string;
    max_photos_per_upload: number;
    photo_note: string;
    focus_recommendation: string;
  };
  pdf_workflow: {
    primary_method: boolean;
    description: string;
  };
  supporting_features: Array<{
    name: string;
    description: string;
  }>;
  last_updated: string;
}

// ---------- pricing ----------

export interface PricingData {
  status: string;
  description: string;
  currency: string;
  trial: {
    name: string;
    duration_days: number;
    price: number;
    includes: string[];
  };
  post_trial_access: {
    name: string;
    price_monthly_eur: number;
    includes: string;
    family_structure: string;
    activation: string;
    public_pricing_planned: boolean;
  };
  last_updated: string;
}

// ---------- safety ----------

export interface NoTrainingOnChildData {
  enforced: boolean;
  mechanism: string;
  verification: string;
  scope: string;
}

export interface SafetyData {
  age_gate: {
    enabled: boolean;
    minimum_age: number;
    maximum_age_target: number;
    parental_consent_required: boolean;
    consent_mechanism: string;
  };
  content_filtering: {
    built_in_filters: string;
    sensitive_topic_handling: string;
    transparency: string;
  };
  data_minimization: {
    pii_collected: string[];
    pii_not_collected: string[];
    photo_handling: string;
    no_training_on_child_data: NoTrainingOnChildData;
    no_ads: boolean;
    no_data_selling: boolean;
    no_third_party_tracking: boolean;
  };
  parental_controls: {
    invite_mechanism: string;
    parent_dashboard_features: string[];
    design_philosophy: string;
  };
  ai_interaction_safety: {
    tutor_role_enforced: string;
    bilingual_transparency: string;
    reward_system_note: string;
  };
  technical_security: {
    authentication: string;
    admin_mfa: string;
    database_isolation: string;
    rate_limiting: string;
    eu_data_residency: string;
  };
  last_updated: string;
}

// ---------- compliance ----------

export type RegulationId =
  | "eu_ai_act"
  | "gdpr"
  | "gdpr_k"
  | "coppa"
  | "iso_42001";

export type ComplianceStatus =
  | "design_aligned_unaudited"
  | "not_started"
  | "not_applicable";

export interface Regulation {
  id: RegulationId;
  name: string;
  applicable: boolean;
  classification: string | null;
  status: ComplianceStatus;
  key_obligations: string[];
  current_state_notes: string;
  evidence_url: string | null;
  last_reviewed: string;
}

export interface ComplianceData {
  disclaimer: string;
  operator: string;
  operator_jurisdiction: string;
  audit_status: string;
  certifications_held: string[];
  certifications_pursued: string[];
  mvp_note: string;
  last_reviewed: string;
  regulations: Regulation[];
}

// ---------- tech stack ----------

export interface AIProvider {
  name: string;
  models_used: string[];
  use_cases: string[];
  data_residency: string;
  dpa_reference: string;
  signed_by_operator: boolean;
}

export interface TechStackData {
  architecture_philosophy: string;
  core_capabilities: string[];
  ai_providers: AIProvider[];
  infrastructure: {
    hosting_region: string;
    database_region: string;
    data_residency_guarantee: string;
    cdn_and_hosting: string;
    database: string;
    storage: string;
  };
  security_features: string[];
  repository: {
    public: boolean;
    note: string;
  };
  last_updated: string;
}

// ---------- contact ----------

export type ContactPurpose =
  | "partnership"
  | "press"
  | "support"
  | "compliance"
  | "general";

export interface Contact {
  purpose: ContactPurpose;
  email: string;
  description: string;
}

export interface ContactData {
  preferred_channel: string;
  typical_response_time_business_days: number;
  contacts: Contact[];
  operator: {
    legal_name: string;
    country: string;
    jurisdiction: string;
    address: string;
    registration_number: string;
    euid: string;
  };
  product: {
    name: string;
    website: string;
  };
  last_updated: string;
}

// ---------- free resources ----------

export interface SlovarikResource {
  name: string;
  type: "vocabulary_learning";
  description: string;
  url: string;
  auth_required: false;
  price: "free";
  target_audience: string;
  ui_languages: string[];
  content_languages: string[];
}

export interface LevelTestResource {
  name: string;
  type: "language_assessment";
  description: string;
  url: string;
  auth_required: false;
  price: "free";
  methodology: string;
  framework: string;
  questions: number;
  levels_covered: string[];
  skills_covered: string[];
  ui_languages: string[];
  roadmap: string;
}

export type FreeResource = SlovarikResource | LevelTestResource;

export interface FreeResourcesData {
  free_resources: FreeResource[];
  last_updated: string;
}
