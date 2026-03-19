import type { Metadata } from "next";
import type { ToolItem } from "@/lib/tools";
import { SITE_URL } from "@/lib/tools";

type BuildMetadataProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildMetadataProps): Metadata {
  const fullTitle = `${title} | Tool Nova`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "Tool Nova",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}

export function buildToolMetadata(tool: ToolItem): Metadata {
  return buildMetadata({
    title: tool.title,
    description: tool.description,
    path: `/${tool.category}/${tool.slug}`,
    keywords: tool.keywords,
  });
}