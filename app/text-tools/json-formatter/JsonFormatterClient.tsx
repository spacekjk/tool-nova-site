"use client";

import { useState } from "react";

type JsonErrorInfo = {
  message: string;
  position: number | null;
  line: number | null;
  column: number | null;
};

function getLineAndColumn(text: string, position: number) {
  const safePosition = Math.max(0, Math.min(position, text.length));
  const before = text.slice(0, safePosition);
  const lines = before.split("\n");

  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1,
  };
}

function parseJsonError(error: unknown, input: string): JsonErrorInfo {
  const fallback: JsonErrorInfo = {
    message: "Invalid JSON.",
    position: null,
    line: null,
    column: null,
  };

  if (!(error instanceof Error)) {
    return fallback;
  }

  const message = error.message || "Invalid JSON.";
  const positionMatch = message.match(/position\s+(\d+)/i);

  if (!positionMatch) {
    return {
      message,
      position: null,
      line: null,
      column: null,
    };
  }

  const position = Number(positionMatch[1]);

  if (Number.isNaN(position)) {
    return {
      message,
      position: null,
      line: null,
      column: null,
    };
  }

  const { line, column } = getLineAndColumn(input, position);

  return {
    message,
    position,
    line,
    column,
  };
}

function sortJsonKeysDeep(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortJsonKeysDeep);
  }

  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, val]) => [key, sortJsonKeysDeep(val)]);

    return Object.fromEntries(entries);
  }

  return value;
}

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<JsonErrorInfo | null>(null);
  const [status, setStatus] = useState("");

  const clearMessages = () => {
    setError(null);
    setStatus("");
  };

  const parseInputJson = () => {
    if (!input.trim()) {
      setError({
        message: "Please enter JSON first.",
        position: null,
        line: null,
        column: null,
      });
      setOutput("");
      return null;
    }

    try {
      clearMessages();
      return JSON.parse(input);
    } catch (err) {
      setError(parseJsonError(err, input));
      setOutput("");
      return null;
    }
  };

  const formatJSON = () => {
    const parsed = parseInputJson();
    if (parsed === null) return;

    const formatted = JSON.stringify(parsed, null, 2);
    setOutput(formatted);
    setStatus("JSON formatted successfully.");
  };

  const minifyJSON = () => {
    const parsed = parseInputJson();
    if (parsed === null) return;

    const minified = JSON.stringify(parsed);
    setOutput(minified);
    setStatus("JSON minified successfully.");
  };

  const validateJSON = () => {
    const parsed = parseInputJson();
    if (parsed === null) return;

    setOutput("");
    setStatus("Valid JSON ✅");
  };

  const sortKeysJSON = () => {
    const parsed = parseInputJson();
    if (parsed === null) return;

    const sorted = sortJsonKeysDeep(parsed);
    const formatted = JSON.stringify(sorted, null, 2);
    setOutput(formatted);
    setStatus("JSON keys sorted successfully.");
  };

  const sortAndMinifyJSON = () => {
    const parsed = parseInputJson();
    if (parsed === null) return;

    const sorted = sortJsonKeysDeep(parsed);
    const minified = JSON.stringify(sorted);
    setOutput(minified);
    setStatus("JSON keys sorted and minified successfully.");
  };

  const handleCopy = async () => {
    clearMessages();

    if (!output) {
      setError({
        message: "Nothing to copy.",
        position: null,
        line: null,
        column: null,
      });
      return;
    }

    await navigator.clipboard.writeText(output);
    setStatus("Copied to clipboard.");
  };

  const handleDownload = () => {
    clearMessages();

    if (!output) {
      setError({
        message: "Nothing to download.",
        position: null,
        line: null,
        column: null,
      });
      return;
    }

    const blob = new Blob([output], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setStatus("JSON downloaded successfully.");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
    setStatus("");
  };

  const handleSample = () => {
    const sample = `{"name":"Tool Nova","type":"json formatter","features":["format","minify","validate"],"active":true}`;
    setInput(sample);
    setOutput("");
    setError(null);
    setStatus("Sample JSON loaded.");
  };

  const handleBadSample = () => {
    const badSample = `{
  "name": "Tool Nova",
  "type": "json formatter",
  "features": ["format", "minify", "validate"
  "active": true
}`;
    setInput(badSample);
    setOutput("");
    setError(null);
    setStatus("Invalid sample JSON loaded.");
  };

  const handleComplexSample = () => {
    const complexSample = `{
  "zebra": 1,
  "alpha": {
    "delta": true,
    "beta": "test",
    "array": [
      { "name": "B", "id": 2 },
      { "name": "A", "id": 1 }
    ]
  },
  "middle": ["x", "y", "z"]
}`;
    setInput(complexSample);
    setOutput("");
    setError(null);
    setStatus("Complex sample JSON loaded.");
  };

  const handleUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result as string;
      setInput(text);
      setOutput("");
      setError(null);
      setStatus("File loaded.");
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={formatJSON}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Format JSON
          </button>

          <button
            onClick={minifyJSON}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Minify
          </button>

          <button
            onClick={validateJSON}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Validate
          </button>

          <button
            onClick={sortKeysJSON}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Sort Keys
          </button>

          <button
            onClick={sortAndMinifyJSON}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Sort + Minify
          </button>

          <button
            onClick={handleSample}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Load Sample
          </button>

          <button
            onClick={handleComplexSample}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Load Complex Sample
          </button>

          <button
            onClick={handleBadSample}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Load Invalid Sample
          </button>

          <label className="cursor-pointer rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30">
            Upload JSON
            <input
              type="file"
              accept=".json"
              hidden
              onChange={(e) => {
                if (e.target.files?.[0]) handleUpload(e.target.files[0]);
              }}
            />
          </label>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
            <p className="font-medium">Invalid JSON ❌</p>
            <p className="mt-2 text-sm leading-6">{error.message}</p>

            {error.line !== null && error.column !== null ? (
              <p className="mt-2 text-sm text-red-200">
                Error location: line {error.line}, column {error.column}
                {error.position !== null ? ` (position ${error.position})` : ""}
              </p>
            ) : null}
          </div>
        )}

        {!error && status && (
          <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-300">
            {status}
          </div>
        )}

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="mb-3 flex min-h-[40px] items-center justify-between">
              <label className="text-sm text-white/80">Input JSON</label>
              <div />
            </div>

            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(null);
                setStatus("");
              }}
              placeholder="Paste JSON here..."
              className="h-[360px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-mono text-white outline-none focus:border-white/25"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-3 flex min-h-[40px] items-center justify-between">
              <label className="text-sm text-white/80">Output</label>

              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-black/30"
                >
                  Copy
                </button>

                <button
                  onClick={handleDownload}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-black/30"
                >
                  Download
                </button>
              </div>
            </div>

            <textarea
              value={output}
              readOnly
              placeholder="Formatted JSON will appear here..."
              className="h-[360px] w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 font-mono text-white outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What this tool does</h2>
        <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
          <p>
            Format raw JSON into clean, readable output with proper indentation
            for debugging, editing, and documentation.
          </p>
          <p>
            Minify JSON by removing spaces and line breaks to create compact
            output for production use.
          </p>
          <p>
            Validate JSON instantly and show the error location when the syntax
            is invalid.
          </p>
          <p>
            Sort JSON object keys alphabetically to make diffs, reviews, and
            comparisons easier.
          </p>
        </div>
      </div>
    </>
  );
}