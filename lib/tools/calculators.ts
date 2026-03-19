import type { ToolItem } from "./types";

export const CALCULATOR_TOOLS: ToolItem[] = [
  {
    slug: "age-calculator",
    category: "calculators",
    name: "Age Calculator",
    title: "Age Calculator - Calculate Exact Age Online",
    description:
      "Use this free age calculator to calculate exact age in years, months, and days from a birth date to today.",
    shortDescription: "Calculate exact age from a birth date.",
    keywords: [
      "age calculator",
      "exact age calculator",
      "calculate age online",
      "birth date calculator",
      "online age calculator",
      "age in years months days",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "days-between-dates",
      "time-calculator",
      "percentage-calculator",
      "bmi-calculator",
    ],
    howItWorksTitle: "How this age calculator works",
    howItWorks: [
      "This calculator uses your birth date and compares it with today to calculate your exact age.",
      "It shows the result in years, months, and days instead of only showing a rough total day count.",
      "You can use it for personal records, forms, school use, and general age calculations.",
    ],
    extendedContentTitle: "What this age calculator helps you do",
    extendedContent: [
      "An age calculator helps you find the exact time passed since a birth date or another starting date.",
      "Instead of estimating age manually, this tool calculates the precise result using calendar dates.",
      "It is useful for forms, registrations, school requirements, insurance details, and personal records.",
      "Because the tool uses actual date values, it reflects normal calendar differences such as month lengths and leap years.",
      "This makes it a practical option when you need a fast and reliable age result online.",
    ],
    useCasesTitle: "Common uses for an age calculator",
    useCases: [
      "Checking your exact age in years, months, and days",
      "Filling out official forms and registrations",
      "Calculating a child's age for school or activities",
      "Tracking milestones or anniversaries",
      "Comparing two dates for personal recordkeeping",
    ],
    quickExamplesTitle: "Common age calculator examples",
    quickExamples: [
      "Birth date: January 1, 2000 → Result: Exact age as of today",
      "Birth date: June 15, 2010 → Result: Years, months, and days",
      "Birth date: December 31, 1995 → Result: Precise current age",
    ],
    faqs: [
      {
        question: "How do I calculate my exact age?",
        answer:
          "Enter your birth date, and the calculator will show your exact age in years, months, and days based on today.",
      },
      {
        question: "Does this age calculator use today's date automatically?",
        answer:
          "Yes. This age calculator compares your birth date with today automatically.",
      },
      {
        question: "Is this age calculator free to use?",
        answer:
          "Yes. Tool Nova provides this age calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "age calculator",
      secondaryKeywords: [
        "exact age calculator",
        "calculate age online",
        "birth date calculator",
      ],
    },
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
    extendedContentTitle: "Why a percentage calculator is useful",
    extendedContent: [
      "Percentages appear in shopping, finance, school, business reports, and daily comparisons.",
      "A percentage calculator saves time by handling the math instantly and reducing mistakes.",
      "It can help you calculate what percent one number is of another, percentage increase, and percentage decrease.",
      "This makes it useful for grades, discounts, interest estimates, and value comparisons.",
      "Instead of doing the formula manually, you can get fast and clear results online.",
    ],
    useCasesTitle: "Common uses for a percentage calculator",
    useCases: [
      "Finding what percentage one value is of another",
      "Calculating discounts and sale prices",
      "Measuring price increases or decreases",
      "Checking grade percentages",
      "Comparing growth rates in business or finance",
    ],
    quickExamplesTitle: "Common percentage calculator examples",
    quickExamples: [
      "20 is what percent of 100? → 20%",
      "What is 15% of 80? → 12",
      "Increase from 50 to 60 → 20% increase",
    ],
    faqs: [
      {
        question: "What can I calculate with this percentage calculator?",
        answer:
          "You can calculate basic percentages, percentage increase, percentage decrease, and related values.",
      },
      {
        question: "Can I use this tool for discounts and price changes?",
        answer:
          "Yes. This percentage calculator is useful for shopping discounts, markups, and price comparisons.",
      },
      {
        question: "Is this percentage calculator free to use?",
        answer:
          "Yes. Tool Nova provides this percentage calculator online for free.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "percentage calculator",
      secondaryKeywords: [
        "calculate percentage",
        "online percentage calculator",
        "percent tool",
      ],
    },
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
    new: true,
    relatedSlugs: ["age-calculator", "kg-to-lbs", "percentage-calculator"],
    howItWorksTitle: "How this BMI calculator works",
    howItWorks: [
      "This calculator uses your height and weight to estimate your body mass index, also called BMI.",
      "BMI is calculated by dividing body weight by height squared, using a standard health screening formula.",
      "It can help you quickly check whether your BMI falls into a common underweight, normal, overweight, or obesity range.",
    ],
    extendedContentTitle: "What BMI means",
    extendedContent: [
      "BMI stands for Body Mass Index and is a simple screening measurement based on height and weight.",
      "It is commonly used to place results into broad categories such as underweight, normal weight, overweight, and obesity.",
      "Although BMI is widely used, it is only a general screening tool and does not directly measure body fat or health status.",
      "This calculator gives a quick estimate that can be helpful for general awareness and fitness planning.",
      "For personalized health guidance, BMI should be considered together with other factors such as age, body composition, and medical advice.",
    ],
    useCasesTitle: "Common uses for a BMI calculator",
    useCases: [
      "Checking your BMI range quickly",
      "Tracking fitness or weight management progress",
      "Reviewing general health screening information",
      "Using height and weight data in one simple result",
      "Comparing current BMI with past measurements",
    ],
    quickExamplesTitle: "Common BMI calculator examples",
    quickExamples: [
      "Height: 170 cm, Weight: 65 kg → BMI result",
      "Height: 180 cm, Weight: 85 kg → BMI result",
      "Height: 160 cm, Weight: 50 kg → BMI result",
    ],
    faqs: [
      {
        question: "What is BMI?",
        answer:
          "BMI stands for body mass index. It is a simple measurement based on height and weight.",
      },
      {
        question: "Is BMI a medical diagnosis?",
        answer:
          "No. BMI is a screening tool, not a full medical diagnosis. It is useful for general guidance only.",
      },
      {
        question: "Can I use this BMI calculator for free?",
        answer:
          "Yes. Tool Nova provides this BMI calculator online for free.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "bmi calculator",
      secondaryKeywords: [
        "body mass index calculator",
        "health calculator",
        "calculate bmi",
      ],
    },
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
    relatedSlugs: [
      "days-between-dates",
      "age-calculator",
      "percentage-calculator",
    ],
    howItWorksTitle: "How this time calculator works",
    howItWorks: [
      "This calculator allows you to add or subtract time values such as hours and minutes quickly.",
      "It converts time inputs into a consistent format and performs calculations to give accurate results.",
      "You can use it for tracking work hours, calculating durations, scheduling, and everyday time management.",
    ],
    extendedContentTitle: "Why a time calculator is helpful",
    extendedContent: [
      "A time calculator makes it easier to add, subtract, and compare time values without manual errors.",
      "This is useful when working with hours and minutes for schedules, work shifts, study sessions, and appointments.",
      "Instead of converting everything by hand, the tool handles the time math instantly.",
      "It can simplify routine calculations for both personal and professional planning.",
      "This makes it a practical everyday utility tool for managing time more efficiently.",
    ],
    useCasesTitle: "Common uses for a time calculator",
    useCases: [
      "Adding work hours or shift times",
      "Subtracting one time value from another",
      "Managing study or meeting durations",
      "Checking schedules and time totals",
      "Converting time values for planning tasks",
    ],
    quickExamplesTitle: "Common time calculator examples",
    quickExamples: [
      "2 hours 30 minutes + 1 hour 45 minutes → 4 hours 15 minutes",
      "5 hours 00 minutes - 1 hour 20 minutes → 3 hours 40 minutes",
      "8:15 to 11:45 → 3 hours 30 minutes",
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
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "time calculator",
      secondaryKeywords: [
        "hours minutes calculator",
        "time difference",
        "calculate time online",
      ],
    },
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
    relatedSlugs: [
      "percentage-calculator",
      "discount-calculator",
      "vat-calculator",
    ],
    howItWorksTitle: "How this loan calculator works",
    howItWorks: [
      "This calculator estimates monthly loan payments based on the loan amount, interest rate, and repayment term.",
      "It uses a standard amortization formula to calculate how much you may pay each month over time.",
      "You can use it to compare borrowing options, estimate total repayment, and understand interest costs more clearly.",
    ],
    extendedContentTitle: "What a loan calculator can show",
    extendedContent: [
      "A loan calculator helps you estimate how much you may pay each month for a loan.",
      "It can also show the total repayment amount and the interest paid over time.",
      "This makes it easier to compare borrowing options before making a financial decision.",
      "Many people use loan calculators for personal loans, auto loans, and other fixed-payment borrowing.",
      "It is a practical way to understand the impact of loan amount, interest rate, and repayment term before applying.",
    ],
    useCasesTitle: "Common uses for a loan calculator",
    useCases: [
      "Estimating monthly loan payments",
      "Comparing loan terms and interest rates",
      "Reviewing total repayment cost",
      "Planning borrowing before applying",
      "Understanding long-term interest impact",
    ],
    quickExamplesTitle: "Common loan calculator examples",
    quickExamples: [
      "Loan: $10,000 at 5% for 3 years → Estimated monthly payment",
      "Loan: $25,000 at 7% for 5 years → Estimated monthly payment",
      "Loan: $5,000 at 10% for 2 years → Estimated total repayment",
    ],
    faqs: [
      {
        question: "What does this loan calculator show?",
        answer:
          "It shows an estimated monthly payment and can help you understand total repayment and interest over the loan term.",
      },
      {
        question: "Does this loan calculator work for personal loans?",
        answer:
          "Yes. It can be used for many general fixed-rate loan estimates, including personal loans and similar borrowing scenarios.",
      },
      {
        question: "Is this loan calculator free?",
        answer:
          "Yes. Tool Nova provides this loan calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "loan calculator",
      secondaryKeywords: [
        "monthly payment calculator",
        "interest calculator",
        "loan payment estimate",
      ],
    },
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
    extendedContentTitle: "Why calculate days between dates",
    extendedContent: [
      "A days between dates calculator helps you measure the exact number of days separating two calendar dates.",
      "This is useful for deadlines, events, travel plans, subscriptions, school schedules, and project planning.",
      "Instead of counting manually, the tool calculates the date gap instantly and more accurately.",
      "Because it uses real date values, it can reflect calendar differences such as leap years automatically.",
      "This makes it useful for both personal and professional planning tasks.",
    ],
    useCasesTitle: "Common uses for a days between dates calculator",
    useCases: [
      "Counting days until a deadline",
      "Measuring time between two events",
      "Planning trips and schedules",
      "Tracking project timelines",
      "Checking date differences for forms or records",
    ],
    quickExamplesTitle: "Common days between dates examples",
    quickExamples: [
      "January 1 to January 31 → 30 days",
      "March 10 to April 10 → 31 days",
      "Two selected dates → Exact day count",
    ],
    faqs: [
      {
        question: "How do I calculate the number of days between two dates?",
        answer:
          "Select a start date and an end date. The calculator will show the total number of days between them.",
      },
      {
        question: "Does this tool include leap years?",
        answer:
          "Yes. Because it uses actual calendar dates, leap years are automatically reflected in the result.",
      },
      {
        question: "Is this days between dates calculator free?",
        answer:
          "Yes. Tool Nova provides this date calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "days between dates",
      secondaryKeywords: [
        "date difference calculator",
        "days calculator",
        "calculate days between dates",
      ],
    },
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
    extendedContentTitle: "Why use a discount calculator",
    extendedContent: [
      "A discount calculator helps you quickly find the final sale price after applying a discount percentage.",
      "It can also show how much money you save compared with the original price.",
      "This is useful when shopping online, comparing sales, or checking whether a deal is worth it.",
      "Instead of estimating mentally, the tool gives a fast and accurate result.",
      "It is a simple way to evaluate promotions, price cuts, and markdowns.",
    ],
    useCasesTitle: "Common uses for a discount calculator",
    useCases: [
      "Checking final sale prices",
      "Comparing store promotions",
      "Calculating savings before buying",
      "Reviewing markdown percentages",
      "Budgeting for discounted purchases",
    ],
    quickExamplesTitle: "Common discount calculator examples",
    quickExamples: [
      "$100 with 20% off → $80 final price",
      "$75 with 10% off → $67.50 final price",
      "$200 with 30% off → $140 final price",
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
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "discount calculator",
      secondaryKeywords: [
        "sale price calculator",
        "discount percent",
        "calculate discount",
      ],
    },
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
    extendedContentTitle: "Why a tip calculator is helpful",
    extendedContent: [
      "A tip calculator helps you quickly work out gratuity based on the bill total and selected tip percentage.",
      "It is especially useful when dining out, traveling, or splitting costs with other people.",
      "Instead of calculating the tip manually, the tool gives the result instantly.",
      "It can also help show the final total after tip and the cost per person for shared bills.",
      "This makes it useful for restaurants, rides, services, and group payments.",
    ],
    useCasesTitle: "Common uses for a tip calculator",
    useCases: [
      "Calculating restaurant tips",
      "Splitting bills with friends or coworkers",
      "Comparing different tip percentages",
      "Checking total payment including tip",
      "Estimating cost per person in a group",
    ],
    quickExamplesTitle: "Common tip calculator examples",
    quickExamples: [
      "$50 bill with 15% tip → $7.50 tip",
      "$80 bill with 20% tip → $16 tip",
      "$120 total split by 4 people → $30 each",
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
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "tip calculator",
      secondaryKeywords: [
        "gratuity calculator",
        "bill split calculator",
        "calculate tip online",
      ],
    },
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
    extendedContentTitle: "What a VAT calculator is used for",
    extendedContent: [
      "A VAT calculator helps you add tax to a price or remove tax from a tax-inclusive amount.",
      "This is useful for invoices, pricing, accounting, and business planning.",
      "Instead of working out the tax portion manually, you can get a quick and accurate result online.",
      "It is especially helpful when reviewing gross and net amounts under a value added tax system.",
      "This makes the tool useful for both businesses and individual buyers who need tax clarity.",
    ],
    useCasesTitle: "Common uses for a VAT calculator",
    useCases: [
      "Adding VAT to a net price",
      "Removing VAT from a gross price",
      "Preparing invoices or receipts",
      "Checking tax-inclusive prices",
      "Reviewing business pricing and tax amounts",
    ],
    quickExamplesTitle: "Common VAT calculator examples",
    quickExamples: [
      "Net price $100 with 20% VAT → Gross $120",
      "Gross price $120 with 20% VAT → Net $100",
      "Tax amount for a selected rate → Instant result",
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
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "vat calculator",
      secondaryKeywords: [
        "tax calculator",
        "value added tax calculator",
        "add or remove vat",
      ],
    },
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
    extendedContentTitle: "Why compound interest matters",
    extendedContent: [
      "Compound interest means interest is earned not only on the original amount but also on the interest added over time.",
      "Because of this, savings and investments can grow faster over longer periods.",
      "A compound interest calculator helps you estimate how much your balance may grow based on rate, time, and compounding frequency.",
      "It is useful for planning savings goals, long-term investing, and understanding financial growth.",
      "This makes it easier to compare options and see the long-term effect of consistent compounding.",
    ],
    useCasesTitle: "Common uses for a compound interest calculator",
    useCases: [
      "Estimating investment growth",
      "Projecting savings over time",
      "Comparing interest rates",
      "Reviewing long-term financial plans",
      "Understanding the power of compounding",
    ],
    quickExamplesTitle: "Common compound interest examples",
    quickExamples: [
      "$1,000 at 5% for 10 years → Estimated final balance",
      "$5,000 at 7% compounded monthly → Estimated growth",
      "$10,000 over 20 years → Estimated total interest earned",
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
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "compound interest calculator",
      secondaryKeywords: [
        "investment calculator",
        "savings calculator",
        "compound growth calculator",
      ],
    },
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
    extendedContentTitle: "Why use a mortgage calculator",
    extendedContent: [
      "A mortgage calculator helps you estimate how much a home loan may cost each month.",
      "It can also show the total amount repaid and the total interest paid over the life of the loan.",
      "This is useful when comparing different home prices, loan terms, and interest rates.",
      "It gives buyers a clearer picture of affordability before speaking with a lender.",
      "Although it is an estimate, it is a useful first step in home financing research.",
    ],
    useCasesTitle: "Common uses for a mortgage calculator",
    useCases: [
      "Estimating monthly home loan payments",
      "Comparing mortgage options",
      "Checking affordability before buying",
      "Reviewing total repayment and interest",
      "Planning long-term housing costs",
    ],
    quickExamplesTitle: "Common mortgage calculator examples",
    quickExamples: [
      "$250,000 mortgage at 6% for 30 years → Estimated monthly payment",
      "$180,000 mortgage at 5% for 15 years → Estimated monthly payment",
      "Different rates and terms → Compare repayment costs",
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
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "mortgage calculator",
      secondaryKeywords: [
        "home loan calculator",
        "mortgage payment calculator",
        "monthly mortgage payment calculator",
      ],
    },
  },
  {
    slug: "business-days-calculator",
    category: "calculators",
    name: "Business Days Calculator",
    title: "Business Days Calculator",
    description:
      "Calculate business days between two dates instantly with this free online calculator that excludes weekends.",
    shortDescription: "Calculate weekdays between two dates.",
    keywords: [
      "business days calculator",
      "working days calculator",
      "weekdays between dates",
      "exclude weekends calculator",
      "work days between dates",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "days-between-dates",
      "time-calculator",
      "age-calculator",
      "percentage-calculator",
    ],
    howItWorksTitle: "How this business days calculator works",
    howItWorks: [
      "This calculator counts the number of weekdays between a start date and an end date.",
      "It excludes Saturdays and Sundays automatically so you can estimate business or working days more accurately.",
      "You can use it for project planning, delivery estimates, work schedules, deadlines, and date calculations.",
    ],
    extendedContentTitle: "Why calculate business days",
    extendedContent: [
      "A business days calculator helps you count weekdays between two dates while excluding weekends.",
      "This is useful for delivery estimates, work schedules, deadlines, contracts, and project planning.",
      "Instead of counting manually on a calendar, the tool returns the weekday total quickly.",
      "It is especially helpful when timelines depend on working days rather than total calendar days.",
      "This makes it useful for both business and personal scheduling tasks.",
    ],
    useCasesTitle: "Common uses for a business days calculator",
    useCases: [
      "Estimating delivery time",
      "Tracking project deadlines",
      "Counting workdays between dates",
      "Planning office schedules",
      "Calculating weekday-only timelines",
    ],
    quickExamplesTitle: "Common business days examples",
    quickExamples: [
      "Monday to Friday → 5 business days",
      "Friday to next Tuesday → 3 business days",
      "Selected start and end dates → Weekday count excluding weekends",
    ],
    faqs: [
      {
        question: "What are business days?",
        answer:
          "Business days usually mean weekdays from Monday to Friday and exclude weekends such as Saturday and Sunday.",
      },
      {
        question: "Does this business days calculator exclude weekends?",
        answer:
          "Yes. This calculator excludes Saturdays and Sundays automatically when counting the days.",
      },
      {
        question: "Can I use this business days calculator for free?",
        answer:
          "Yes. Tool Nova provides this business days calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "business days calculator",
      secondaryKeywords: [
        "working days calculator",
        "weekdays between dates",
        "work days between dates",
      ],
    },
  },
  {
    slug: "salary-calculator",
    category: "calculators",
    name: "Salary Calculator",
    title: "Salary Calculator",
    description:
      "Calculate salary conversions instantly with this free online salary calculator for yearly, monthly, weekly, daily, and hourly pay.",
    shortDescription: "Convert salary across pay periods.",
    keywords: [
      "salary calculator",
      "salary converter",
      "annual to monthly salary",
      "hourly to salary",
      "weekly pay calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "percentage-calculator",
      "loan-calculator",
      "time-calculator",
      "business-days-calculator",
    ],
    howItWorksTitle: "How this salary calculator works",
    howItWorks: [
      "This calculator converts a salary amount into different pay periods such as yearly, monthly, weekly, daily, and hourly pay.",
      "It uses your selected pay period and standard assumptions for work weeks, work days, and work hours to estimate equivalent earnings.",
      "You can use it to compare job offers, estimate hourly pay, and understand your income across different time frames.",
    ],
    extendedContentTitle: "Why use a salary calculator",
    extendedContent: [
      "A salary calculator helps you convert income between hourly, daily, weekly, monthly, and yearly pay periods.",
      "This is useful when comparing job offers or trying to understand how one pay format translates into another.",
      "Instead of estimating manually, the tool provides quick conversion results based on standard work assumptions.",
      "It can help employees, freelancers, and job seekers make clearer income comparisons.",
      "This makes the tool useful for budgeting, negotiations, and employment planning.",
    ],
    useCasesTitle: "Common uses for a salary calculator",
    useCases: [
      "Converting hourly pay to annual salary",
      "Comparing job offers",
      "Estimating monthly income from yearly pay",
      "Reviewing weekly or daily earnings",
      "Planning budgets from different pay schedules",
    ],
    quickExamplesTitle: "Common salary calculator examples",
    quickExamples: [
      "$25 per hour → Estimated annual salary",
      "$60,000 per year → Estimated monthly pay",
      "$1,000 per week → Estimated yearly income",
    ],
    faqs: [
      {
        question: "What does this salary calculator show?",
        answer:
          "It shows equivalent salary values across yearly, monthly, weekly, daily, and hourly pay periods.",
      },
      {
        question: "Can I convert hourly pay into annual salary?",
        answer:
          "Yes. This calculator can estimate annual salary from hourly pay using standard work assumptions.",
      },
      {
        question: "Is this salary calculator free to use?",
        answer:
          "Yes. Tool Nova provides this salary calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "salary calculator",
      secondaryKeywords: [
        "salary converter",
        "hourly to salary",
        "annual to monthly salary",
      ],
    },
  },
  {
    slug: "calorie-calculator",
    category: "calculators",
    name: "Calorie Calculator",
    title: "Calorie Calculator",
    description:
      "Calculate your daily calorie needs based on age, gender, weight, height, and activity level.",
    shortDescription: "Estimate daily calorie needs easily.",
    keywords: [
      "calorie calculator",
      "daily calorie calculator",
      "how many calories do I need",
      "tdee calculator",
      "calories per day calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "bmi-calculator",
      "age-calculator",
      "percentage-calculator",
      "salary-calculator",
    ],
    howItWorksTitle: "How this calorie calculator works",
    howItWorks: [
      "This calculator estimates your daily calorie needs using your age, gender, height, and weight.",
      "It calculates your Basal Metabolic Rate (BMR) and adjusts it based on your activity level.",
      "You can use it to plan weight loss, maintenance, or muscle gain goals.",
    ],
    extendedContentTitle: "What a calorie calculator helps estimate",
    extendedContent: [
      "A calorie calculator estimates how many calories your body may need each day based on personal details and activity level.",
      "It usually starts with BMR, which is the number of calories needed for basic body functions at rest.",
      "It then adjusts that estimate to reflect daily movement and exercise.",
      "This can help with planning weight maintenance, calorie deficits, or calorie surpluses.",
      "Although it is an estimate, it is a useful starting point for nutrition and fitness planning.",
    ],
    useCasesTitle: "Common uses for a calorie calculator",
    useCases: [
      "Estimating daily calorie needs",
      "Planning weight loss or maintenance",
      "Adjusting food intake for activity level",
      "Reviewing BMR and energy use",
      "Supporting general nutrition planning",
    ],
    quickExamplesTitle: "Common calorie calculator examples",
    quickExamples: [
      "Input age, height, weight, and activity → Estimated daily calories",
      "Lower activity level → Lower daily calorie estimate",
      "Higher activity level → Higher daily calorie estimate",
    ],
    faqs: [
      {
        question: "How many calories do I need per day?",
        answer:
          "Your daily calorie needs depend on your age, gender, weight, height, and activity level. This calculator estimates it for you.",
      },
      {
        question: "What is BMR?",
        answer:
          "BMR (Basal Metabolic Rate) is the number of calories your body needs at rest to maintain basic functions.",
      },
      {
        question: "Is this calorie calculator free?",
        answer:
          "Yes. Tool Nova provides this calorie calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "calorie calculator",
      secondaryKeywords: [
        "daily calorie calculator",
        "tdee calculator",
        "how many calories do i need",
      ],
    },
  },
  {
    slug: "percentage-increase-calculator",
    category: "calculators",
    name: "Percentage Increase Calculator",
    title: "Percentage Increase Calculator",
    description:
      "Calculate percentage increase or decrease instantly with this free online calculator.",
    shortDescription: "Calculate percentage change quickly.",
    keywords: [
      "percentage increase calculator",
      "percentage decrease calculator",
      "percent change calculator",
      "calculate percentage increase",
      "percentage difference calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "percentage-calculator",
      "discount-calculator",
      "salary-calculator",
      "loan-calculator",
    ],
    howItWorksTitle: "How this percentage increase calculator works",
    howItWorks: [
      "This calculator compares an original value and a new value to find the percentage change between them.",
      "It can show both percentage increase and percentage decrease depending on whether the new value is higher or lower.",
      "You can use it for prices, salary changes, growth rates, discounts, business reports, and everyday math.",
    ],
    extendedContentTitle: "Why calculate percentage change",
    extendedContent: [
      "A percentage increase calculator helps you measure how much a value has risen or fallen compared with its original amount.",
      "This is useful for prices, salaries, revenue, grades, population changes, and many other comparisons.",
      "It turns a raw difference into a percentage, which makes changes easier to understand.",
      "The same concept also works for decreases when the new value is lower than the original value.",
      "This makes the tool useful for both business and personal calculations.",
    ],
    useCasesTitle: "Common uses for a percentage increase calculator",
    useCases: [
      "Checking price changes",
      "Measuring salary increases",
      "Calculating revenue growth",
      "Finding percentage decrease",
      "Comparing old and new values clearly",
    ],
    quickExamplesTitle: "Common percentage change examples",
    quickExamples: [
      "From 100 to 120 → 20% increase",
      "From 80 to 60 → 25% decrease",
      "From 50 to 75 → 50% increase",
    ],
    faqs: [
      {
        question: "How do I calculate percentage increase?",
        answer:
          "Subtract the original value from the new value, divide by the original value, and multiply by 100.",
      },
      {
        question: "Can this tool calculate percentage decrease too?",
        answer:
          "Yes. If the new value is lower than the original value, the calculator will show the percentage decrease.",
      },
      {
        question: "Is this percentage increase calculator free to use?",
        answer:
          "Yes. Tool Nova provides this percentage increase calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "percentage increase calculator",
      secondaryKeywords: [
        "percentage decrease calculator",
        "percent change calculator",
        "calculate percentage increase",
      ],
    },
  },
  {
    slug: "time-duration-calculator",
    category: "calculators",
    name: "Time Duration Calculator",
    title: "Time Duration Calculator",
    description:
      "Calculate the exact time duration between two times instantly with this free online calculator.",
    shortDescription: "Calculate duration between two times.",
    keywords: [
      "time duration calculator",
      "time difference calculator",
      "hours between times",
      "minutes between times",
      "duration calculator",
    ],
    featured: true,
    published: true,
    relatedSlugs: [
      "time-calculator",
      "days-between-dates",
      "business-days-calculator",
      "age-calculator",
    ],
    howItWorksTitle: "How this time duration calculator works",
    howItWorks: [
      "This calculator finds the exact duration between a start time and an end time.",
      "It converts both time values into minutes, compares them, and returns the result in hours and minutes.",
      "You can use it for shift planning, scheduling, work logs, and everyday time calculations.",
    ],
    extendedContentTitle: "Why use a time duration calculator",
    extendedContent: [
      "A time duration calculator helps you find the exact gap between two times quickly and clearly.",
      "This is useful for work shifts, study sessions, appointments, travel times, and event planning.",
      "Instead of calculating hours and minutes manually, the tool returns the duration instantly.",
      "It can also be useful when time spans cross midnight, which can be confusing to calculate by hand.",
      "This makes it a practical tool for both personal scheduling and professional time tracking.",
    ],
    useCasesTitle: "Common uses for a time duration calculator",
    useCases: [
      "Calculating shift length",
      "Checking time between appointments",
      "Tracking study or meeting sessions",
      "Measuring travel or event duration",
      "Handling time ranges across midnight",
    ],
    quickExamplesTitle: "Common time duration examples",
    quickExamples: [
      "9:00 AM to 5:00 PM → 8 hours",
      "10:30 to 12:15 → 1 hour 45 minutes",
      "11:00 PM to 2:00 AM → 3 hours",
    ],
    faqs: [
      {
        question: "How do I calculate the duration between two times?",
        answer:
          "Enter a start time and an end time, and the calculator will show the exact difference in hours and minutes.",
      },
      {
        question: "Can this calculator handle times across midnight?",
        answer:
          "Yes. If the end time is earlier than the start time, the calculator treats it as crossing midnight into the next day.",
      },
      {
        question: "Is this time duration calculator free to use?",
        answer:
          "Yes. Tool Nova provides this time duration calculator online for free with no sign-up required.",
      },
    ],
    seoNotes: {
      intent: "informational + utility",
      primaryKeyword: "time duration calculator",
      secondaryKeywords: [
        "time difference calculator",
        "hours between times",
        "duration calculator",
      ],
    },
  },
];
