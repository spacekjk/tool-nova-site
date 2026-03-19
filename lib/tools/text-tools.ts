import type { ToolItem } from "./types";

export const TEXT_TOOLS: ToolItem[] = [
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
    {
        slug: "html-encoder-decoder",
        category: "text-tools",
        name: "HTML Encoder / Decoder",
        title: "HTML Encoder / Decoder",
        description:
            "Encode or decode HTML entities instantly with this free online HTML encoder and decoder tool.",
        shortDescription: "Encode and decode HTML entities.",
        keywords: [
            "html encoder",
            "html decoder",
            "html entity encoder",
            "html entity decoder",
            "encode html online",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "url-encoder-decoder",
            "base64-encoder-decoder",
            "json-formatter",
            "text-compare",
        ],
        howItWorksTitle: "How this HTML encoder and decoder works",
        howItWorks: [
            "This tool converts special HTML characters into encoded entities and can also decode entities back into readable text.",
            "It helps protect reserved characters like angle brackets, quotes, and ampersands when working with HTML content.",
            "You can use it for development, debugging, content formatting, and safe text transformation in your browser.",
        ],
        faqs: [
            {
                question: "What does HTML encoding do?",
                answer:
                    "HTML encoding replaces special characters like <, >, &, and quotes with safe HTML entities.",
            },
            {
                question: "Can this tool decode HTML entities back into normal text?",
                answer:
                    "Yes. This tool can decode valid HTML entities back into readable text instantly.",
            },
            {
                question: "Is this HTML encoder and decoder free to use?",
                answer:
                    "Yes. Tool Nova provides this HTML encoder and decoder online for free with no sign-up required.",
            },
        ],
    },
];