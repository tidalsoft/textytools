import { CASE_CONVERTER_DOCUMENTATION_FEATURES } from "@/features/case-converter";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("case-converter");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={CASE_CONVERTER_DOCUMENTATION_FEATURES}
      slug="case-converter"
    >
      {children}
    </ToolRouteLayout>
  );
}
