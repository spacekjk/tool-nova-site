import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import VATCalculatorClient from "./VATCalculatorClient";

export const metadata = buildMetadata({
  title: "VAT Calculator",
  description:
    "Add or remove VAT from prices instantly with this free VAT calculator.",
  path: "/calculators/vat-calculator",
  keywords: ["vat calculator", "tax calculator", "add vat", "remove vat"],
});

const faqItems = [
  {
    question: "What does a VAT calculator do?",
    answer:
      "A VAT calculator adds VAT to a price or removes VAT from a VAT-inclusive price.",
  },
  {
    question: "Can I calculate VAT-exclusive and VAT-inclusive prices?",
    answer:
      "Yes. This tool supports both adding VAT and removing VAT from prices.",
  },
  {
    question: "Is this VAT calculator free?",
    answer:
      "Yes. Tool Nova provides this VAT calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <VATCalculatorClient />
      <RelatedTools
        tools={[
          { name: "Discount Calculator", href: "/calculators/discount-calculator" },
          { name: "Tip Calculator", href: "/calculators/tip-calculator" },
          { name: "Percentage Calculator", href: "/calculators/percentage-calculator" },
        ]}
      />
      <ToolSchema
        name="VAT Calculator"
        description="Add or remove VAT from prices instantly with this free VAT calculator."
        url="https://tool-nova.com/calculators/vat-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}