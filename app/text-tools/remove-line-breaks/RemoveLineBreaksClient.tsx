"use client";

import { useMemo, useState } from "react";

export default function RemoveLineBreaksPage() {
  const [text, setText] = useState("");
  const [preserveParagraphs, setPreserveParagraphs] = useState(true);
  const [trimSpaces, setTrimSpaces] = useState(true);
  const [removeExtraSpaces, setRemoveExtraSpaces] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const cleanedText = useMemo(() => {
    if (!text) return "";

    let result = text.replace(/\r\n/g, "\n");

    if (preserveParagraphs) {
      // 빈 줄(문단 구분)은 유지하고, 문단 내부 줄바꿈만 공백으로 변환
      result = result
        .split(/\n\s*\n/g)
        .map((paragraph) => paragraph.replace(/\n+/g, " "))
        .join("\n\n");
    } else {
      // 모든 줄바꿈 제거
      result = result.replace(/\n+/g, " ");
    }

    if (removeExtraSpaces) {
      result = result.replace(/[ \t]+/g, " ");
    }

    if (trimSpaces) {
      result = result
        .split("\n")
        .map((line) => line.trim())
        .join("\n")
        .trim();
    }

    return result;
  }, [text, preserveParagraphs, trimSpaces, removeExtraSpaces]);

  const originalStats = useMemo(() => {
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const lines = text ? text.split(/\r?\n/).length : 0;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;

    return { chars, charsNoSpaces, lines, words };
  }, [text]);

  const resultStats = useMemo(() => {
    const chars = cleanedText.length;
    const charsNoSpaces = cleanedText.replace(/\s/g, "").length;
    const lines = cleanedText ? cleanedText.split(/\r?\n/).length : 0;
    const words = cleanedText.trim() ? cleanedText.trim().split(/\s+/).length : 0;

    return { chars, charsNoSpaces, lines, words };
  }, [cleanedText]);

  const handleCopy = async () => {
    if (!cleanedText) return;
    try {
      await navigator.clipboard.writeText(cleanedText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (error) {
      console.error("Paste failed:", error);
    }
  };

  const handleClear = () => {
    setText("");
    setCopySuccess(false);
  };

  const handleSample = () => {
    setText(`This is a sample text
with several line breaks
inside the same paragraph.

This is another paragraph
that should stay separated.

And this     line has     too many spaces.`);
  };

  const handleDownload = () => {
    if (!cleanedText) return;

    const blob = new Blob([cleanedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cleaned-text.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Remove Line Breaks
        </h1>
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          Clean pasted text instantly with paragraph control, whitespace cleanup,
          copy, paste, and download.
        </p>
      </div>

      <div className="mb-6 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2 xl:grid-cols-4">
        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <input
            type="checkbox"
            checked={preserveParagraphs}
            onChange={(e) => setPreserveParagraphs(e.target.checked)}
            className="h-4 w-4 accent-white"
          />
          <div>
            <p className="text-sm font-medium">Preserve paragraphs</p>
            <p className="text-xs text-white/50">
              Keep blank-line paragraph separation
            </p>
          </div>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <input
            type="checkbox"
            checked={removeExtraSpaces}
            onChange={(e) => setRemoveExtraSpaces(e.target.checked)}
            className="h-4 w-4 accent-white"
          />
          <div>
            <p className="text-sm font-medium">Collapse spaces</p>
            <p className="text-xs text-white/50">
              Remove repeated spaces and tabs
            </p>
          </div>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <input
            type="checkbox"
            checked={trimSpaces}
            onChange={(e) => setTrimSpaces(e.target.checked)}
            className="h-4 w-4 accent-white"
          />
          <div>
            <p className="text-sm font-medium">Trim edges</p>
            <p className="text-xs text-white/50">
              Remove leading and trailing spaces
            </p>
          </div>
        </label>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <p className="text-sm font-medium">Mode</p>
          <p className="text-xs text-white/50">
            {preserveParagraphs
              ? "Paragraph-aware cleanup"
              : "Single-line cleanup"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <label className="text-sm font-medium text-white/80">
              Original Text
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handlePaste}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Paste
              </button>
              <button
                onClick={handleSample}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Sample
              </button>
              <button
                onClick={handleClear}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Clear
              </button>
            </div>
          </div>

          <textarea
            rows={14}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text with line breaks here..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-white/25 focus:bg-black/40"
          />

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Chars" value={originalStats.chars} />
            <StatCard label="No spaces" value={originalStats.charsNoSpaces} />
            <StatCard label="Words" value={originalStats.words} />
            <StatCard label="Lines" value={originalStats.lines} />
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <label className="text-sm font-medium text-white/80">Result</label>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleDownload}
                disabled={!cleanedText}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Download
              </button>
              <button
                onClick={handleCopy}
                disabled={!cleanedText}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copySuccess ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="min-h-[332px] rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="whitespace-pre-wrap break-words text-white/85">
              {cleanedText || "Your cleaned text will appear here."}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Chars" value={resultStats.chars} />
            <StatCard label="No spaces" value={resultStats.charsNoSpaces} />
            <StatCard label="Words" value={resultStats.words} />
            <StatCard label="Lines" value={resultStats.lines} />
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-white/45">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
