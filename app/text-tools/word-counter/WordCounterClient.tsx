"use client";

import { useMemo, useState } from "react";

function getWordCount(text: string) {
  const words = text.trim().match(/\S+/g);
  return words ? words.length : 0;
}

function getCharacterCount(text: string) {
  return text.length;
}

function getCharacterCountNoSpaces(text: string) {
  return text.replace(/\s/g, "").length;
}

function getSentenceCount(text: string) {
  const sentences = text
    .trim()
    .split(/[.!?]+/)
    .map((item) => item.trim())
    .filter(Boolean);
  return sentences.length;
}

function getParagraphCount(text: string) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
  return paragraphs.length;
}

function getReadingTimeMinutes(wordCount: number) {
  if (wordCount === 0) return 0;
  return Math.max(1, Math.ceil(wordCount / 200));
}

export default function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = getWordCount(text);
    const characters = getCharacterCount(text);
    const charactersNoSpaces = getCharacterCountNoSpaces(text);
    const sentences = getSentenceCount(text);
    const paragraphs = getParagraphCount(text);
    const readingTime = getReadingTimeMinutes(words);

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };

  const handleSample = () => {
    setText(
      "Tool Nova is a free online tools website.\n\nThis word counter helps you count words, characters, sentences, and paragraphs instantly. It is useful for essays, blog posts, assignments, and SEO writing."
    );
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={handleSample}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Load Sample
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Clear Text
          </button>

          <button
            onClick={handleCopy}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
          >
            Copy Text
          </button>
        </div>

        <div className="mt-8">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Enter or paste your text
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your essay, article, paragraph, or any text here..."
            rows={14}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/60">Words</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {stats.words}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/60">Characters</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {stats.characters}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/60">Characters (no spaces)</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {stats.charactersNoSpaces}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/60">Sentences</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {stats.sentences}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/60">Paragraphs</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {stats.paragraphs}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/60">Reading time</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {stats.readingTime} min
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What this tool counts</h2>
        <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
          <p>
            Count total words in essays, blog posts, assignments, articles, and
            other writing.
          </p>
          <p>
            Check character count with spaces and character count without spaces
            for writing limits and metadata fields.
          </p>
          <p>
            See sentence count, paragraph count, and estimated reading time in
            one place.
          </p>
          <p>
            This makes the tool useful for students, writers, marketers, and SEO
            work.
          </p>
        </div>
      </div>
    </>
  );
}