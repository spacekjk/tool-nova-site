import type { CategoryMeta, ToolCategory } from "./types";

export const CATEGORY_META: Record<ToolCategory, CategoryMeta> = {
  calculators: {
    slug: "calculators",
    name: "Calculators",
    title: "Free Online Calculators",
    description:
      "Use free online calculators for age, percentage, BMI, loan, time, date, discount, tip, and VAT calculations.",
  },
  "text-tools": {
    slug: "text-tools",
    name: "Text Tools",
    title: "Free Online Text Tools",
    description:
      "Use free online text tools for counting, formatting, cleaning, comparing, and transforming text instantly.",
  },
  generators: {
    slug: "generators",
    name: "Generators",
    title: "Free Online Generators",
    description:
      "Use free online generators for passwords, UUIDs, random numbers, names, slugs, and other useful outputs.",
  },
  converters: {
    slug: "converters",
    name: "Converters",
    title: "Free Online Converters",
    description:
      "Use free online converters for weight, temperature, length, and number conversion tasks.",
  },
};