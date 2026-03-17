import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import TimeCalculatorClient from "./TimeCalculatorClient";
import RelatedTools from "@/components/RelatedTools";

export const metadata = buildMetadata({
  title: "Time Calculator",
  description: "Add or subtract time easily with this free online time calculator.",
  path: "/calculators/time-calculator",
  keywords: ["time calculator", "time addition calculator", "time difference"],
});

const faqItems = [
  {
    question: "What can I do with a time calculator?",
    answer:
      "A time calculator helps you add, subtract, and compare hours, minutes, and seconds quickly.",
  },
  {
    question: "Can I use this tool to calculate time differences?",
    answer:
      "Yes. You can use it to find the difference between time values or add time amounts together.",
  },
  {
    question: "Is this time calculator free to use?",
    answer:
      "Yes. Tool Nova provides this time calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <TimeCalculatorClient />

      <RelatedTools
        tools={[
          { name: "Days Between Dates", href: "/calculators/days-between-dates" },
          { name: "Age Calculator", href: "/calculators/age-calculator" },
          { name: "Loan Calculator", href: "/calculators/loan-calculator" },
        ]}
      />

      <ToolSchema
        name="Time Calculator"
        description="Add or subtract time easily with this free online time calculator."
        url="https://tool-nova.com/calculators/time-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}