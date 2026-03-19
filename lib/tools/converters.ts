import type { ToolItem } from "./types";

export const CONVERTER_TOOLS: ToolItem[] = [
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
        new: true,
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