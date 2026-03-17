// app/[category]/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStaticToolParams, getToolByParams } from "@/lib/tools";
import { getToolComponent } from "@/lib/tool-registry";

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getStaticToolParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const tool = getToolByParams(category, slug);

  if (!tool) {
    return {
      title: "Tool Not Found | Tool Nova",
      description: "The requested tool could not be found.",
    };
  }

  return {
    title: `${tool.title} | Tool Nova`,
    description: tool.description,
    keywords: tool.keywords,
    alternates: {
      canonical: `https://tool-nova.com/${tool.category}/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.title} | Tool Nova`,
      description: tool.description,
      url: `https://tool-nova.com/${tool.category}/${tool.slug}`,
      siteName: "Tool Nova",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${tool.title} | Tool Nova`,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { category, slug } = await params;
  const tool = getToolByParams(category, slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = getToolComponent(slug);

  if (!ToolComponent) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {tool.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          {tool.description}
        </p>
      </header>

      <ToolComponent />
    </main>
  );
}