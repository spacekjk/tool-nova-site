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
    }, 
];