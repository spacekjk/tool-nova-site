import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CATEGORY_META,
  getStaticCategoryParams,
  getToolPath,
  getToolsByCategory,
  isValidCategory,
} from "@/lib/tools";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return getStaticCategoryParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  if (!isValidCategory(category)) {
    return {
      title: "Category Not Found | Tool Nova",
      description: "The requested category could not be found.",
    };
  }

  const meta = CATEGORY_META[category];

  return {
    title: `${meta.title} | Tool Nova`,
    description: meta.description,
    alternates: {
      canonical: `https://tool-nova.com/${category}`,
    },
    openGraph: {
      title: `${meta.title} | Tool Nova`,
      description: meta.description,
      url: `https://tool-nova.com/${category}`,
      siteName: "Tool Nova",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${meta.title} | Tool Nova`,
      description: meta.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  const meta = CATEGORY_META[category];
  const tools = getToolsByCategory(category);

  if (!tools.length) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
            Browse Category
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {meta.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
            {meta.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">All Tools</h2>
          <p className="mt-2 text-sm text-white/65">
            Explore all tools available in the {meta.name.toLowerCase()} category.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={getToolPath(tool)}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold">{tool.name}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {tool.shortDescription ?? tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Why use {meta.name}?</h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Tool Nova&apos;s {meta.name.toLowerCase()} are built to be fast, simple,
            and easy to use on desktop and mobile. Whether you need a quick utility
            for work, study, writing, or everyday tasks, these browser-based tools
            help you get results instantly without extra setup.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-wrap gap-4 border-t border-white/10 pt-8 text-sm text-white/60">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </section>
    </main>
  );
}