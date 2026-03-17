"use client";

import { useMemo, useState } from "react";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomNumberGeneratorPage() {
  const [minValue, setMinValue] = useState("1");
  const [maxValue, setMaxValue] = useState("100");
  const [generated, setGenerated] = useState<number | null>(null);

  const validationMessage = useMemo(() => {
    const min = Number(minValue);
    const max = Number(maxValue);

    if (Number.isNaN(min) || Number.isNaN(max)) {
      return "Please enter valid numbers.";
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      return "Please enter whole numbers only.";
    }

    if (min > max) {
      return "Minimum value cannot be greater than maximum value.";
    }

    return null;
  }, [minValue, maxValue]);

  const handleGenerate = () => {
    const min = Number(minValue);
    const max = Number(maxValue);

    if (validationMessage) return;

    setGenerated(randomInt(min, max));
  };

  return (

    <section className="mx-auto max-w-4xl px-6 py-14">
      <div className="max-w-3xl">

      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Minimum value
            </label>
            <input
              type="number"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Maximum value
            </label>
            <input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={handleGenerate}
            className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            Generate Number
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
          {validationMessage ? (
            <p className="text-white/60">{validationMessage}</p>
          ) : generated !== null ? (
            <div>
              <h2 className="text-2xl font-semibold">Generated Number</h2>
              <p className="mt-3 text-4xl font-bold">{generated}</p>
            </div>
          ) : (
            <p className="text-white/60">
              Set your range and click the button to generate a random number.
            </p>
          )}
        </div>
      </div>
    </section>




  );
}