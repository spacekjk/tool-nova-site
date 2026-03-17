"use client";

import { useMemo, useState } from "react";

export default function SortTextClient() {
  const [text, setText] = useState("");

  const sorted = useMemo(() => {
    return text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .sort((a, b) => a.localeCompare(b))
      .join("\n");
  }, [text]);

  return (



    <section className="mt-8 grid gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter one item per line..."
        className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
      />
      <textarea
        value={sorted}
        readOnly
        placeholder="Sorted text will appear here..."
        className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
      />
    </section>

  );
}