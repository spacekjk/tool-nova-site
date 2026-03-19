"use client";

import { useMemo, useRef, useState } from "react";
import { diffChars, diffLines, diffWords, type Change } from "diff";

type DiffMode = "line" | "word" | "char";
type RowType = "same" | "added" | "removed" | "changed";

type SideBySideRow = {
  left: string;
  right: string;
  type: RowType;
};

function normalizeText(
  text: string,
  options: { ignoreCase: boolean; ignoreWhitespace: boolean }
) {
  let result = text;

  if (options.ignoreWhitespace) {
    result = result
      .split("\n")
      .map((line) => line.trim().replace(/\s+/g, " "))
      .join("\n");
  }

  if (options.ignoreCase) {
    result = result.toLowerCase();
  }

  return result;
}

function getDiffParts(
  left: string,
  right: string,
  mode: DiffMode,
  options: { ignoreCase: boolean; ignoreWhitespace: boolean }
) {
  const normalizedLeft = normalizeText(left, options);
  const normalizedRight = normalizeText(right, options);

  if (mode === "line") {
    return diffLines(normalizedLeft, normalizedRight);
  }

  if (mode === "word") {
    return diffWords(normalizedLeft, normalizedRight);
  }

  return diffChars(normalizedLeft, normalizedRight);
}

function getSummary(parts: Change[]) {
  let addedChars = 0;
  let removedChars = 0;
  let unchangedChars = 0;

  for (const part of parts) {
    const len = part.value.length;

    if (part.added) addedChars += len;
    else if (part.removed) removedChars += len;
    else unchangedChars += len;
  }

  return {
    addedChars,
    removedChars,
    unchangedChars,
  };
}

function buildSideBySideRows(parts: Change[]) {
  const rows: SideBySideRow[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (!part.added && !part.removed) {
      const sameLines = part.value.split("\n");

      for (let j = 0; j < sameLines.length; j++) {
        const line = sameLines[j];

        if (j === sameLines.length - 1 && line === "") continue;

        rows.push({
          left: line,
          right: line,
          type: "same",
        });
      }

      continue;
    }

    if (part.removed) {
      const next = parts[i + 1];

      if (next?.added) {
        const removedLines = part.value.split("\n");
        const addedLines = next.value.split("\n");
        const maxLen = Math.max(removedLines.length, addedLines.length);

        for (let j = 0; j < maxLen; j++) {
          const left = removedLines[j] ?? "";
          const right = addedLines[j] ?? "";

          if (j === maxLen - 1 && left === "" && right === "") {
            continue;
          }

          rows.push({
            left,
            right,
            type: "changed",
          });
        }

        i++;
        continue;
      }

      const removedLines = part.value.split("\n");

      for (let j = 0; j < removedLines.length; j++) {
        const line = removedLines[j];

        if (j === removedLines.length - 1 && line === "") continue;

        rows.push({
          left: line,
          right: "",
          type: "removed",
        });
      }

      continue;
    }

    if (part.added) {
      const addedLines = part.value.split("\n");

      for (let j = 0; j < addedLines.length; j++) {
        const line = addedLines[j];

        if (j === addedLines.length - 1 && line === "") continue;

        rows.push({
          left: "",
          right: line,
          type: "added",
        });
      }
    }
  }

  return rows;
}

function countLineStats(rows: SideBySideRow[]) {
  let addedLines = 0;
  let removedLines = 0;
  let changedLines = 0;
  let sameLines = 0;

  for (const row of rows) {
    if (row.type === "added") addedLines++;
    else if (row.type === "removed") removedLines++;
    else if (row.type === "changed") changedLines++;
    else sameLines++;
  }

  return {
    addedLines,
    removedLines,
    changedLines,
    sameLines,
  };
}

function getRowClassName(type: RowType) {
  if (type === "added") return "bg-green-500/10";
  if (type === "removed") return "bg-red-500/10";
  if (type === "changed") return "bg-yellow-500/10";
  return "bg-white/[0.02]";
}

