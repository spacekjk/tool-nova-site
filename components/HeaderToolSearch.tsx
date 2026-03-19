"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { getPublishedTools, getToolPath, type ToolItem } from "@/lib/tools";

function normalize(text: string) {
  return text.toLowerCase().trim();
}

function getCategoryLabel(category: ToolItem["category"]) {
  if (category === "calculators") return "Calculators";
  if (category === "text-tools") return "Text Tools";
  if (category === "generators") return "Generators";
  return "Converters";
}

export default function HeaderToolSearch() {
  const tools = getPublishedTools();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultsContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const results = useMemo(() => {
    const q = normalize(query);

    if (!q) return [];

    return tools
      .filter((tool) => {
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
      })
      .slice(0, 8);
  }, [tools, query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
    itemRefs.current = [];
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    if (!results.length) return;

    const activeItem = itemRefs.current[activeIndex];
    if (!activeItem) return;

    activeItem.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex, isOpen, results.length]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (!results.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((prev) => (prev + 1) % results.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selected = results[activeIndex];
      if (selected) {
        window.location.href = getToolPath(selected);
      }
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-white/45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        <input
          ref={inputRef}
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={handleInputKeyDown}
          placeholder="Search tools..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
        />
      </div>

      {isOpen && query.trim() && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl">
          {results.length ? (
            <div
              ref={resultsContainerRef}
              className="max-h-[420px] overflow-y-auto p-2"
            >
              {results.map((tool, index) => {
                const href = getToolPath(tool);
                const isActive = index === activeIndex;

                return (
                  <Link
                    key={`${tool.category}-${tool.slug}`}
                    href={href}
                    ref={(element) => {
                      itemRefs.current[index] = element;
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className={`block rounded-xl px-4 py-3 transition ${
                      isActive ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">
                          {tool.name}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/60">
                          {tool.shortDescription ?? tool.description}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/45">
                        {getCategoryLabel(tool.category)}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="px-4 py-6 text-sm text-white/55">
              No matching tools found.
            </div>
          )}

          <div className="border-t border-white/10 bg-black/20 px-4 py-3 text-[11px] text-white/40">
            Use ↑ ↓ to navigate and Enter to open
          </div>
        </div>
      )}
    </div>
  );
}