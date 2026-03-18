"use client";

import { useState } from "react";

function encodeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function decodeHtml(value: string) {
  if (typeof document === "undefined") return value;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

export default function HtmlEncoderDecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = () => {
    setOutput(encodeHtml(input));
  };

  const handleDecode = () => {
    setOutput(decodeHtml(input));
  };

  const handleSwap = () => {
    setInput(output);
    setOutput(input);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {}
  };

  return (
    <section className="mx-auto max-w-4xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter HTML or encoded entities..."
              rows={8}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleEncode}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Encode HTML
            </button>

            <button
              onClick={handleDecode}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Decode HTML
            </button>

            <button
              onClick={handleSwap}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Swap
            </button>

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
              Output
            </label>
            <textarea
              value={output}
              readOnly
              placeholder="Your result will appear here..."
              rows={8}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}