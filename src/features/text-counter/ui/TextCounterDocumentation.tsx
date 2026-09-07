import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use Text Counter",
  title: "Check your text at a glance",
  introduction:
    "Check a limit, tighten a draft, or get a quick sense of how much text you are working with—without leaving the page.",
  useCases: [
    {
      title: "Write to a limit",
      description:
        "Keep social posts, form answers, titles, and descriptions inside a character or word limit.",
    },
    {
      title: "Edit a draft",
      description:
        "Watch words and paragraphs change while you trim a message, article, or project update.",
    },
    {
      title: "Plan an AI prompt",
      description:
        "Use the token estimate as a quick planning guide before sending text to an AI tool.",
    },
  ],
  steps: [
    "Paste or type your text in the editor.",
    "Read the counts above it—they update as you edit.",
    "Adjust your text until it fits, then copy it where you need it.",
  ],
  detailsTitle: "What the counts tell you",
  details: [
    {
      title: "Characters",
      description:
        "The total length of your text, including spaces, punctuation, and line breaks.",
    },
    {
      title: "Words",
      description: "Groups of text separated by spaces or line breaks.",
    },
    {
      title: "Lines",
      description: "Every line in the editor, including short lines.",
    },
    {
      title: "Paragraphs",
      description: "Blocks of text separated by a blank line.",
    },
    {
      title: "Estimated tokens",
      description:
        "A planning estimate for AI tools. Actual token counts can vary by model.",
    },
  ],
  example: {
    sourceLabel: "Text",
    source: "Keep this update short and useful.",
    resultLabel: "Counts",
    result: "34 characters · 6 words · 1 line",
  },
  tips: [
    "Your counts update instantly; there is nothing to submit.",
    "Token counts are estimates, so check the destination model when an exact limit matters.",
    "Use Clear when you are finished with the current text.",
  ],
  privacyNote:
    "Your text is processed in this browser and remembered in this tab for the session.",
} satisfies ToolDocumentationContent;

export const TEXT_COUNTER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function TextCounterDocumentation() {
  return (
    <ToolDocumentation documentation={documentation} slug="text-counter" />
  );
}
