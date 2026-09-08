import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use JSON Wizard",
  title: "Parse, format, and search JSON",
  introduction:
    "Check JSON syntax, choose a useful representation, and search or sort the result while the original input stays available.",
  useCases: [
    {
      title: "Pretty-print JSON",
      description:
        "Turn compact JSON into an indented view that is easier to read and review.",
    },
    {
      title: "Check JSON syntax",
      description:
        "Find whether the complete input parses as JSON and use the available error detail to correct invalid text.",
    },
    {
      title: "Prepare JSON for another task",
      description:
        "Minify, escape, sort, or search JSON, then copy it or continue with Text Encoder or CSV / JSON Converter.",
    },
  ],
  steps: [
    "Paste JSON into the left editor and check its syntax status.",
    "Choose Pretty Print, Minified, or Escaped and adjust the available options.",
    "Review the right editor, then copy the result or continue in another tool.",
  ],
  detailsTitle: "Choose a JSON view",
  details: [
    {
      title: "Pretty Print",
      description:
        "Add 2, 4, 6, or 8 spaces of indentation so nested data is easier to scan.",
    },
    {
      title: "Minified",
      description:
        "Remove presentation whitespace while preserving JSON values.",
    },
    {
      title: "Escaped",
      description:
        "Produce a JSON string representation with the necessary quotation marks and escapes.",
    },
    {
      title: "Sort and search",
      description:
        "Sort object keys recursively or search the source and result with shared match navigation.",
    },
  ],
  example: {
    sourceLabel: "Compact JSON",
    source: '{"status":"synthetic","count":2}',
    resultLabel: "Pretty Print",
    result: '{\n  "status": "synthetic",\n  "count": 2\n}',
  },
  tips: [
    "Invalid input stays in the editor so you can correct it; output actions remain unavailable until it parses.",
    "Sort Keys changes object-key order recursively but does not sort array items.",
    "A JSON string that itself contains valid JSON is unescaped automatically before the selected view is rendered.",
  ],
} satisfies ToolDocumentationContent;

export const JSON_WIZARD_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function JsonWizardDocumentation() {
  return <ToolDocumentation documentation={documentation} slug="json-wizard" />;
}
