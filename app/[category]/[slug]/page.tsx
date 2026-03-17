// app/[category]/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getStaticToolParams,
  getToolByParams,
  getRelatedTools,
  getToolPath,
} from "@/lib/tools";
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

  if (!tool) notFound();

  const ToolComponent = getToolComponent(slug);
  if (!ToolComponent) notFound();

  const relatedTools = getRelatedTools(tool, 4);

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

      <section className="mb-12">
        <ToolComponent />
      </section>

      {/* How it works */}
        {tool.howItWorks && tool.howItWorks.length > 0 && (
            <section className="mb-10 rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-neutral-900">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {tool.howItWorksTitle ?? `How this ${tool.name.toLowerCase()} works`}
                </h2>

                <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/75">
                {tool.howItWorks.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                </div>
            </section>
        )}

        {/* FAQ */}
        {tool.faqs && tool.faqs.length > 0 && (
            <section className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/75">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-6">
                {tool.faqs.map((faq, i) => (
                    <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {faq.question}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
                        {faq.answer}
                    </p>
                    </div>
                ))}
                </div>
            </section>
     )}
    

      {relatedTools.length > 0 && (
        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Related Tools
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedTools.map((item) => (
              <Link
                key={item.slug}
                href={getToolPath(item)}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-950"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {item.shortDescription ?? item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}