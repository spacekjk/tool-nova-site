import type { Metadata } from "next";
import { SITE_URL, type Tool } from "@/lib/tools";

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
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullTitle = `${title} | Tool Nova`;

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
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-default.png`],
    },
  };
}

export function buildToolMetadata(tool: Tool): Metadata {
  return buildMetadata({
    title: tool.title,
    description: tool.description,
    path: `/${tool.category}/${tool.slug}`,
    keywords: tool.keywords ?? [],
  });
}

export function buildCategoryMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildMetadataProps): Metadata {
  return buildMetadata({
    title,
    description,
    path,
    keywords,
  });
}
