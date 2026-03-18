"use client";

import { useState } from "react";

export default function UrlEncoderDecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      setError("");
    } catch {
      setOutput("");
      setError("Unable to encode this text.");
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      setError("");
    } catch {
      setOutput("");
      setError("Invalid encoded URL string.");
    }
  };

  const handleSwap = () => {
    setInput(output);
    setOutput(input);
    setError("");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
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
              placeholder="Enter text or encoded URL..."
              rows={8}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleEncode}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Encode URL
            </button>

            <button
              onClick={handleDecode}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Decode URL
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

          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

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