"use client";

import { useMemo, useState } from "react";
import ToolGrid from "@/components/ToolGrid";
import type { ToolCategory, ToolItem } from "@/lib/tools";

type ToolSearchProps = {
  tools: ToolItem[];
};

const CATEGORY_OPTIONS: Array<{ label: string; value: "all" | ToolCategory }> = [
  { label: "All", value: "all" },
  { label: "Calculators", value: "calculators" },
  { label: "Text Tools", value: "text-tools" },
  { label: "Generators", value: "generators" },
  { label: "Converters", value: "converters" },
];

function normalize(text: string) {
  return text.toLowerCase().trim();
}

export default function ToolSearch({ tools }: ToolSearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | ToolCategory>("all");

  const filteredTools = useMemo(() => {
    const q = normalize(query);

    return tools.filter((tool) => {
      const matchesCategory = category === "all" || tool.category === category;

      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        tool.name,
        tool.title,
        tool.description,
        tool.shortDescription ?? "",
        ...(tool.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [tools, query, category]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Find the right tool
        </h2>
        <p className="mt-3 text-base leading-7 text-white/70">
          Search by tool name, description, or keywords.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_220px]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools..."
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/25"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as "all" | ToolCategory)}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/25"
        >
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} className="bg-neutral-900">
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm text-white/55">
          {filteredTools.length.toLocaleString()} tools found
        </p>

        {(query || category !== "all") && (
          <button
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:bg-black/30 hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-6">
        <ToolGrid tools={filteredTools} columns="3" />
      </div>
    </section>
  );
}