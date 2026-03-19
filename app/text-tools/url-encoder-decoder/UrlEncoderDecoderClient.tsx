"use client";

import { useState } from "react";

function encodeURL(text: string) {
  try {
    return {
      result: encodeURIComponent(text),
      error: "",
    };
  } catch {
    return {
      result: "",
      error: "Failed to encode URL text.",
    };
  }
}

function decodeURL(text: string) {
  try {
    return {
      result: decodeURIComponent(text),
      error: "",
    };
  } catch {
    return {
      result: "",
      error: "Invalid encoded URL. Please check your text and try again.",
    };
  }
}

export default function UrlEncoderDecoderClient() {
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

    if (!input.trim()) {
      setError("Please enter text or a URL to encode.");
      setOutput("");
      return;
    }

    const { result, error } = encodeURL(input);

    if (error) {
      setError(error);
      setOutput("");
      return;
    }

    setOutput(result);
    setStatus("URL encoded successfully.");
  };

  const handleDecode = () => {
    clearMessages();

    if (!input.trim()) {
      setError("Please enter encoded URL text to decode.");
      setOutput("");
      return;
    }

    const { result, error } = decodeURL(input);

    if (error) {
      setError(error);
      setOutput("");
      return;
    }

    setOutput(result);
    setStatus("URL decoded successfully.");
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
    setInput("https://toolnova.com/search?q=word counter & category=text tools");
    setOutput("");
    setError("");
    setStatus("Sample URL inserted.");
  };

  const handleSampleEncoded = () => {
    setInput(
      "https%3A%2F%2Ftoolnova.com%2Fsearch%3Fq%3Dword%20counter%20%26%20category%3Dtext%20tools"
    );
    setOutput("");
    setError("");
    setStatus("Sample encoded URL inserted.");
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
            URL Encode
          </button>

          <button
            onClick={handleDecode}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            URL Decode
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
            Load URL Sample
          </button>

          <button
            onClick={handleSampleEncoded}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Load Encoded Sample
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

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col">
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
              placeholder="Paste text or URL here..."
              className="h-[340px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
            />
          </div>

          <div className="flex flex-col">
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
              placeholder="Encoded or decoded result will appear here."
              className="h-[340px] w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What this tool does</h2>
        <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
          <p>
            Encode URLs and query strings safely for use in links, forms, APIs,
            and browser requests.
          </p>
          <p>
            Decode encoded URL text back into a readable format so you can inspect
            parameters and values easily.
          </p>
          <p>
            This is useful for developers, marketers, SEO work, and debugging
            query strings online.
          </p>
        </div>
      </div>
    </>
  );
}