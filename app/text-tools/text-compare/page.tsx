import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import TextCompareClient from "./TextCompareClient";

export const metadata = buildMetadata({
  title: "Text Compare Tool",
  description: "Compare two pieces of text and highlight differences instantly.",
  path: "/text-tools/text-compare",
  keywords: ["text compare", "diff checker"],
});

const faqItems = [
  {
    question: "What does a text compare tool do?",
    answer:
      "A text compare tool highlights differences between two text blocks so you can spot edits, changes, or missing content.",
  },
  {
    question: "Can I compare two versions of text quickly?",
    answer:
      "Yes. Paste the original text and the updated text to compare them instantly.",
  },
  {
    question: "Is this text compare tool free?",
    answer:
      "Yes. Tool Nova provides this text compare tool for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <TextCompareClient />
      <ToolSchema
        name="Text Compare Tool"
        description="Compare two pieces of text and highlight differences instantly."
        url="https://tool-nova.com/text-tools/text-compare"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}