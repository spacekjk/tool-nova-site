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
    howItWorksTitle: "How this percentage calculator works",
    howItWorks: [
      "This calculator helps you find percentages, percentage change, increases, and decreases quickly.",
      "It uses standard percentage formulas to convert values into percentage results based on your inputs.",
      "You can use it for discounts, prices, grades, finance, and everyday math calculations.",
    ],
    faqs: [
      {
        question: "What can I calculate with this percentage calculator?",
        answer: "You can calculate basic percentages, percentage increase, percentage decrease, and related values.",
      },
      {
        question: "Can I use this tool for discounts and price changes?",
        answer: "Yes. This percentage calculator is useful for shopping discounts, markups, and price comparisons.",
      },
      {
        question: "Is this percentage calculator free to use?",
        answer: "Yes. Tool Nova provides this percentage calculator online for free.",
      },
    ],
  },
  {
    slug: "bmi-calculator",
    category: "calculators",
    name: "BMI Calculator",
    title: "BMI Calculator",
    description:
      "Calculate your body mass index instantly with this free BMI calculator.",
    shortDescription: "Check body mass index quickly.",
    keywords: ["bmi calculator", "body mass index calculator", "health calculator"],
    featured: true,
    published: true,
    relatedSlugs: ["age-calculator", "kg-to-lbs", "percentage-calculator"],
    howItWorksTitle: "How this BMI calculator works",
    howItWorks: [
      "This calculator uses your height and weight to estimate your body mass index, also called BMI.",
      "BMI is calculated by dividing body weight by height squared, using a standard health screening formula.",
      "It can help you quickly check whether your BMI falls into a common underweight, normal, overweight, or obesity range.",
    ],
    faqs: [
      {
        question: "What is BMI?",
        answer: "BMI stands for body mass index. It is a simple measurement based on height and weight.",
      },
      {
        question: "Is BMI a medical diagnosis?",
        answer: "No. BMI is a screening tool, not a full medical diagnosis. It is useful for general guidance only.",
      },
      {
        question: "Can I use this BMI calculator for free?",
        answer: "Yes. Tool Nova provides this BMI calculator online for free.",
      },
    ],
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

    howItWorksTitle: "How this time calculator works",
    howItWorks: [
      "This calculator allows you to add or subtract time values such as hours and minutes quickly.",
      "It converts time inputs into a consistent format and performs calculations to give accurate results.",
      "You can use it for tracking work hours, calculating durations, scheduling, and everyday time management.",
    ],

    faqs: [
      {
        question: "What can I do with this time calculator?",
        answer:
          "You can add or subtract hours and minutes, calculate time differences, and manage time durations easily.",
      },
      {
        question: "Can I use this time calculator for work hours?",
        answer:
          "Yes. This tool is useful for calculating work shifts, total hours, and time intervals.",
      },
      {
        question: "Is this time calculator free to use?",
        answer:
          "Yes. Tool Nova provides this time calculator online for free with no sign-up required.",
      },
    ],
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
    howItWorksTitle: "How this loan calculator works",
    howItWorks: [
      "This calculator estimates monthly loan payments based on the loan amount, interest rate, and repayment term.",
      "It uses a standard amortization formula to calculate how much you may pay each month over time.",
      "You can use it to compare borrowing options, estimate total repayment, and understand interest costs more clearly.",
    ],
    faqs: [
      {
        question: "What does this loan calculator show?",
        answer: "It shows an estimated monthly payment and can help you understand total repayment and interest over the loan term.",
      },
      {
        question: "Does this loan calculator work for personal loans?",
        answer: "Yes. It can be used for many general fixed-rate loan estimates, including personal loans and similar borrowing scenarios.",
      },
      {
        question: "Is this loan calculator free?",
        answer: "Yes. Tool Nova provides this loan calculator online for free with no sign-up required.",
      },
    ],
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
    howItWorksTitle: "How this days between dates calculator works",
    howItWorks: [
      "This calculator compares two calendar dates and returns the total number of days between them.",
      "It works by converting both dates into a standard day-based format and then measuring the difference.",
      "You can use it for deadlines, project planning, age tracking, travel planning, and counting time periods.",
    ],
    faqs: [
      {
        question: "How do I calculate the number of days between two dates?",
        answer: "Select a start date and an end date. The calculator will show the total number of days between them.",
      },
      {
        question: "Does this tool include leap years?",
        answer: "Yes. Because it uses actual calendar dates, leap years are automatically reflected in the result.",
      },
      {
        question: "Is this days between dates calculator free?",
        answer: "Yes. Tool Nova provides this date calculator online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this discount calculator works",
    howItWorks: [
      "This calculator helps you find the final price after applying a discount to the original price.",
      "It calculates the discount amount and subtracts it from the original value to show your savings.",
      "You can use it for shopping, sales comparisons, budgeting, and quickly estimating discounted prices.",
    ],

    faqs: [
      {
        question: "How do I calculate a discount?",
        answer:
          "Enter the original price and the discount percentage. The calculator will show the final price and how much you save.",
      },
      {
        question: "Can I use this discount calculator for shopping?",
        answer:
          "Yes. It is useful for comparing deals, checking sale prices, and estimating savings while shopping.",
      },
      {
        question: "Is this discount calculator free to use?",
        answer:
          "Yes. Tool Nova provides this discount calculator online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this tip calculator works",
    howItWorks: [
      "This calculator helps you determine how much tip to leave based on your total bill and selected percentage.",
      "It calculates the tip amount and adds it to the bill to show the total payment.",
      "You can also split the total amount between multiple people to quickly see how much each person should pay.",
    ],

    faqs: [
      {
        question: "How do I calculate a tip?",
        answer:
          "Enter your bill amount and choose a tip percentage. The calculator will show the tip amount and total bill.",
      },
      {
        question: "Can I split the bill using this tip calculator?",
        answer:
          "Yes. You can divide the total amount by the number of people to see how much each person should pay.",
      },
      {
        question: "Is this tip calculator free to use?",
        answer:
          "Yes. Tool Nova provides this tip calculator online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this VAT calculator works",
    howItWorks: [
      "This calculator helps you add or remove value added tax (VAT) from a given amount quickly.",
      "It calculates the tax portion based on the VAT rate and shows both the net and gross values.",
      "You can use it for invoices, pricing, business calculations, and understanding tax-inclusive prices.",
    ],

    faqs: [
      {
        question: "What is VAT?",
        answer:
          "VAT (Value Added Tax) is a consumption tax added to goods and services in many countries.",
      },
      {
        question: "Can I remove VAT from a price?",
        answer:
          "Yes. This calculator allows you to reverse VAT to find the original price before tax.",
      },
      {
        question: "Is this VAT calculator free to use?",
        answer:
          "Yes. Tool Nova provides this VAT calculator online for free with no sign-up required.",
      },
    ],
  },

  {
    slug: "compound-interest-calculator",
    category: "calculators",
    name: "Compound Interest Calculator",
    title: "Compound Interest Calculator",
    description:
      "Calculate compound interest, final balance, and total interest with this free online compound interest calculator.",
    shortDescription: "Calculate compound interest and investment growth.",
    keywords: [
      "compound interest calculator",
      "investment calculator",
      "compound growth calculator",
      "interest calculator",
      "savings calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "loan-calculator",
      "percentage-calculator",
      "vat-calculator",
      "time-calculator",
    ],
    howItWorksTitle: "How this compound interest calculator works",
    howItWorks: [
      "This calculator estimates how your money grows when interest is added repeatedly over time.",
      "It uses the standard compound interest formula based on your principal amount, annual interest rate, compounding frequency, and number of years.",
      "You can use it to estimate savings growth, investment returns, and long-term interest accumulation.",
    ],
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest calculated on both the original principal and the interest already added over time.",
      },
      {
        question: "What is the formula for compound interest?",
        answer:
          "A common formula is A = P(1 + r / n)^(n × t), where P is principal, r is annual rate, n is compounding frequency, and t is time in years.",
      },
      {
        question: "Can I use this compound interest calculator for free?",
        answer:
          "Yes. Tool Nova provides this compound interest calculator online for free with no sign-up required.",
      },
    ],
  },
  {
    slug: "mortgage-calculator",
    category: "calculators",
    name: "Mortgage Calculator",
    title: "Mortgage Calculator",
    description:
      "Calculate monthly mortgage payments, total repayment, and total interest with this free online mortgage calculator.",
    shortDescription: "Estimate monthly mortgage payments easily.",
    keywords: [
      "mortgage calculator",
      "home loan calculator",
      "monthly mortgage payment calculator",
      "mortgage payment calculator",
      "house payment calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "loan-calculator",
      "compound-interest-calculator",
      "percentage-calculator",
      "vat-calculator",
    ],
    howItWorksTitle: "How this mortgage calculator works",
    howItWorks: [
      "This calculator estimates your monthly mortgage payment based on the loan amount, interest rate, and loan term.",
      "It uses a standard amortization formula to calculate how much you may pay each month over the full mortgage period.",
      "You can use it to compare different home loan options, estimate total repayment, and understand total interest costs.",
    ],
    faqs: [
      {
        question: "What does this mortgage calculator show?",
        answer:
          "It shows an estimated monthly payment, total repayment amount, and total interest paid over the loan term.",
      },
      {
        question: "What is included in this mortgage estimate?",
        answer:
          "This calculator estimates principal and interest payments. It does not automatically include taxes, insurance, or other housing costs unless you add them separately.",
      },
      {
        question: "Can I use this mortgage calculator for free?",
        answer:
          "Yes. Tool Nova provides this mortgage calculator online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this word counter works",
    howItWorks: [
      "This tool analyzes your text input and instantly counts words, characters, sentences, and paragraphs.",
      "It processes the text in real time, so results update automatically as you type or paste content.",
      "You can use it for writing, editing, SEO optimization, and checking content length requirements.",
    ],

    faqs: [
      {
        question: "What does this word counter measure?",
        answer:
          "It counts words, characters, sentences, and paragraphs in your text automatically.",
      },
      {
        question: "Can I use this word counter for SEO or writing limits?",
        answer:
          "Yes. It is useful for blog posts, essays, and any content that has word or character limits.",
      },
      {
        question: "Is this word counter free to use?",
        answer:
          "Yes. Tool Nova provides this word counter online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this character counter works",
    howItWorks: [
      "This tool analyzes your text input and counts characters instantly, both with and without spaces.",
      "It updates results in real time as you type or paste content into the input area.",
      "You can use it for writing limits, social media posts, coding, and general text analysis.",
    ],

    faqs: [
      {
        question: "What does this character counter measure?",
        answer:
          "It counts total characters, including spaces and optionally excluding spaces depending on your needs.",
      },
      {
        question: "Can I use this tool for writing limits or social media?",
        answer:
          "Yes. It is useful for platforms like Twitter, essays, or any content with character limits.",
      },
      {
        question: "Is this character counter free to use?",
        answer:
          "Yes. Tool Nova provides this character counter online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this case converter works",
    howItWorks: [
      "This tool transforms your text into different letter cases such as uppercase, lowercase, title case, and sentence case.",
      "It processes your input instantly, allowing you to switch between formats in real time.",
      "You can use it for writing, formatting documents, coding, and improving text consistency.",
    ],

    faqs: [
      {
        question: "What types of text case can I convert?",
        answer:
          "You can convert text to uppercase, lowercase, title case, and sentence case instantly.",
      },
      {
        question: "Can I use this case converter for formatting documents?",
        answer:
          "Yes. It is useful for editing content, correcting capitalization, and formatting text quickly.",
      },
      {
        question: "Is this case converter free to use?",
        answer:
          "Yes. Tool Nova provides this case converter online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this remove line breaks tool works",
    howItWorks: [
      "This tool removes line breaks from your text and combines multiple lines into a single continuous paragraph.",
      "It processes pasted or typed text instantly, replacing line breaks with spaces or removing them entirely.",
      "You can use it to clean copied text, format paragraphs, and prepare content for documents or web publishing.",
    ],

    faqs: [
      {
        question: "What does remove line breaks mean?",
        answer:
          "It removes newline characters from text and joins lines together into one continuous paragraph.",
      },
      {
        question: "Can I use this tool to clean copied text?",
        answer:
          "Yes. It is useful when copying text from PDFs, emails, or websites where line breaks are inconsistent.",
      },
      {
        question: "Is this remove line breaks tool free to use?",
        answer:
          "Yes. Tool Nova provides this tool online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this text compare tool works",
    howItWorks: [
      "This tool compares two blocks of text and highlights the differences between them.",
      "It analyzes both inputs and identifies added, removed, or changed content instantly.",
      "You can use it for editing, proofreading, version comparison, and checking changes in documents or code.",
    ],

    faqs: [
      {
        question: "What does this text compare tool do?",
        answer:
          "It compares two text inputs and shows the differences between them so you can easily spot changes.",
      },
      {
        question: "Can I use this tool for code or documents?",
        answer:
          "Yes. It works for any type of text, including code, articles, notes, and documents.",
      },
      {
        question: "Is this text compare tool free to use?",
        answer:
          "Yes. Tool Nova provides this text comparison tool online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this JSON formatter works",
    howItWorks: [
      "This tool formats raw JSON data into a clean and readable structure with proper indentation.",
      "It also validates your JSON input and highlights errors if the syntax is incorrect.",
      "You can use it for debugging, development, API responses, and improving JSON readability.",
    ],

    faqs: [
      {
        question: "What does a JSON formatter do?",
        answer:
          "It organizes JSON data into a structured and readable format, making it easier to understand and debug.",
      },
      {
        question: "Can this tool validate JSON?",
        answer:
          "Yes. It checks whether your JSON is valid and helps identify syntax errors.",
      },
      {
        question: "Is this JSON formatter free to use?",
        answer:
          "Yes. Tool Nova provides this JSON formatter online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this reverse text tool works",
    howItWorks: [
      "This tool reverses the order of characters in your text instantly.",
      "It processes your input in real time, allowing you to see reversed text as you type or paste content.",
      "You can use it for fun, encoding simple messages, testing text formats, or creative writing.",
    ],

    faqs: [
      {
        question: "What does this reverse text tool do?",
        answer:
          "It takes your input text and reverses the order of all characters from end to beginning.",
      },
      {
        question: "Can I reverse words instead of characters?",
        answer:
          "Some versions allow word-level reversing, but this tool focuses on reversing the full text string.",
      },
      {
        question: "Is this reverse text tool free to use?",
        answer:
          "Yes. Tool Nova provides this text reverser online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this sort text tool works",
    howItWorks: [
      "This tool takes multiple lines of text and sorts them based on your selected order.",
      "It can arrange lines alphabetically, reverse the order, or organize them for easier readability.",
      "You can use it for lists, data cleanup, organizing content, and improving text structure.",
    ],

    faqs: [
      {
        question: "What can I sort with this tool?",
        answer:
          "You can sort any list of text lines alphabetically, in reverse order, or in different arrangements depending on your needs.",
      },
      {
        question: "Does this tool change the content of my text?",
        answer:
          "No. It only changes the order of the lines without modifying the actual content.",
      },
      {
        question: "Is this sort text tool free to use?",
        answer:
          "Yes. Tool Nova provides this text sorting tool online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this remove duplicate lines tool works",
    howItWorks: [
      "This tool scans your text and removes repeated lines, keeping only unique entries.",
      "It processes the input instantly and filters out duplicates while preserving the original structure.",
      "You can use it for cleaning lists, organizing data, and removing repeated content from text.",
    ],

    faqs: [
      {
        question: "What does this tool do?",
        answer:
          "It removes duplicate lines from your text so that only unique lines remain.",
      },
      {
        question: "Will this tool change my original text?",
        answer:
          "No. It only removes repeated lines and keeps the remaining content unchanged.",
      },
      {
        question: "Is this remove duplicate lines tool free to use?",
        answer:
          "Yes. Tool Nova provides this tool online for free with no sign-up required.",
      },
    ],
  },
  {
    slug: "base64-encoder-decoder",
    category: "text-tools",
    name: "Base64 Encoder / Decoder",
    title: "Base64 Encoder / Decoder",
    description:
      "Encode text to Base64 or decode Base64 strings instantly with this free online tool.",
    shortDescription: "Encode and decode Base64 instantly.",
    keywords: [
      "base64 encoder",
      "base64 decoder",
      "base64 encode decode",
      "online base64 tool",
      "text to base64",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "json-formatter",
      "text-compare",
      "case-converter",
      "remove-line-breaks",
    ],
    howItWorksTitle: "How this Base64 encoder and decoder works",
    howItWorks: [
      "This tool converts plain text into Base64 format and can also decode Base64 strings back into readable text.",
      "Base64 is commonly used to safely represent text data using only ASCII characters.",
      "You can use it for development, APIs, debugging, and data transformation tasks in your browser.",
    ],
    faqs: [
      {
        question: "What is Base64 encoding?",
        answer:
          "Base64 encoding converts text or binary data into a text format using a limited set of ASCII characters.",
      },
      {
        question: "Can I decode Base64 back to normal text?",
        answer:
          "Yes. This tool can decode valid Base64 strings back into readable text instantly.",
      },
      {
        question: "Is this Base64 encoder and decoder free to use?",
        answer:
          "Yes. Tool Nova provides this Base64 tool online for free with no sign-up required.",
      },
    ],
  },
  {
    slug: "remove-extra-spaces",
    category: "text-tools",
    name: "Remove Extra Spaces",
    title: "Remove Extra Spaces",
    description:
      "Remove extra spaces from text instantly with this free online text cleanup tool.",
    shortDescription: "Remove extra spaces from text quickly.",
    keywords: [
      "remove extra spaces",
      "extra spaces remover",
      "text cleanup tool",
      "remove multiple spaces",
      "trim spaces online",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "remove-line-breaks",
      "remove-duplicates",
      "word-counter",
      "case-converter",
    ],
    howItWorksTitle: "How this remove extra spaces tool works",
    howItWorks: [
      "This tool removes repeated spaces and cleans up unnecessary spacing in your text.",
      "It can convert multiple spaces into a single space while keeping the text readable and tidy.",
      "You can use it for writing, pasted content cleanup, document editing, and text formatting tasks.",
    ],
    faqs: [
      {
        question: "What does remove extra spaces mean?",
        answer:
          "It means deleting repeated or unnecessary spaces so your text becomes cleaner and easier to read.",
      },
      {
        question: "Can this tool keep single spaces between words?",
        answer:
          "Yes. It removes extra spacing while keeping normal single spaces between words.",
      },
      {
        question: "Is this remove extra spaces tool free to use?",
        answer:
          "Yes. Tool Nova provides this text cleanup tool online for free with no sign-up required.",
      },
    ],
  },
  {
    slug: "url-encoder-decoder",
    category: "text-tools",
    name: "URL Encoder / Decoder",
    title: "URL Encoder / Decoder",
    description:
      "Encode or decode URLs instantly with this free online URL encoder and decoder tool.",
    shortDescription: "Encode and decode URLs instantly.",
    keywords: [
      "url encoder",
      "url decoder",
      "url encode decode",
      "percent encoding tool",
      "online url encoder",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "base64-encoder-decoder",
      "json-formatter",
      "remove-line-breaks",
      "case-converter",
    ],
    howItWorksTitle: "How this URL encoder and decoder works",
    howItWorks: [
      "This tool converts unsafe URL characters into percent-encoded format and can also decode encoded URLs back into readable text.",
      "URL encoding is commonly used when working with query strings, web forms, APIs, and browser-safe links.",
      "You can use it for development, debugging, link generation, and text transformation tasks directly in your browser.",
    ],
    faqs: [
      {
        question: "What is URL encoding?",
        answer:
          "URL encoding replaces unsafe characters in a URL with percent-encoded values so they can be transmitted safely on the web.",
      },
      {
        question: "Can I decode an encoded URL back to normal text?",
        answer:
          "Yes. This tool can decode valid percent-encoded URLs back into readable text instantly.",
      },
      {
        question: "Is this URL encoder and decoder free to use?",
        answer:
          "Yes. Tool Nova provides this URL encoder and decoder online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this password generator works",
    howItWorks: [
      "This tool generates strong and secure passwords using a mix of letters, numbers, and special characters.",
      "It uses randomization to create unpredictable combinations that are difficult to guess or crack.",
      "You can use it to create passwords for accounts, applications, and any situation where security is important.",
    ],

    faqs: [
      {
        question: "What makes a password secure?",
        answer:
          "A secure password includes a mix of uppercase and lowercase letters, numbers, and special characters, and avoids predictable patterns.",
      },
      {
        question: "Can I use this password generator for any account?",
        answer:
          "Yes. You can generate passwords for websites, apps, email accounts, and other services.",
      },
      {
        question: "Is this password generator free to use?",
        answer:
          "Yes. Tool Nova provides this password generator online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this random number generator works",
    howItWorks: [
      "This tool generates random numbers within a specified range based on your input.",
      "It uses randomization logic to ensure fair and unbiased number selection.",
      "You can use it for games, classroom activities, testing, giveaways, and decision making.",
    ],

    faqs: [
      {
        question: "How do I generate a random number?",
        answer:
          "Enter a minimum and maximum value, and the tool will generate a random number within that range.",
      },
      {
        question: "Is this random number generator truly random?",
        answer:
          "It uses a pseudo-random algorithm that provides sufficiently random results for most everyday uses.",
      },
      {
        question: "Is this random number generator free to use?",
        answer:
          "Yes. Tool Nova provides this tool online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this random name picker works",
    howItWorks: [
      "This tool selects a random name from a list that you provide.",
      "It uses random selection logic to ensure each name has an equal chance of being chosen.",
      "You can use it for giveaways, classroom activities, team selection, or decision making.",
    ],

    faqs: [
      {
        question: "How do I use the random name picker?",
        answer:
          "Enter or paste a list of names, and the tool will randomly select one from the list.",
      },
      {
        question: "Is the selection fair?",
        answer:
          "Yes. Each name has an equal probability of being selected using randomization.",
      },
      {
        question: "Is this random name picker free to use?",
        answer:
          "Yes. Tool Nova provides this tool online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this UUID generator works",
    howItWorks: [
      "This tool generates universally unique identifiers (UUIDs) using random or pseudo-random values.",
      "Each generated UUID is designed to be globally unique, making it suitable for databases and systems.",
      "You can use it for development, APIs, database keys, and tracking unique records.",
    ],

    faqs: [
      {
        question: "What is a UUID?",
        answer:
          "A UUID (Universally Unique Identifier) is a 128-bit value used to uniquely identify information across systems.",
      },
      {
        question: "Can I use these UUIDs in production?",
        answer:
          "Yes. UUIDs generated by this tool are suitable for most applications including development and production use.",
      },
      {
        question: "Is this UUID generator free to use?",
        answer:
          "Yes. Tool Nova provides this UUID generator online for free with no sign-up required.",
      },
    ],
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

    howItWorksTitle: "How this slug generator works",
    howItWorks: [
      "This tool converts your text into a clean, URL-friendly slug by removing special characters and formatting it properly.",
      "It replaces spaces with hyphens and normalizes text to make it suitable for web URLs.",
      "You can use it for SEO optimization, blog URLs, product pages, and clean link structures.",
    ],

    faqs: [
      {
        question: "What is a URL slug?",
        answer:
          "A slug is the part of a URL that identifies a specific page in a readable and SEO-friendly format.",
      },
      {
        question: "Why are slugs important for SEO?",
        answer:
          "Clean and descriptive slugs help search engines understand your content and improve visibility in search results.",
      },
      {
        question: "Is this slug generator free to use?",
        answer:
          "Yes. Tool Nova provides this slug generator online for free with no sign-up required.",
      },
    ],
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