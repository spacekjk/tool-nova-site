"use client";

import { useMemo, useState } from "react";

export default function RemoveLineBreaksPage() {
  const [text, setText] = useState("");

  const cleanedText = useMemo(() => {
    if (!text) return "";
    return text.replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim();
  }, [text]);

  const handleCopy = async () => {
    if (!cleanedText) return;
    await navigator.clipboard.writeText(cleanedText);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">


        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <label className="mb-3 block text-sm font-medium text-white/80">
              Original Text
            </label>

            <textarea
              rows={12}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text with line breaks here..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
            />

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={handleClear}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <label className="block text-sm font-medium text-white/80">
                Result
              </label>

              <button
                onClick={handleCopy}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                Copy
              </button>
            </div>

            <div className="mt-3 min-h-[280px] rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="whitespace-pre-wrap break-words text-white/85">
                {cleanedText || "Your cleaned text will appear here."}
              </p>
            </div>
          </div>
        </div>
      </section>

      
      
    </main>
  );
}