import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import NumberToWordsClient from "./NumberToWordsClient";

export const metadata = buildMetadata({
  title: "Number to Words Converter",
  description: "Convert numbers into words instantly using this free online tool.",
  path: "/converters/number-to-words",
  keywords: ["number to words converter"],
});

const faqItems = [
  {
    question: "What does a number to words converter do?",
    answer:
      "A number to words converter changes numeric values into written words for easier reading and document use.",
  },
  {
    question: "Can I use this tool for checks or formal writing?",
    answer:
      "Yes. This tool is useful for writing numbers as words in checks, forms, and documents.",
  },
  {
    question: "Is this number to words converter free?",
    answer:
      "Yes. Tool Nova provides this converter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <NumberToWordsClient />
      <ToolSchema
        name="Number to Words Converter"
        description="Convert numbers into words instantly using this free online tool."
        url="https://tool-nova.com/converters/number-to-words"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}