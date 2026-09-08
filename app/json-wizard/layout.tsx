import { JSON_WIZARD_DOCUMENTATION_FEATURES } from "@/features/json-wizard/ui/JsonWizardDocumentation";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("json-wizard");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={JSON_WIZARD_DOCUMENTATION_FEATURES}
      slug="json-wizard"
    >
      {children}
    </ToolRouteLayout>
  );
}
