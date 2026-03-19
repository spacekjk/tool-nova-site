import { CATEGORY_META } from "./categories";
import { CALCULATOR_TOOLS } from "./calculators";
import { TEXT_TOOLS } from "./text-tools";
import { GENERATOR_TOOLS } from "./generators";
import { CONVERTER_TOOLS } from "./converters";
import { SITE_URL } from "./types";
import type { ToolCategory, ToolItem } from "./types";

export { CATEGORY_META, SITE_URL };
export type { ToolCategory, ToolItem };

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
  if (!tool.relatedSlugs?.length) return [];

  return tool.relatedSlugs
    .map((slug) => TOOLS.find((item) => item.slug === slug && item.published))
    .filter((item): item is ToolItem => Boolean(item))
    .slice(0, limit);
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
  const categoryEntries = (Object.keys(CATEGORY_META) as ToolCategory[]).map(
    (category) => ({
      url: `${SITE_URL}${getCategoryPath(category)}`,
      lastModified: new Date(),
    })
  );

  const toolEntries = getPublishedTools().map((tool) => ({
    url: `${SITE_URL}${getToolPath(tool)}`,
    lastModified: new Date(),
  }));

  const staticEntries = [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/about`, lastModified: new Date() },
    { url: `${SITE_URL}/contact`, lastModified: new Date() },
    { url: `${SITE_URL}/privacy`, lastModified: new Date() },
    { url: `${SITE_URL}/terms`, lastModified: new Date() },
  ];

  return [...staticEntries, ...categoryEntries, ...toolEntries];
}