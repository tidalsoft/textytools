import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use Case Converter",
  title: "A quick format change, ready to copy",
  introduction:
    "Switch between familiar writing and developer formats while keeping the original text in view.",
  useCases: [
    {
      title: "Prepare names for code",
      description:
        "Turn a phrase into camelCase, PascalCase, snake_case, kebab-case, dot.case, or path/case.",
    },
    {
      title: "Clean up headings",
      description:
        "Change pasted text to Title Case or Sentence case for headings, labels, and short copy.",
    },
    {
      title: "Standardize a list",
      description:
        "Make capitalization consistent before moving text into a document, spreadsheet, or system.",
    },
  ],
  steps: [
    "Paste or type the original text.",
    "Choose a format and review the live result.",
    "Copy the converted text when it looks right.",
  ],
  detailsTitle: "Choose the right format",
  details: [
    {
      title: "For writing",
      description: "UPPER CASE, lower case, Title Case, and Sentence case.",
    },
    {
      title: "For code",
      description: "camelCase, PascalCase, snake_case, and CONSTANT_CASE.",
    },
    {
      title: "For names and paths",
      description: "kebab-case, dot.case, and path/case.",
    },
  ],
  example: {
    sourceLabel: "Original",
    source: "Project Baseline",
    resultLabel: "snake_case",
    result: "project_baseline",
  },
  tips: [
    "You can try every format without changing the original text.",
    "Give names and acronyms a quick review before copying the result.",
    "Copy puts the converted text on your clipboard; Clear starts over.",
  ],
} satisfies ToolDocumentationContent;

export const CASE_CONVERTER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function CaseConverterDocumentation() {
  return (
    <ToolDocumentation documentation={documentation} slug="case-converter" />
  );
}
