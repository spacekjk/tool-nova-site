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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Text Tool</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Word Counter
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Count words, characters, sentences, and paragraphs instantly. This
            free online word counter is useful for essays, blog posts, social
            media text, and general writing.
          </p>
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

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">How this word counter works</h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This online word counter analyzes your text and shows the total
              number of words, characters, sentences, and paragraphs in real
              time.
            </p>
            <p>
              It is useful for checking essay length, article word count, social
              media drafts, and writing assignments with strict limits.
            </p>
            <p>
              The reading time estimate is based on a typical reading speed of
              around 200 words per minute.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                How do I count words in a paragraph?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Paste the paragraph into the text box and the tool will count
                the words automatically.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Does this tool count characters too?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. It counts total characters, characters without spaces,
                sentences, paragraphs, and estimated reading time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Can I use this online word counter for free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this word counter online for free with
                no sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}