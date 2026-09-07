import {
  TextCounterDocumentation,
  TextCounterShell,
} from "@/features/text-counter";

import { TOOL_NAMES } from "@/shared/lib/constants";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";

export default function TextCounter() {
  return (
    <ToolFrame
      title="Text Counter"
      description="Paste or type text to see character, word, line, paragraph, and estimated token counts as you work."
      showDataHandling={false}
      toolName={TOOL_NAMES.TEXT_COUNTER}
    >
      <TextCounterShell />
      <TextCounterDocumentation />
    </ToolFrame>
  );
}
