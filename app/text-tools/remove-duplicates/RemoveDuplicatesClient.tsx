"use client";

import { useMemo, useState } from "react";

export default function RemoveDuplicatesClient() {
  const [text, setText] = useState("");

  const uniqueText = useMemo(() => {
    const seen = new Set<string>();
    return text
      .split("\n")
      .filter((line) => {
        const key = line.trim();
        if (!key) return false;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .join("\n");
  }, [text]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">Remove Duplicate Lines</h1>
      <p className="mt-3 text-white/70">
        Remove repeated lines and keep only unique lines from your text.
      </p>

      <section className="mt-8 grid gap-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter one line per item..."
          className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
        <textarea
          value={uniqueText}
          readOnly
          placeholder="Unique lines will appear here..."
          className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
      </section>
    </main>
  );
}