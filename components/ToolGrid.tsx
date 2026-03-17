// components/ToolGrid.tsx
import { ToolItem } from "@/lib/tools";
import ToolCard from "./ToolCard";

type Props = {
  tools: ToolItem[];
};

export default function ToolGrid({ tools }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={`${tool.category}-${tool.slug}`} tool={tool} />
      ))}
    </div>
  );
}