import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { platformData } from "@/lib/data/platform";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_platform_info";

const TOOL_DESCRIPTION =
  "Returns general information about the Makuri platform, including mission, target users, founding details, and company information. Use this tool when the user asks 'what is Makuri', 'who made it', or wants a general overview.";

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

export const _testing = { TOOL_NAME, TOOL_DESCRIPTION, schema: z.object({}) };
