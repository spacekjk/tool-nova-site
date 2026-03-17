import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import SortTextClient from "./SortTextClient";

export const metadata = buildMetadata({
  title: "Sort Text",
  description: "Sort text lines alphabetically with this free online sort text tool.",
  path: "/text-tools/sort-text",
  keywords: ["sort text", "alphabetical order tool", "sort lines"],
});

const faqItems = [
  {
    question: "How does a sort text tool work?",
    answer:
      "It takes each line of text and sorts the lines alphabetically for easier organization.",
  },
  {
    question: "Can I sort line by line?",
    answer:
      "Yes. Paste multiple lines and the tool will sort them automatically.",
  },
  {
    question: "Is this sort text tool free?",
    answer:
      "Yes. Tool Nova provides this sort text tool for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <SortTextClient />
      <RelatedTools
        tools={[
          { name: "Reverse Text", href: "/text-tools/reverse-text" },
          { name: "Remove Duplicate Lines", href: "/text-tools/remove-duplicates" },
          { name: "Word Counter", href: "/text-tools/word-counter" },
        ]}
      />
      <ToolSchema
        name="Sort Text"
        description="Sort text lines alphabetically with this free online sort text tool."
        url="https://tool-nova.com/text-tools/sort-text"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}