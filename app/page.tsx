import Link from "next/link";
import CategorySection from "@/components/CategorySection";
import ToolGrid from "@/components/ToolGrid";
import ToolSearch from "@/components/ToolSearch";
import {
  getFeaturedTools,
  getHomeCategorySections,
  getPublishedTools,
} from "@/lib/tools";

export default function HomePage() {
  const featuredTools = getFeaturedTools(8);
  const sections = getHomeCategorySections();
  const publishedTools = getPublishedTools();

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

        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              Featured Tools
            </h2>
          </div>

          <ToolGrid tools={featuredTools} columns="4" />
        </section>

        <section className="mt-10">
          <ToolSearch tools={publishedTools} />
        </section>

        <div className="mt-20 space-y-10">
          {sections.map((category) => (
            <CategorySection
              key={category.slug}
              title={category.name}
              description={category.description}
              href={category.href}
              tools={category.tools}
            />
          ))}
        </div>
      </section>
    </main>
  );
}