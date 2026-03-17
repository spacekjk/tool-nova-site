import Link from "next/link";

const textTools = [
  {
    title: "Word Counter",
    href: "/word-counter",
    description: "Count words, characters, and reading time.",
  },
  {
    title: "Character Counter",
    href: "/character-counter",
    description: "Count characters, words, and sentences instantly.",
  },
  {
    title: "Case Converter",
    href: "/case-converter",
    description: "Convert text to uppercase, lowercase, title case, and more.",
  },
  {
    title: "Remove Line Breaks",
    href: "/remove-line-breaks",
    description: "Clean up copied text by removing line breaks.",
  },
  {
    title: "Text Compare",
    href: "/text-compare",
    description: "Compare two texts side by side.",
  },
  {
    title: "JSON Formatter",
    href: "/json-formatter",
    description: "Format and validate JSON instantly.",
  },
];

export default function TextToolsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-3 text-sm text-white/60">Tool Nova Categories</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Text Tools
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
          Free online text tools for writing, formatting, comparing, and editing.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {textTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">{tool.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}