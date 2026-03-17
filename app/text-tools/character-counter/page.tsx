import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import CharacterCounterClient from "./CharacterCounterClient";

export const metadata = buildMetadata({
  title: "Character Counter",
  description: "Count characters instantly with this free online character counter.",
  path: "/text-tools/character-counter",
  keywords: ["character counter", "count characters tool"],
});

const faqItems = [
  {
    question: "What does a character counter do?",
    answer:
      "A character counter shows the number of characters in your text, including letters, numbers, spaces, and punctuation.",
  },
  {
    question: "Does this tool count spaces?",
    answer:
      "Yes. Most character counters count spaces as part of the total character count.",
  },
  {
    question: "Is this character counter free?",
    answer:
      "Yes. Tool Nova provides this character counter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <CharacterCounterClient />
      <ToolSchema
        name="Character Counter"
        description="Count characters instantly with this free online character counter."
        url="https://tool-nova.com/text-tools/character-counter"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}