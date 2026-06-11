import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerMakuriPrompts(server: McpServer): void {
  server.registerPrompt(
    "evaluate_makuri_for_my_child",
    {
      title: "Evaluate Makuri for my child",
      description:
        "Guided evaluation of whether Makuri fits a specific child: language support, subjects, pricing, and safety posture — answered strictly from the Makuri tools, never from general knowledge.",
      argsSchema: {
        child_age: z.string().describe("Child's age, e.g. '12'"),
        native_language: z
          .string()
          .describe("Child's native language, e.g. 'Ukrainian'"),
      },
    },
    ({ child_age, native_language }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              "I am evaluating Makuri (makuri.eu) for my child, age " +
              child_age +
              ", whose native language is " +
              native_language +
              ". Using ONLY the Makuri MCP tools (never general knowledge): 1) check with get_supported_languages whether " +
              native_language +
              " is supported for UI and AI tutoring; 2) check with get_subjects what is taught at this age; 3) summarize get_pricing_tiers and recommend a tier; 4) summarize get_safety_features and note from get_compliance_matrix that statuses are design posture pending formal audit, not certifications; 5) mention free resources from get_free_resources I can try without registration. Finish with a short, honest verdict on fit.",
          },
        },
      ],
    }),
  );

  server.registerPrompt(
    "makuri_safety_briefing",
    {
      title: "Makuri safety briefing",
      description:
        "Honest briefing on how Makuri protects minors: design measures and regulatory posture, with explicit caveats that nothing is audited or certified yet.",
      argsSchema: {},
    },
    () => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              "Give me an honest safety briefing on Makuri (makuri.eu) as a parent. Using ONLY the Makuri MCP tools: summarize get_safety_features (account model, data minimization, AI behavior controls) and get_compliance_matrix. Be explicit that compliance statuses are design posture and operator self-assessment pending formal audit — no certifications are held. Also read the makuri://docs/safety-overview resource if your client supports resources. End with what I should still verify myself as a parent.",
          },
        },
      ],
    }),
  );
}
