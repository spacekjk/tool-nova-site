import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CATEGORY_META,
  getCategoryPath,
  getStaticCategoryParams,
  getToolsByCategory,
  getToolPath,
  isValidCategory,
  type ToolCategory,
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

  const categoryKey: ToolCategory = category;
  const meta = CATEGORY_META[categoryKey];

  return {
    title: `${meta.title} | Tool Nova`,
    description: meta.description,
    alternates: {
      canonical: `${getCategoryPath(categoryKey)}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  const categoryKey: ToolCategory = category;
  const meta = CATEGORY_META[categoryKey];
  const tools = getToolsByCategory(categoryKey);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
            Free Online Tools
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {meta.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {meta.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={getToolPath(tool)}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold text-white">{tool.name}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {tool.shortDescription ?? tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}