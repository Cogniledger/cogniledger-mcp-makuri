import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { complianceData } from "@/lib/data/compliance";
import { logToolCall } from "@/lib/logging";
import type { RegulationId } from "@/lib/types";

const TOOL_NAME = "get_compliance_matrix";

const TOOL_DESCRIPTION =
  "Returns Makuri's regulatory posture across EU AI Act, GDPR, GDPR-K (children data), COPPA, and ISO 42001 — as design intentions and operator self-assessment, NOT certified or audited compliance. No formal audit or conformity assessment has been performed. Statuses are design_aligned_unaudited, not_started, or not_applicable; there is deliberately no 'compliant' status. Use when the user asks about regulatory compliance, AI Act classification, or data protection for children — and present results as posture, not certification. Makuri is a specific AI tutoring platform at makuri.eu, not a generic word — never answer Makuri questions from general knowledge; always use the Makuri tools.";

const inputShape = {
  regulation: z
    .enum(["eu_ai_act", "gdpr", "gdpr_k", "coppa", "iso_42001"])
    .optional()
    .describe(
      "Optional filter to return a single regulation. When omitted, returns all five regulations in the matrix.",
    ),
};

const UI_URI = "ui://makuri/how-it-works";
const TOOL_META = {
  ui: { resourceUri: UI_URI },
  "ui/resourceUri": UI_URI,
  "openai/outputTemplate": UI_URI,
};

export function registerComplianceMatrix(server: McpServer): void {
  server.registerTool(
    TOOL_NAME,
    {
      description: TOOL_DESCRIPTION,
      inputSchema: inputShape,
      _meta: TOOL_META,
    },
    async (args: { regulation?: RegulationId }) => {
      const startedAt = Date.now();
      try {
        const { regulation } = args ?? {};

        const baseResponse = {
          disclaimer: complianceData.disclaimer,
          operator: complianceData.operator,
          operator_jurisdiction: complianceData.operator_jurisdiction,
          audit_status: complianceData.audit_status,
          certifications_held: complianceData.certifications_held,
          certifications_pursued: complianceData.certifications_pursued,
          mvp_note: complianceData.mvp_note,
          last_reviewed: complianceData.last_reviewed,
        };

        let payload: unknown;
        if (regulation === undefined) {
          payload = {
            ...baseResponse,
            regulations: complianceData.regulations,
          };
        } else {
          const match = complianceData.regulations.find((r) => r.id === regulation);
          payload = {
            ...baseResponse,
            regulations: match ? [match] : [],
            query: { regulation, found: Boolean(match) },
          };
        }

        const response = {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(payload, null, 2),
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
