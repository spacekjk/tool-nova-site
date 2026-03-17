// components/ToolCard.tsx
import Link from "next/link";
import { ToolItem, getToolPath } from "@/lib/tools";

type Props = {
  tool: ToolItem;
};

export default function ToolCard({ tool }: Props) {
  return (
    <Link
      href={getToolPath(tool)}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {tool.name}
        </h3>
        {tool.new && (
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            New
          </span>
        )}
      </div>

      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
        {tool.shortDescription ?? tool.description}
      </p>
    </Link>
  );
}