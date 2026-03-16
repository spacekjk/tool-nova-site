"use client";

import { useMemo, useState } from "react";

export default function KgToLbsPage() {
  const [kg, setKg] = useState("");

  const result = useMemo(() => {
    const value = Number(kg);
    if (!kg || Number.isNaN(value) || value < 0) return null;

    const lbs = value * 2.2046226218;
    return Number(lbs.toFixed(2));
  }, [kg]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Converter</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Kg to Lbs Converter
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Convert kilograms to pounds instantly with this free online unit
            converter. Enter a weight in kilograms to get the result in pounds.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <label className="mb-2 block text-sm font-medium text-white/80">
            Weight in kilograms (kg)
          </label>
          <input
            type="number"
            min="0"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            placeholder="e.g. 70"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          />

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-2xl font-semibold">Result</h2>
            <p className="mt-3 text-3xl font-bold">
              {result !== null ? `${result} lbs` : "Enter a valid weight."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this kg to lbs converter works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This converter uses the standard conversion formula from kilograms
              to pounds.
            </p>
            <p>
              The formula is:
              <span className="ml-1 font-medium text-white">
                pounds = kilograms × 2.20462
              </span>
            </p>
            <p>
              For example, 70 kg is equal to about 154.32 lbs.
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
                How many pounds are in 1 kilogram?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                One kilogram is equal to about 2.20462 pounds.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Can I use this kg to lbs converter for free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this converter online for free with no
                sign-up required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this conversion accurate?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. The converter uses the standard kilogram to pound
                conversion factor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}