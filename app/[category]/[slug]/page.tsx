import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CATEGORY_META,
  SITE_URL,
  getStaticToolParams,
  getToolByParams,
  getRelatedTools,
  getToolPath,
} from "@/lib/tools";
import { TOOL_COMPONENTS } from "@/lib/registry";
import { buildToolMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import RelatedTools from "@/components/RelatedTools";
import ToolSchema from "@/components/ToolSchema";

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

  return buildToolMetadata(tool);
}

export default async function ToolPage({ params }: Props) {
  const { category, slug } = await params;
  const tool = getToolByParams(category, slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = TOOL_COMPONENTS[slug];

  if (!ToolComponent) {
    notFound();
  }

  const categoryMeta = CATEGORY_META[tool.category];

  const relatedTools = getRelatedTools(tool, 4).map((item) => ({
    name: item.name,
    href: getToolPath(item),
    description: item.shortDescription ?? item.description,
  }));

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <nav className="mb-6 text-sm text-white/50">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/${tool.category}`}
              className="transition hover:text-white"
            >
              {categoryMeta.name}
            </Link>
          </li>
          <li>/</li>
          <li className="text-white/80">{tool.name}</li>
        </ol>
      </nav>

      <header className="mb-10">
        <p className="mb-3 inline-block rounded-full border border-white/10 px-3 py-1 text-sm text-white/60">
          {categoryMeta.name}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {tool.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
          {tool.description}
        </p>
      </header>

      <section className="mx-auto mb-12 max-w-4xl">
        <ToolComponent />
      </section>

      <section className="mx-auto mb-12 max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Discover more tools
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-300">
            Explore more tools in this category, browse popular utilities, or
            check recently added tools on Tool Nova.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href={`/${tool.category}`}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
            >
              <h3 className="text-lg font-medium text-white">
                More {categoryMeta.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Browse more tools from the {categoryMeta.name.toLowerCase()} collection.
              </p>
            </Link>

            <Link
              href="/popular-tools"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
            >
              <h3 className="text-lg font-medium text-white">Popular Tools</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Start with featured and frequently used tools.
              </p>
            </Link>

            <Link
              href="/new-tools"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
            >
              <h3 className="text-lg font-medium text-white">New Tools</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                See newly published tools and recent additions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {tool.extendedContent?.length ? (
        <section className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              {tool.extendedContentTitle ?? "More about this tool"}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-gray-300">
              {tool.extendedContent.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {tool.useCases?.length ? (
        <section className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              {tool.useCasesTitle ?? "Common use cases"}
            </h2>

            <ul className="mt-5 space-y-3 text-base leading-7 text-gray-300">
              {tool.useCases.map((item, i) => (
                <li key={i} className="ml-5 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {tool.quickExamples?.length ? (
        <section className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              {tool.quickExamplesTitle ?? "Quick examples"}
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tool.quickExamples.map((example, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-gray-300"
                >
                  {example}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {tool.howItWorks?.length ? (
        <section className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              {tool.howItWorksTitle ??
                `How this ${tool.name.toLowerCase()} works`}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-gray-300">
              {tool.howItWorks.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {tool.faqs?.length ? (
        <section className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              {tool.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <RelatedTools tools={relatedTools} />

      <ToolSchema
        name={tool.name}
        description={tool.description}
        url={`${SITE_URL}${getToolPath(tool)}`}
      />

      {tool.faqs?.length ? <FAQSchema items={tool.faqs} /> : null}
    </main>
  );
}
