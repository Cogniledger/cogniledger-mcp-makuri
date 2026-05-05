import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CogniLedger MCP Server — Makuri showcase",
  description:
    "Public, read-only MCP server exposing metadata about the Makuri EdTech platform. A reference deployment from CogniLedger Solutions S.R.L. demonstrating production MCP patterns under EU compliance constraints.",
  authors: [
    { name: "CogniLedger Solutions S.R.L.", url: "https://cogniledger.eu" },
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontSize: "16px",
          lineHeight: 1.6,
          color: "#1a1a1a",
          background: "#fafafa",
        }}
      >
        {children}
      </body>
    </html>
  );
}
