import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import JsonFormatterClient from "./JsonFormatterClient";

export const metadata = buildMetadata({
  title: "JSON Formatter",
  description: "Format and beautify JSON data instantly using this free JSON formatter.",
  path: "/text-tools/json-formatter",
  keywords: ["json formatter", "json beautifier"],
});

const faqItems = [
  {
    question: "What does a JSON formatter do?",
    answer:
      "A JSON formatter organizes and beautifies JSON data so it becomes easier to read and debug.",
  },
  {
    question: "Can I paste raw JSON into this tool?",
    answer:
      "Yes. Paste your raw JSON and the tool will format it instantly if the structure is valid.",
  },
  {
    question: "Is this JSON formatter free?",
    answer:
      "Yes. Tool Nova provides this JSON formatter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <JsonFormatterClient />
      <ToolSchema
        name="JSON Formatter"
        description="Format and beautify JSON data instantly using this free JSON formatter."
        url="https://tool-nova.com/text-tools/json-formatter"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}