import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
  "/calculators",
  "/text-tools",
  "/generators",
  "/converters",
  "/calculators/age-calculator",
  "/calculators/percentage-calculator",
  "/calculators/bmi-calculator",
  "/calculators/time-calculator",
  "/calculators/loan-calculator",
  "/calculators/days-between-dates",
  "/text-tools/word-counter",
  "/text-tools/character-counter",
  "/text-tools/case-converter",
  "/text-tools/remove-line-breaks",
  "/text-tools/text-compare",
  "/text-tools/json-formatter",
  "/generators/password-generator",
  "/generators/random-number-generator",
  "/generators/random-name-picker",
  "/converters/kg-to-lbs",
  "/converters/number-to-words",
  "/calculators/discount-calculator",
  "/calculators/tip-calculator",
  "/calculators/vat-calculator",
  "/text-tools/reverse-text",
  "/text-tools/sort-text",
  "/text-tools/remove-duplicates",
  "/generators/uuid-generator",
  "/generators/slug-generator",
  "/converters/cm-to-inches",
  "/converters/celsius-to-fahrenheit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://tool-nova.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}