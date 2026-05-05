// Per-tool structured logging — Security rule 6 in the architect brief.
//
// Emits exactly five fields, no more: evt, tool, ts, status, duration_ms.
// Must NOT include request body, IP, argument values, user-agent, or any
// other request content. Vercel Logs ingests these lines and lets the
// operator filter by `evt:"mcp_tool_call"` to reconstruct usage analytics
// without any external analytics service.

export type ToolLogStatus = "ok" | "validation_error" | "internal_error";

export function logToolCall(
  tool: string,
  startedAt: number,
  status: ToolLogStatus,
): void {
  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify({
      evt: "mcp_tool_call",
      tool,
      ts: new Date().toISOString(),
      status,
      duration_ms: Date.now() - startedAt,
    }),
  );
}
