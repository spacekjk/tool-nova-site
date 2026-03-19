import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ToolGrid from "@/components/ToolGrid";
import {
  CATEGORY_META,
  SITE_URL,
  getCategoryPath,
  getStaticCategoryParams,
  getToolsByCategory,
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
      canonical: `${SITE_URL}${getCategoryPath(categoryKey)}`,
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

        <div className="mt-12">
          <ToolGrid tools={tools} columns="3" />
        </div>
      </section>
    </main>
  );
}