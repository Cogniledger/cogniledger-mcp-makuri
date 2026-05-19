# Tool reference

All nine tools are read-only, take optional or no input, and return JSON serialized as a single text block in the MCP `content` array. Every response includes a `last_updated` ISO date so clients can reason about staleness.

The production endpoint is `https://mcp.cogniledger.eu/mcp`. For local development the endpoint is `http://localhost:3000/mcp`.

---

## 1. `get_platform_info`

**Description (advertised to LLMs):** Returns general information about the Makuri platform, including mission, target users, founding details, and company information. Use this tool when the user asks "what is Makuri", "who made it", or wants a general overview.

**Input:** none — `{}`

**Example response (abridged):**

```json
{
  "name": "Makuri",
  "tagline": "Your AI study companion — learn in any language, succeed in any school",
  "mission": "Makuri helps immigrant children aged 10–16 ...",
  "development_stage": "Beta — approximately 95% feature-complete, running with real users",
  "launch_year": 2026,
  "founder": { "name": "Leonid Khatskevych", "...": "..." },
  "operated_by": {
    "legal_name": "CogniLedger Solutions S.R.L.",
    "country": "Romania",
    "registration_number": "CUI: 53173444"
  },
  "website": "https://makuri.eu",
  "upcoming_features": [ "..." ],
  "last_updated": "2026-04-21"
}
```

---

## 2. `get_supported_languages`

**Description (advertised to LLMs):** Returns the list of languages supported by Makuri, with separate coverage details for user interface versus AI tutor interactions. Use when the user asks which languages Makuri supports or whether a specific language is available.

**Input:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `locale` | `string` | no | ISO 639-1 code (e.g. `"ro"`, `"uk"`, `"ar"`). When provided, response is filtered to that single locale. |

**Example response (with `{ "locale": "ro" }`):**

```json
{
  "total_count": 14,
  "ui_coverage_count": 14,
  "ai_tutor_coverage_count": 14,
  "language_pairs_per_user": 3,
  "last_updated": "2026-04-21",
  "locales": [
    {
      "code": "ro",
      "name_en": "Romanian",
      "name_native": "Română",
      "ui_supported": true,
      "ai_tutor_supported": true,
      "notes": "Primary school language for the Romanian market"
    }
  ],
  "query": { "locale": "ro", "found": true }
}
```

---

## 3. `get_subjects`

**Description (advertised to LLMs):** Returns the list of academic subjects Makuri teaches, grouped by grade level, with information about exam preparation coverage. Use when the user asks what Makuri teaches or about specific subjects.

**Input:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `grade_level` | `string` | no | Currently informational only — Makuri is textbook-agnostic and does not maintain a fixed subject list per grade. |

**Example response (abridged):**

```json
{
  "approach": "textbook-agnostic",
  "target_age_range": "10–16",
  "grade_levels_covered": [
    "gimnaziu (grades 5–8) — Romanian gymnasium",
    "liceu (grades 9–12) — Romanian lyceum (high school equivalent)"
  ],
  "two_learning_modes": { "fast_mode": "...", "deep_mode": "...", "auto_mode": { "..." : "..." } },
  "action_buttons": [
    { "id": "explain", "name": "Explain", "description": "..." },
    { "id": "translate", "name": "Translate", "description": "..." }
  ],
  "upload_limits": {
    "pdf_page_range_per_request": 5,
    "max_photos_per_upload": 10
  },
  "last_updated": "2026-04-21"
}
```

---

## 4. `get_pricing_tiers`

**Description (advertised to LLMs):** Returns Makuri's pricing plans including what's included in each tier and any usage limits. Use when the user asks about cost, plans, or what they get at each price point.

**Input:** none — `{}`

**Example response:**

```json
{
  "status": "beta",
  "currency": "EUR",
  "trial": {
    "name": "Free Trial",
    "duration_days": 30,
    "price": 0,
    "includes": [ "Full access to all ten action buttons", "..." ]
  },
  "post_trial_access": {
    "name": "Beta Subscription",
    "price_monthly_eur": 10,
    "family_structure": "When a parent pays, all linked children inherit access ...",
    "public_pricing_planned": true
  },
  "last_updated": "2026-04-21"
}
```

---

## 5. `get_safety_features`

**Description (advertised to LLMs):** Returns information about safety features on Makuri, including age verification, content filtering, parental controls, and AI safety guardrails. Use when the user asks about child safety, content moderation, or how Makuri protects minors.

**Input:** none — `{}`

**Example response (abridged):**

```json
{
  "age_gate": {
    "enabled": true,
    "minimum_age": 10,
    "maximum_age_target": 16,
    "parental_consent_required": true
  },
  "content_filtering": { "...": "..." },
  "data_minimization": {
    "pii_collected": [ "Email", "First name", "..." ],
    "pii_not_collected": [ "Last name", "Home address", "..." ],
    "no_ads": true,
    "no_data_selling": true,
    "no_third_party_tracking": true
  },
  "parental_controls": { "...": "..." },
  "last_updated": "2026-04-21"
}
```

---

## 6. `get_compliance_matrix`

> **Critical tool.** Treat the disclaimer field as part of the contract — do not strip it when displaying to a user.

**Description (advertised to LLMs):** Returns Makuri's current compliance posture across EU AI Act, GDPR, GDPR-K (children data), COPPA, and ISO 42001. Each entry shows current status (compliant, in_progress, not_applicable), evidence, and notes. Use when the user asks about regulatory compliance, AI Act classification, or data protection for children.

**Input:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `regulation` | `"eu_ai_act" \| "gdpr" \| "gdpr_k" \| "coppa" \| "iso_42001"` | no | When omitted, returns all five regulations. |

**Example response (with `{ "regulation": "eu_ai_act" }`):**

