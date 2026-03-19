import type { Metadata } from "next";
import ToolGrid from "@/components/ToolGrid";
import { SITE_URL, getFeaturedTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Popular Tools | Tool Nova",
  description:
    "Explore popular tools on Tool Nova, including featured calculators, text tools, generators, and converters.",
  alternates: {
    canonical: `${SITE_URL}/popular-tools`,
  },
};

export default function PopularToolsPage() {
  const tools = getFeaturedTools(24);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
            Featured Collection
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Popular Tools
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Start with the most useful and frequently highlighted tools on Tool
            Nova. This page groups together featured tools that are most likely
            to help users quickly.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm text-white/55">
            {tools.length.toLocaleString()} featured tools
          </p>
        </div>

        <div className="mt-6">
          <ToolGrid tools={tools} columns="3" />
        </div>
      </section>
    </main>
  );
}