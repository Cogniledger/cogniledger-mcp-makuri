# CogniLedger MCP Server — Makuri showcase

A public, read-only [Model Context Protocol](https://modelcontextprotocol.io) server operated by **CogniLedger Solutions S.R.L.** (Bucharest, Romania). It exposes structured metadata about the **Makuri** EdTech platform — 11 tools (9 info tools + 2 interactive MCP Apps panels), 3 markdown resources, and 2 guided prompts, covering mission, languages, teaching approach, pricing, safety, compliance posture, tech stack, contact channels, and free public learning resources.

This is a reference deployment demonstrating production MCP patterns under EU compliance constraints. Makuri is a High Risk AI system under EU AI Act Annex III, paragraph 3 (educational AI for minors); the v1 scope of this server is therefore deliberately narrow: **metadata only, no user data, no PII, no aggregated analytics**.

- **Production endpoint:** `https://mcp.cogniledger.eu/mcp`
- **License:** MIT
- **Repository:** [github.com/Cogniledger/cogniledger-mcp-makuri](https://github.com/Cogniledger/cogniledger-mcp-makuri)
- **Contact:** [leonid@cogniledger.eu](mailto:leonid@cogniledger.eu)

## What this server is

- Public, unauthenticated, read-only
- 11 tools returning static metadata (no database queries against user data), including 2 interactive MCP Apps panels that render inline in supporting hosts
- 3 markdown resources (manifesto, child-safety overview, connect guide) and 2 guided prompts
- Designed to be called by AI assistants — Claude Desktop, Le Chat (Mistral), Cursor, ChatGPT Apps SDK, and any other MCP-capable client

## What this server is not

- It is not the Makuri product. End users of Makuri (children, parents) interact with [makuri.eu](https://makuri.eu), not this MCP server.
- It does not expose user data, PII, IP addresses, behavioral analytics, or any data derived from end-user activity.

## Connect

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "cogniledger-makuri": {
      "url": "https://mcp.cogniledger.eu/mcp"
    }
  }
}
```

Restart Claude Desktop. The tools appear under the connector picker.

### Le Chat (Mistral)

In Le Chat settings, add a new MCP connector:

- **Name:** CogniLedger — Makuri
- **Transport:** streamable-http
- **URL:** `https://mcp.cogniledger.eu/mcp`

### Cursor

Edit `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "cogniledger-makuri": {
      "url": "https://mcp.cogniledger.eu/mcp"
    }
  }
}
```

## Tools

| Tool | Description |
|---|---|
| `get_platform_info` | Mission, target users, founding details, operating company. |
| `get_supported_languages` | All 14 supported locales with UI / AI tutor coverage flags. Optional `locale` filter. |
| `get_subjects` | Textbook-agnostic teaching approach, ten action buttons, learning modes. |
| `get_pricing_tiers` | Free trial and beta subscription details. |
| `get_safety_features` | Age gate, content filters, parental controls, AI safety guardrails. |
| `get_compliance_matrix` | EU AI Act, GDPR, GDPR-K, COPPA, ISO 42001 — current status with disclaimer. Optional `regulation` filter. |
| `get_tech_stack` | Frontend, backend, database, AI providers, EU data residency. |
| `get_contact_info` | Contact channels by purpose. Optional `purpose` filter. |
| `get_free_resources` | Free Makuri resources without registration: Slovarik vocabulary and the Romanian level test in two flavors (Quick Check, 20 questions, no email; Deep Diagnostic, 60 questions, email + certificate). |
| `show_how_makuri_works` | Interactive MCP Apps panel explaining the Makuri learning flow and ten action buttons (`ui://makuri/how-it-works`). |
| `show_romanian_quiz` | Interactive MCP Apps panel: 6-question Romanian mini-quiz with RU/UK interface toggle, approximate level estimate, and CTA to the full free level test (`ui://makuri/romanian-quiz`). |

### Resources

The server exposes three markdown documents via MCP `resources/list` / `resources/read`:

- `makuri://docs/manifesto` — the founder-written manifesto on why Makuri exists.
- `makuri://docs/safety-overview` — child-safety design measures (account model, data minimization, AI behavior controls).
- `makuri://docs/connect-guide` — how to connect this server in ChatGPT, Claude, and Le Chat.

(The two interactive panels above are also exposed as resources at `ui://makuri/how-it-works` and `ui://makuri/romanian-quiz`, for hosts that support MCP Apps.)

### Prompts

Two guided prompts via `prompts/list`:

- `evaluate_makuri_for_my_child(child_age, native_language)` — guided fit evaluation for a specific child.
- `makuri_safety_briefing()` — honest safety briefing with explicit "design posture, not certified compliance" framing.

Full input schemas and example responses: [`docs/TOOLS.md`](./docs/TOOLS.md). Real client transcripts: [`docs/EXAMPLES.md`](./docs/EXAMPLES.md). Compliance disclosure: [`docs/COMPLIANCE_DISCLOSURE.md`](./docs/COMPLIANCE_DISCLOSURE.md).

## Local development

```bash
git clone https://github.com/Cogniledger/cogniledger-mcp-makuri.git
cd cogniledger-mcp-makuri
npm install
npm run dev
```

The server starts on `http://localhost:3000`. The MCP endpoint is `http://localhost:3000/mcp`.

### Smoke test

```bash
# In one terminal:
npm run dev

# In another:
npm run test:smoke
```

The smoke test connects to the local server, lists tools, calls each one, and exits non-zero on any failure.

### MCP Inspector

```bash
npx @modelcontextprotocol/inspector
```

Connect with transport `streamable-http` to `http://localhost:3000/mcp`. All 11 tools should be visible and callable, plus the 5 resources and 2 prompts.

## Security and compliance

- No secrets in the repository. `.env` is git-ignored; `.env.example` lists variable names only and is empty for v1.
- No outbound API calls, no database queries, no authentication. v1 is pure static-data read.
- Per-tool structured logging emits one JSON line per invocation with five fields only: `evt`, `tool`, `ts`, `status`, `duration_ms`. No request bodies, no IPs, no argument values.
- See [`docs/COMPLIANCE_DISCLOSURE.md`](./docs/COMPLIANCE_DISCLOSURE.md) for the full compliance posture.

## License

MIT — see [`LICENSE`](./LICENSE).

Copyright © 2026 CogniLedger Solutions S.R.L.
