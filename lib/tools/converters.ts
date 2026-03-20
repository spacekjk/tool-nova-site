import type { ToolItem } from "./types";

export const CONVERTER_TOOLS: ToolItem[] = [
    {
      slug: "kg-to-lbs",
      category: "converters",
      name: "Kg to Lbs",
      title: "Kg to Lbs Converter (Kilograms to Pounds)",
      description:
        "Use this free kg to lbs converter to instantly convert kilograms to pounds with high accuracy. Includes formula, examples, and quick reference values.",
      shortDescription:
        "Convert kilograms (kg) to pounds (lbs) instantly with a free online calculator.",
      keywords: [
        "kg to lbs",
        "kilogram to pounds",
        "kg to pounds converter",
        "convert kg to lbs",
        "how many pounds in a kilogram",
        "kg lbs conversion",
        "kilograms to pounds formula",
        "weight converter kg to lbs",
        "1 kg to lbs",
        "kg to lbs calculator"
      ],
      featured: true,
      published: true,
      new: true,
      relatedSlugs: ["bmi-calculator", "lbs-to-kg", "age-calculator", "number-to-words"],
    
      howItWorksTitle: "How this kg to lbs converter works",
      howItWorks: [
        "This converter uses the standard international conversion factor between kilograms and pounds.",
        "The formula used is: pounds = kilograms × 2.20462.",
        "When you enter a value in kilograms, it is instantly multiplied by 2.20462 to produce the equivalent weight in pounds.",
        "The result is automatically rounded based on the selected decimal precision for better readability.",
        "This tool works in real-time, so results update instantly as you type.",
        "It can also be used in reverse (lbs to kg) by switching the conversion direction.",
      ],
    
      extendedContentTitle: "Kilograms to pounds conversion explained",
      extendedContent: [
        "Kilograms (kg) and pounds (lbs) are two of the most commonly used units for measuring weight around the world.",
        "Kilograms are part of the metric system and are widely used in most countries, while pounds are primarily used in the United States and a few other regions.",
        "Converting between these units is essential in many situations such as fitness tracking, shipping, cooking, and medical measurements.",
        "The conversion factor is fixed: 1 kilogram equals approximately 2.20462 pounds.",
        "For example, if you weigh 70 kg, multiplying by 2.20462 gives approximately 154.32 lbs.",
        "This converter automates that calculation to save time and eliminate errors.",
      ],
    
      useCasesTitle: "When to use a kg to lbs converter",
      useCases: [
        "Tracking body weight for fitness or dieting",
        "Converting gym or workout data between metric and imperial units",
        "Understanding international product weights when shopping online",
        "Shipping and logistics calculations where weight units differ",
        "Medical or health-related measurements in different unit systems",
      ],
    
      quickExamplesTitle: "Common kg to lbs conversions",
      quickExamples: [
        "1 kg = 2.20 lbs",
        "5 kg = 11.02 lbs",
        "10 kg = 22.05 lbs",
        "50 kg = 110.23 lbs",
        "70 kg = 154.32 lbs",
        "100 kg = 220.46 lbs",
      ],
    
      faqs: [
        {
          question: "How many pounds are in 1 kilogram?",
          answer:
            "One kilogram is equal to approximately 2.20462 pounds. This is the standard conversion used worldwide.",
        },
        {
          question: "What is the formula to convert kg to lbs?",
          answer:
            "To convert kilograms to pounds, multiply the weight in kilograms by 2.20462. For example, 10 kg × 2.20462 = 22.0462 lbs.",
        },
        {
          question: "Is kg to lbs conversion exact?",
          answer:
            "The conversion factor 2.20462 is highly precise and widely accepted. Most tools round the result to 2–4 decimal places for practical use.",
        },
        {
          question: "Can I convert pounds back to kilograms?",
          answer:
            "Yes. To convert pounds to kilograms, divide the value in pounds by 2.20462.",
        },
        {
          question: "Why do different countries use kg and lbs?",
          answer:
            "Kilograms are part of the metric system used globally, while pounds belong to the imperial system, which is mainly used in the United States.",
        },
        {
          question: "Is this kg to lbs converter free?",
          answer:
            "Yes. This tool is completely free to use with no registration required.",
        },
      ],
    
      seoNotes: {
        intent: "informational + utility",
        primaryKeyword: "kg to lbs",
        secondaryKeywords: [
          "kilograms to pounds",
          "kg to lbs converter",
          "convert kg to pounds",
        ],
      },
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
      slug: "length-converter",
      category: "converters",
      name: "Length Converter",
      title: "Length Converter (cm, m, inches, feet)",
      description:
        "Convert between centimeters, meters, inches, and feet instantly with this free online length converter. Fast, accurate, and easy to use.",
      shortDescription:
        "Convert cm, m, inches, and feet instantly.",
      keywords: [
        "length converter",
        "cm to inches",
        "inches to cm",
        "meters to feet",
        "feet to cm",
        "convert length units",
        "cm to ft",
        "ft to m",
        "unit converter length",
        "online length converter",
        "height converter cm to feet"
      ],
      featured: true,
      published: true,
      new: true,
      relatedSlugs: [
        "kg-to-lbs",
        "bmi-calculator",
        "percentage-calculator"
      ],
    
      howItWorksTitle: "How this length converter works",
      howItWorks: [
        "This tool converts all values through a base unit (centimeters) to ensure accurate results.",
        "When you enter a value in any field, it is automatically converted into centimeters first.",
        "The tool then calculates equivalent values in meters, inches, and feet instantly.",
        "All calculations happen in real time inside your browser with no delays.",
        "The conversion uses standard international conversion factors for accuracy.",
      ],
    
      extendedContentTitle: "Understanding length unit conversions",
      extendedContent: [
        "Length units are used to measure distance, height, and size across different systems of measurement.",
        "The metric system uses units such as millimeters, centimeters, and meters, which are widely used around the world.",
        "The imperial system uses units such as inches and feet, commonly used in the United States and some other regions.",
        "Converting between these systems is often necessary when working with measurements from different sources.",
        "For example, height is often measured in centimeters globally, but in feet and inches in the US.",
        "This length converter simplifies the process by instantly converting values between multiple units without manual calculation.",
      ],
    
      useCasesTitle: "Common use cases for a length converter",
      useCases: [
        "Converting height from centimeters to feet and inches",
        "Switching between metric and imperial units for international projects",
        "Measuring objects or distances in different unit systems",
        "Preparing data for engineering, construction, or design tasks",
        "Converting measurements for travel, shopping, or product sizing",
        "Working with global datasets that use mixed measurement systems",
      ],
    
      quickExamplesTitle: "Length conversion examples",
      quickExamples: [
        "100 cm = 1 m",
        "100 cm ≈ 39.37 inches",
        "1 meter ≈ 3.2808 feet",
        "5 feet ≈ 152.4 cm",
        "10 inches ≈ 25.4 cm",
      ],
    
      faqs: [
        {
          question: "How do I convert cm to inches?",
          answer:
            "To convert centimeters to inches, divide the value by 2.54. This tool performs that conversion instantly for you.",
        },
        {
          question: "How many centimeters are in 1 inch?",
          answer:
            "1 inch is equal to exactly 2.54 centimeters.",
        },
        {
          question: "Can I convert feet to meters with this tool?",
          answer:
            "Yes. This length converter supports feet to meters, centimeters, and inches automatically.",
        },
        {
          question: "Is this length converter accurate?",
          answer:
            "Yes. It uses standard international conversion factors to ensure precise and reliable results.",
        },
        {
          question: "Is this tool free to use?",
          answer:
            "Yes. Tool Nova provides this length converter online for free with no sign-up required.",
        },
      ],
    
      seoNotes: {
        intent: "informational + utility",
        primaryKeyword: "length converter",
        secondaryKeywords: [
          "cm to inches",
          "inches to cm",
          "meters to feet",
          "convert length units"
        ],
      },
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
