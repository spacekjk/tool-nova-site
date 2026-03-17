"use client";

import { useState } from "react";

export default function CharacterCounter() {

  const [text, setText] = useState("");

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;

  return (


    <section className="mx-auto max-w-4xl px-6 py-14">



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



  );
}