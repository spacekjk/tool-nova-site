import Link from "next/link";

type RelatedTool = {
  name: string;
  href: string;
};

type RelatedToolsProps = {
  tools: RelatedTool[];
};

export default function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools?.length) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Related Tools</h2>
        <p className="mt-3 text-white/70">
          Explore more free online tools from Tool Nova.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white/85 transition hover:bg-white/5"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}