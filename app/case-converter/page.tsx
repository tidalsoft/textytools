import {
  CaseConverterDocumentation,
  CaseConverterShell,
} from "@/features/case-converter";

import { TOOL_NAMES } from "@/shared/lib/constants";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";

export default function CaseConverter() {
  return (
    <ToolFrame
      title="Case Converter"
      description="Turn text into the case style you need for writing, code, file names, and labels."
      showDataHandling={false}
      toolName={TOOL_NAMES.CASE_CONVERTER}
    >
      <CaseConverterShell />
      <CaseConverterDocumentation />
    </ToolFrame>
  );
}
