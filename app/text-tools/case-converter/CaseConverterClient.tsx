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

export default function CaseConverterClient() {
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
    <section className="mx-auto max-w-5xl px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
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

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { label: "UPPERCASE", value: converted.upper },
            { label: "lowercase", value: converted.lower },
            { label: "Title Case", value: converted.title },
            { label: "Sentence case", value: converted.sentence },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-black/20 p-6"
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

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="whitespace-pre-wrap break-words text-white/85">
                  {item.value || "Your converted text will appear here."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}