import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import RemoveDuplicatesClient from "./RemoveDuplicatesClient";

export const metadata = buildMetadata({
  title: "Remove Duplicate Lines",
  description: "Remove duplicate lines from text instantly with this free online tool.",
  path: "/text-tools/remove-duplicates",
  keywords: ["remove duplicate lines", "unique text tool", "dedupe text"],
});

const faqItems = [
  {
    question: "What does a remove duplicate lines tool do?",
    answer:
      "It removes repeated lines from your text and keeps only unique lines.",
  },
  {
    question: "Can I clean lists with duplicate entries?",
    answer:
      "Yes. This tool is useful for cleaning repeated items in lists or copied text.",
  },
  {
    question: "Is this remove duplicate lines tool free?",
    answer:
      "Yes. Tool Nova provides this tool for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <RemoveDuplicatesClient />
      <RelatedTools
        tools={[
          { name: "Sort Text", href: "/text-tools/sort-text" },
          { name: "Reverse Text", href: "/text-tools/reverse-text" },
          { name: "Remove Line Breaks", href: "/text-tools/remove-line-breaks" },
        ]}
      />
      <ToolSchema
        name="Remove Duplicate Lines"
        description="Remove duplicate lines from text instantly with this free online tool."
        url="https://tool-nova.com/text-tools/remove-duplicates"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}