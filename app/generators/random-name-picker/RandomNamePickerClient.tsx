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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Generator</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Random Name Picker
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Pick a random name instantly from a list of names. This free random
            name picker is useful for classrooms, giveaways, team selection,
            raffles, and decision-making.
          </p>
        </div>

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
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this random name picker works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Enter a list of names, either one name per line or separated by
              commas. The tool will randomly choose one name from the list.
            </p>
            <p>
              This is useful for classroom participation, raffles, giveaways,
              team assignments, and fair random selection.
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
                How do I use the random name picker?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Enter your list of names into the box, then click the button to
                choose one name at random.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Can I paste multiple names at once?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. You can paste names separated by lines or commas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this random name picker free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this random name picker online for free
                with no sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}