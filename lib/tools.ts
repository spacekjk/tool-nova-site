// lib/tools.ts

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
};

export type CategoryMeta = {
  slug: ToolCategory;
  name: string;
  title: string;
  description: string;
};

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

export const TOOLS: ToolItem[] = [
  // calculators
  {
    slug: "age-calculator",
    category: "calculators",
    name: "Age Calculator",
    title: "Age Calculator - Calculate Exact Age Online",
    description:
      "Use this free age calculator to calculate your exact age in years, months, and days from your birth date.",
    shortDescription: "Calculate exact age in years, months, and days.",
    keywords: [
      "age calculator",
      "exact age calculator",
      "calculate age online",
      "birth date calculator",
      "online age calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: ["bmi-calculator", "time-calculator", "days-between-dates", "percentage-calculator"],
    howItWorksTitle: "How this age calculator works",
    howItWorks: [
      "This calculator uses your date of birth and compares it with the current date or a selected end date.",
      "It calculates the difference in calendar years, months, and days instead of showing only a rough day count.",
      "You can use it to check exact age for personal records, forms, school use, or general date calculations.",
    ],
    faqs: [
      {
        question: "How do I calculate my exact age?",
        answer:
          "Enter your birth date, and the calculator will show your exact age in years, months, and days.",
      },
      {
        question: "Does this age calculator use the current date automatically?",
        answer:
          "Yes. In most cases, the calculator compares your birth date with today unless you provide another date.",
      },
      {
        question: "Is this age calculator free to use?",
        answer:
          "Yes. Tool Nova provides this age calculator online for free with no sign-up required.",
      },
    ],
  },
  {
    slug: "percentage-calculator",
    category: "calculators",
    name: "Percentage Calculator",
    title: "Percentage Calculator",
    description:
      "Calculate percentages easily with this free online percentage calculator.",
    shortDescription: "Calculate percentages, increases, and decreases.",
    keywords: [
      "percentage calculator",
      "calculate percentage",
      "percent tool",
      "online percentage calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: ["loan-calculator", "bmi-calculator", "time-calculator"],
  },
  {
    slug: "bmi-calculator",
    category: "calculators",
    name: "BMI Calculator",
    title: "BMI Calculator",
    description:
      "Calculate your body mass index instantly with this free BMI calculator.",
    shortDescription: "Check body mass index quickly.",
    keywords: [
      "bmi calculator",
      "body mass index calculator",
      "health calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: ["age-calculator", "kg-to-lbs", "percentage-calculator"],
  },
  {
    slug: "time-calculator",
    category: "calculators",
    name: "Time Calculator",
    title: "Time Calculator",
    description:
      "Add, subtract, and convert hours and minutes with this free online time calculator.",
    shortDescription: "Add and subtract time values.",
    keywords: ["time calculator", "hours minutes calculator", "time difference"],
    featured: true,
    published: true,
    relatedSlugs: ["days-between-dates", "age-calculator", "percentage-calculator"],
  },
  {
    slug: "loan-calculator",
    category: "calculators",
    name: "Loan Calculator",
    title: "Loan Calculator",
    description:
      "Calculate monthly payments, interest, and total repayment with this free loan calculator.",
    shortDescription: "Estimate monthly loan payments.",
    keywords: ["loan calculator", "monthly payment calculator", "interest calculator"],
    featured: true,
    published: true,
    relatedSlugs: ["percentage-calculator", "discount-calculator", "vat-calculator"],
  },
  {
    slug: "days-between-dates",
    category: "calculators",
    name: "Days Between Dates",
    title: "Days Between Dates Calculator",
    description:
      "Calculate the number of days between two dates instantly online.",
    shortDescription: "Find the number of days between dates.",
    keywords: ["days between dates", "date difference calculator", "days calculator"],
    published: true,
    relatedSlugs: ["age-calculator", "time-calculator", "percentage-calculator"],
  },
  {
    slug: "discount-calculator",
    category: "calculators",
    name: "Discount Calculator",
    title: "Discount Calculator",
    description:
      "Calculate sale prices, discount percentages, and savings instantly.",
    shortDescription: "Calculate discounts and savings.",
    keywords: ["discount calculator", "sale price calculator", "discount percent"],
    featured: true,
    published: true,
    relatedSlugs: ["percentage-calculator", "vat-calculator", "loan-calculator"],
  },
  {
    slug: "tip-calculator",
    category: "calculators",
    name: "Tip Calculator",
    title: "Tip Calculator",
    description:
      "Calculate tip amounts and split bills quickly with this free tip calculator.",
    shortDescription: "Calculate tips and split bills.",
    keywords: ["tip calculator", "gratuity calculator", "bill split calculator"],
    published: true,
    relatedSlugs: ["percentage-calculator", "discount-calculator", "vat-calculator"],
  },
  {
    slug: "vat-calculator",
    category: "calculators",
    name: "VAT Calculator",
    title: "VAT Calculator",
    description:
      "Add or remove VAT instantly with this free online VAT calculator.",
    shortDescription: "Add or remove VAT fast.",
    keywords: ["vat calculator", "tax calculator", "value added tax calculator"],
    featured: true,
    published: true,
    relatedSlugs: ["discount-calculator", "percentage-calculator", "loan-calculator"],
  },

  // text-tools
  {
    slug: "word-counter",
    category: "text-tools",
    name: "Word Counter",
    title: "Word Counter",
    description:
      "Count words, characters, sentences, and paragraphs instantly online.",
    shortDescription: "Count words and characters instantly.",
    keywords: ["word counter", "character counter", "text counter"],
    featured: true,
    published: true,
    relatedSlugs: ["character-counter", "case-converter", "text-compare"],
  },
  {
    slug: "character-counter",
    category: "text-tools",
    name: "Character Counter",
    title: "Character Counter",
    description: "Count characters with and without spaces in real time.",
    shortDescription: "Count characters with and without spaces.",
    keywords: ["character counter", "letter counter", "text character count"],
    featured: true,
    published: true,
    relatedSlugs: ["word-counter", "case-converter", "remove-line-breaks"],
  },
  {
    slug: "case-converter",
    category: "text-tools",
    name: "Case Converter",
    title: "Case Converter",
    description:
      "Convert text to uppercase, lowercase, title case, and sentence case instantly.",
    shortDescription: "Convert text case instantly.",
    keywords: ["case converter", "uppercase lowercase converter", "title case"],
    featured: true,
    published: true,
    relatedSlugs: ["word-counter", "character-counter", "reverse-text"],
  },
  {
    slug: "remove-line-breaks",
    category: "text-tools",
    name: "Remove Line Breaks",
    title: "Remove Line Breaks",
    description:
      "Remove line breaks and join text into a clean paragraph instantly.",
    shortDescription: "Remove line breaks from text quickly.",
    keywords: ["remove line breaks", "join lines", "text cleanup"],
    published: true,
    relatedSlugs: ["remove-duplicates", "sort-text", "word-counter"],
  },
  {
    slug: "text-compare",
    category: "text-tools",
    name: "Text Compare",
    title: "Text Compare",
    description:
      "Compare two blocks of text and spot differences quickly online.",
    shortDescription: "Compare two text blocks quickly.",
    keywords: ["text compare", "text diff", "compare text online"],
    featured: true,
    published: true,
    relatedSlugs: ["word-counter", "json-formatter", "remove-line-breaks"],
  },
  {
    slug: "json-formatter",
    category: "text-tools",
    name: "JSON Formatter",
    title: "JSON Formatter",
    description:
      "Format, beautify, and validate JSON instantly with this free online JSON formatter.",
    shortDescription: "Format and validate JSON instantly.",
    keywords: ["json formatter", "json beautifier", "json validator"],
    featured: true,
    published: true,
    relatedSlugs: ["text-compare", "remove-line-breaks", "case-converter"],
  },
  {
    slug: "reverse-text",
    category: "text-tools",
    name: "Reverse Text",
    title: "Reverse Text",
    description:
      "Reverse text instantly with this free online text reverser tool.",
    shortDescription: "Reverse text instantly.",
    keywords: ["reverse text", "text reverser", "reverse words"],
    featured: true,
    published: true,
    relatedSlugs: ["sort-text", "remove-duplicates", "case-converter"],
  },
  {
    slug: "sort-text",
    category: "text-tools",
    name: "Sort Text",
    title: "Sort Text",
    description:
      "Sort lines of text alphabetically, reverse them, or organize them quickly.",
    shortDescription: "Sort text lines instantly.",
    keywords: ["sort text", "alphabetize text", "sort lines"],
    published: true,
    relatedSlugs: ["reverse-text", "remove-duplicates", "remove-line-breaks"],
  },
  {
    slug: "remove-duplicates",
    category: "text-tools",
    name: "Remove Duplicate Lines",
    title: "Remove Duplicate Lines",
    description:
      "Remove duplicate lines from your text instantly in your browser.",
    shortDescription: "Remove duplicate lines quickly.",
    keywords: ["remove duplicate lines", "dedupe text", "duplicate remover"],
    published: true,
    relatedSlugs: ["sort-text", "remove-line-breaks", "reverse-text"],
  },

  // generators
  {
    slug: "password-generator",
    category: "generators",
    name: "Password Generator",
    title: "Password Generator",
    description:
      "Generate secure passwords instantly with this free password generator.",
    shortDescription: "Generate secure passwords instantly.",
    keywords: ["password generator", "secure password generator"],
    featured: true,
    published: true,
    relatedSlugs: ["random-number-generator", "random-name-picker", "uuid-generator"],
  },
  {
    slug: "random-number-generator",
    category: "generators",
    name: "Random Number Generator",
    title: "Random Number Generator",
    description:
      "Generate random numbers instantly for games, classrooms, testing, and everyday use.",
    shortDescription: "Generate random numbers instantly.",
    keywords: ["random number generator", "number picker", "rng"],
    featured: true,
    published: true,
    relatedSlugs: ["random-name-picker", "password-generator", "uuid-generator"],
  },
  {
    slug: "random-name-picker",
    category: "generators",
    name: "Random Name Picker",
    title: "Random Name Picker",
    description:
      "Pick a random name fairly and quickly from your list.",
    shortDescription: "Pick a random name from a list.",
    keywords: ["random name picker", "name picker", "random selector"],
    published: true,
    relatedSlugs: ["random-number-generator", "password-generator", "slug-generator"],
  },
  {
    slug: "uuid-generator",
    category: "generators",
    name: "UUID Generator",
    title: "UUID Generator",
    description:
      "Generate unique UUIDs instantly with this free online UUID generator.",
    shortDescription: "Generate UUIDs instantly.",
    keywords: ["uuid generator", "guid generator", "random uuid"],
    featured: true,
    published: true,
    relatedSlugs: ["slug-generator", "password-generator", "random-number-generator"],
  },
  {
    slug: "slug-generator",
    category: "generators",
    name: "Slug Generator",
    title: "Slug Generator",
    description:
      "Convert text into a clean URL slug instantly with this free online slug generator.",
    shortDescription: "Generate SEO-friendly URL slugs.",
    keywords: ["slug generator", "url slug generator", "seo slug tool"],
    published: true,
    relatedSlugs: ["uuid-generator", "password-generator", "case-converter"],
  },

  // converters
  {
    slug: "kg-to-lbs",
    category: "converters",
    name: "Kg to Lbs",
    title: "Kg to Lbs Converter",
    description:
        "Convert kilograms to pounds quickly with this free online converter.",
    shortDescription: "Convert kilograms to pounds quickly.",
    keywords: ["kg to lbs", "kilogram to pounds converter"],
    featured: true,
    published: true,
    relatedSlugs: ["bmi-calculator", "age-calculator", "number-to-words"],
    howItWorksTitle: "How this kg to lbs converter works",
    howItWorks: [
        "This converter uses the standard conversion formula from kilograms to pounds.",
        "The formula is: pounds = kilograms × 2.20462.",
        "For example, 70 kilograms is equal to about 154.32 pounds.",
    ],
    faqs: [
        {
        question: "How many pounds are in 1 kilogram?",
        answer: "One kilogram is equal to about 2.20462 pounds.",
        },
        {
        question: "Can I use this kg to lbs converter for free?",
        answer:
            "Yes. Tool Nova provides this converter online for free with no sign-up required.",
        },
        {
        question: "Is this conversion accurate?",
        answer:
            "Yes. This converter uses the standard kilogram to pound conversion factor.",
        },
    ],
  },
  {
    slug: "number-to-words",
    category: "converters",
    name: "Number to Words",
    title: "Number to Words Converter",
    description:
        "Convert numbers into written words instantly with this free online converter.",
    shortDescription: "Convert numbers into written words.",
    keywords: ["number to words", "number to text", "spell number"],
    featured: true,
    published: true,
    relatedSlugs: ["kg-to-lbs", "cm-to-inches", "celsius-to-fahrenheit"],
    howItWorksTitle: "How this number to words converter works",
    howItWorks: [
        "This converter takes a numeric value and changes it into its written word form in English.",
        "It is useful for writing checks, invoices, forms, and documents where numbers need to be spelled out clearly.",
        "For example, 125 becomes one hundred twenty-five, and 1000 becomes one thousand.",
    ],
    faqs: [
        {
        question: "What does this number to words converter do?",
        answer:
            "It converts numeric values into written English words automatically.",
        },
        {
        question: "Can I use number to words for checks or formal writing?",
        answer:
            "Yes. This tool can help when you need to spell out numbers for checks, documents, or other formal uses.",
        },
        {
        question: "Is this converter free to use online?",
        answer:
            "Yes. Tool Nova provides this number to words converter for free in your browser.",
        },
    ],
  },
  {
    slug: "cm-to-inches",
    category: "converters",
    name: "Cm to Inches",
    title: "Cm to Inches Converter",
    description:
        "Convert centimeters to inches instantly with this free online converter.",
    shortDescription: "Convert centimeters to inches quickly.",
    keywords: ["cm to inches", "centimeters to inches converter"],
    published: true,
    relatedSlugs: ["kg-to-lbs", "celsius-to-fahrenheit", "number-to-words"],
    howItWorksTitle: "How this cm to inches converter works",
    howItWorks: [
        "This converter changes centimeters into inches using the standard length conversion formula.",
        "The formula is: inches = centimeters ÷ 2.54.",
        "For example, 10 centimeters is equal to about 3.94 inches.",
    ],
    faqs: [
        {
        question: "How many inches are in 1 centimeter?",
        answer: "One centimeter is equal to about 0.3937 inches.",
        },
        {
        question: "Why is 2.54 used in the formula?",
        answer:
            "Because 1 inch is defined as exactly 2.54 centimeters, so this is the standard conversion value.",
        },
        {
        question: "Can I use this cm to inches converter on mobile?",
        answer:
            "Yes. The converter works on desktop, tablet, and mobile devices in your browser.",
        },
    ],
  },
  {
    slug: "celsius-to-fahrenheit",
    category: "converters",
    name: "Celsius to Fahrenheit",
    title: "Celsius to Fahrenheit Converter",
    description:
        "Convert Celsius to Fahrenheit instantly with this free online temperature converter.",
    shortDescription: "Convert Celsius to Fahrenheit quickly.",
    keywords: ["celsius to fahrenheit", "temperature converter"],
    published: true,
    relatedSlugs: ["cm-to-inches", "kg-to-lbs", "number-to-words"],
    howItWorksTitle: "How this Celsius to Fahrenheit converter works",
    howItWorks: [
        "This converter uses the standard temperature conversion formula from Celsius to Fahrenheit.",
        "The formula is: Fahrenheit = (Celsius × 9/5) + 32.",
        "For example, 0 degrees Celsius is equal to 32 degrees Fahrenheit, and 25 degrees Celsius is equal to 77 degrees Fahrenheit.",
    ],
    faqs: [
        {
        question: "What is 0°C in Fahrenheit?",
        answer: "0 degrees Celsius is equal to 32 degrees Fahrenheit.",
        },
        {
        question: "What is the formula to convert Celsius to Fahrenheit?",
        answer:
            "The standard formula is Fahrenheit = (Celsius × 9/5) + 32.",
        },
        {
        question: "Is this temperature converter free to use?",
        answer:
            "Yes. You can use this Celsius to Fahrenheit converter online for free.",
        },
    ],
 },
];

export function getAllTools() {
  return TOOLS.filter((tool) => tool.published !== false);
}

export function getAllCategories() {
  return Object.values(CATEGORY_META);
}

export function isValidCategory(category: string): category is ToolCategory {
  return category in CATEGORY_META;
}

export function getCategoryMeta(category: ToolCategory) {
  return CATEGORY_META[category];
}

export function getCategoryPath(category: ToolCategory) {
  return `/${category}`;
}

export function getToolPath(tool: Pick<ToolItem, "category" | "slug">) {
  return `/${tool.category}/${tool.slug}`;
}

export function getToolsByCategory(category: ToolCategory) {
  return getAllTools().filter((tool) => tool.category === category);
}

export function getToolByParams(category: string, slug: string) {
  if (!isValidCategory(category)) return undefined;

  return getAllTools().find(
    (tool) => tool.category === category && tool.slug === slug
  );
}

export function getToolBySlug(slug: string) {
  return getAllTools().find((tool) => tool.slug === slug);
}

export function getFeaturedTools(limit?: number) {
  const items = getAllTools().filter((tool) => tool.featured);

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getHomeCategorySections() {
  return getAllCategories()
    .map((category) => ({
      ...category,
      tools: getToolsByCategory(category.slug),
    }))
    .filter((section) => section.tools.length > 0);
}

export function getStaticCategoryParams() {
  return getAllCategories().map((category) => ({
    category: category.slug,
  }));
}

export function getStaticToolParams() {
  return getAllTools().map((tool) => ({
    category: tool.category,
    slug: tool.slug,
  }));
}

export function getRelatedTools(tool: ToolItem, limit = 3) {
  const related = (tool.relatedSlugs ?? [])
    .map((slug) => getToolBySlug(slug))
    .filter((item): item is ToolItem => Boolean(item));

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const fallback = getToolsByCategory(tool.category)
    .filter((item) => item.slug !== tool.slug)
    .filter((item) => !related.some((r) => r.slug === item.slug));

  return [...related, ...fallback].slice(0, limit);
}

export function getNavbarGroups() {
  return [
    { label: "All Calculators", href: "/calculators" },
    { label: "All Text Tools", href: "/text-tools" },
    { label: "All Generators", href: "/generators" },
    { label: "All Converters", href: "/converters" },
    ...getAllTools().map((tool) => ({
      label: tool.name,
      href: getToolPath(tool),
    })),
  ];
}

export function getSitemapEntries() {
  const staticPages = [
    {
      url: `${SITE_URL}`,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ];

  const categoryPages = getAllCategories().map((category) => ({
    url: `${SITE_URL}${getCategoryPath(category.slug)}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const toolPages = getAllTools().map((tool) => ({
    url: `${SITE_URL}${getToolPath(tool)}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}