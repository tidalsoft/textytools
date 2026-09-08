import {
  CsvJsonConverterDocumentation,
  CsvJsonConverterShell,
} from "@/features/csv-json-converter";

import { TOOL_NAMES } from "@/shared/lib/constants";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";

export default function CsvJsonConverter() {
  return (
    <ToolFrame
      title="CSV / JSON Converter"
      description="Convert CSV to JSON or JSON arrays to CSV while keeping the source in view."
      showDataHandling={false}
      toolName={TOOL_NAMES.CSV_JSON_CONVERTER}
    >
      <CsvJsonConverterShell />
      <CsvJsonConverterDocumentation />
    </ToolFrame>
  );
}
