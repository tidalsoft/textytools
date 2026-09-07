interface GuideItem {
  title: string;
  description: string;
}

interface GuideExample {
  sourceLabel: string;
  source: string;
  resultLabel: string;
  result: string;
}

export interface ToolDocumentationContent {
  eyebrow: string;
  title: string;
  introduction: string;
  useCases: readonly GuideItem[];
  steps: readonly string[];
  detailsTitle: string;
  details: readonly GuideItem[];
  example: GuideExample;
  tips: readonly string[];
  privacyNote: string;
}
