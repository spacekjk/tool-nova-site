import type { ToolItem } from "./types";

export const TEXT_TOOLS: ToolItem[] = [
    {
        slug: "word-counter",
        category: "text-tools",
        name: "Word Counter",
        title: "Word Counter - Count Words, Characters, Sentences, and Reading Time",
        description:
            "Use this free word counter to count words, characters, sentences, paragraphs, and reading time instantly online.",
        shortDescription:
            "Count words, characters, sentences, paragraphs, and reading time.",
        keywords: [
            "word counter",
            "character counter",
            "reading time calculator",
            "sentence counter",
            "paragraph counter",
            "count words online",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "character-counter",
            "remove-extra-spaces",
            "case-converter",
            "text-compare",
        ],
        howItWorksTitle: "How this word counter works",
        howItWorks: [
            "This word counter analyzes your text instantly and shows the total number of words, characters, sentences, and paragraphs.",
            "It also calculates character count without spaces, which is useful for forms, social media limits, and metadata fields.",
            "The reading time estimate is based on a typical reading speed and helps you measure how long a piece of writing may take to read.",
            "You can paste essays, blog posts, articles, or any other text into the editor and get results immediately.",
        ],
        faqs: [
            {
                question: "What does this word counter count?",
                answer:
                    "This tool counts words, characters, characters without spaces, sentences, paragraphs, and estimated reading time.",
            },
            {
                question: "How is reading time calculated?",
                answer:
                    "Reading time is estimated from the total word count using a typical average reading speed.",
            },
            {
                question: "Does this count characters without spaces?",
                answer:
                    "Yes. The tool shows both total characters and characters without spaces.",
            },
            {
                question: "Can I use this for essays and blog posts?",
                answer:
                    "Yes. This word counter is useful for essays, articles, blog posts, assignments, and SEO writing.",
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
        title: "Case Converter - Convert Text to Uppercase, Lowercase, camelCase, snake_case",
        description:
            "Use this free case converter to change text into uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case.",
        shortDescription:
            "Convert text into uppercase, lowercase, title case, camelCase, snake_case, and more.",
        keywords: [
            "case converter",
            "uppercase converter",
            "lowercase converter",
            "camelcase converter",
            "snake case converter",
            "kebab case converter",
            "title case converter",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "word-counter",
            "character-counter",
            "remove-extra-spaces",
            "slug-generator",
        ],
        howItWorksTitle: "How this case converter works",
        howItWorks: [
            "This case converter transforms your text into different formats instantly, including uppercase, lowercase, title case, and sentence case.",
            "It also converts text into developer-friendly formats such as camelCase, PascalCase, snake_case, and kebab-case.",
            "You can paste any text into the editor and copy the converted result you need right away.",
            "This is useful for writing, editing, coding, SEO work, and preparing text for different platforms.",
        ],
        faqs: [
            {
                question: "What can this case converter change?",
                answer:
                    "This tool can convert text into lowercase, uppercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case.",
            },
            {
                question: "What is camelCase?",
                answer:
                    "camelCase is a writing style where the first word starts in lowercase and each following word starts with a capital letter, such as myToolName.",
            },
            {
                question: "What is snake_case?",
                answer:
                    "snake_case is a text format where words are lowercase and connected with underscores, such as my_tool_name.",
            },
            {
                question: "Can I copy the converted text?",
                answer:
                    "Yes. Each converted result has its own copy button so you can quickly copy the format you need.",
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
        title: "JSON Formatter - Format, Validate, and Minify JSON Online",
        description:
            "Use this free JSON formatter to format, validate, minify, and beautify JSON instantly. Paste JSON text or upload a JSON file.",
        shortDescription:
            "Format, validate, minify, and beautify JSON online.",
        keywords: [
            "json formatter",
            "json validator",
            "json beautifier",
            "json minify",
            "format json online",
            "validate json online",
            "json viewer",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "base64-encoder-decoder",
            "html-encoder-decoder",
            "url-encoder-decoder",
            "text-compare",
        ],
        howItWorksTitle: "How this JSON formatter works",
        howItWorks: [
            "This JSON formatter parses your JSON input and converts it into clean, readable output with proper indentation.",
            "You can also validate JSON to check for syntax errors before using it in an API, app, or configuration file.",
            "The minify option removes spaces and line breaks to create compact JSON output for production use.",
            "You can paste JSON directly into the editor or upload a JSON file from your device.",
        ],
        faqs: [
            {
                question: "What does a JSON formatter do?",
                answer:
                    "A JSON formatter makes raw or messy JSON easier to read by adding indentation, spacing, and line breaks.",
            },
            {
                question: "How do I validate JSON?",
                answer:
                    "Paste your JSON into the input box and click Validate JSON. The tool will tell you whether the JSON is valid or show an error message.",
            },
            {
                question: "What is minified JSON?",
                answer:
                    "Minified JSON is compact JSON without extra spaces or line breaks. It is useful when you want smaller file sizes.",
            },
            {
                question: "Can I upload a JSON file?",
                answer:
                    "Yes. You can upload a .json file, edit it, then format, validate, minify, copy, or download the result.",
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