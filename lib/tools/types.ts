export const SITE_URL = "https://tool-nova.com";

export type ToolCategory =
  | "calculators"
  | "text-tools"
  | "generators"
  | "converters";

export type ToolFaqItem = {
  question: string;
  answer: string;
};

export type ToolSeoNotes = {
  intent?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
};

export type ToolItem = {
  slug: string;
  category: ToolCategory;
  name: string;
  title: string;
  description: string;
  shortDescription?: string;
  keywords?: string[];
  featured?: boolean;
  published?: boolean;
  relatedSlugs?: string[];
  new?: boolean;
  howItWorksTitle?: string;
  howItWorks?: string[];
  faqs?: ToolFaqItem[];

  extendedContentTitle?: string;
  extendedContent?: string[];
  useCasesTitle?: string;
  useCases?: string[];
  quickExamplesTitle?: string;
  quickExamples?: string[];
  seoNotes?: ToolSeoNotes;
};

export type CategoryMeta = {
  slug: ToolCategory;
  name: string;
  title: string;
  description: string;
};
