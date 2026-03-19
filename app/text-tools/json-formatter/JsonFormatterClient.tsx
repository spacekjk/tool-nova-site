"use client";

import { useMemo, useRef, useState } from "react";

type JsonAction = "format" | "minify" | "validate";

function parseJSON(input: string) {
  try {
    const parsed = JSON.parse(input);
    return {
      parsed,
      error: null as string | null,
    };
  } catch (error) {
    return {
      parsed: null,
      error: error instanceof Error ? error.message : "Invalid JSON.",
    };
  }
}

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const stats = useMemo(() => {
    const inputChars = input.length;
    const outputChars = output.length;
    const inputLines = input ? input.split("\n").length : 0;
    const outputLines = output ? output.split("\n").length : 0;

    return {
      inputChars,
      outputChars,
      inputLines,
      outputLines,
    };
  }, [input, output]);

  const clearMessages = () => {
    setError("");
    setStatus("");
    setIsCopied(false);
  };

  const runAction = (action: JsonAction) => {
    clearMessages();

    if (!input.trim()) {
      setError("Please paste or upload JSON first.");
      setOutput("");
      return;
    }

    const { parsed, error } = parseJSON(input);

    if (error || !parsed) {
      setError(error ?? "Invalid JSON.");
      setOutput("");
      return;
    }

    if (action === "format") {
      setOutput(JSON.stringify(parsed, null, 2));
      setStatus("JSON formatted successfully.");
      return;
    }

    if (action === "minify") {
      setOutput(JSON.stringify(parsed));
      setStatus("JSON minified successfully.");
      return;
    }

    if (action === "validate") {
      setOutput("");
      setStatus("Valid JSON ✅");
    }
  };

  const handleCopy = async () => {
    clearMessages();

    if (!output) {
      setError("There is no output to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);
      setIsCopied(true);
      setStatus("Copied to clipboard.");
    } catch {
      setError("Failed to copy output.");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
    setStatus("");
    setIsCopied(false);
  };

  const handleSample = () => {
    const sample = `{"user":{"name":"Tool Nova","role":"admin","active":true},"items":[{"id":1,"name":"Formatter"},{"id":2,"name":"Validator"}]}`;
    setInput(sample);
    setOutput("");
    setError("");
    setStatus("Sample JSON inserted.");
    setIsCopied(false);
  };

  const handleDownload = () => {
    clearMessages();

    if (!output) {
      setError("There is no output to download.");
      return;
    }

    const blob = new Blob([output], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "formatted.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setStatus("JSON file downloaded.");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearMessages();

    const file = event.target.files?.[0];
    if (!file) return;

    const isJsonLike =
      file.type === "application/json" ||
      file.name.toLowerCase().endsWith(".json") ||
      file.type === "";

    if (!isJsonLike) {
      setError("Please upload a valid .json file.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = (loadEvent) => {
      const text = loadEvent.target?.result;
      if (typeof text !== "string") {
        setError("Unable to read the uploaded file.");
        return;
      }

      setInput(text);
      setOutput("");
      setStatus(`Loaded file: ${file.name}`);
    };

    reader.onerror = () => {
      setError("Failed to read the uploaded file.");
    };

    reader.readAsText(file);
    event.target.value = "";
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={() => runAction("format")}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Format JSON
          </button>

          <button
            onClick={() => runAction("minify")}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Minify JSON
          </button>

          <button
            onClick={() => runAction("validate")}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Validate JSON
          </button>

          <button
            onClick={handleSample}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Load Sample
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Clear
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Upload JSON File
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        ) : null}

        {!error && status ? (
          <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300">
            {status}
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                Input JSON
              </label>
              <span className="text-xs text-white/45">
                {stats.inputLines} lines · {stats.inputChars} chars
              </span>
            </div>

            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError("");
                setStatus("");
                setIsCopied(false);
              }}
              placeholder='Paste JSON here, for example: {"name":"Tool Nova","active":true}'
              rows={18}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-mono text-sm text-white outline-none focus:border-white/25"
            />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                Output
              </label>
              <span className="text-xs text-white/45">
                {stats.outputLines} lines · {stats.outputChars} chars
              </span>
            </div>

            <textarea
              value={output}
              readOnly
              placeholder="Formatted or minified JSON output will appear here."
              rows={18}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 font-mono text-sm text-white outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleCopy}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            {isCopied ? "Copied!" : "Copy Output"}
          </button>

          <button
            onClick={handleDownload}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Download Output
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What this tool does</h2>
        <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
          <p>
            Format messy JSON into readable structured output with proper
            indentation.
          </p>
          <p>
            Validate JSON instantly and show an error message when the syntax is
            invalid.
          </p>
          <p>
            Minify JSON by removing extra spaces and line breaks to reduce file
            size.
          </p>
          <p>
            Upload a JSON file, edit it in the input box, then copy or download
            the result.
          </p>
        </div>
      </div>
    </>
  );
}