import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import AgeCalculatorClient from "./AgeCalculatorClient";
import RelatedTools from "@/components/RelatedTools";

export const metadata = buildMetadata({
  title: "Age Calculator - Calculate Exact Age Online",
  description:
    "Use this free age calculator to calculate your exact age in years, months, and days from your birth date.",
  path: "/calculators/age-calculator",
  keywords: [
    "age calculator",
    "exact age calculator",
    "calculate age online",
    "birth date calculator",
    "online age calculator",
  ],
});

const faqItems = [
  {
    question: "How do I calculate my exact age?",
    answer:
      "Enter your birth date and the calculator will compare it with today's date to show your current age in years, months, and days.",
  },
  {
    question: "Does this calculator include leap years?",
    answer:
      "Yes. The calculator uses real calendar dates, so leap years are naturally reflected in the total day count.",
  },
  {
    question: "Can I use this age calculator online for free?",
    answer:
      "Yes. Tool Nova provides this age calculator completely free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <AgeCalculatorClient />
      
      <RelatedTools
        tools={[
          { name: "BMI Calculator", href: "/calculators/bmi-calculator" },
          { name: "Time Calculator", href: "/calculators/time-calculator" },
          { name: "Days Between Dates", href: "/calculators/days-between-dates" },
        ]}
      />

      <ToolSchema
        name="Age Calculator"
        description="Use this free age calculator to calculate your exact age in years, months, and days from your birth date."
        url="https://tool-nova.com/calculators/age-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}