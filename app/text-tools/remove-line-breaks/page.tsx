import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RemoveLineBreaksClient from "./RemoveLineBreaksClient";
import RelatedTools from "@/components/RelatedTools";

export const metadata = buildMetadata({
  title: "Remove Line Breaks",
  description: "Remove line breaks and clean text formatting with this free online tool.",
  path: "/text-tools/remove-line-breaks",
  keywords: ["remove line breaks", "text cleaner"],
});

const faqItems = [
  {
    question: "What does a remove line breaks tool do?",
    answer:
      "This tool removes unwanted line breaks and joins text into a cleaner format for easier copying or editing.",
  },
  {
    question: "Can I clean pasted text from PDFs or emails?",
    answer:
      "Yes. This tool is useful for cleaning text copied from PDFs, emails, and websites.",
  },
  {
    question: "Is this line break remover free?",
    answer:
      "Yes. Tool Nova provides this remove line breaks tool for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <RemoveLineBreaksClient />

      <RelatedTools
        tools={[
          { name: "Word Counter", href: "/text-tools/word-counter" },
          { name: "Character Counter", href: "/text-tools/character-counter" },
          { name: "Text Compare", href: "/text-tools/text-compare" },
        ]}
      />

      <ToolSchema
        name="Remove Line Breaks"
        description="Remove line breaks and clean text formatting with this free online tool."
        url="https://tool-nova.com/text-tools/remove-line-breaks"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}