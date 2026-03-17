import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Text Tools",
  description:
    "Use free online text tools for word counting, character counting, case conversion, text comparison, line cleanup, and JSON formatting.",
  alternates: {
    canonical: "https://tool-nova.com/text-tools",
  },
  openGraph: {
    title: "Free Online Text Tools | Tool Nova",
    description:
      "Use free online text tools for word counting, character counting, case conversion, text comparison, line cleanup, and JSON formatting.",
    url: "https://tool-nova.com/text-tools",
    siteName: "Tool Nova",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Text Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Tools | Tool Nova",
    description:
      "Use free online text tools for word counting, character counting, case conversion, text comparison, line cleanup, and JSON formatting.",
    images: ["/og-image.png"],
  },
};

const tools = [
  { name: "Word Counter", href: "/text-tools/word-counter" },
  { name: "Character Counter", href: "/text-tools/character-counter" },
  { name: "Case Converter", href: "/text-tools/case-converter" },
  { name: "Remove Line Breaks", href: "/text-tools/remove-line-breaks" },
  { name: "Text Compare", href: "/text-tools/text-compare" },
  { name: "JSON Formatter", href: "/text-tools/json-formatter" },
];

export default function TextToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Free Online Text Tools</h1>

      <p className="mt-4 max-w-3xl text-gray-600">
        Explore free online text tools for editing, formatting, cleaning, and
        analyzing content. Whether you need to count words, compare text, change
        letter case, or format JSON, these tools are fast, simple, and easy to
        use on desktop and mobile.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="mt-2 text-sm text-gray-500">
              Open the {tool.name.toLowerCase()} tool.
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Why use online text tools?</h2>
        <p className="mt-3 text-gray-600">
          Online text tools help you save time when writing, editing, or cleaning
          text. Instead of making manual changes line by line, you can instantly
          count words, remove unwanted spacing, compare content versions, or
          convert text formatting with a single click.
        </p>
        <p className="mt-3 text-gray-600">
          These tools are useful for students, writers, developers, marketers,
          editors, and anyone who works with text every day. They are especially
          helpful for SEO writing, blog editing, coding tasks, and quick content
          cleanup.
        </p>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Popular text tool categories</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Text analysis tools like word and character counters</li>
          <li>Formatting tools like case converters and JSON formatters</li>
          <li>Cleanup tools like remove line breaks and spacing tools</li>
          <li>Comparison tools for checking differences between text versions</li>
        </ul>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Useful for writing, coding, and SEO</h2>
        <p className="mt-3 text-gray-600">
          Many text tools support content publishing, keyword planning, coding,
          and documentation work. For example, a word counter can help with blog
          post length, a character counter can support social post limits, and a
          JSON formatter can help developers quickly validate and organize data.
        </p>
      </section>
    </main>
  );
}