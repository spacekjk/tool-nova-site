"use client";

import { useMemo, useState } from "react";

type Gender = "any" | "male" | "female";
type Style = "modern" | "traditional" | "cute" | "neutral";
type SurnameKey = "none" | "kim" | "lee" | "park" | "choi" | "jung";

const surnames: Record<SurnameKey, string> = {
  none: "",
  kim: "Kim",
  lee: "Lee",
  park: "Park",
  choi: "Choi",
  jung: "Jung",
};

const maleNames = {
  modern: [
    "Seo-jun",
    "Do-yoon",
    "Ji-ho",
    "Min-jae",
    "Ye-jun",
    "Ha-joon",
    "Si-woo",
    "Eun-ho",
  ],
  traditional: [
    "Young-soo",
    "Jong-ho",
    "Dong-hyun",
    "Sung-min",
    "Kwang-ho",
    "Byung-ho",
    "Jae-won",
    "Hyun-woo",
  ],
  cute: [
    "Woo-joo",
    "Ha-neul",
    "Doo-ri",
    "Min-woo",
    "Ji-yul",
    "Seo-yul",
    "Jun-i",
    "Si-on",
  ],
  neutral: [
    "Ji-an",
    "Seo-yoon",
    "Ha-yoon",
    "Do-hyun",
    "Min-seo",
    "Jae-in",
    "Si-ho",
    "Ro-un",
  ],
};

const femaleNames = {
  modern: [
    "Seo-yeon",
    "Ji-woo",
    "Ha-yoon",
    "Min-seo",
    "Ye-rin",
    "Seo-ah",
    "Ji-an",
    "Na-eun",
  ],
  traditional: [
    "Young-hee",
    "Mi-sook",
    "Soo-jin",
    "Hye-jin",
    "Eun-jung",
    "Kyung-mi",
    "Sun-hee",
    "Bo-kyung",
  ],
  cute: [
    "Ha-rin",
    "Na-yul",
    "A-ra",
    "Bo-mi",
    "Da-on",
    "Seo-yul",
    "Ra-on",
    "Yu-na",
  ],
  neutral: [
    "Ji-an",
    "Ha-neul",
    "Seo-yoon",
    "Min-joo",
    "Ye-on",
    "Si-ah",
    "Da-on",
    "Ro-ah",
  ],
};

const meanings = [
  "bright and warm feeling",
  "soft and elegant sound",
  "modern and trendy style",
  "traditional Korean vibe",
  "cute and youthful tone",
  "balanced and gender-neutral feel",
];

function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function buildPool(gender: Gender, style: Style) {
  if (gender === "male") return maleNames[style];
  if (gender === "female") return femaleNames[style];

  return [...maleNames[style], ...femaleNames[style]];
}

export default function KoreanNameGeneratorClient() {
  const [gender, setGender] = useState<Gender>("any");
  const [style, setStyle] = useState<Style>("modern");
  const [surname, setSurname] = useState<SurnameKey>("kim");
  const [results, setResults] = useState<string[]>([]);

  const previewPool = useMemo(() => buildPool(gender, style), [gender, style]);

  const generateNames = () => {
    const pool = buildPool(gender, style);
    const picked = shuffle(pool).slice(0, 8);

    const fullNames = picked.map((name, index) => {
      const lastName = surnames[surname];
      const meaning = meanings[index % meanings.length];
      return lastName
        ? `${lastName} ${name} — ${meaning}`
        : `${name} — ${meaning}`;
    });

    setResults(fullNames);
  };

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value as Style)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              <option value="modern">Modern</option>
              <option value="traditional">Traditional</option>
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
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
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

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={generateNames}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Generate Korean Names
          </button>

          <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
            Preview pool: {previewPool.length} names
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
          <h2 className="text-xl font-semibold text-white">Generated Names</h2>

          {results.length === 0 ? (
            <p className="mt-3 text-white/60">
              No names generated yet. Choose your options and click the button.
            </p>
          ) : (
            <div className="mt-4 grid gap-3">
              {results.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-white/90">{item}</p>

                  <button
                    onClick={() => handleCopy(item)}
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-black/40"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          What is a Korean name generator?
        </h2>

        <div className="mt-4 space-y-3 text-gray-300">
          <p>
            A Korean name generator helps you create Korean-style names based on
            gender, surname, and naming style.
          </p>
          <p>
            It can be useful for writers, gamers, students, branding ideas, or
            anyone looking for Korean-inspired names.
          </p>
        </div>
      </div>
    </>
  );
}
