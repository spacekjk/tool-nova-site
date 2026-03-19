import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
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

  const relatedTools = getRelatedTools(tool, 4).map((item) => ({
    name: item.name,
    href: getToolPath(item),
    description: item.shortDescription ?? item.description,
  }));

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {tool.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-300">
          {tool.description}
        </p>
      </header>

      <section className="mx-auto mb-12 max-w-4xl">
        <ToolComponent />
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
