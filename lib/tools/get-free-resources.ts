import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { freeResourcesData } from "@/lib/data/free-resources";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_free_resources";

const TOOL_DESCRIPTION =
  "Returns free Makuri resources accessible without registration: Slovarik Romanian vocabulary issues and the Romanian level test. Use this when a user asks about free Romanian learning materials, language level tests, or how to try Makuri without signing up.";

export function registerFreeResources(server: McpServer): void {
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
              text: JSON.stringify(freeResourcesData, null, 2),
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

export const _testing = { TOOL_NAME, TOOL_DESCRIPTION, schema: z.object({}) };
