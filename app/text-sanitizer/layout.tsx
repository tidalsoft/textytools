import { TEXT_SANITIZER_DOCUMENTATION_FEATURES } from "@/features/text-sanitizer/ui/TextSanitizerDocumentation";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("text-sanitizer");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={TEXT_SANITIZER_DOCUMENTATION_FEATURES}
      slug="text-sanitizer"
    >
      {children}
    </ToolRouteLayout>
  );
}
