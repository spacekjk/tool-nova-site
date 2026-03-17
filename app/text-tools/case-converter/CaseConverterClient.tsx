"use client";

import { useMemo, useState } from "react";

function toTitleCase(text: string) {
  return text.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

function toSentenceCase(text: string) {
  return text
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
}

export default function CaseConverterPage() {
  const [text, setText] = useState("");

  const converted = useMemo(() => {
    return {
      upper: text.toUpperCase(),
      lower: text.toLowerCase(),
      title: toTitleCase(text),
      sentence: toSentenceCase(text),
    };
  }, [text]);

  const copyText = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Enter or paste your text
          </label>

          <textarea
            rows={8}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "UPPERCASE", value: converted.upper },
            { label: "lowercase", value: converted.lower },
            { label: "Title Case", value: converted.title },
            { label: "Sentence case", value: converted.sentence },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <button
                  onClick={() => copyText(item.value)}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  Copy
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="whitespace-pre-wrap break-words text-white/85">
                  {item.value || "Your converted text will appear here."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">How this case converter works</h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This tool changes the letter case of your text instantly. You can
              convert text to uppercase, lowercase, title case, or sentence
              case depending on your writing needs.
            </p>
            <p>
              It is useful for editing titles, fixing formatting, preparing
              social media text, and quickly cleaning up copied content.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">What is title case?</h3>
              <p className="mt-2 leading-7 text-white/70">
                Title case capitalizes the first letter of each major word in a
                title or heading.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Can I convert text to all caps?</h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Use the uppercase option to convert all letters to capital
                letters.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this case converter free to use?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this case converter online for free with
                no sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}