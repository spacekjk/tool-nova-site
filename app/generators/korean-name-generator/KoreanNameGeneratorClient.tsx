"use client";

import { useMemo, useState } from "react";
import type { Gender, Style, SurnameKey } from "./nameData";
import {
  buildPool,
  pickBestNames,
  scoreName,
  surnameMap,
} from "./nameData";

type GeneratedResult = {
  fullName: string;
  naturalness: number;
  tags: string[];
  usage: string;
  vibe: string;
};

export default function KoreanNameGeneratorClient() {
  const [gender, setGender] = useState<Gender>("any");
  const [style, setStyle] = useState<Style>("modern");
  const [surname, setSurname] = useState<SurnameKey>("kim");
  const [results, setResults] = useState<GeneratedResult[]>([]);
  const [copied, setCopied] = useState("");

  const previewPool = useMemo(() => buildPool(gender, style), [gender, style]);

  const generateNames = () => {
    const pool = buildPool(gender, style);
    const picked = pickBestNames(pool, style, surname, 8);

    const generated = picked.map((entry) => {
      const surnameText = surnameMap[surname];
      const fullName = surnameText ? `${surnameText} ${entry.name}` : entry.name;

      return {
        fullName,
        naturalness: Math.min(99, Math.round(scoreName(entry, style, surname))),
        tags: entry.tags,
        usage: entry.usage,
        vibe: entry.vibe,
      };
    });

    setResults(generated);
  };

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  };

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          >
            <option value="any">Any</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Style
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          >
            <option value="modern">Modern</option>
            <option value="cute">Cute</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Surname
          </label>
          <select
            value={surname}
            onChange={(e) => setSurname(e.target.value as SurnameKey)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          >
            <option value="kim">Kim</option>
            <option value="lee">Lee</option>
            <option value="park">Park</option>
            <option value="choi">Choi</option>
            <option value="jung">Jung</option>
            <option value="none">No surname</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          onClick={generateNames}
          className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
        >
          Generate Korean Names
        </button>

        <p className="text-sm text-white/60">
          Available names: {previewPool.length}
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
        <h2 className="text-2xl font-semibold">Generated Names</h2>

        {results.length === 0 ? (
          <p className="mt-3 text-white/60">
            No names generated yet. Choose your options and click the button.
          </p>
        ) : (
          <div className="mt-4 grid gap-4">
            {results.map((item, index) => (
              <div
                key={`${item.fullName}-${index}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {item.fullName}
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Naturalness: {item.naturalness}/100
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Style: {item.vibe} · Usage: {item.usage}
                    </p>
                    <p className="mt-2 text-sm text-white/60">
                      {item.tags.join(", ")}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(item.fullName)}
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-black/40"
                  >
                    {copied === item.fullName ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <h2 className="text-xl font-semibold">How this works</h2>
        <div className="mt-3 space-y-2 text-white/70">
          <p>
            This tool filters Korean-style names by gender and style, then ranks
            them using a naturalness score.
          </p>
          <p>
            The score considers popularity, sound, style fit, and surname
            compatibility to surface more natural results first.
          </p>
          <p>
            It works well for character names, usernames, creative projects, and
            Korean-inspired naming ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
