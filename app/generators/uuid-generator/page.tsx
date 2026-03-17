import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import UUIDGeneratorClient from "./UUIDGeneratorClient";

export const metadata = buildMetadata({
  title: "UUID Generator",
  description: "Generate unique UUIDs instantly with this free online UUID generator.",
  path: "/generators/uuid-generator",
  keywords: ["uuid generator", "guid generator", "random uuid"],
});

const faqItems = [
  {
    question: "What is a UUID generator?",
    answer:
      "A UUID generator creates unique identifiers that can be used in databases, apps, and development workflows.",
  },
  {
    question: "Can I generate multiple UUIDs?",
    answer:
      "Yes. This type of tool is useful for creating one or more unique IDs instantly.",
  },
  {
    question: "Is this UUID generator free?",
    answer:
      "Yes. Tool Nova provides this UUID generator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <UUIDGeneratorClient />
      <RelatedTools
        tools={[
          { name: "Slug Generator", href: "/generators/slug-generator" },
          { name: "Password Generator", href: "/generators/password-generator" },
          { name: "Random Number Generator", href: "/generators/random-number-generator" },
        ]}
      />
      <ToolSchema
        name="UUID Generator"
        description="Generate unique UUIDs instantly with this free online UUID generator."
        url="https://tool-nova.com/generators/uuid-generator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}