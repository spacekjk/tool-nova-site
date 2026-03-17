"use client";

import { useMemo, useState } from "react";

type Mode = "findPercentage" | "whatIsXPercentOfY" | "percentageChange";

function roundTo(num: number, digits = 2) {
  return Number(num.toFixed(digits));
}

export default function PercentageCalculatorPage() {
  const [mode, setMode] = useState<Mode>("findPercentage");

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const result = useMemo(() => {
    const a = Number(value1);
    const b = Number(value2);

    if (!value1 || !value2 || Number.isNaN(a) || Number.isNaN(b)) {
      return null;
    }

    if (mode === "findPercentage") {
      if (b === 0) return "Cannot divide by zero.";
      return `${roundTo((a / b) * 100)}%`;
    }

    if (mode === "whatIsXPercentOfY") {
      return `${roundTo((a / 100) * b)}`;
    }

    if (mode === "percentageChange") {
      if (a === 0) return "Cannot calculate percentage change from zero.";
      return `${roundTo(((b - a) / a) * 100)}%`;
    }

    return null;
  }, [mode, value1, value2]);

  const helperText = useMemo(() => {
    if (mode === "findPercentage") {
      return "Find what percentage the first number is of the second number.";
    }
    if (mode === "whatIsXPercentOfY") {
      return "Find what X percent of Y is.";
    }
    return "Calculate the percentage increase or decrease from the first number to the second number.";
  }, [mode]);

  const label1 = useMemo(() => {
    if (mode === "findPercentage") return "First number";
    if (mode === "whatIsXPercentOfY") return "Percentage (%)";
    return "Original value";
  }, [mode]);

  const label2 = useMemo(() => {
    if (mode === "findPercentage") return "Second number";
    if (mode === "whatIsXPercentOfY") return "Total value";
    return "New value";
  }, [mode]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Choose calculation type
          </label>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          >
            <option value="findPercentage">What percentage is A of B?</option>
            <option value="whatIsXPercentOfY">What is X% of Y?</option>
            <option value="percentageChange">
              Percentage increase / decrease
            </option>
          </select>

          <p className="mt-4 text-sm leading-6 text-white/60">{helperText}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                {label1}
              </label>
              <input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter a number"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                {label2}
              </label>
              <input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Enter a number"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            {!value1 || !value2 ? (
              <p className="text-white/60">
                Enter both values to calculate the result.
              </p>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold">Result</h2>
                <p className="mt-3 text-3xl font-bold">
                  {result ?? "Enter valid values."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this percentage calculator works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This online percentage calculator supports three common
              calculations. You can find what percentage one number is of
              another, calculate a percentage of a value, or measure percentage
              increase and decrease.
            </p>
            <p>
              For example, if you want to know what percentage 25 is of 200, the
              formula is:
              <span className="ml-1 font-medium text-white">
                (25 ÷ 200) × 100 = 12.5%
              </span>
            </p>
            <p>
              If you want to calculate percentage change from 80 to 100, the
              formula is:
              <span className="ml-1 font-medium text-white">
                ((100 - 80) ÷ 80) × 100 = 25%
              </span>
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
                How do I calculate percentage?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Divide the part by the whole, then multiply by 100. This gives
                you the percentage value.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                How do I calculate percentage increase?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Subtract the original value from the new value, divide by the
                original value, and multiply by 100.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Can I use this percentage calculator for free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this percentage calculator online for
                free with no sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}