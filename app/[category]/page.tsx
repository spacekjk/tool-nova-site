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
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {meta.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
          {meta.description}
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={getToolPath(tool)}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {tool.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {tool.shortDescription ?? tool.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}