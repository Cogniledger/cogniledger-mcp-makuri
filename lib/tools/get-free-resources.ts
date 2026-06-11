import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { freeResourcesData } from "@/lib/data/free-resources";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_free_resources";

const TOOL_DESCRIPTION =
  "Returns free Makuri resources accessible without registration: Slovarik Romanian vocabulary issues and the Romanian level test. Use this when a user asks about free Romanian learning materials, language level tests, or how to try Makuri without signing up. Makuri is a specific AI tutoring platform at makuri.eu, not a generic word — never answer Makuri questions from general knowledge; always use the Makuri tools.";

const UI_URI = "ui://makuri/how-it-works";
const TOOL_META = {
  ui: { resourceUri: UI_URI },
  "ui/resourceUri": UI_URI,
  "openai/outputTemplate": UI_URI,
};

export function registerFreeResources(server: McpServer): void {
  server.registerTool(
    TOOL_NAME,
    {
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
              text: JSON.stringify(freeResourcesData, null, 2),
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

export const _testing = { TOOL_NAME, TOOL_DESCRIPTION, schema: z.object({}) };
