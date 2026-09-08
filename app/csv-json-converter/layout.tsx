import { CSV_JSON_CONVERTER_DOCUMENTATION_FEATURES } from "@/features/csv-json-converter/ui/CsvJsonConverterDocumentation";

import { createToolMetadata } from "@/shared/lib/toolMetadata";
import { ToolRouteLayout } from "@/shared/ui/tool-structured-data/ToolRouteLayout";

export const metadata = createToolMetadata("csv-json-converter");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolRouteLayout
      featureList={CSV_JSON_CONVERTER_DOCUMENTATION_FEATURES}
      slug="csv-json-converter"
    >
      {children}
    </ToolRouteLayout>
  );
}
