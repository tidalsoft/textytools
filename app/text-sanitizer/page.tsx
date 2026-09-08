"use client";

import {
  TextSanitizerDocumentation,
  TextSanitizerShell,
} from "@/features/text-sanitizer";

import { TOOL_NAMES } from "@/shared/lib/constants";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";

export default function TextSanitizer() {
  return (
    <ToolFrame
      title="Text Sanitizer"
      description="Clean and transform your text with customizable sanitization options."
      showDataHandling={false}
      toolName={TOOL_NAMES.TEXT_SANITIZER}
    >
      <TextSanitizerShell />
      <TextSanitizerDocumentation />
    </ToolFrame>
  );
}
