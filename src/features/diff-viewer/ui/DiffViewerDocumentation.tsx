import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use Diff Viewer",
  title: "See what changed between two texts",
  introduction:
    "Compare an earlier version with a revised one, review each changed line, and search both sides without replacing either text.",
  useCases: [
    {
      title: "Review an edit",
      description:
        "Compare two drafts of a message, document, or other prose and find the lines that changed.",
    },
    {
      title: "Check configuration changes",
      description:
        "Put an earlier configuration on the left and a revised version on the right to inspect additions, removals, and replacements.",
    },
    {
      title: "Find a value on both sides",
      description:
        "Search both panes together and move through every match, with an optional case-sensitive search.",
    },
  ],
  steps: [
    "Paste the earlier text into Left and the revised text into Right.",
    "Review the highlighted added, removed, and modified lines.",
    "Search both panes when you need to inspect a particular word or value.",
  ],
  detailsTitle: "How to read the comparison",
  details: [
    {
      title: "Added lines",
      description: "Lines that appear only in the text on the right.",
    },
    {
      title: "Removed lines",
      description: "Lines that appear only in the text on the left.",
    },
    {
      title: "Modified lines",
      description:
        "Paired lines whose contents changed between the left and right texts.",
    },
    {
      title: "Search matches",
      description:
        "Matches from both panes share one count and previous-or-next navigation.",
    },
  ],
  example: {
    sourceLabel: "Left",
    source: "status: draft\nowner: Ada",
    resultLabel: "Right",
    result: "status: ready\nowner: Ada",
  },
  tips: [
    "The comparison is line-based, so moving text to another line can appear as a removal and an addition.",
    "Turn on Case Sensitive when uppercase and lowercase values should count as different search matches.",
    "There is no copy or export action; both texts remain editable so you can select what you need.",
  ],
} satisfies ToolDocumentationContent;

export const DIFF_VIEWER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function DiffViewerDocumentation() {
  return <ToolDocumentation documentation={documentation} slug="diff-viewer" />;
}
