import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import KgToLbsClient from "./KgToLbsClient";

export const metadata = buildMetadata({
  title: "Kg to Lbs Converter",
  description: "Convert kilograms to pounds quickly with this free online converter.",
  path: "/converters/kg-to-lbs",
  keywords: ["kg to lbs", "kilogram to pounds converter"],
});

const faqItems = [
  {
    question: "How do I convert kilograms to pounds?",
    answer:
      "Enter a value in kilograms and the converter will instantly show the equivalent weight in pounds.",
  },
  {
    question: "Is this kg to lbs converter accurate?",
    answer:
      "Yes. The tool uses the standard kilogram to pound conversion formula.",
  },
  {
    question: "Is this weight converter free?",
    answer:
      "Yes. Tool Nova provides this kg to lbs converter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <KgToLbsClient />
      <ToolSchema
        name="Kg to Lbs Converter"
        description="Convert kilograms to pounds quickly with this free online converter."
        url="https://tool-nova.com/converters/kg-to-lbs"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}