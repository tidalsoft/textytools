import { REGEX_TESTER_DOCUMENTATION_FEATURES } from "@/features/regex-tester/ui/RegexTesterDocumentation";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("regex-tester");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={REGEX_TESTER_DOCUMENTATION_FEATURES}
      slug="regex-tester"
    >
      {children}
    </ToolRouteLayout>
  );
}
