"use client";

import { useState } from "react";

function encodeBase64(text: string) {
  try {
    return {
      result: btoa(unescape(encodeURIComponent(text))),
      error: "",
    };
  } catch {
    return {
      result: "",
      error: "Failed to encode text to Base64.",
    };
  }
}

function decodeBase64(text: string) {
  try {
    return {
      result: decodeURIComponent(escape(atob(text))),
      error: "",
    };
  } catch {
    return {
      result: "",
      error: "Invalid Base64 input. Please check your text and try again.",
    };
  }
}

export default function Base64EncoderDecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const clearMessages = () => {
    setError("");
    setStatus("");
  };

  const handleEncode = () => {
    clearMessages();

    if (!input) {
      setError("Please enter text to encode.");
      setOutput("");
      return;
    }

    const { result, error } = encodeBase64(input);

    if (error) {
      setError(error);
      setOutput("");
      return;
    }

    setOutput(result);
    setStatus("Text encoded to Base64 successfully.");
  };

  const handleDecode = () => {
    clearMessages();

    if (!input) {
      setError("Please enter Base64 text to decode.");
      setOutput("");
      return;
    }

    const { result, error } = decodeBase64(input);

    if (error) {
      setError(error);
      setOutput("");
      return;
    }

    setOutput(result);
    setStatus("Base64 decoded successfully.");
  };

  const handleSwap = () => {
    clearMessages();
    setInput(output);
    setOutput(input);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
    setStatus("");
  };

  const handleSampleText = () => {
    setInput("Tool Nova makes online text tools fast and easy to use.");
    setOutput("");
    setError("");
    setStatus("Sample text inserted.");
  };

  const handleSampleBase64 = () => {
    setInput("VG9vbCBOb3ZhIG1ha2VzIG9ubGluZSB0ZXh0IHRvb2xzIGZhc3QgYW5kIGVhc3kgdG8gdXNlLg==");
    setOutput("");
    setError("");
    setStatus("Sample Base64 inserted.");
  };

  const handleCopyOutput = async () => {
    clearMessages();

    if (!output) {
      setError("There is no output to copy.");
      return;
    }

    await navigator.clipboard.writeText(output);
    setStatus("Output copied to clipboard.");
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={handleEncode}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Encode Base64
          </button>

          <button
            onClick={handleDecode}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Decode Base64
          </button>

          <button
            onClick={handleSwap}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Swap
          </button>

          <button
            onClick={handleSampleText}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Load Text Sample
          </button>

          <button
            onClick={handleSampleBase64}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Load Base64 Sample
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Clear
          </button>
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
            <label className="mb-3 block text-sm font-medium text-white/80">
              Input
            </label>

            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError("");
                setStatus("");
              }}
              placeholder="Paste plain text or Base64 here..."
              rows={14}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
            />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">Output</label>

              <button
                onClick={handleCopyOutput}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-black/40"
              >
                Copy Output
              </button>
            </div>

            <textarea
              value={output}
              readOnly
              placeholder="Encoded or decoded output will appear here."
              rows={14}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What this tool does</h2>
        <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
          <p>
            Encode plain text into Base64 format instantly for data transfer,
            storage, and testing.
          </p>
          <p>
            Decode Base64 text back into readable content when you need to inspect
            encoded values.
          </p>
          <p>
            This tool is useful for developers, API testing, debugging, and
            working with encoded strings online.
          </p>
        </div>
      </div>
    </>
  );
}