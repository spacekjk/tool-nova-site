"use client";

import { useMemo, useState } from "react";

function removeExtraSpaces(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function removeLineBreaks(text: string) {
  return text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
}

function removeEmptyLines(text: string) {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}

export default function RemoveExtraSpacesClient() {
  const [text, setText] = useState("");

  const result = useMemo(() => {
    return {
      noExtraSpaces: removeExtraSpaces(text),
      noLineBreaks: removeLineBreaks(text),
      noEmptyLines: removeEmptyLines(text),
    };
  }, [text]);

  const handleSample = () => {
    setText(
      "This   is   a   text   with   extra spaces.\n\n\nAnd multiple line breaks.\n\nIt needs cleaning."
    );
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
            Paste your text
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={12}
            placeholder="Paste messy text here..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
          />
        </div>

        <div className="mt-8 grid gap-4">

          {/* Remove extra spaces */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">
                Remove Extra Spaces
              </h2>

              <button
                onClick={() => handleCopy(result.noExtraSpaces)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-black/40"
              >
                Copy
              </button>
            </div>

            <p className="mt-4 text-gray-300 break-words">
              {result.noExtraSpaces || "Result will appear here"}
            </p>
          </div>

          {/* Remove line breaks */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">
                Remove Line Breaks
              </h2>

              <button
                onClick={() => handleCopy(result.noLineBreaks)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-black/40"
              >
                Copy
              </button>
            </div>

            <p className="mt-4 text-gray-300 break-words">
              {result.noLineBreaks || "Result will appear here"}
            </p>
          </div>

          {/* Remove empty lines */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">
                Remove Empty Lines
              </h2>

              <button
                onClick={() => handleCopy(result.noEmptyLines)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-black/40"
              >
                Copy
              </button>
            </div>

            <p className="mt-4 text-gray-300 break-words whitespace-pre-wrap">
              {result.noEmptyLines || "Result will appear here"}
            </p>
          </div>

        </div>
      </div>

      {/* 설명 */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          Clean up messy text instantly
        </h2>

        <div className="mt-4 space-y-3 text-gray-300">
          <p>
            This tool removes unnecessary spaces, line breaks, and empty lines from your text.
          </p>
          <p>
            It is useful for cleaning copied content, formatting text, and preparing data for documents or code.
          </p>
        </div>
      </div>

      {/* 사용법 */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          How to use this tool
        </h2>

        <div className="mt-4 space-y-3 text-gray-300">
          <p>Paste your messy text into the input box.</p>
          <p>Select the type of cleaning you want.</p>
          <p>Copy the cleaned result instantly.</p>
        </div>
      </div>
    </>
  );
}