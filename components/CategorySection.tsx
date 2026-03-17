// components/CategorySection.tsx
import Link from "next/link";
import ToolGrid from "./ToolGrid";
import { CategoryMeta, ToolItem, getCategoryPath } from "@/lib/tools";

type Props = {
  category: CategoryMeta;
  tools: ToolItem[];
};

export default function CategorySection({ category, tools }: Props) {
  if (!tools.length) return null;

  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {category.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {category.description}
          </p>
        </div>

        <Link
          href={getCategoryPath(category.slug)}
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          View all
        </Link>
      </div>

      <ToolGrid tools={tools} />
    </section>
  );
}