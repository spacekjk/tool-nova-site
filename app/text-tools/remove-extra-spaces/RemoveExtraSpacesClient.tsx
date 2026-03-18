"use client";

import { useMemo, useState } from "react";

export default function RemoveExtraSpacesClient() {
  const [input, setInput] = useState("");

  const output = useMemo(() => {
    return input
      .replace(/[ \t]+/g, " ")
      .replace(/\n /g, "\n")
      .replace(/ \n/g, "\n")
      .trim();
  }, [input]);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {}
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <section className="mx-auto max-w-4xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Input Text
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste or type text with extra spaces..."
              rows={8}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleCopy}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Copy Output
            </button>

            <button
              onClick={handleClear}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Clear
            </button>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Cleaned Text
            </label>
            <textarea
              value={output}
              readOnly
              placeholder="Cleaned text will appear here..."
              rows={8}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}