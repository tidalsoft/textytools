import { TEXT_ENCODER_DOCUMENTATION_FEATURES } from "@/features/text-encoder/ui/TextEncoderDocumentation";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("text-encoder");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={TEXT_ENCODER_DOCUMENTATION_FEATURES}
      slug="text-encoder"
    >
      {children}
    </ToolRouteLayout>
  );
}
