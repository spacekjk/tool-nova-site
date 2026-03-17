import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import BMICalculatorClient from "./BMICalculatorClient";
import RelatedTools from "@/components/RelatedTools";

export const metadata = buildMetadata({
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI) using height and weight with this free BMI calculator.",
  path: "/calculators/bmi-calculator",
  keywords: ["bmi calculator", "body mass index calculator", "bmi tool"],
});

const faqItems = [
  {
    question: "How do I calculate my BMI?",
    answer:
      "Enter your height and weight into the calculator and it will instantly calculate your Body Mass Index.",
  },
  {
    question: "What does BMI mean?",
    answer:
      "BMI stands for Body Mass Index and is a simple measurement based on height and weight.",
  },
  {
    question: "Is this BMI calculator free?",
    answer:
      "Yes. Tool Nova provides this BMI calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <BMICalculatorClient />

      <RelatedTools
        tools={[
          { name: "Age Calculator", href: "/calculators/age-calculator" },
          { name: "Kg to Lbs Converter", href: "/converters/kg-to-lbs" },
          { name: "Percentage Calculator", href: "/calculators/percentage-calculator" },
        ]}
      />

      <ToolSchema
        name="BMI Calculator"
        description="Calculate your Body Mass Index (BMI) using height and weight with this free BMI calculator."
        url="https://tool-nova.com/calculators/bmi-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}