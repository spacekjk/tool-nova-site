"use client";

import { useMemo, useRef, useState } from "react";

export default function RemoveLineBreaksPage() {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const cleanedText = useMemo(() => {
    if (!text) return "";
    return text.replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim();
  }, [text]);

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

  const handleClear = () => {
    setText("");
    setCopySuccess(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/plain" && !file.name.endsWith(".txt")) {
      alert("Please upload a .txt file only.");
      return;
    }

    try {
      const fileText = await file.text();
      setText(fileText);
    } catch (error) {
      console.error("File read failed:", error);
      alert("Failed to read the file.");
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Remove Line Breaks
        </h1>
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          Paste text or upload a .txt file to remove line breaks instantly.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <label className="text-sm font-medium text-white/80">
              Original Text
            </label>

            <button
              onClick={handleClear}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              Clear
            </button>
          </div>

          <textarea
            rows={14}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-white/25"
          />

          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/70">
              Upload .txt file
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,text/plain"
              onChange={handleFileUpload}
              className="block w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/70 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-sm file:text-white hover:file:bg-white/20"
            />
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <label className="text-sm font-medium text-white/80">Result</label>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleDownload}
                disabled={!cleanedText}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Download
              </button>

              <button
                onClick={handleCopy}
                disabled={!cleanedText}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
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
        </section>
      </div>
    </div>
  );
}
