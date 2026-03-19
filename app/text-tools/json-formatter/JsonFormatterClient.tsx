"use client";

import { useMemo, useState } from "react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [indentSize, setIndentSize] = useState(2);

  const result = useMemo(() => {
    if (!input.trim()) {
      return {
        formatted: "",
        valid: null as boolean | null,
        error: "",
      };
    }

    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indentSize);

      return {
        formatted,
        valid: true,
        error: "",
      };
    } catch (error) {
      return {
        formatted: "",
        valid: false,
        error: error instanceof Error ? error.message : "Invalid JSON",
      };
    }
  }, [input, indentSize]);

  const handleCopy = async () => {
    if (!result.formatted) return;
    await navigator.clipboard.writeText(result.formatted);
  };

  const handleMinify = () => {
    if (!input.trim()) return;

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setInput(minified);
    } catch {
      // invalid JSON이면 아무것도 안 함
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (




    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <label className="text-sm font-medium text-white/80">
            Input JSON
          </label>

          <div className="flex items-center gap-3">
            <label className="text-sm text-white/70">Indent</label>
            <select
              value={indentSize}
              onChange={(e) => setIndentSize(Number(e.target.value))}
              className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
            </select>
          </div>
        </div>

        <textarea
          rows={16}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Paste JSON here, for example: {"name":"Tool Nova","type":"formatter"}'
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-mono text-sm text-white outline-none focus:border-white/25"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={handleMinify}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            Minify
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <label className="text-sm font-medium text-white/80">
            Formatted Output
          </label>

          <button
            onClick={handleCopy}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          {result.valid === null && (
            <p className="text-sm text-white/60">
              Paste JSON to validate and format it.
            </p>
          )}

          {result.valid === true && (
            <p className="text-sm font-medium text-green-400">
              Valid JSON
            </p>
          )}

          {result.valid === false && (
            <p className="text-sm font-medium text-red-400">
              Invalid JSON: {result.error}
            </p>
          )}
        </div>

        <div className="min-h-[360px] rounded-2xl border border-white/10 bg-black/20 p-4">
          <pre className="whitespace-pre-wrap break-words font-mono text-sm text-white/85">
            {result.formatted || "Formatted JSON will appear here."}
          </pre>
        </div>
      </div>
    </div>





  );
}