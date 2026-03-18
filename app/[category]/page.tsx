// app/[category]/page.tsx
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
            {meta.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={getToolPath(tool)}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold text-white">
                {tool.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {tool.shortDescription ?? tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Why use {meta.name.toLowerCase()}?</h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Tool Nova&apos;s {meta.name.toLowerCase()} are designed to be fast,
            simple, and easy to use on desktop and mobile. Whether you need a quick
            result or a reliable utility for everyday tasks, these browser-based tools
            help you save time without extra setup.
          </p>
        </div>
      </section>
    </main>
  );
}