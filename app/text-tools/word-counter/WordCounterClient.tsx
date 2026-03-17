"use client";

import { useMemo, useState } from "react";

function countWords(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function countCharacters(text: string) {
  return text.length;
}

function countCharactersNoSpaces(text: string) {
  return text.replace(/\s/g, "").length;
}

function countSentences(text: string) {
  const matches = text.match(/[^.!?]+[.!?]+/g);
  if (!matches) {
    return text.trim() ? 1 : 0;
  }
  return matches.length;
}

function countParagraphs(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\n\s*\n/).length;
}

function estimatedReadingTime(wordCount: number) {
  const minutes = wordCount / 200;
  if (minutes < 1) return "Less than 1 min";
  return `${Math.ceil(minutes)} min`;
}

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = countWords(text);
    const characters = countCharacters(text);
    const charactersNoSpaces = countCharactersNoSpaces(text);
    const sentences = countSentences(text);
    const paragraphs = countParagraphs(text);
    const readingTime = estimatedReadingTime(words);

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  return (

    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="max-w-3xl">

      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <label className="mb-3 block text-sm font-medium text-white/80">
          Enter or paste your text
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={10}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/55">Words</p>
            <p className="mt-2 text-3xl font-bold">{stats.words}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/55">Characters</p>
            <p className="mt-2 text-3xl font-bold">{stats.characters}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/55">Characters (No Spaces)</p>
            <p className="mt-2 text-3xl font-bold">
              {stats.charactersNoSpaces}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/55">Sentences</p>
            <p className="mt-2 text-3xl font-bold">{stats.sentences}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/55">Paragraphs</p>
            <p className="mt-2 text-3xl font-bold">{stats.paragraphs}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/55">Estimated Reading Time</p>
            <p className="mt-2 text-2xl font-semibold">{stats.readingTime}</p>
          </div>
        </div>
      </div>
    </section>




  );
}