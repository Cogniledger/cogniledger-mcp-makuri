import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { manifestoMd, safetyOverviewMd, connectGuideMd } from "@/lib/resources/docs";

const DOCS = [
  {
    name: "makuri-manifesto",
    uri: "makuri://docs/manifesto",
    title: "Makuri Manifesto",
    description:
      "Why Makuri exists: the dual mission — the immigrant child gets a chance at a normal life; the host country gets an educated contributing citizen. Full founder-written manifesto.",
    text: manifestoMd,
  },
  {
    name: "makuri-safety-overview",
    uri: "makuri://docs/safety-overview",
    title: "Child Safety by Design (Overview)",
    description:
      "Design measures protecting minors on Makuri: account model, data minimization, AI behavior controls. Explicitly not a compliance certification.",
    text: safetyOverviewMd,
  },
  {
    name: "makuri-connect-guide",
    uri: "makuri://docs/connect-guide",
    title: "Connect Makuri to your AI assistant",
    description:
      "How to connect this MCP server in ChatGPT, Claude, and Le Chat, and what it exposes.",
    text: connectGuideMd,
  },
];

export function registerDocResources(server: McpServer): void {
  for (const doc of DOCS) {
    server.registerResource(
      doc.name,
      doc.uri,
      {
        title: doc.title,
        description: doc.description,
        mimeType: "text/markdown",
      },
      async (uri) => ({
        contents: [
          {
            uri: uri.href,
            mimeType: "text/markdown",
            text: doc.text,
          },
        ],
      }),
    );
  }
}
