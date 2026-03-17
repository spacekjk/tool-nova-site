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
          <p className="mb-3 text-sm text-white/60">Free Online Text Tool</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Remove Line Breaks
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Remove line breaks from text instantly. This free online tool helps
            you clean up copied text, paragraphs, emails, and notes by turning
            multiple lines into a single line of text.
          </p>
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

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this remove line breaks tool works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This tool removes line breaks and extra spacing from your text,
              then combines everything into a cleaner single-line result.
            </p>
            <p>
              It is useful when you copy text from PDFs, emails, websites, or
              documents and want to remove unwanted line breaks quickly.
            </p>
            <p>
              You can paste your text into the input box, then copy the cleaned
              version from the output area.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                What does remove line breaks mean?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                It means deleting line breaks and combining multiple lines of
                text into one continuous line.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Can I use this tool for copied PDF text?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. This is one of the most common uses for a remove line
                breaks tool.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this remove line breaks tool free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this text tool online for free with no
                sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}