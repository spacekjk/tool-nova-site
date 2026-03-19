import type { ToolItem } from "@/lib/tools";
import ToolCard from "./ToolCard";

type ToolGridProps = {
  tools: ToolItem[];
  compact?: boolean;
  columns?: "2" | "3" | "4";
};

function getGridClass(columns: "2" | "3" | "4") {
  if (columns === "2") {
    return "grid gap-4 md:grid-cols-2";
  }

  if (columns === "4") {
    return "grid gap-4 md:grid-cols-2 xl:grid-cols-4";
  }

  return "grid gap-4 md:grid-cols-2 xl:grid-cols-3";
}

export default function ToolGrid({
  tools,
  compact = false,
  columns = "3",
}: ToolGridProps) {
  if (!tools.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/60">
        No tools found.
      </div>
    );
  }

  return (
    <div className={getGridClass(columns)}>
      {tools.map((tool) => (
        <ToolCard key={`${tool.category}-${tool.slug}`} tool={tool} compact={compact} />
      ))}
    </div>
  );
}