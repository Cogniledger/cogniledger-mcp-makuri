import type { SafetyData } from "@/lib/types";

export const safetyData: SafetyData = {
  age_gate: {
    enabled: true,
    minimum_age: 10,
    maximum_age_target: 16,
    parental_consent_required: true,
    consent_mechanism:
      "Parent-child linking by invitation token. The child generates an invitation link from their Settings page; the parent opens the link and creates a parent account; afterwards the parent and child accounts are linked.",
  },
  content_filtering: {
    built_in_filters:
      "AI responses use multi-layer content filters and topic restrictions appropriate for the 10–16 age group.",
    sensitive_topic_handling:
      "For topics involving war, genocide, Holocaust, terrorism, disasters, or mass suffering, the AI is instructed to use a serious and respectful tone throughout. No humor, no analogies, no casual language. Facts and respect only.",
    transparency:
      "Students always know they are interacting with an AI; the system prompt forbids anthropomorphizing language.",
  },
  data_minimization: {
    pii_collected: [
      "Email (for account signup)",
      "First name (for personalization)",
      "Native language and school language",
      "Grade level",
    ],
    pii_not_collected: [
      "Last name",
      "Home address",
      "Phone number",
      "National ID or passport",
      "Biometric data",
      "Precise location",
    ],
    photo_handling:
      "Photos uploaded for AI processing are automatically deleted from storage after processing.",
    no_training_on_child_data: "User data is not used to train AI models.",
    no_ads: true,
    no_data_selling: true,
    no_third_party_tracking: true,
  },
  parental_controls: {
    invite_mechanism:
      "Token-based parent-child linking — child generates invite, parent accepts via link (no email exchange required).",
    parent_dashboard_features: [
      "Activity overview (how often and when the child uses the platform)",
      "Subject breakdown (which textbooks and subjects the child studies most)",
      "Progress tracking (test scores, exercise completion, learning trends)",
      "AI usage statistics (interaction counts, modes used)",
    ],
    design_philosophy:
      "The dashboard is informational, not controlling — designed to support conversations about schoolwork rather than micromanagement.",
  },
  ai_interaction_safety: {
    tutor_role_enforced:
      "The AI is configured to act as a formal tutor, not an emotional companion. No first-person bonding language, no requests for personal details outside of learning context.",
    bilingual_transparency:
      "Every response preserves academic terminology in both the native and school languages, so students build real vocabulary rather than relying on the AI as a shortcut.",
    reward_system_note:
      "AI-generated reward images are granted for scoring 100% on tests. No selfies or user photographs are stored by the reward system.",
  },
  technical_security: {
    authentication: "Email-based signup via Supabase Auth",
    admin_mfa: "Two-factor authentication (TOTP) is mandatory for administrator accounts",
    database_isolation:
      "Row-Level Security on all database tables — students can only access their own data",
    rate_limiting: "Per-user rate limiting on AI endpoints to prevent abuse",
    eu_data_residency: "All data is stored in the EU (Frankfurt region)",
  },
  last_updated: "2026-04-21",
};