function readFileAsText(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve((event.target?.result as string) || "");
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file."));
    };

    reader.readAsText(file);
  });
}

function buildCopyableDiff(parts: Change[]) {
  return parts
    .map((part) => {
      if (part.added) return `[ADDED] ${part.value}`;
      if (part.removed) return `[REMOVED] ${part.value}`;
      return part.value;
    })
    .join("");
}

function buildUnifiedPreview(parts: Change[]) {
  return parts
    .map((part) => {
      if (part.added) return `+ ${part.value}`;
      if (part.removed) return `- ${part.value}`;
      return `  ${part.value}`;
    })
    .join("");
}

export default function TextCompareClient() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [mode, setMode] = useState<DiffMode>("line");
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [leftFileName, setLeftFileName] = useState("");
  const [rightFileName, setRightFileName] = useState("");

  const leftPaneRef = useRef<HTMLDivElement | null>(null);
  const rightPaneRef = useRef<HTMLDivElement | null>(null);
  const syncingRef = useRef(false);

  const diffParts = useMemo(() => {
    if (!leftText && !rightText) return [];

    return getDiffParts(leftText, rightText, mode, {
      ignoreCase,
      ignoreWhitespace,
    });
  }, [leftText, rightText, mode, ignoreCase, ignoreWhitespace]);

  const summary = useMemo(() => getSummary(diffParts), [diffParts]);

  const sideBySideRows = useMemo(() => {
    if (mode !== "line") return [];
    return buildSideBySideRows(diffParts);
  }, [diffParts, mode]);

  const lineStats = useMemo(() => {
    if (mode !== "line") {
      return {
        addedLines: 0,
        removedLines: 0,
        changedLines: 0,
        sameLines: 0,
      };
    }

    return countLineStats(sideBySideRows);
  }, [mode, sideBySideRows]);

  const inlineOutput = useMemo(() => {
    return diffParts.map((part, index) => {
      const className = part.added
        ? "bg-green-500/20 text-green-200"
        : part.removed
          ? "bg-red-500/20 text-red-200 line-through"
          : "text-gray-200";

      return (
        <span
          key={`${index}-${part.value}`}
          className={`${className} whitespace-pre-wrap rounded px-1 py-0.5`}
        >
          {part.value}
        </span>
      );
    });
  }, [diffParts]);

  const unifiedPreview = useMemo(() => {
    return buildUnifiedPreview(diffParts);
  }, [diffParts]);

  const clearMessages = () => {
    setStatus("");
    setError("");
  };

  const handleCopyResult = async () => {
    clearMessages();

    if (!diffParts.length) {
      setError("Nothing to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(buildCopyableDiff(diffParts));
      setStatus("Diff result copied to clipboard.");
    } catch {
      setError("Failed to copy result.");
    }
  };

  const handleCopyUnified = async () => {
    clearMessages();

    if (!diffParts.length) {
      setError("Nothing to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(unifiedPreview);
      setStatus("Unified diff preview copied.");
    } catch {
      setError("Failed to copy unified preview.");
    }
  };

  const handleClear = () => {
    setLeftText("");
    setRightText("");
    setLeftFileName("");
    setRightFileName("");
    setStatus("");
    setError("");
  };

  const handleSample = () => {
    setLeftText(`Tool Nova helps users compare text files.
It supports line comparison.
It also makes reviewing edits easier.
This sentence will be removed.
JSON formatting is already available.`);
    setRightText(`Tool Nova helps users compare text files.
It supports advanced line comparison.
It also makes reviewing edits much easier.
This sentence is newly added.
JSON formatting is already available.
Text Compare now includes file upload support.`);
    setLeftFileName("");
    setRightFileName("");
    setError("");
    setStatus("Sample text loaded.");
  };

  const handleLongSample = () => {
    setLeftText(`Version 1 Release Notes

- Added JSON formatter
- Added minify feature
- Added validate feature
- Added sort keys feature

Users can paste raw JSON and clean it instantly.
The interface is simple and fast.
This line will be deleted later.
Footer text stays unchanged.`);
    setRightText(`Version 2 Release Notes

- Added JSON formatter
- Added minify feature
- Added validate feature
- Added sort keys feature
- Added advanced text compare feature

Users can paste raw JSON and clean it instantly.
The interface is faster and easier to scan.
This is a brand new line.
Footer text stays unchanged.`);
    setLeftFileName("");
    setRightFileName("");
    setError("");
    setStatus("Long sample text loaded.");
  };

  const handleUploadLeft = async (file: File) => {
    try {
      clearMessages();
      const text = await readFileAsText(file);
      setLeftText(text);
      setLeftFileName(file.name);
      setStatus(`Loaded left file: ${file.name}`);
    } catch {
      setError("Failed to load left file.");
    }
  };

  const handleUploadRight = async (file: File) => {
    try {
      clearMessages();
      const text = await readFileAsText(file);
      setRightText(text);
      setRightFileName(file.name);
      setStatus(`Loaded right file: ${file.name}`);
    } catch {
      setError("Failed to load right file.");
    }
  };

  const syncScroll = (
    source: HTMLDivElement | null,
    target: HTMLDivElement | null
  ) => {
    if (!source || !target) return;
    if (syncingRef.current) return;

    syncingRef.current = true;
    target.scrollTop = source.scrollTop;
    target.scrollLeft = source.scrollLeft;

    requestAnimationFrame(() => {
      syncingRef.current = false;
    });
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSample}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Load Sample
          </button>

          <button
            onClick={handleLongSample}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Load Long Sample
          </button>

          <button
            onClick={handleCopyResult}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Copy Result
          </button>

          <button
            onClick={handleCopyUnified}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Copy Unified
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-black/30"
          >
            Clear
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-2">
            {(["line", "word", "char"] as DiffMode[]).map((item) => (
              <button
                key={item}
                onClick={() => {
                  setMode(item);
                  clearMessages();
                }}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  mode === item
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item === "line"
                  ? "Line Diff"
                  : item === "word"
                    ? "Word Diff"
                    : "Char Diff"}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white">
            <input
              type="checkbox"
              checked={ignoreCase}
              onChange={(e) => setIgnoreCase(e.target.checked)}
            />
            Ignore case
          </label>

          <label className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white">
            <input
              type="checkbox"
              checked={ignoreWhitespace}
              onChange={(e) => setIgnoreWhitespace(e.target.checked)}
            />
            Ignore whitespace
          </label>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {!error && status && (
          <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-300">
            {status}
          </div>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="mb-3 flex min-h-[40px] items-center justify-between">
              <label className="text-sm text-white/80">Original Text</label>
              <span className="text-xs text-white/50">
                {leftText.length.toLocaleString()} chars
              </span>
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <label className="cursor-pointer rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-black/30">
                Upload Left File
                <input
                  type="file"
                  accept=".txt,.md,.json,.csv"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) void handleUploadLeft(file);
                  }}
                />
              </label>

              {leftFileName ? (
                <span className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/70">
                  {leftFileName}
                </span>
              ) : null}
            </div>

            <textarea
              value={leftText}
              onChange={(e) => {
                setLeftText(e.target.value);
                clearMessages();
              }}
              placeholder="Paste original text here..."
              className="h-[320px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-mono text-white outline-none focus:border-white/25"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-3 flex min-h-[40px] items-center justify-between">
              <label className="text-sm text-white/80">Updated Text</label>
              <span className="text-xs text-white/50">
                {rightText.length.toLocaleString()} chars
              </span>
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <label className="cursor-pointer rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-black/30">
                Upload Right File
                <input
                  type="file"
                  accept=".txt,.md,.json,.csv"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) void handleUploadRight(file);
                  }}
                />
              </label>

              {rightFileName ? (
                <span className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/70">
                  {rightFileName}
                </span>
              ) : null}
            </div>

            <textarea
              value={rightText}
              onChange={(e) => {
                setRightText(e.target.value);
                clearMessages();
              }}
              placeholder="Paste updated text here..."
              className="h-[320px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-mono text-white outline-none focus:border-white/25"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">Added Characters</p>
            <p className="mt-2 text-2xl font-semibold text-green-300">
              {summary.addedChars.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">Removed Characters</p>
            <p className="mt-2 text-2xl font-semibold text-red-300">
              {summary.removedChars.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">Changed Lines</p>
            <p className="mt-2 text-2xl font-semibold text-yellow-300">
              {mode === "line" ? lineStats.changedLines.toLocaleString() : "-"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/60">Unchanged</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {summary.unchangedChars.toLocaleString()}
            </p>
          </div>
        </div>

        {mode === "line" && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/60">Added Lines</p>
              <p className="mt-2 text-xl font-semibold text-green-300">
                {lineStats.addedLines.toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/60">Removed Lines</p>
              <p className="mt-2 text-xl font-semibold text-red-300">
                {lineStats.removedLines.toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/60">Changed Lines</p>
              <p className="mt-2 text-xl font-semibold text-yellow-300">
                {lineStats.changedLines.toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/60">Same Lines</p>
              <p className="mt-2 text-xl font-semibold text-white">
                {lineStats.sameLines.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Diff Result</h2>
            <span className="text-sm text-white/50">
              Mode: {mode.toUpperCase()}
            </span>
          </div>

          {mode === "line" ? (
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-2 border-b border-white/10 bg-black/30">
                <div className="px-4 py-3 text-sm font-medium text-white/70">
                  Original
                </div>
                <div className="px-4 py-3 text-sm font-medium text-white/70">
                  Updated
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div
                  ref={leftPaneRef}
                  onScroll={() =>
                    syncScroll(leftPaneRef.current, rightPaneRef.current)
                  }
                  className="max-h-[520px] overflow-auto border-r border-white/10"
                >
                  {sideBySideRows.length ? (
                    sideBySideRows.map((row, index) => (
                      <div
                        key={`left-${index}-${row.left}-${row.right}`}
                        className={`border-b border-white/5 px-4 py-3 font-mono text-sm whitespace-pre-wrap ${getRowClassName(
                          row.type
                        )}`}
                      >
                        {row.left || " "}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-sm text-white/50">
                      Enter text in both boxes to compare.
                    </div>
                  )}
                </div>

                <div
                  ref={rightPaneRef}
                  onScroll={() =>
                    syncScroll(rightPaneRef.current, leftPaneRef.current)
                  }
                  className="max-h-[520px] overflow-auto"
                >
                  {sideBySideRows.length ? (
                    sideBySideRows.map((row, index) => (
                      <div
                        key={`right-${index}-${row.left}-${row.right}`}
                        className={`border-b border-white/5 px-4 py-3 font-mono text-sm whitespace-pre-wrap ${getRowClassName(
                          row.type
                        )}`}
                      >
                        {row.right || " "}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-sm text-white/50">
                      Enter text in both boxes to compare.
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-h-[520px] overflow-auto rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-sm leading-7">
              {diffParts.length ? (
                <div className="whitespace-pre-wrap break-words">
                  {inlineOutput}
                </div>
              ) : (
                <div className="text-white/50">
                  Enter text in both boxes to compare.
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Unified Diff Preview
            </h2>
            <span className="text-sm text-white/50">
              Copy-friendly output
            </span>
          </div>

          <pre className="max-h-[320px] overflow-auto rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-sm leading-7 text-gray-200 whitespace-pre-wrap">
            {diffParts.length
              ? unifiedPreview
              : "Unified diff preview will appear here..."}
          </pre>
        </div>
      </div>
    </>
  );
}