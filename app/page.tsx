import type { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "48px 24px 96px",
};

const codeBlockStyle: CSSProperties = {
  background: "#f0f0f0",
  border: "1px solid #e0e0e0",
  borderRadius: 6,
  padding: "12px 16px",
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  fontSize: "13px",
  lineHeight: 1.5,
  overflowX: "auto",
  whiteSpace: "pre",
};

const sectionStyle: CSSProperties = { marginTop: 40 };

const tools = [
  {
    name: "get_platform_info",
    desc: "Mission, target users, founding details, operating company.",
  },
  {
    name: "get_supported_languages",
    desc: "All 14 supported locales with UI and AI tutor coverage flags.",
  },
  {
    name: "get_subjects",
    desc: "Textbook-agnostic teaching approach, ten action buttons, learning modes.",
  },
  {
    name: "get_pricing_tiers",
    desc: "Free trial and beta subscription details.",
  },
  {
    name: "get_safety_features",
    desc: "Age gate, content filters, parental controls, AI safety guardrails.",
  },
  {
    name: "get_compliance_matrix",
    desc: "EU AI Act, GDPR, GDPR-K, COPPA, ISO 42001 — current status with disclaimer.",
  },
  {
    name: "get_tech_stack",
    desc: "Frontend, backend, database, AI providers, EU data residency.",
  },
  {
    name: "get_contact_info",
    desc: "Contact channels by purpose (partnership, press, support, compliance).",
  },
];

const claudeDesktopSnippet = `{
  "mcpServers": {
    "cogniledger-makuri": {
      "url": "https://mcp.cogniledger.eu/mcp"
    }
  }
}`;

const leChatSnippet = `Add a new MCP connector in Le Chat settings with:
  Name:      CogniLedger — Makuri
  Transport: streamable-http
  URL:       https://mcp.cogniledger.eu/mcp`;

const cursorSnippet = `{
  "mcpServers": {
    "cogniledger-makuri": {
      "url": "https://mcp.cogniledger.eu/mcp"
    }
  }
}`;

export default function HomePage() {
  return (
    <main style={containerStyle}>
      <header>
        <h1 style={{ marginBottom: 8 }}>CogniLedger MCP Server — Makuri showcase</h1>
        <p style={{ color: "#555", marginTop: 0 }}>
          A public, read-only MCP server operated by{" "}
          <strong>CogniLedger Solutions S.R.L.</strong> (Bucharest, Romania).
        </p>
      </header>

      <p>
        This server exposes <strong>metadata only</strong> about the Makuri
        EdTech platform — eight tools covering mission, supported languages,
        teaching approach, pricing, safety features, compliance posture, tech
        stack, and contact channels. No user data, no PII, no aggregated
        analytics. It is a reference deployment demonstrating production MCP
        patterns under EU compliance constraints (Makuri is a High Risk AI
        system under EU AI Act Annex III, paragraph 3).
      </p>

      <p>
        The server is unauthenticated and free to call. Connect it from Claude
        Desktop, Le Chat, Cursor, or any MCP-capable client.
      </p>

      <section style={sectionStyle}>
        <h2>Connect</h2>

        <h3 style={{ marginBottom: 4 }}>Claude Desktop</h3>
        <p style={{ marginTop: 0, color: "#555" }}>
          Edit{" "}
          <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>{" "}
          (macOS) or{" "}
          <code>%APPDATA%\\Claude\\claude_desktop_config.json</code> (Windows):
        </p>
        <pre style={codeBlockStyle}>{claudeDesktopSnippet}</pre>

        <h3 style={{ marginBottom: 4 }}>Le Chat (Mistral)</h3>
        <pre style={codeBlockStyle}>{leChatSnippet}</pre>

        <h3 style={{ marginBottom: 4 }}>Cursor</h3>
        <p style={{ marginTop: 0, color: "#555" }}>
          Edit <code>~/.cursor/mcp.json</code>:
        </p>
        <pre style={codeBlockStyle}>{cursorSnippet}</pre>
      </section>

      <section style={sectionStyle}>
        <h2>Tools</h2>
        <ul style={{ paddingLeft: 20 }}>
          {tools.map((t) => (
            <li key={t.name} style={{ marginBottom: 8 }}>
              <code>{t.name}</code> — {t.desc}
            </li>
          ))}
        </ul>
        <p style={{ color: "#555" }}>
          Full schemas and example responses:{" "}
          <a
            href="https://github.com/cogniledger/cogniledger-mcp-makuri/blob/main/docs/TOOLS.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs/TOOLS.md
          </a>
          .
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Compliance disclosure</h2>
        <p>
          This server exposes metadata only. No user data, no personally
          identifiable information, and no aggregated user metrics derived from
          end-user behavior are accessible through any tool. Compliance
          statuses returned by{" "}
          <code>get_compliance_matrix</code> reflect a self-assessment by
          CogniLedger Solutions S.R.L. as of the{" "}
          <code>last_reviewed</code> date in each entry; statuses are updated
          periodically.
        </p>
        <p>
          For operational data inquiries, GDPR data subject requests, or
          authoritative confirmation of a compliance claim, contact{" "}
          <a href="mailto:leonid@cogniledger.eu">leonid@cogniledger.eu</a>.
          Such data is never exposed through public MCP endpoints. The server
          is operated under Romanian jurisdiction; EU GDPR applies.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Links</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>
            <a
              href="https://github.com/cogniledger/cogniledger-mcp-makuri"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository (MIT)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cogniledger/cogniledger-mcp-makuri/blob/main/docs/TOOLS.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tool reference (docs/TOOLS.md)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cogniledger/cogniledger-mcp-makuri/blob/main/docs/EXAMPLES.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client transcripts (docs/EXAMPLES.md)
            </a>
          </li>
          <li>
            Contact:{" "}
            <a href="mailto:leonid@cogniledger.eu">leonid@cogniledger.eu</a>
          </li>
        </ul>
      </section>

      <footer
        style={{
          marginTop: 64,
          paddingTop: 16,
          borderTop: "1px solid #e0e0e0",
          color: "#777",
          fontSize: "14px",
        }}
      >
        Operated by CogniLedger Solutions S.R.L., Bucharest, Romania. MIT
        licensed. © 2026.
      </footer>
    </main>
  );
}
