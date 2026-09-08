import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use Regex Tester",
  title: "Test a JavaScript pattern against real text",
  introduction:
    "Try a regular expression, inspect every match and capture group, and move structured captures into another tool.",
  useCases: [
    {
      title: "Develop a JavaScript pattern",
      description:
        "Edit a pattern and flags while seeing which parts of the test text match.",
    },
    {
      title: "Inspect capture groups",
      description:
        "Review each match, its index, and named or numbered captures in a table.",
    },
    {
      title: "Prepare captured data",
      description:
        "Send captures to JSON Wizard or CSV / JSON Converter, or copy all full matches as separate lines.",
    },
  ],
  steps: [
    "Enter a JavaScript regular-expression pattern without the surrounding slashes.",
    "Choose flags and paste the text you want to test.",
    "Navigate highlighted matches, then inspect, copy, or convert the results.",
  ],
  detailsTitle: "Understand the result",
  details: [
    {
      title: "Flags",
      description:
        "Use g, i, m, s, u, or y to control global, case-insensitive, multiline, dot-all, Unicode, or sticky matching.",
    },
    {
      title: "Match navigation",
      description:
        "The counter and arrow controls move through highlighted matches in source order.",
    },
    {
      title: "Capture groups",
      description:
        "The match table shows full matches, indices, and named or numbered captured values.",
    },
    {
      title: "Pattern guards",
      description:
        "Invalid syntax, detected nested quantifiers, and patterns that match empty strings are rejected with an inline error.",
    },
  ],
  example: {
    sourceLabel: "Pattern and text",
    source: "(?<label>[A-Za-z]+) · alpha 42 beta",
    resultLabel: "g flag",
    result: "2 matches · label: alpha · label: beta",
  },
  tips: [
    "Patterns use JavaScript regular-expression syntax, which can differ from another language or service.",
    "Use the g flag when you want every match rather than only the first one.",
    "The pattern guards reduce specific risks but do not provide a general execution-time guarantee.",
  ],
} satisfies ToolDocumentationContent;

export const REGEX_TESTER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function RegexTesterDocumentation() {
  return (
    <ToolDocumentation documentation={documentation} slug="regex-tester" />
  );
}
