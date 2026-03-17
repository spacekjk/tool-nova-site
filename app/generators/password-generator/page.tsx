import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import PasswordGeneratorClient from "./PasswordGeneratorClient";
import RelatedTools from "@/components/RelatedTools";

export const metadata = buildMetadata({
  title: "Password Generator",
  description: "Generate secure passwords instantly with this free password generator.",
  path: "/generators/password-generator",
  keywords: ["password generator", "secure password generator"],
});

const faqItems = [
  {
    question: "What does a password generator do?",
    answer:
      "A password generator creates strong random passwords using letters, numbers, and symbols for better security.",
  },
  {
    question: "Can I create stronger passwords with this tool?",
    answer:
      "Yes. Randomly generated passwords are usually stronger and harder to guess than manually created ones.",
  },
  {
    question: "Is this password generator free?",
    answer:
      "Yes. Tool Nova provides this password generator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <PasswordGeneratorClient />

      <RelatedTools
        tools={[
          { name: "Random Number Generator", href: "/generators/random-number-generator" },
          { name: "Random Name Picker", href: "/generators/random-name-picker" },
          { name: "Word Counter", href: "/text-tools/word-counter" },
        ]}
      />

      <ToolSchema
        name="Password Generator"
        description="Generate secure passwords instantly with this free password generator."
        url="https://tool-nova.com/generators/password-generator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}