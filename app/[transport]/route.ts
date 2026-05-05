import { createMcpHandler } from "mcp-handler";
import { registerPlatformInfo } from "@/lib/tools/get-platform-info";
import { registerSupportedLanguages } from "@/lib/tools/get-supported-languages";
import { registerSubjects } from "@/lib/tools/get-subjects";
import { registerPricingTiers } from "@/lib/tools/get-pricing-tiers";
import { registerSafetyFeatures } from "@/lib/tools/get-safety-features";
import { registerComplianceMatrix } from "@/lib/tools/get-compliance-matrix";
import { registerTechStack } from "@/lib/tools/get-tech-stack";
import { registerContactInfo } from "@/lib/tools/get-contact-info";

const handler = createMcpHandler(
  (server) => {
    registerPlatformInfo(server);
    registerSupportedLanguages(server);
    registerSubjects(server);
    registerPricingTiers(server);
    registerSafetyFeatures(server);
    registerComplianceMatrix(server);
    registerTechStack(server);
    registerContactInfo(server);
  },
  {
    // Server options — none required for this read-only deployment.
  },
  {
    basePath: "",
    maxDuration: 60,
    verboseLogs: false,
  },
);

export { handler as GET, handler as POST };
