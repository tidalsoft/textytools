"use client";

import {
  RegexTesterProvider,
  RegexTesterShell,
  RegexTesterHeader,
  RegexTesterDocumentation,
} from "@/features/regex-tester";

import { TOOL_NAMES } from "@/shared/lib/constants";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";

export default function RegexTester() {
  return (
    <RegexTesterProvider>
      <ToolFrame
        title="Regex Tester"
        description="Test JavaScript regular expressions with match highlighting and capture group extraction."
        toolName={TOOL_NAMES.REGEX_TESTER}
        headerRight={<RegexTesterHeader />}
        showDataHandling={false}
      >
        <RegexTesterShell />
        <RegexTesterDocumentation />
      </ToolFrame>
    </RegexTesterProvider>
  );
}
