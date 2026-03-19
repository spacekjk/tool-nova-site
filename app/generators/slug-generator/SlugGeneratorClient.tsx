"use client";

import { useMemo, useState } from "react";

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")          // 공백 → -
    .replace(/[^\w\-]+/g, "")         // 특수문자 제거
    .replace(/\-\-+/g, "-")           // -- → -
    .replace(/^-+/, "")               // 앞 -
    .replace(/-+$/, "");              // 뒤 -
}

function generateSnake(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, "_")
    .replace(/[^\w_]+/g, "")
    .replace(/__+/g, "_")
    .replace(/^_+/, "")
    .replace(/_+$/, "");
}

export default function SlugGeneratorClient() {
  const [text, setText] = useState("");

  const result = useMemo(() => {
    const slug = generateSlug(text);
    const snake = generateSnake(text);

    return {
      slug,
      snake,
    };
  }, [text]);

  const handleSample = () => {
    setText("How to Make Money Online in 2026 (Beginner Guide)");
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async (value: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={handleSample}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Load Sample
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white hover:bg-black/40"
          >
            Clear
          </button>
        </div>

        <div className="mt-8">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Enter text (title, blog post, URL, etc.)
          </label>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your title here..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
          />
        </div>

        <div className="mt-8 grid gap-4">
          {/* Slug */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                SEO URL Slug (kebab-case)
              </h2>

              <button
                onClick={() => handleCopy(result.slug)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-black/40"
              >
                Copy
              </button>
            </div>

            <p className="mt-4 text-gray-300 break-words">
              {result.slug || "Generated slug will appear here"}
            </p>
          </div>

          {/* Snake */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                snake_case
              </h2>

              <button
                onClick={() => handleCopy(result.snake)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-black/40"
              >
                Copy
              </button>
            </div>

            <p className="mt-4 text-gray-300 break-words">
              {result.snake || "Generated snake_case will appear here"}
            </p>
          </div>
        </div>
      </div>

      {/* 설명 */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          What is a URL slug?
        </h2>

        <div className="mt-4 space-y-3 text-gray-300">
          <p>
            A URL slug is the part of a URL that identifies a page using readable
            keywords. It helps both users and search engines understand the
            content of the page.
          </p>
          <p>
            Good slugs improve SEO, readability, and click-through rates in
            search results.
          </p>
        </div>
      </div>

      {/* 사용법 */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          How to use this slug generator
        </h2>

        <div className="mt-4 space-y-3 text-gray-300">
          <p>Paste your title or sentence into the input field.</p>
          <p>The tool automatically converts it into a clean SEO-friendly URL slug.</p>
          <p>Click copy to use it in your blog, website, or CMS.</p>
        </div>
      </div>
    </>
  );
}