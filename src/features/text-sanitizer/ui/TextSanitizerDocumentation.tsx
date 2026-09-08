import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use Text Sanitizer",
  title: "Clean text while keeping the source in view",
  introduction:
    "Choose the exact cleanup operations you need, inspect the live result, and copy it without replacing your original text.",
  useCases: [
    {
      title: "Tidy pasted text",
      description:
        "Trim line edges, collapse repeated spaces, remove blank lines, or normalize whitespace before reusing text.",
    },
    {
      title: "Clean a line list",
      description:
        "Remove duplicate rows, sort lines alphabetically, or reverse their order.",
    },
    {
      title: "Remove selected characters",
      description:
        "Strip ASCII digits or one of the available punctuation, emoji, special-character, or non-ASCII categories.",
    },
  ],
  steps: [
    "Paste or type the original text in Input Text.",
    "Turn on only the cleanup operations you want to apply.",
    "Review Sanitized Text, then copy the result when it is right.",
  ],
  detailsTitle: "Choose the cleanup you need",
  details: [
    {
      title: "Lines and spaces",
      description:
        "Trim lines, remove empty or duplicate lines, collapse repeated spaces, or turn whitespace into single spaces.",
    },
    {
      title: "Character removal",
      description:
        "Remove non-ASCII characters, emoji, ASCII digits, punctuation, or special characters with separate controls.",
    },
    {
      title: "Line order",
      description: "Sort all lines alphabetically or reverse their order.",
    },
    {
      title: "Combined operations",
      description:
        "Enabled operations run in a fixed order, so review the result when several filters are active.",
    },
  ],
  example: {
    sourceLabel: "Input Text",
    source: "alpha   beta",
    resultLabel: "Remove Extra Spaces",
    result: "alpha beta",
  },
  tips: [
    "The result updates as you edit or change an option; there is nothing to submit.",
    "Removal, sorting, and reversal can be lossy. Keep the original visible and review the result before copying it.",
    "Enable all applies every operation, including non-ASCII and character removal, sorting, and reversal.",
  ],
} satisfies ToolDocumentationContent;

export const TEXT_SANITIZER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function TextSanitizerDocumentation() {
  return (
    <ToolDocumentation documentation={documentation} slug="text-sanitizer" />
  );
}
