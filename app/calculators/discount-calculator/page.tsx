import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import DiscountCalculatorClient from "./DiscountCalculatorClient";

export const metadata = buildMetadata({
  title: "Discount Calculator",
  description:
    "Calculate discounts, sale prices, and savings instantly with this free discount calculator.",
  path: "/calculators/discount-calculator",
  keywords: ["discount calculator", "sale calculator", "percentage discount"],
});

const faqItems = [
  {
    question: "How do I calculate a discount?",
    answer:
      "Enter the original price and discount percentage, and the calculator will show the discount amount and final price.",
  },
  {
    question: "Can I calculate sale price with this tool?",
    answer:
      "Yes. The discount calculator instantly shows the sale price after applying the discount percentage.",
  },
  {
    question: "Is this discount calculator free?",
    answer:
      "Yes. Tool Nova provides this discount calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <DiscountCalculatorClient />
      <RelatedTools
        tools={[
          { name: "Percentage Calculator", href: "/calculators/percentage-calculator" },
          { name: "VAT Calculator", href: "/calculators/vat-calculator" },
          { name: "Tip Calculator", href: "/calculators/tip-calculator" },
        ]}
      />
      <ToolSchema
        name="Discount Calculator"
        description="Calculate discounts, sale prices, and savings instantly with this free discount calculator."
        url="https://tool-nova.com/calculators/discount-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}