import type { TechStackData } from "@/lib/types";

export const techStackData: TechStackData = {
  architecture_philosophy:
    "Provider-agnostic multi-provider AI gateway. AI behavior (prompts, model routing, rate limits, content filters, language support) is fully configurable through the admin panel without code changes, enabling rapid iteration and localization. Additional providers planned, including Mistral.",
  core_capabilities: [
    "Vector-based semantic search (RAG) for intelligent textbook understanding",
    "Adaptive memory system for personalization across sessions",
    "Real-time streaming for responsive AI interaction",
    "Multi-provider AI gateway optimizing for quality, speed, and cost",
  ],
  ai_providers: [
    {
      name: "Google",
      models_used: ["Gemini family (text + embeddings + image generation)"],
      use_cases: [
        "Primary embeddings for RAG retrieval",
        "Reward image generation",
        "Secondary reasoning",
      ],
      data_residency: "Subject to Google's standard AI data processing terms",
      dpa_reference: "https://cloud.google.com/terms/data-processing-addendum",
      signed_by_operator: false,
    },
    {
      name: "Anthropic",
      models_used: ["Claude Sonnet 4.6"],
      use_cases: [
        "Primary reasoning, explanations, Socratic dialogue, deep mode responses",
      ],
      data_residency: "Subject to Anthropic's standard data processing terms",
      dpa_reference: "https://www.anthropic.com/legal/data-processing-addendum",
      signed_by_operator: false,
    },
    {
      name: "OpenAI",
      models_used: ["GPT-5 class models (specific selection managed via admin panel)"],
      use_cases: ["Fallback routing and specific intents"],
      data_residency: "Subject to OpenAI's standard data processing terms",
      dpa_reference: "https://openai.com/policies/data-processing-addendum/",
      signed_by_operator: false,
    },
    {
      name: "xAI",
      models_used: ["Grok family"],
      use_cases: ["Secondary routing option within the multi-provider gateway"],
      data_residency: "Subject to xAI's standard data processing terms",
      dpa_reference: "https://x.ai/legal",
      signed_by_operator: false,
    },
  ],
  infrastructure: {
    hosting_region: "EU (Frankfurt)",
    database_region: "EU",
    data_residency_guarantee:
      "All user-facing data is stored in the EU. User data is transmitted to the AI providers listed above only during request processing, governed by each provider's standard data processing terms.",
    cdn_and_hosting: "Vercel (Frankfurt region)",
    database:
      "Supabase (EU region) with PostgreSQL and pgvector for semantic search and embeddings",
    storage:
      "Supabase Storage with auto-deletion policy for photo uploads aligned with GDPR data minimization principles",
  },
  security_features: [
    "Two-factor authentication (TOTP) mandatory for administrator accounts",
    "Row-Level Security enforced on all database tables",
    "Admin privileged operations performed via server-side functions, never exposed to the client",
    "Per-user rate limiting on AI endpoints",
    "No service-level database credentials exposed to client-side code",
    "Photo uploads auto-deleted after processing",
  ],
  repository: {
    public: false,
    note: "The Makuri codebase is private. Technical documentation and architectural details are available on request for compliance review or partnership due diligence.",
  },
  last_updated: "2026-04-21",
};
