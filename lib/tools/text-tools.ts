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
        title: "Character Counter - Count Characters, Words, Lines, and Reading Time",
        description:
            "Use this free character counter to count characters, characters without spaces, words, lines, sentences, paragraphs, and reading time instantly.",
        shortDescription:
            "Count characters, words, lines, sentences, paragraphs, and reading time.",
        keywords: [
            "character counter",
            "character count tool",
            "count characters online",
            "word and character counter",
            "line counter",
            "sentence counter",
            "paragraph counter",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "word-counter",
            "case-converter",
            "remove-extra-spaces",
            "text-compare",
        ],
        howItWorksTitle: "How this character counter works",
        howItWorks: [
            "This character counter analyzes your text instantly and shows the total number of characters, words, lines, sentences, and paragraphs.",
            "It also calculates character count without spaces, which is useful for metadata, forms, and social media limits.",
            "The tool includes estimated reading time so you can measure how long your content may take to read.",
            "You can paste essays, articles, descriptions, captions, and any other text into the editor to get live results.",
        ],
        faqs: [
            {
                question: "What does this character counter count?",
                answer:
                    "This tool counts characters, characters without spaces, words, lines, sentences, paragraphs, and estimated reading time.",
            },
            {
                question: "Does it count characters without spaces?",
                answer:
                    "Yes. The tool shows both total characters and characters without spaces.",
            },
            {
                question: "Can I use this for SEO metadata?",
                answer:
                    "Yes. This character counter is useful for checking title tags, meta descriptions, captions, and other text with length limits.",
            },
            {
                question: "Is this character counter free to use?",
                answer:
                    "Yes. You can use it online for free with no sign-up required.",
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
      title: "Remove Line Breaks Tool (Online Text Cleaner)",
      description:
        "Remove line breaks from text instantly with this free online tool. Clean up copied text, merge paragraphs, and format content for documents, emails, or SEO.",
      shortDescription:
        "Remove line breaks from text instantly and clean formatting.",
      keywords: [
        "remove line breaks",
        "remove line breaks online",
        "text line break remover",
        "delete line breaks",
        "merge lines into one",
        "remove newline characters",
        "text cleaner tool",
        "format text online",
        "remove paragraph breaks",
        "text formatting tool",
        "copy paste text cleaner"
      ],
      featured: true,
      published: true,
      new: true,
      relatedSlugs: [
        "word-counter",
        "remove-extra-spaces",
        "number-to-words"
      ],
    
      howItWorksTitle: "How this line break remover works",
      howItWorks: [
        "This tool removes all line breaks from your text and replaces them with spaces.",
        "It detects newline characters such as \\n and \\r\\n from copied or uploaded text.",
        "All line breaks are converted into a single continuous line for easier readability.",
        "Extra spaces are optionally reduced to keep the text clean and properly formatted.",
        "The tool works instantly in your browser without uploading your data to any server.",
      ],
    
      extendedContentTitle: "What is a line break and why remove it?",
      extendedContent: [
        "A line break is a character that moves text to a new line, commonly represented as \\n or \\r\\n in digital text.",
        "Line breaks are useful for formatting paragraphs, but they can cause issues when copying text from PDFs, websites, or documents.",
        "In many cases, copied text contains unnecessary line breaks that disrupt readability and formatting.",
        "Removing line breaks helps convert fragmented text into a clean, continuous paragraph.",
        "This is especially useful for editing, publishing, or preparing content for web and SEO purposes.",
      ],
    
      useCasesTitle: "When to use a line break remover",
      useCases: [
        "Cleaning text copied from PDFs or scanned documents",
        "Fixing formatting issues after copying from websites",
        "Preparing text for blog posts or SEO content",
        "Formatting email or messaging content into a single paragraph",
        "Cleaning OCR (optical character recognition) results",
        "Processing large text files for data or content workflows",
      ],
    
      quickExamplesTitle: "Example of line break removal",
      quickExamples: [
        "Original: Hello\\nworld → Result: Hello world",
        "Original: This is\\na test → Result: This is a test",
        "Original: Line1\\n\\nLine2 → Result: Line1 Line2",
      ],
    
      faqs: [
        {
          question: "What does this tool do?",
          answer:
            "This tool removes line breaks from text and converts multiple lines into a single continuous paragraph.",
        },
        {
          question: "Is my text uploaded to a server?",
          answer:
            "No. All processing happens directly in your browser, so your text remains private and secure.",
        },
        {
          question: "Can I upload a file?",
          answer:
            "Yes. You can upload a .txt file, and the tool will automatically remove line breaks from its content.",
        },
        {
          question: "Does it remove extra spaces as well?",
          answer:
            "Yes. The tool can also clean up extra spaces to ensure your text looks neat and readable.",
        },
        {
          question: "Is this tool free to use?",
          answer:
            "Yes. This line break remover is completely free with no sign-up required.",
        },
      ],
    
      seoNotes: {
        intent: "informational + utility",
        primaryKeyword: "remove line breaks",
        secondaryKeywords: [
          "text cleaner",
          "remove newline characters",
          "format text online"
        ],
      },
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
        new: true,
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
            "Use this free JSON formatter to format, validate, minify, sort keys, and beautify JSON instantly online.",
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
        new: true,
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
            {
            question: "What does Sort Keys do?",
            answer:
                "Sort Keys rearranges JSON object keys in alphabetical order, which makes the output easier to compare, review, and debug."
            }
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
        name: "Base64 Encoder Decoder",
        title: "Base64 Encoder Decoder - Encode and Decode Base64 Online",
        description:
            "Use this free Base64 encoder decoder to encode text to Base64 and decode Base64 back to plain text instantly online.",
        shortDescription:
            "Encode text to Base64 and decode Base64 online.",
        keywords: [
            "base64 encoder",
            "base64 decoder",
            "base64 encode decode",
            "encode to base64",
            "decode base64 online",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "json-formatter",
            "url-encoder-decoder",
            "html-encoder-decoder",
            "text-compare",
        ],
        howItWorksTitle: "How this Base64 encoder decoder works",
        howItWorks: [
            "Paste plain text into the input box and click Encode Base64 to convert it into Base64 format.",
            "Paste Base64 text into the input box and click Decode Base64 to convert it back into readable text.",
            "You can copy the result instantly for use in APIs, debugging, data transfer, or testing workflows.",
        ],
        faqs: [
            {
                question: "What is Base64 encoding?",
                answer:
                    "Base64 encoding converts text or binary data into an ASCII string format that is easier to transfer and store in some systems.",
            },
            {
                question: "Can I decode Base64 back to text?",
                answer:
                    "Yes. This tool can decode Base64 input and return readable plain text when the input is valid.",
            },
            {
                question: "Why does Base64 decoding fail?",
                answer:
                    "Decoding usually fails when the input is incomplete, corrupted, or not valid Base64 text.",
            },
        ],
    },
    {
        slug: "remove-extra-spaces",
        category: "text-tools",
        name: "Remove Extra Spaces",
        title: "Remove Extra Spaces - Clean Text and Remove Line Breaks Instantly",
        description:
            "Remove extra spaces, line breaks, and empty lines from text instantly. Clean messy text for documents, coding, and SEO.",
        shortDescription:
            "Clean text by removing extra spaces and line breaks.",
        keywords: [
            "remove extra spaces",
            "remove line breaks",
            "text cleaner",
            "remove empty lines",
            "clean text online",
            "fix spacing text"
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "word-counter",
            "character-counter",
            "case-converter",
            "text-compare"
        ],
        howItWorks: [
            "Paste your text into the input box.",
            "The tool removes unnecessary spaces, line breaks, or empty lines.",
            "Copy the cleaned text instantly.",
            "Use it for documents, coding, or formatting text."
        ],
        faqs: [
            {
                question: "What does this tool do?",
                answer:
                    "It removes extra spaces, line breaks, and empty lines from text to make it clean and readable."
            },
            {
                question: "Can I remove line breaks only?",
                answer:
                    "Yes. You can choose to remove line breaks while keeping words properly spaced."
            },
            {
                question: "Is this useful for coding?",
                answer:
                    "Yes. It helps clean copied code or data formatting issues."
            },
            {
                question: "Is this tool free?",
                answer:
                    "Yes. You can use it online for free without any limits."
            }
        ]
    },
    {
        slug: "url-encoder-decoder",
        category: "text-tools",
        name: "URL Encoder Decoder",
        title: "URL Encoder Decoder - Encode and Decode URL Strings Online",
        description:
            "Use this free URL encoder decoder to encode URLs, query strings, and text safely, then decode them back instantly online.",
        shortDescription:
            "Encode and decode URLs and query strings online.",
        keywords: [
            "url encoder",
            "url decoder",
            "encode url",
            "decode url",
            "query string encoder",
            "url encode decode",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "base64-encoder-decoder",
            "html-encoder-decoder",
            "json-formatter",
            "slug-generator",
        ],
        howItWorksTitle: "How this URL encoder decoder works",
        howItWorks: [
            "Paste a URL, query string, or plain text into the input box and click URL Encode to convert reserved characters safely.",
            "Paste encoded URL text into the input box and click URL Decode to make it readable again.",
            "You can copy the converted output instantly for use in links, tracking parameters, APIs, and debugging.",
        ],
        faqs: [
            {
                question: "What does URL encoding do?",
                answer:
                    "URL encoding converts special characters into a safe encoded format so they can be used correctly inside URLs and query strings.",
            },
            {
                question: "Why do I need URL decoding?",
                answer:
                    "URL decoding helps you read encoded parameters and values in a human-readable format.",
            },
            {
                question: "Can I encode a full URL?",
                answer:
                    "Yes. You can encode full URLs, query strings, or individual text values with this tool.",
            },
        ],
    },
    {
        slug: "html-encoder-decoder",
        category: "text-tools",
        name: "HTML Encoder Decoder",
        title: "HTML Encoder Decoder - Encode and Decode HTML Entities Online",
        description:
            "Use this free HTML encoder decoder to encode HTML special characters into entities and decode HTML entities back into readable text instantly.",
        shortDescription:
            "Encode and decode HTML entities online.",
        keywords: [
            "html encoder",
            "html decoder",
            "html entity encoder",
            "html entity decoder",
            "encode html online",
            "decode html entities",
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "url-encoder-decoder",
            "base64-encoder-decoder",
            "json-formatter",
            "text-compare",
        ],
        howItWorksTitle: "How this HTML encoder decoder works",
        howItWorks: [
            "Paste plain HTML or text into the input box and click HTML Encode to convert special characters into safe HTML entities.",
            "Paste encoded HTML entities into the input box and click HTML Decode to convert them back into readable text.",
            "You can copy the converted result instantly for use in websites, CMS platforms, code, and documentation.",
        ],
        faqs: [
            {
                question: "What does HTML encoding do?",
                answer:
                    "HTML encoding converts special characters such as <, >, &, and quotes into HTML entities so they can be displayed safely without being interpreted as code.",
            },
            {
                question: "Why would I decode HTML entities?",
                answer:
                    "Decoding HTML entities helps you read escaped content in a normal human-readable format.",
            },
            {
                question: "Is this tool useful for developers?",
                answer:
                    "Yes. It is useful for developers, technical writers, CMS users, and anyone working with raw HTML or escaped text.",
            },
        ],
    },

];
