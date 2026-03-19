import Link from "next/link";
import {
  getFeaturedTools,
  getHomeCategorySections,
  getCategoryPath,
  getToolPath,
  type ToolItem,
} from "@/lib/tools";

export default function HomePage() {
  const featuredTools = getFeaturedTools(8);
  const sections = getHomeCategorySections();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
            Free Online Tools
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Tool Nova
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
            Free online calculators, converters, generators, and text tools built
            for speed, simplicity, and everyday use.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculators"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Explore Tools
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Featured Tools</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool: ToolItem) => (
              <Link
                key={tool.slug}
                href={getToolPath(tool)}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {tool.shortDescription ?? tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {sections.map((category) => (
            <section key={category.slug}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-white/70">{category.description}</p>
                </div>

                <Link
                  href={getCategoryPath(category.slug)}
                  className="text-sm font-medium text-white/80 hover:text-white"
                >
                  View all
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.tools.map((tool: ToolItem) => (
                  <Link
                    key={tool.slug}
                    href={getToolPath(tool)}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {tool.shortDescription ?? tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}