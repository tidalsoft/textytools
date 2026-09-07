import { TEXT_COUNTER_DOCUMENTATION_FEATURES } from "@/features/text-counter";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("text-counter");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={TEXT_COUNTER_DOCUMENTATION_FEATURES}
      slug="text-counter"
    >
      {children}
    </ToolRouteLayout>
  );
}
