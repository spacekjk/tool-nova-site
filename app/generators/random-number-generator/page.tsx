import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RandomNumberGeneratorClient from "./RandomNumberGeneratorClient";
import RelatedTools from "@/components/RelatedTools";

export const metadata = buildMetadata({
  title: "Random Number Generator",
  description: "Generate random numbers instantly with this free online tool.",
  path: "/generators/random-number-generator",
  keywords: ["random number generator"],
});

const faqItems = [
  {
    question: "What is a random number generator?",
    answer:
      "A random number generator creates numbers within a chosen range for selection, testing, games, or sampling.",
  },
  {
    question: "Can I choose a custom number range?",
    answer:
      "Yes. You can generate random numbers within the minimum and maximum values you enter.",
  },
  {
    question: "Is this random number generator free?",
    answer:
      "Yes. Tool Nova provides this random number generator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <RandomNumberGeneratorClient />

      <RelatedTools
        tools={[
          { name: "Password Generator", href: "/generators/password-generator" },
          { name: "Random Name Picker", href: "/generators/random-name-picker" },
          { name: "Percentage Calculator", href: "/calculators/percentage-calculator" },
        ]}
      />

      <ToolSchema
        name="Random Number Generator"
        description="Generate random numbers instantly with this free online tool."
        url="https://tool-nova.com/generators/random-number-generator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}