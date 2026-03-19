"use client";

import { useMemo, useState } from "react";

function parseNames(text: string) {
  return text
    .split(/\r?\n|,/)
    .map((name) => name.trim())
    .filter(Boolean);
}

export default function RandomNamePickerPage() {
  const [input, setInput] = useState("");
  const [pickedName, setPickedName] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const names = useMemo(() => parseNames(input), [input]);

  const pickRandomName = () => {
    if (names.length === 0) return;

    const randomIndex = Math.floor(Math.random() * names.length);
    const selected = names[randomIndex];

    setPickedName(selected);
    setHistory((prev) => [selected, ...prev].slice(0, 10));
  };

  return (



    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <label className="mb-3 block text-sm font-medium text-white/80">
        Enter names (one per line or separated by commas)
      </label>

      <textarea
        rows={10}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Emma&#10;Liam&#10;Olivia&#10;Noah"
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
      />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          onClick={pickRandomName}
          className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
        >
          Pick Random Name
        </button>

        <p className="text-sm text-white/60">
          Total names: {names.length}
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
        <h2 className="text-2xl font-semibold">Selected Name</h2>
        <p className="mt-3 text-4xl font-bold">
          {pickedName || "No name selected yet."}
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <h2 className="text-xl font-semibold">Recent Picks</h2>

        {history.length === 0 ? (
          <p className="mt-3 text-white/60">No recent picks yet.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {history.map((name, index) => (
              <li key={`${name}-${index}`} className="text-white/80">
                {index + 1}. {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>





  );
}