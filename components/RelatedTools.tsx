import Link from "next/link";

type RelatedTool = {
  name: string;
  href: string;
  description?: string;
};

type RelatedToolsProps = {
  tools: RelatedTool[];
};

export default function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools?.length) return null;

  return (
    <section className="mx-auto max-w-4xl pb-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">Related Tools</h2>
        <p className="mt-3 text-gray-300">
          Explore more free online tools from Tool Nova.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-black/60"
            >
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
              {tool.description ? (
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {tool.description}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}