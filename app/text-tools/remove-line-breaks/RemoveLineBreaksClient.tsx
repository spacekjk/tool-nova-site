"use client";

import { useMemo, useState } from "react";

type ReplacementMode = "space" | "nothing" | "comma" | "custom";

function countWords(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function countLines(text: string) {
  return text ? text.split(/\r?\n/).length : 0;
}

export default function RemoveLineBreaksClient() {
  const [text, setText] = useState("");
  const [replacementMode, setReplacementMode] =
    useState<ReplacementMode>("space");
  const [customReplacement, setCustomReplacement] = useState(" ");
  const [preserveParagraphs, setPreserveParagraphs] = useState(true);
  const [trimSpaces, setTrimSpaces] = useState(true);
  const [copied, setCopied] = useState(false);

  const replacementText = useMemo(() => {
    switch (replacementMode) {
      case "space":
        return " ";
      case "nothing":
        return "";
      case "comma":
        return ", ";
      case "custom":
        return customReplacement;
      default:
        return " ";
    }
  }, [replacementMode, customReplacement]);

  const output = useMemo(() => {
    if (!text) return "";

    let result = text.replace(/\r\n/g, "\n");

    if (preserveParagraphs) {
      result = result
        .replace(/\n{2,}/g, "<<<PARAGRAPH_BREAK>>>")
        .replace(/\n/g, replacementText)
        .replace(/<<<PARAGRAPH_BREAK>>>/g, "\n\n");
    } else {
      result = result.replace(/\n+/g, replacementText);
    }

    if (trimSpaces) {
      result = result
        .replace(/[ \t]+/g, " ")
        .replace(/ *\n\n */g, "\n\n")
        .trim();
    }

    return result;
  }, [text, replacementText, preserveParagraphs, trimSpaces]);

  const inputStats = useMemo(() => {
    return {
      characters: text.length,
      words: countWords(text),
      lines: countLines(text),
    };
  }, [text]);

  const outputStats = useMemo(() => {
    return {
      characters: output.length,
      words: countWords(output),
      lines: countLines(output),
    };
  }, [output]);

  const handleCopy = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy output:", error);
    }
  };

  const handleClear = () => {
    setText("");
    setCopied(false);
  };

  const handleDownload = () => {
    if (!output) return;

    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "cleaned-text.txt";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const handleLoadSample = () => {
    setText(`This is line one.
This is line two.

This is a new paragraph copied from a PDF.
This should stay grouped together.`);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const fileText = await file.text();
      setText(fileText);
    } catch (error) {
      console.error("Failed to read file:", error);
    }

    event.target.value = "";
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Tool Options
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65 sm:text-base">
          Remove line breaks from copied text, PDF content, OCR output, or messy
          formatting. You can replace line breaks with a space, comma, nothing,
          or custom text.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Replace line breaks with
            </label>

            <select
              value={replacementMode}
              onChange={(e) =>
                setReplacementMode(e.target.value as ReplacementMode)
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/20"
            >
              <option value="space">Space</option>
              <option value="nothing">Nothing</option>
              <option value="comma">Comma + Space</option>
              <option value="custom">Custom</option>
            </select>

            {replacementMode === "custom" ? (
              <div className="mt-3">
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Custom replacement
                </label>
                <input
                  type="text"
                  value={customReplacement}
                  onChange={(e) => setCustomReplacement(e.target.value)}
                  placeholder="Enter replacement text"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/20"
                />
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <input
                type="checkbox"
                checked={preserveParagraphs}
                onChange={(e) => setPreserveParagraphs(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40"
              />
              <div>
                <div className="text-sm font-medium text-white">
                  Preserve paragraph breaks
                </div>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Keep empty-line paragraph spacing while removing single line
                  breaks inside paragraphs.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <input
                type="checkbox"
                checked={trimSpaces}
                onChange={(e) => setTrimSpaces(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40"
              />
              <div>
                <div className="text-sm font-medium text-white">
                  Trim extra spaces
                </div>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Collapse repeated spaces and clean up spacing after
                  transformation.
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleLoadSample}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black/30"
          >
            Load Sample
          </button>

          <label className="cursor-pointer rounded-2xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black/30">
            Upload .txt File
            <input
              type="file"
              accept=".txt,text/plain"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black/30"
          >
            Clear
          </button>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-white">Input</h2>
            <div className="text-xs text-white/55 sm:text-sm">
              {inputStats.characters} chars · {inputStats.words} words ·{" "}
              {inputStats.lines} lines
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type text with line breaks here..."
            className="min-h-[320px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-white/20"
          />
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-white">Output</h2>
            <div className="text-xs text-white/55 sm:text-sm">
              {outputStats.characters} chars · {outputStats.words} words ·{" "}
              {outputStats.lines} lines
            </div>
          </div>

          <textarea
            value={output}
            readOnly
            placeholder="Cleaned text will appear here..."
            className="min-h-[320px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-white/35"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!output}
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? "Copied!" : "Copy Output"}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              disabled={!output}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black/30 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Download TXT
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
