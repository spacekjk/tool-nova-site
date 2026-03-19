import type { Metadata } from "next";
import ToolGrid from "@/components/ToolGrid";
import { SITE_URL, getPublishedTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "All Tools | Tool Nova",
  description:
    "Browse all tools on Tool Nova, including calculators, text tools, generators, and converters.",
  alternates: {
    canonical: `${SITE_URL}/all-tools`,
  },
};

export default function AllToolsPage() {
  const tools = getPublishedTools();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
            Internal Tool Index
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            All Tools
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Browse every published tool on Tool Nova in one place. This page
            helps users discover calculators, text tools, generators, and
            converters faster.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm text-white/55">
            {tools.length.toLocaleString()} tools
          </p>
        </div>

        <div className="mt-6">
          <ToolGrid tools={tools} columns="3" />
        </div>
      </section>
    </main>
  );
}