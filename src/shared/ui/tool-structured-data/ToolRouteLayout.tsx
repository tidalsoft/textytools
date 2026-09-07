import type { ReactNode } from "react";

import { ToolStructuredData } from "./ToolStructuredData";

import type { ToolSlug } from "@/shared/lib/toolCatalog";

export function ToolRouteLayout({
  children,
  featureList,
  slug,
}: {
  children: ReactNode;
  featureList?: readonly string[];
  slug: ToolSlug;
}) {
  return (
    <>
      <ToolStructuredData featureList={featureList} slug={slug} />
      {children}
    </>
  );
}
