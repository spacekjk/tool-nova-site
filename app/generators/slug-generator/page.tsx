import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import SlugGeneratorClient from "./SlugGeneratorClient";

export const metadata = buildMetadata({
  title: "Slug Generator",
  description: "Convert text into SEO-friendly URL slugs with this free slug generator.",
  path: "/generators/slug-generator",
  keywords: ["slug generator", "url slug tool", "seo url generator"],
});

const faqItems = [
  {
    question: "What does a slug generator do?",
    answer:
      "A slug generator converts text into a clean URL-friendly format for pages, blog posts, and SEO use.",
  },
  {
    question: "Can I use this for blog titles and URLs?",
    answer:
      "Yes. This tool is useful for converting titles into simple lowercase hyphen-separated slugs.",
  },
  {
    question: "Is this slug generator free?",
    answer:
      "Yes. Tool Nova provides this slug generator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <SlugGeneratorClient />
      <RelatedTools
        tools={[
          { name: "UUID Generator", href: "/generators/uuid-generator" },
          { name: "Case Converter", href: "/text-tools/case-converter" },
          { name: "Word Counter", href: "/text-tools/word-counter" },
        ]}
      />
      <ToolSchema
        name="Slug Generator"
        description="Convert text into SEO-friendly URL slugs with this free slug generator."
        url="https://tool-nova.com/generators/slug-generator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}