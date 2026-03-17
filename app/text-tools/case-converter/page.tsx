import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import CaseConverterClient from "./CaseConverterClient";

export const metadata = buildMetadata({
  title: "Case Converter",
  description:
    "Convert text to uppercase, lowercase, or title case easily with this free case converter.",
  path: "/text-tools/case-converter",
  keywords: ["case converter", "uppercase lowercase converter"],
});

const faqItems = [
  {
    question: "What is a case converter?",
    answer:
      "A case converter changes text between formats such as uppercase, lowercase, title case, and sentence case.",
  },
  {
    question: "Can I convert text to uppercase and lowercase?",
    answer:
      "Yes. This tool helps you quickly change text case without editing each letter manually.",
  },
  {
    question: "Is this case converter free to use?",
    answer:
      "Yes. Tool Nova provides this case converter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <CaseConverterClient />
      <ToolSchema
        name="Case Converter"
        description="Convert text to uppercase, lowercase, or title case easily with this free case converter."
        url="https://tool-nova.com/text-tools/case-converter"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}