import type { ComplianceData } from "@/lib/types";

export const complianceData: ComplianceData = {
  disclaimer:
    "These entries describe design intentions and architectural posture, self-assessed by CogniLedger Solutions S.R.L. as of the last_reviewed date. No formal audit, conformity assessment, or certification has been performed. Nothing in this matrix is a claim of achieved or verified regulatory compliance. For questions or source documentation, contact leonid@cogniledger.eu.",
  operator: "CogniLedger Solutions S.R.L.",
  operator_jurisdiction: "Romania (EU member state)",
  audit_status: "no_formal_audit_or_conformity_assessment_performed",
  certifications_held: [],
  certifications_pursued: [],
  mvp_note:
    "Formal certification processes require significant time, budget, and dedicated team resources that are not available during the MVP phase. Certification pursuits are planned once the product exits beta and stabilizes its user base.",
  last_reviewed: "2026-06-10",
  regulations: [
    {
      id: "eu_ai_act",
      name: "EU AI Act (Regulation 2024/1689)",
      applicable: true,
      classification:
        "High Risk — Annex III, paragraph 3 (AI systems determining access to, or assessing outcomes of, educational and vocational training)",
      status: "design_aligned_unaudited",
      key_obligations: [
        "Art. 9 — Risk management system",
        "Art. 10 — Data and data governance",
        "Art. 11 — Technical documentation",
        "Art. 12 — Record-keeping",
        "Art. 13 — Transparency and provision of information to deployers",
        "Art. 14 — Human oversight",
        "Art. 15 — Accuracy, robustness and cybersecurity",
      ],
      current_state_notes:
        "Architectural foundations are designed to align with High Risk requirements: all AI behavior (prompts, model routing, rate limits, content filters, language support) is stored in the database and auditable through the admin panel, supporting a future evidence base for technical documentation (Art. 11) and transparency (Art. 13). Formal risk management system documentation (Art. 9), conformity assessment, and any third-party verification have not been performed and are planned for after the MVP phase. Enforcement deadline for High Risk systems: August 2026.",
      evidence_url: null,
      last_reviewed: "2026-06-10",
    },
    {
      id: "gdpr",
      name: "GDPR (Regulation 2016/679)",
      applicable: true,
      classification: null,
      status: "design_aligned_unaudited",
      key_obligations: [
        "Lawful basis for processing (Art. 6)",
        "Transparent privacy notice (Art. 13)",
        "Data subject rights — access, rectification, erasure (Arts. 15–17)",
        "Data minimization (Art. 5(1)(c))",
        "Records of Processing Activities (Art. 30)",
        "EU data residency",
      ],
      current_state_notes:
        "EU data residency is in place (hosting and database in Frankfurt). Data minimization is practiced by design — only essential PII is collected, and uploaded photos are processed in-memory and not persisted to storage after processing. Data Processing Agreements with AI providers (Anthropic, OpenAI, Mistral) are not yet signed; provider default API policies apply in the interim. Formal privacy notice, Records of Processing Activities, and documented data subject rights handling are in preparation. None of the above has been externally audited.",
      evidence_url: null,
      last_reviewed: "2026-06-10",
    },
    {
      id: "gdpr_k",
      name: "GDPR-K — Children's Data (GDPR Art. 8, Romanian implementation)",
      applicable: true,
      classification:
        "Romania sets the age of digital consent at 16. Makuri users are aged 10–16 and require parental consent.",
      status: "design_aligned_unaudited",
      key_obligations: [
        "Verified parental consent for users under 16",
        "Age-appropriate privacy notice",
        "No profiling of minors for marketing purposes",
        "Strict data minimization for children",
        "No advertising",
      ],
      current_state_notes:
        "Parent-child account linking is implemented via invitation token. No advertising or marketing profiling is present. Strict data minimization is enforced by design — no behavioral tracking, no third-party analytics cookies. A formal age-appropriate privacy notice is in preparation. None of the above has been externally audited or certified.",
      evidence_url: null,
      last_reviewed: "2026-06-10",
    },
    {
      id: "coppa",
      name: "COPPA — US Children's Online Privacy Protection Act",
      applicable: false,
      classification: null,
      status: "not_applicable",
      key_obligations: [],
      current_state_notes:
        "Makuri targets EU markets (primary market: Romania, serving immigrant and refugee children from Ukraine and other origins). The platform is not actively marketed in the United States. If US availability is introduced in the future, a dedicated COPPA compliance review will be conducted.",
      evidence_url: null,
      last_reviewed: "2026-06-10",
    },
    {
      id: "iso_42001",
      name: "ISO/IEC 42001 — AI Management System",
      applicable: true,
      classification: "Voluntary international standard for AI Management Systems",
      status: "not_started",
      key_obligations: [
        "AI Management System (AIMS) policy and scope definition",
        "AI risk assessment and treatment",
        "AI system lifecycle controls",
        "Third-party AI provider due diligence",
        "Continual improvement",
      ],
      current_state_notes:
        "ISO 42001 certification is a long-term goal for CogniLedger Solutions, planned for after Makuri exits the MVP phase. The config-driven architecture and admin audit plane provide foundational elements. Formal AIMS implementation has not begun.",
      evidence_url: null,
      last_reviewed: "2026-06-10",
    },
  ],
};
