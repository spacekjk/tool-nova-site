"use client";

import { useState } from "react";

export default function CharacterCounter() {

  const [text, setText] = useState("");

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <section className="mx-auto max-w-4xl px-6 py-14">

        <p className="text-sm text-white/60">
          Free Online Text Tool
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Character Counter
        </h1>

        <p className="mt-4 text-white/70">
          Count characters, words, and sentences instantly. This free
          character counter helps you analyze text for writing, social media,
          and essays.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

          <textarea
            rows={8}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />

          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/60">Characters</p>
              <p className="text-2xl font-bold">{characters}</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/60">
                Characters (No Spaces)
              </p>
              <p className="text-2xl font-bold">{charactersNoSpaces}</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/60">Words</p>
              <p className="text-2xl font-bold">{words}</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/60">Sentences</p>
              <p className="text-2xl font-bold">{sentences}</p>
            </div>

          </div>

        </div>

      </section>
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Related Tools</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="/text-tools/word-counter"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Word Counter
            </a>

            <a
              href="/text-tools/case-converter"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Case Converter
            </a>

            <a
              href="/text-tools/text-compare"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Text Compare
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}