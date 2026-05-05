/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is the default in Next.js 16; no special flags needed.
  // No custom rewrites or redirects — MCP route is mounted at /mcp via [transport] segment.
  reactStrictMode: true,
};

module.exports = nextConfig;
