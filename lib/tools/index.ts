import { CATEGORY_META } from "./categories";
import { CALCULATOR_TOOLS } from "./calculators";
import { TEXT_TOOLS } from "./text-tools";
import { GENERATOR_TOOLS } from "./generators";
import { CONVERTER_TOOLS } from "./converters";
import { SITE_URL } from "./types";
import type { ToolCategory, ToolItem } from "./types";

export { CATEGORY_META, SITE_URL };
export type { ToolCategory, ToolItem, CategoryMeta } from "./types";

export const TOOLS: ToolItem[] = [
  ...CALCULATOR_TOOLS,
  ...TEXT_TOOLS,
  ...GENERATOR_TOOLS,
  ...CONVERTER_TOOLS,
];

export function getPublishedTools(): ToolItem[] {
  return TOOLS.filter((tool) => tool.published);
}

export function getToolByParams(
  category: string,
  slug: string
): ToolItem | undefined {
  return TOOLS.find(
    (tool) => tool.category === category && tool.slug === slug && tool.published
  );
}

export function getToolPath(tool: Pick<ToolItem, "category" | "slug">): string {
  return `/${tool.category}/${tool.slug}`;
}

export function getCategoryPath(category: ToolCategory): string {
  return `/${category}`;
}

export function getStaticToolParams() {
  return getPublishedTools().map((tool) => ({
    category: tool.category,
    slug: tool.slug,
  }));
}

export function getStaticCategoryParams() {
  return (Object.keys(CATEGORY_META) as ToolCategory[]).map((category) => ({
    category,
  }));
}

export function getFeaturedTools(limit = 8): ToolItem[] {
  return getPublishedTools().filter((tool) => tool.featured).slice(0, limit);
}

export function getToolsByCategory(category: ToolCategory): ToolItem[] {
  return getPublishedTools().filter((tool) => tool.category === category);
}

export function getRelatedTools(tool: ToolItem, limit = 4): ToolItem[] {
  const publishedTools = getPublishedTools().filter(
    (item) => !(item.category === tool.category && item.slug === tool.slug)
  );

  const explicitRelated =
    tool.relatedSlugs?.length
      ? tool.relatedSlugs
          .map((slug) =>
            publishedTools.find((item) => item.slug === slug)
          )
          .filter((item): item is ToolItem => Boolean(item))
      : [];

  const explicitIds = new Set(
    explicitRelated.map((item) => `${item.category}:${item.slug}`)
  );

  const fallbackScored = publishedTools
    .filter((item) => !explicitIds.has(`${item.category}:${item.slug}`))
    .map((item) => {
      let score = 0;

      if (item.category === tool.category) {
        score += 5;
      }

      const toolKeywords = new Set((tool.keywords ?? []).map((k) => k.toLowerCase()));
      const itemKeywords = new Set((item.keywords ?? []).map((k) => k.toLowerCase()));

      for (const keyword of itemKeywords) {
        if (toolKeywords.has(keyword)) {
          score += 3;
        }
      }

      const toolText = `${tool.name} ${tool.title} ${tool.description} ${
        tool.shortDescription ?? ""
      }`.toLowerCase();

      const itemText = `${item.name} ${item.title} ${item.description} ${
        item.shortDescription ?? ""
      }`.toLowerCase();

      const toolTokens = new Set(
        toolText
          .split(/[\s,/.-]+/)
          .map((token) => token.trim())
          .filter((token) => token.length >= 4)
      );

      const itemTokens = new Set(
        itemText
          .split(/[\s,/.-]+/)
          .map((token) => token.trim())
          .filter((token) => token.length >= 4)
      );

      for (const token of itemTokens) {
        if (toolTokens.has(token)) {
          score += 1;
        }
      }

      if (item.featured) {
        score += 0.5;
      }

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);

  return [...explicitRelated, ...fallbackScored].slice(0, limit);
}

export function isValidCategory(category: string): category is ToolCategory {
  return category in CATEGORY_META;
}

export function getNavbarGroups() {
  return [
    { label: "Calculators", href: "/calculators" },
    { label: "Text Tools", href: "/text-tools" },
    { label: "Generators", href: "/generators" },
    { label: "Converters", href: "/converters" },
  ];
}

export function getHomeCategorySections() {
  return (Object.keys(CATEGORY_META) as ToolCategory[]).map((category) => {
    const meta = CATEGORY_META[category];
    const tools = getToolsByCategory(category).slice(0, 8);

    return {
      ...meta,
      href: getCategoryPath(category),
      tools,
    };
  });
}

export function getSitemapEntries() {
  const DEFAULT_LAST_MODIFIED = new Date("2026-03-19");

  const categoryEntries = (Object.keys(CATEGORY_META) as ToolCategory[]).map(
    (category) => ({
      url: `${SITE_URL}${getCategoryPath(category)}`,
      lastModified: DEFAULT_LAST_MODIFIED,
    })
  );

  const toolEntries = getPublishedTools().map((tool) => ({
    url: `${SITE_URL}${getToolPath(tool)}`,
    lastModified: DEFAULT_LAST_MODIFIED,
  }));

  const staticEntries = [
    { url: SITE_URL, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE_URL}/about`, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE_URL}/contact`, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE_URL}/privacy`, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE_URL}/terms`, lastModified: DEFAULT_LAST_MODIFIED },
  ];

  return [...staticEntries, ...categoryEntries, ...toolEntries];
}