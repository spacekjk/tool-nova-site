import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import WordCounterClient from "./WordCounterClient";

export const metadata = buildMetadata({
  title: "Word Counter",
  description: "Count words instantly with this free online word counter tool.",
  path: "/text-tools/word-counter",
  keywords: ["word counter", "count words online", "word count tool"],
});

const faqItems = [
  {
    question: "How does the word counter work?",
    answer:
      "Paste or type your text into the input area and the tool will automatically count the words in real time.",
  },
  {
    question: "Does the word counter update automatically?",
    answer:
      "Yes. The word count updates instantly as you type or edit your text.",
  },
  {
    question: "Is this word counter free to use?",
    answer:
      "Yes. Tool Nova provides this word counter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <WordCounterClient />
      <ToolSchema
        name="Word Counter"
        description="Count words instantly with this free online word counter tool."
        url="https://tool-nova.com/text-tools/word-counter"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}