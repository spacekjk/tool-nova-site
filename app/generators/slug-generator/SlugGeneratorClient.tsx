"use client";

import { useMemo, useState } from "react";

export default function SlugGeneratorClient() {
  const [text, setText] = useState("");

  const slug = useMemo(() => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }, [text]);

  return (



    <section className="mt-8 grid gap-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a title..."
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
      />
      <input
        type="text"
        value={slug}
        readOnly
        placeholder="Slug will appear here..."
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
      />
    </section>

  );
}