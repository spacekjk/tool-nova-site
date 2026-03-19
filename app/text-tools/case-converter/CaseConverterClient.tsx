"use client";

import { useMemo, useState } from "react";

function splitWords(text: string) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

function toLowerCase(text: string) {
  return text.toLowerCase();
}

function toUpperCase(text: string) {
  return text.toUpperCase();
}

function toTitleCase(text: string) {
  return text
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function toSentenceCase(text: string) {
  const lower = text.toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s+\w)/g, (char) => char.toUpperCase());
}

function toCamelCase(text: string) {
  const words = splitWords(text.toLowerCase());
  if (words.length === 0) return "";
  return words[0] + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

function toPascalCase(text: string) {
  return splitWords(text.toLowerCase())
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function toSnakeCase(text: string) {
  return splitWords(text.toLowerCase()).join("_");
}

function toKebabCase(text: string) {
  return splitWords(text.toLowerCase()).join("-");
}

export default function CaseConverterClient() {
  const [text, setText] = useState("");

  const results = useMemo(() => {
    return {
      lowercase: toLowerCase(text),
      uppercase: toUpperCase(text),
      titleCase: toTitleCase(text),
      sentenceCase: toSentenceCase(text),
      camelCase: toCamelCase(text),
      pascalCase: toPascalCase(text),
      snakeCase: toSnakeCase(text),
      kebabCase: toKebabCase(text),
    };
  }, [text]);

  const handleSample = () => {
    setText("tool nova makes online text tools fast and easy to use");
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async (value: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
  };

  const cards = [
    { label: "lowercase", value: results.lowercase },
    { label: "UPPERCASE", value: results.uppercase },
    { label: "Title Case", value: results.titleCase },
    { label: "Sentence case", value: results.sentenceCase },
    { label: "camelCase", value: results.camelCase },
    { label: "PascalCase", value: results.pascalCase },
    { label: "snake_case", value: results.snakeCase },
    { label: "kebab-case", value: results.kebabCase },
  ];

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={handleSample}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Load Sample
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Clear Text
          </button>
        </div>

        <div className="mt-8">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Enter text to convert
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type text here..."
            rows={8}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
          />
        </div>

        <div className="mt-8 grid gap-4">
          {cards.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-white">{item.label}</h2>

                <button
                  onClick={() => handleCopy(item.value)}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-black/40"
                >
                  Copy
                </button>
              </div>

              <p className="mt-4 break-words text-base leading-7 text-gray-300">
                {item.value || "Converted text will appear here."}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What this tool converts</h2>
        <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
          <p>
            Convert text into lowercase, uppercase, title case, and sentence case
            instantly.
          </p>
          <p>
            Change plain text into camelCase, PascalCase, snake_case, and
            kebab-case for coding and content workflows.
          </p>
          <p>
            This tool is useful for writers, developers, students, SEO work, and
            formatting text for different platforms.
          </p>
        </div>
      </div>
    </>
  );
}