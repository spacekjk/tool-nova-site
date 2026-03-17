import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RandomNamePickerClient from "./RandomNamePickerClient";

export const metadata = buildMetadata({
  title: "Random Name Picker",
  description: "Pick a random name from a list instantly using this free name picker.",
  path: "/generators/random-name-picker",
  keywords: ["random name picker"],
});

const faqItems = [
  {
    question: "What does a random name picker do?",
    answer:
      "A random name picker selects one name from a list at random for fair and simple selection.",
  },
  {
    question: "Can I paste multiple names into this tool?",
    answer:
      "Yes. Enter or paste a list of names and the tool will randomly choose one for you.",
  },
  {
    question: "Is this random name picker free?",
    answer:
      "Yes. Tool Nova provides this random name picker for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <RandomNamePickerClient />
      <ToolSchema
        name="Random Name Picker"
        description="Pick a random name from a list instantly using this free name picker."
        url="https://tool-nova.com/generators/random-name-picker"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}