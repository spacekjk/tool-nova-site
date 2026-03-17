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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Generator</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Random Number Generator
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Generate a random number between a minimum and maximum value
            instantly. This free random number generator is simple, fast, and
            useful for games, picking winners, classroom activities, and more.
          </p>
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

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this random number generator works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This tool generates a random whole number between the minimum and
              maximum values you choose.
            </p>
            <p>
              It is useful for choosing winners, rolling custom number ranges,
              classroom activities, decision-making, and simple games.
            </p>
            <p>
              Enter two whole numbers, then click the generate button to get a
              random result instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                Can I generate a random number between any two values?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Enter your minimum and maximum values, and the tool will
                generate a random whole number in that range.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this random number generator free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this generator online for free with no
                sign-up required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Does it generate decimal numbers?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                No. This version generates whole numbers only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}