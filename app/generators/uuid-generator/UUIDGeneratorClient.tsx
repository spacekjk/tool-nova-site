"use client";

import { useState } from "react";

function makeUUID() {
  return crypto.randomUUID();
}

export default function UUIDGeneratorClient() {
  const [uuid, setUuid] = useState(makeUUID());

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">UUID Generator</h1>
      <p className="mt-3 text-white/70">
        Generate a random UUID instantly for development and testing.
      </p>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 break-all">
          {uuid}
        </div>
        <button
          onClick={() => setUuid(makeUUID())}
          className="mt-4 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
        >
          Generate New UUID
        </button>
      </section>
    </main>
  );
}