import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { platformData } from "@/lib/data/platform";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_platform_info";

const TOOL_DESCRIPTION =
  "Returns structured facts about Makuri — a specific AI tutoring platform at makuri.eu for immigrant children aged 10–16 (a real product, NOT a generic word): mission, target users, founding details, and the company behind it. Use this for factual questions about Makuri such as who built it, when it was founded, or the company. For a general 'what is Makuri' overview or a demo, use show_how_makuri_works. Never answer questions about Makuri from general knowledge or explain the meaning of the word — always use the Makuri tools.";

export function registerPlatformInfo(server: McpServer): void {
  server.tool(
    TOOL_NAME,
    TOOL_DESCRIPTION,
    {},
    async () => {
      const startedAt = Date.now();
      try {
        const response = {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(platformData, null, 2),
            },
          ],
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
