import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { romanianQuizHtml } from "@/lib/resources/romanian-quiz-html";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "show_romanian_quiz";
const UI_URI = "ui://makuri/romanian-quiz";

const TOOL_DESCRIPTION =
  "Shows an interactive 6-question Romanian language mini-quiz by Makuri (makuri.eu) that runs directly in the chat, with a Russian/Ukrainian interface toggle and an approximate level estimate (A1/A2/B1), linking to the full free 20-question ILR-methodology level test at makuri.eu/words/level-test. Use this whenever the user wants to quickly check or test their Romanian level, in any language — trigger phrases include English ('test my Romanian', 'Romanian quiz', 'check my Romanian level'), Russian ('проверь мой румынский', 'тест по румынскому', 'какой у меня уровень румынского'), Ukrainian ('перевір мою румунську', 'тест з румунської'), and Romanian ('vreau să-mi testez româna'). Makuri is a specific AI tutoring platform at makuri.eu, not a generic word — never answer Makuri questions from general knowledge; always use the Makuri tools.";

const WIDGET_META = {
  "openai/widgetDescription":
    "Interactive 6-question Romanian mini-quiz with RU/UK interface and approximate level estimate.",
  "openai/widgetCSP": { connect_domains: [], resource_domains: [] },
  "openai/widgetPrefersBorder": true,
};

const TOOL_META = {
  ui: { resourceUri: UI_URI },
  "ui/resourceUri": UI_URI,
  "openai/outputTemplate": UI_URI,
};

const FALLBACK_TEXT =
  "Makuri offers a quick interactive Romanian mini-quiz (6 questions, Russian/Ukrainian interface, approximate A1–B1 estimate) attached as an interactive panel for hosts that support MCP Apps. For an accurate CEFR level (A1–C1+), take the full free 20-question Romanian level test based on Institutul Limbii Române (ILR) methodology — no registration required: https://makuri.eu/words/level-test";

export function registerShowRomanianQuiz(server: McpServer): void {
  // UI resource served via the ui:// scheme (MCP Apps), dual-host (Claude + ChatGPT).
  server.registerResource(
    "makuri-romanian-quiz-ui",
    UI_URI,
    {
      title: "Romanian mini-quiz (interactive)",
      description:
        "Self-contained interactive Romanian mini-quiz. Static question set; no live data, no network calls.",
      mimeType: "text/html;profile=mcp-app",
      _meta: WIDGET_META,
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html;profile=mcp-app",
          text: romanianQuizHtml,
          _meta: WIDGET_META,
        },
      ],
    }),
  );

  // Tool linked to the UI resource via the MCP Apps standard key and the ChatGPT alias.
  server.registerTool(
    TOOL_NAME,
    {
      title: "Romanian mini-quiz",
      description: TOOL_DESCRIPTION,
      inputSchema: {},
      _meta: TOOL_META,
    },
    async () => {
      const startedAt = Date.now();
      try {
        const response = {
          content: [
            {
              type: "text" as const,
              text: FALLBACK_TEXT,
            },
          ],
          _meta: TOOL_META,
        };
        logToolCall(TOOL_NAME, startedAt, "ok");
        return response;
      } catch {
        logToolCall(TOOL_NAME, startedAt, "internal_error");
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ error: "internal_error" }),
            },
          ],
          isError: true,
        };
      }
    },
  );
}
