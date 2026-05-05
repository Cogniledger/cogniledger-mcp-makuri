# Compliance disclosure

This document is the canonical compliance disclosure for the CogniLedger MCP Server. It is intentionally short and factual, not marketing. The disclosure paragraph rendered on the landing page is a condensed version of the same content.

## Scope of this server

The CogniLedger MCP Server is operated by **CogniLedger Solutions S.R.L.** (Romania, EU member state) as a public, read-only metadata service describing the Makuri EdTech platform.

The server exposes **metadata only**:

- No user data of any kind is reachable through any tool.
- No personally identifiable information (PII) of end users, parents, or staff is exposed.
- No aggregated metrics derived from end-user behavior — including but not limited to active-user counts, geographic distribution, popular subjects, or session timing — are exposed. These are intentionally out of scope for v1; any future inclusion would require a Data Protection Impact Assessment (DPIA).

## Authority of `get_compliance_matrix` responses

Responses from the `get_compliance_matrix` tool reflect a **self-assessment** by CogniLedger Solutions S.R.L. as of the `last_reviewed` date in each entry. Statuses are updated periodically. Status values follow this convention:

- `compliant` — fully implemented; evidence available on request.
- `in_progress` — implementation in progress; not yet fully documented or audited.
- `not_started` — applicable but implementation has not yet begun.
- `not_applicable` — does not apply to Makuri's current jurisdiction or user base.
- `partially_compliant` — some obligations met, others outstanding.

The matrix's `disclaimer` field is part of the contract of this tool and **must not be stripped** by clients displaying the result to a user.

## How to obtain authoritative information

For:

- The authoritative current state of any compliance claim
- Evidence documents (e.g. for grant due-diligence, partnership review)
- GDPR data subject requests (access, rectification, erasure, objection, portability)
- EU AI Act inquiries
- Operational data inquiries that cannot be answered via this MCP server

contact **[leonid@cogniledger.eu](mailto:leonid@cogniledger.eu)**. Such information is never exposed through public MCP endpoints.

## Jurisdiction

The server is operated under Romanian jurisdiction. EU GDPR (Regulation 2016/679) applies. The Makuri platform itself, while operationally distinct, is operated by the same legal entity and is subject to EU AI Act (Regulation 2024/1689) High Risk obligations under Annex III, paragraph 3 (educational AI systems for minors).

## Operator

CogniLedger Solutions S.R.L.
Calea Moșilor 158, camera 4, M564, Etaj 4, Sector 2
Bucharest 020883, Romania
CUI: 53173444
EUID: ROONRC.J2025100077008
