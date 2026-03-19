import Link from "next/link";
import { getCategoryPath, getToolPath, type ToolItem } from "@/lib/tools";

type ToolCardProps = {
  tool: ToolItem;
  compact?: boolean;
};

function getCategoryLabel(category: ToolItem["category"]) {
  if (category === "calculators") return "Calculators";
  if (category === "text-tools") return "Text Tools";
  if (category === "generators") return "Generators";
  return "Converters";
}

export default function ToolCard({
  tool,
  compact = false,
}: ToolCardProps) {
  return (
    <Link
      href={getToolPath(tool)}
      className="group block rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`font-semibold tracking-tight text-white ${
                compact ? "text-lg" : "text-xl"
              }`}
            >
              {tool.name}
            </h3>

            {tool.new ? (
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                New
              </span>
            ) : null}
          </div>

          <p
            className={`mt-3 text-white/70 ${
              compact ? "text-sm leading-6" : "text-base leading-7"
            }`}
          >
            {tool.shortDescription ?? tool.description}
          </p>
        </div>

        <span className="shrink-0 text-white/30 transition group-hover:text-white/60">
          →
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/60">
          {getCategoryLabel(tool.category)}
        </span>

        <span className="text-sm text-white/50 transition group-hover:text-white/80">
          Open tool
        </span>
      </div>
    </Link>
  );
}