```json
{
  "disclaimer": "Compliance statuses reflect self-assessment by CogniLedger Solutions S.R.L. as of the last_reviewed date. ...",
  "operator": "CogniLedger Solutions S.R.L.",
  "operator_jurisdiction": "Romania (EU member state)",
  "certifications_held": [],
  "certifications_pursued": [],
  "mvp_note": "Formal certification processes require significant time, budget, ...",
  "last_reviewed": "2026-04-21",
  "regulations": [
    {
      "id": "eu_ai_act",
      "name": "EU AI Act (Regulation 2024/1689)",
      "applicable": true,
      "classification": "High Risk — Annex III, paragraph 3 ...",
      "status": "in_progress",
      "key_obligations": [ "Art. 9 — Risk management system", "..." ],
      "current_state_notes": "...",
      "evidence_url": null,
      "last_reviewed": "2026-04-21"
    }
  ],
  "query": { "regulation": "eu_ai_act", "found": true }
}
```

**Status legend:**

- `compliant` — fully implemented; evidence available on request via the contact email.
- `in_progress` — implementation in progress; not yet fully documented or audited.
- `not_started` — applicable but implementation has not begun.
- `not_applicable` — does not apply (e.g. COPPA for an EU-only deployment).
- `partially_compliant` — some obligations met, others outstanding.

---

## 7. `get_tech_stack`

**Description (advertised to LLMs):** Returns the technical stack Makuri is built on, including frontend, backend, database, AI providers used, and data residency information. Use when the user asks how Makuri is built or which AI models it uses.

**Input:** none — `{}`

**Example response (abridged):**

```json
{
  "architecture_philosophy": "Provider-agnostic multi-provider AI gateway. ...",
  "core_capabilities": [
    "Vector-based semantic search (RAG) for intelligent textbook understanding",
    "..."
  ],
  "ai_providers": [
    {
      "name": "Anthropic",
      "models_used": ["Claude Sonnet 4.6"],
      "use_cases": ["Primary reasoning, explanations, Socratic dialogue, deep mode responses"],
      "data_residency": "Subject to Anthropic's standard data processing terms",
      "dpa_reference": "https://www.anthropic.com/legal/data-processing-addendum",
      "signed_by_operator": false
    }
  ],
  "infrastructure": { "hosting_region": "EU (Frankfurt)", "...": "..." },
  "repository": { "public": false, "note": "..." },
  "last_updated": "2026-04-21"
}
```

---

## 8. `get_contact_info`

**Description (advertised to LLMs):** Returns contact channels for Makuri and CogniLedger, categorized by purpose (partnership, press, support, compliance, general). Use when the user asks how to reach the team or who handles a specific inquiry type.

**Input:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `purpose` | `"partnership" \| "press" \| "support" \| "compliance" \| "general"` | no | When omitted, returns all contact channels. |

**Example response (with `{ "purpose": "compliance" }`):**

```json
{
  "preferred_channel": "email",
  "typical_response_time_business_days": 2,
  "contacts": [
    {
      "purpose": "compliance",
      "email": "leonid@cogniledger.eu",
      "description": "Data protection, GDPR subject requests, EU AI Act inquiries, regulatory correspondence"
    }
  ],
  "operator": {
    "legal_name": "CogniLedger Solutions S.R.L.",
    "country": "Romania",
    "jurisdiction": "EU"
  },
  "product": { "name": "Makuri", "website": "https://makuri.eu" },
  "last_updated": "2026-04-21",
  "query": { "purpose": "compliance", "found": true }
}
```

---

## 9. `get_free_resources`

**Description (advertised to LLMs):** Returns free Makuri resources accessible without registration: Slovarik Romanian vocabulary issues and the Romanian level test. Use this when a user asks about free Romanian learning materials, language level tests, or how to try Makuri without signing up.

**Input:** none — `{}`

**Example response:**

```json
{
  "free_resources": [
    {
      "name": "Slovarik — Romanian Vocabulary",
      "type": "vocabulary_learning",
      "description": "Free themed Romanian word issues (5–10 words each) with bilingual translations to Russian and Ukrainian, pronunciations, and example sentences. Three learning modes per issue: reading, flashcards, and quiz.",
      "url": "https://makuri.eu/words",
      "auth_required": false,
      "price": "free",
      "target_audience": "Russian- and Ukrainian-speaking immigrants in Romania",
      "ui_languages": ["ru", "uk"],
      "content_languages": ["ro", "ru", "uk"]
    },
    {
      "name": "Romanian Level Test",
      "type": "language_assessment",
      "description": "20-question Romanian language level test based on Institutul Limbii Române (ILR) methodology. Returns CEFR level (A1–C1+) with breakdown by skill (grammar, vocabulary, reading). Optional email submission for a personal study plan.",
      "url": "https://makuri.eu/words/level-test",
      "auth_required": false,
      "price": "free",
      "methodology": "Institutul Limbii Române (ILR)",
      "framework": "CEFR (Council of Europe)",
      "questions": 20,
      "levels_covered": ["A1", "A2", "B1", "B2", "C1+"],
      "skills_covered": ["grammar", "vocabulary", "reading"],
      "ui_languages": ["ru", "uk"],
      "roadmap": "Personal named certificates will be generated for completed tests (planned)"
    }
  ],
  "last_updated": "2026-05-19"
}
```

---

## Error handling

All tool handlers wrap their work in `try / catch` and return a structured error block on internal failures:

```json
{
  "isError": true,
  "content": [{ "type": "text", "text": "{\"error\":\"internal_error\"}" }]
}
```

Schema-violation errors (e.g. passing a number for a string field) are produced by the MCP runtime through Zod and surface as standard MCP error responses — HTTP 200 with an error content block, not HTTP 500.
