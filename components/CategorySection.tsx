import Link from "next/link";
import type { ToolItem } from "@/lib/tools";
import ToolGrid from "./ToolGrid";

type CategorySectionProps = {
  title: string;
  description: string;
  href: string;
  tools: ToolItem[];
};

export default function CategorySection({
  title,
  description,
  href,
  tools,
}: CategorySectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-white/70">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className="text-sm font-medium text-white/70 transition hover:text-white"
        >
          View all →
        </Link>
      </div>

      <div className="mt-6">
        <ToolGrid tools={tools} compact columns="3" />
      </div>
    </section>
  );
}