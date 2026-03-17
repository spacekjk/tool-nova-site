import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import TipCalculatorClient from "./TipCalculatorClient";

export const metadata = buildMetadata({
  title: "Tip Calculator",
  description:
    "Calculate tips, total bill amounts, and split payments easily with this free tip calculator.",
  path: "/calculators/tip-calculator",
  keywords: ["tip calculator", "gratuity calculator", "bill split calculator"],
});

const faqItems = [
  {
    question: "How do I calculate a tip?",
    answer:
      "Enter the bill amount and tip percentage, and the tool will calculate the tip and total bill instantly.",
  },
  {
    question: "Can I split the bill with this calculator?",
    answer:
      "Yes. Enter the number of people to see how much each person should pay.",
  },
  {
    question: "Is this tip calculator free?",
    answer:
      "Yes. Tool Nova provides this tip calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <TipCalculatorClient />
      <RelatedTools
        tools={[
          { name: "Discount Calculator", href: "/calculators/discount-calculator" },
          { name: "VAT Calculator", href: "/calculators/vat-calculator" },
          { name: "Loan Calculator", href: "/calculators/loan-calculator" },
        ]}
      />
      <ToolSchema
        name="Tip Calculator"
        description="Calculate tips, total bill amounts, and split payments easily with this free tip calculator."
        url="https://tool-nova.com/calculators/tip-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}