import type { ToolItem } from "./types";

export const GENERATOR_TOOLS: ToolItem[] = [
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
        new: true,
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
        title: "Slug Generator - Create SEO-Friendly URL Slugs Instantly",
        description:
            "Generate clean, SEO-friendly URL slugs from any text. Convert titles into optimized slugs for blogs, websites, and CMS.",
        shortDescription:
            "Create SEO-friendly URL slugs instantly.",
        keywords: [
            "slug generator",
            "url slug generator",
            "seo slug",
            "kebab case generator",
            "slugify text",
            "seo url creator"
        ],
        featured: true,
        published: true,
        relatedSlugs: [
            "case-converter",
            "word-counter",
            "character-counter"
        ],
        howItWorks: [
            "Enter any title or sentence into the input field.",
            "The tool converts it into a clean, SEO-friendly URL slug.",
            "Special characters are removed and spaces are replaced with hyphens.",
            "Copy the slug and use it in your blog, CMS, or website."
        ],
        faqs: [
            {
                question: "What is a slug in SEO?",
                answer:
                    "A slug is the readable part of a URL that describes the page content. It helps improve SEO and user experience."
            },
            {
                question: "Why are slugs important?",
                answer:
                    "Slugs make URLs easier to read, improve search rankings, and increase click-through rates."
            },
            {
                question: "Does this remove special characters?",
                answer:
                    "Yes. The tool removes unnecessary characters and keeps only SEO-friendly text."
            }
        ]
    },
    {
        slug: "korean-name-generator",
        category: "generators",
        name: "Korean Name Generator",
        title: "Korean Name Generator - Create Korean-Style Names Instantly",
        description:
            "Generate Korean-style names by gender, style, and surname. Find modern, cute, neutral, and natural-sounding Korean name ideas instantly.",
        shortDescription: "Generate Korean-style names instantly.",
        keywords: [
            "korean name generator",
            "korean names",
            "korean name maker",
            "korean-style names",
            "korean surname generator",
            "random korean names"
        ],
        featured: true,
        published: true,
        new: true,
        relatedSlugs: [
            "korean-zodiac-calculator",
            "random-name-picker",
            "slug-generator",
            "uuid-generator"
        ],

        howItWorksTitle: "How this Korean name generator works",
        howItWorks: [
            "Choose a gender, naming style, and surname.",
            "The tool filters a curated list of Korean-style names and scores them for naturalness.",
            "It then shows strong name ideas based on popularity, sound, and style fit.",
        ],

        faqs: [
            {
                question: "Are these real Korean names?",
                answer:
                    "These are Korean-style name ideas built from common naming patterns and familiar romanized forms. Many are real names, while some are curated combinations for creative use.",
            },
            {
                question: "Can I choose a Korean surname?",
                answer:
                    "Yes. You can generate names with common surnames like Kim, Lee, Park, Choi, and Jung, or generate names without a surname.",
            },
            {
                question: "What can I use these names for?",
                answer:
                    "You can use them for character creation, gaming profiles, writing projects, usernames, branding inspiration, and general creative exploration.",
            },
        ],
    },
    {
        slug: "korean-zodiac-calculator",
        category: "generators",
        name: "Korean Zodiac Calculator",
        title: "Korean Zodiac Calculator - Find Your Zodiac Animal, Fortune, and Compatibility",
        description:
            "Find your Korean zodiac animal from your birth date and explore personality traits, yearly fortune, and compatibility in one simple tool.",
        shortDescription:
            "Check your Korean zodiac animal and compatibility instantly.",
        keywords: [
            "korean zodiac calculator",
            "korean zodiac animal",
            "korean zodiac sign",
            "zodiac compatibility",
            "korean zodiac personality",
            "what is my zodiac animal",
            "zodiac by birth year",
            "korean fortune",
            "east asian zodiac",
            "zodiac compatibility calculator"
        ],
        featured: true,
        published: true,
        new: true,
        relatedSlugs: [
            "korean-name-generator",
            "random-name-picker",
            "random-number-generator",
            "slug-generator"
        ],

        howItWorksTitle: "How this Korean zodiac calculator works",
        howItWorks: [
            "Enter your birth date to determine your birth year and match it to one of the twelve animals in the Korean zodiac cycle.",
            "The tool shows your zodiac animal along with personality traits, love tendencies, career themes, and a yearly fortune reading.",
            "You can also enter a second birth date to check compatibility between two zodiac signs.",
        ],

        extendedContentTitle: "About the Korean zodiac",
        extendedContent: [
            "The Korean zodiac is based on a repeating twelve-year cycle, where each year is represented by an animal. It is widely used to explore personality traits, compatibility, and fortune themes.",
            "Although similar to other East Asian zodiac systems, this tool presents the information in a Korean-focused format that is easy for global users to understand.",
            "People born in years that are twelve years apart share the same zodiac animal, making it easy to compare traits across different age groups.",
        ],

        useCasesTitle: "Common use cases",
        useCases: [
            "Find your Korean zodiac animal based on your birth date.",
            "Explore personality traits and yearly fortune.",
            "Check compatibility with friends or partners.",
            "Use for blog content, storytelling, or character creation.",
        ],

        quickExamplesTitle: "Quick examples",
        quickExamples: [
            "Born in 1996 → Rat",
            "Born in 1997 → Ox",
            "Born in 1998 → Tiger",
            "Born in 1999 → Rabbit",
            "Born in 2000 → Dragon",
            "Born in 2001 → Snake",
        ],

        faqs: [
            {
                question: "What is the Korean zodiac?",
                answer:
                    "The Korean zodiac is a twelve-year cycle in which each year is represented by an animal. It is used to explore personality traits, compatibility, and fortune patterns.",
            },
            {
                question: "How do I find my Korean zodiac animal?",
                answer:
                    "Enter your birth date, and the tool will use your birth year to match you with the correct animal in the zodiac cycle.",
            },
            {
                question: "Is this the same as the Chinese zodiac?",
                answer:
                    "The overall system is similar across East Asia, but this tool presents it in a Korean cultural context.",
            },
            {
                question: "Can I check compatibility between two zodiac signs?",
                answer:
                    "Yes. Enter two birth dates to see a compatibility score and interpretation.",
            },
            {
                question: "Does the fortune update every year?",
                answer:
                    "Yes. The fortune section automatically reflects the current year for up-to-date results.",
            },
            {
                question: "Is this tool free to use?",
                answer:
                    "Yes. Tool Nova provides this Korean zodiac calculator online for free with no sign-up required.",
            },
        ],
    },
];