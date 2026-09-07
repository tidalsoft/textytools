import Link from "next/link";

import type { ToolDocumentationContent } from "./types";

import type { ToolSlug } from "@/shared/lib/toolCatalog";

interface ToolDocumentationProps {
  documentation: ToolDocumentationContent;
  slug: ToolSlug;
}

export function ToolDocumentation({
  documentation,
  slug,
}: ToolDocumentationProps) {
  return (
    <article
      aria-labelledby={`${slug}-guide-title`}
      className="mt-16 max-w-5xl md:mt-20"
      id={`${slug}-guide`}
    >
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {documentation.eyebrow}
      </p>
      <h2
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl"
        id={`${slug}-guide-title`}
      >
        {documentation.title}
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {documentation.introduction}
      </p>

      <div className="mt-9 grid gap-6 md:grid-cols-3 md:gap-7">
        {documentation.useCases.map((useCase) => (
          <section className="max-w-xs" key={useCase.title}>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              {useCase.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {useCase.description}
            </p>
          </section>
        ))}
      </div>

      <GuideSection title="How to use it">
        <ol className="mt-5 grid gap-5 md:grid-cols-3 md:gap-7">
          {documentation.steps.map((step, index) => (
            <li
              className="flex gap-3 leading-7 text-zinc-700 dark:text-zinc-300"
              key={step}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-white dark:bg-zinc-200 dark:text-zinc-900"
              >
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </GuideSection>

      <GuideSection title={documentation.detailsTitle}>
        <dl className="mt-5 grid gap-5">
          {documentation.details.map((detail) => (
            <div
              className="grid gap-1 sm:grid-cols-[minmax(9rem,0.7fr)_minmax(0,2fr)] sm:gap-6"
              key={detail.title}
            >
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {detail.title}
              </dt>
              <dd className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {detail.description}
              </dd>
            </div>
          ))}
        </dl>
      </GuideSection>

      <GuideSection title="Example">
        <div className="mt-5 grid min-w-0 items-center gap-4 rounded-lg bg-zinc-100 p-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] dark:bg-zinc-900">
          <ExampleValue
            label={documentation.example.sourceLabel}
            value={documentation.example.source}
          />
          <span aria-hidden="true" className="text-zinc-400 max-sm:rotate-90">
            →
          </span>
          <ExampleValue
            label={documentation.example.resultLabel}
            value={documentation.example.result}
          />
        </div>
      </GuideSection>

      <GuideSection title="Good to know">
        <ul className="mt-4 space-y-2 pl-5 text-zinc-600 marker:text-zinc-400 dark:text-zinc-400 dark:marker:text-zinc-600">
          {documentation.tips.map((tip) => (
            <li className="list-disc pl-1 leading-7" key={tip}>
              {tip}
            </li>
          ))}
        </ul>
      </GuideSection>

      <p className="mt-10 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {documentation.privacyNote}{" "}
        <Link
          className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-50"
          href="/privacy"
        >
          Privacy details
        </Link>
      </p>
    </article>
  );
}

function GuideSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      {children}
    </section>
  );
}

function ExampleValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {label}
      </p>
      <p className="mt-2 font-mono text-sm leading-6 break-words text-zinc-900 dark:text-zinc-100">
        {value}
      </p>
    </div>
  );
}
