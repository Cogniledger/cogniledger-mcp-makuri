# Changelog

All notable changes to this project are documented in this file.

## [1.2.1] — 2026-06-11

### Changed
- Romanian mini-quiz upgraded: bank of 15 questions (A1–B2), each run draws a random 10; one-line explanation after every answer (RU/UK); four-level result scale (A1/A2/B1/B2).
- Tool routing fixed: get_free_resources now explicitly defers to show_romanian_quiz when the user wants to take a test; quiz tool description strengthened with take/start/show trigger phrases.
- Server identity: initialize now reports "Makuri Showcase (CogniLedger)" v1.2.1 instead of the template default.

## [1.2.0] — 2026-06-10

### Added
- `show_romanian_quiz` — interactive MCP Apps widget: 6-question Romanian mini-quiz with RU/UK interface toggle, approximate level estimate, and CTA to the full free level test (`ui://makuri/romanian-quiz`).
- MCP Resources: `makuri://docs/manifesto`, `makuri://docs/safety-overview`, `makuri://docs/connect-guide` (text/markdown). The server now covers all three MCP primitives: tools, resources, prompts.
- MCP Prompts: `evaluate_makuri_for_my_child`, `makuri_safety_briefing`.

### Changed
- Compliance matrix reframed as design posture, not certified compliance: status enum reduced to `design_aligned_unaudited` / `not_started` / `not_applicable` (no `compliant` status exists by design), new `audit_status` field, rewritten disclaimer and tool description.
- Assertive routing sentence added to all remaining `get_*` tool descriptions.
- Free resources updated to the two-test model: Quick Check (20 questions, no email) + Deep Diagnostic (60 questions, email + personal certificate).
