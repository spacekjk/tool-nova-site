import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import ReverseTextClient from "./ReverseTextClient";

export const metadata = buildMetadata({
  title: "Reverse Text",
  description: "Reverse text instantly with this free online text reverser tool.",
  path: "/text-tools/reverse-text",
  keywords: ["reverse text", "text reverser", "reverse words"],
});

const faqItems = [
  {
    question: "What does a reverse text tool do?",
    answer:
      "A reverse text tool flips the character order of your text instantly.",
  },
  {
    question: "Can I reverse pasted text online?",
    answer:
      "Yes. Paste any text and the tool will reverse it in real time.",
  },
  {
    question: "Is this reverse text tool free?",
    answer:
      "Yes. Tool Nova provides this reverse text tool for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <ReverseTextClient />
      <RelatedTools
        tools={[
          { name: "Sort Text", href: "/text-tools/sort-text" },
          { name: "Remove Duplicate Lines", href: "/text-tools/remove-duplicates" },
          { name: "Case Converter", href: "/text-tools/case-converter" },
        ]}
      />
      <ToolSchema
        name="Reverse Text"
        description="Reverse text instantly with this free online text reverser tool."
        url="https://tool-nova.com/text-tools/reverse-text"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}