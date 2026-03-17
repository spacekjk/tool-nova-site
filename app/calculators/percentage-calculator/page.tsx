import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata = buildMetadata({
  title: "Percentage Calculator",
  description:
    "Calculate percentages easily with this free online percentage calculator.",
  path: "/calculators/percentage-calculator",
  keywords: [
    "percentage calculator",
    "calculate percentage",
    "percent tool",
    "online percentage calculator",
  ],
});

const faqItems = [
  {
    question: "How do I calculate a percentage?",
    answer:
      "Enter the required numbers into the calculator and it will instantly show the percentage result.",
  },
  {
    question: "Can I calculate percentage increase or decrease?",
    answer:
      "Yes. Percentage calculators can be used for basic percentage values as well as increases and decreases.",
  },
  {
    question: "Is this percentage calculator free to use?",
    answer:
      "Yes. Tool Nova provides this percentage calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <PercentageCalculatorClient />
      <ToolSchema
        name="Percentage Calculator"
        description="Calculate percentages easily with this free online percentage calculator."
        url="https://tool-nova.com/calculators/percentage-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}