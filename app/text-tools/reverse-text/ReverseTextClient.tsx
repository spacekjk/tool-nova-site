"use client";

import { useMemo, useState } from "react";

export default function ReverseTextClient() {
  const [text, setText] = useState("");

  const reversed = useMemo(() => text.split("").reverse().join(""), [text]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">


      <section className="mt-8 grid gap-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
          className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
        <textarea
          value={reversed}
          readOnly
          placeholder="Reversed text will appear here..."
          className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
      </section>
    </main>
  );
}