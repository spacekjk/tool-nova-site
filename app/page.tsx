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

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Explore more tool collections
            </h2>
            <p className="mt-3 text-base leading-7 text-white/70">
              Browse all published tools, featured tools, and newly added tools
              from one place.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/all-tools"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
            >
              <h3 className="text-lg font-medium text-white">All Tools</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                View every published tool on Tool Nova in one place.
              </p>
            </Link>

            <Link
              href="/popular-tools"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
            >
              <h3 className="text-lg font-medium text-white">Popular Tools</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Start with featured and high-priority tools.
              </p>
            </Link>

            <Link
              href="/new-tools"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
            >
              <h3 className="text-lg font-medium text-white">New Tools</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                See recently added tools and fresh releases.
              </p>
            </Link>
          </div>
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

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Why use Tool Nova
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-7">
            <p>
              Tool Nova offers free browser-based tools designed for quick everyday tasks.
              Most tools work instantly without sign-up or installation.
            </p>
            <p>
              Whether you need to clean text, convert data, run quick calculations, or
              generate useful content, Tool Nova helps you get results faster.
            </p>
            <p>
              We focus on speed, clarity, and privacy-friendly experiences so users can
              solve small problems without unnecessary complexity.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
