"use client";

import { useMemo, useState } from "react";

type Unit = "kg" | "lbs";

export default function WeightConverterClient() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<Unit>("kg");
  const [precision, setPrecision] = useState(2);
  const [copied, setCopied] = useState(false);

  const toUnit: Unit = fromUnit === "kg" ? "lbs" : "kg";

  const result = useMemo(() => {
    const numericValue = Number(value);

    if (value.trim() === "" || Number.isNaN(numericValue) || numericValue < 0) {
      return null;
    }

    const converted =
      fromUnit === "kg"
        ? numericValue * 2.2046226218
        : numericValue / 2.2046226218;

    return Number(converted.toFixed(precision));
  }, [value, fromUnit, precision]);

  const formulaText =
    fromUnit === "kg"
      ? "1 kilogram = 2.2046226218 pounds"
      : "1 pound = 0.45359237 kilograms";

  const handleSwap = () => {
    if (result !== null) {
      setValue(String(result));
    }
    setFromUnit((prev) => (prev === "kg" ? "lbs" : "kg"));
  };

  const handleClear = () => {
    setValue("");
    setCopied(false);
  };

  const handleExample = (example: string) => {
    setValue(example);
  };

  const handleCopy = async () => {
    if (result === null) return;

    try {
      await navigator.clipboard.writeText(`${result} ${toUnit}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const quickRows =
    fromUnit === "kg"
      ? [
          { input: 1, output: (1 * 2.2046226218).toFixed(2) },
          { input: 5, output: (5 * 2.2046226218).toFixed(2) },
          { input: 10, output: (10 * 2.2046226218).toFixed(2) },
          { input: 50, output: (50 * 2.2046226218).toFixed(2) },
          { input: 100, output: (100 * 2.2046226218).toFixed(2) },
        ]
      : [
          { input: 1, output: (1 / 2.2046226218).toFixed(2) },
          { input: 10, output: (10 / 2.2046226218).toFixed(2) },
          { input: 50, output: (50 / 2.2046226218).toFixed(2) },
          { input: 100, output: (100 / 2.2046226218).toFixed(2) },
          { input: 200, output: (200 / 2.2046226218).toFixed(2) },
        ];

  return (
    <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Weight Converter
        </h1>
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          Convert between kilograms and pounds instantly with a cleaner,
          service-style interface.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setFromUnit("kg")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                fromUnit === "kg"
                  ? "border border-white/20 bg-white/15 text-white"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              kg → lbs
            </button>

            <button
              type="button"
              onClick={() => setFromUnit("lbs")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                fromUnit === "lbs"
                  ? "border border-white/20 bg-white/15 text-white"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              lbs → kg
            </button>

            <button
              type="button"
              onClick={handleSwap}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Swap
            </button>
          </div>

          <label className="mb-2 block text-sm font-medium text-white/80">
            Enter weight in {fromUnit}
          </label>

          <div className="relative">
            <input
              type="number"
              min="0"
              step="any"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={fromUnit === "kg" ? "e.g. 70" : "e.g. 154.3"}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 pr-20 text-white outline-none transition focus:border-white/25"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/65">
              {fromUnit}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {fromUnit === "kg" ? (
              <>
                <button
                  type="button"
                  onClick={() => handleExample("50")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 hover:bg-white/10"
                >
                  50 kg
                </button>
                <button
                  type="button"
                  onClick={() => handleExample("70")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 hover:bg-white/10"
                >
                  70 kg
                </button>
                <button
                  type="button"
                  onClick={() => handleExample("100")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 hover:bg-white/10"
                >
                  100 kg
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleExample("100")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 hover:bg-white/10"
                >
                  100 lbs
                </button>
                <button
                  type="button"
                  onClick={() => handleExample("150")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 hover:bg-white/10"
                >
                  150 lbs
                </button>
                <button
                  type="button"
                  onClick={() => handleExample("200")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 hover:bg-white/10"
                >
                  200 lbs
                </button>
              </>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-white/45">
                Conversion
              </p>
              <p className="mt-2 text-sm text-white/75">{formulaText}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <label className="text-xs uppercase tracking-wide text-white/45">
                Decimal places
              </label>
              <select
                value={precision}
                onChange={(e) => setPrecision(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-white/25"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-sm font-medium text-white/70">Result</p>

            <div className="mt-4">
              {result !== null ? (
                <>
                  <p className="text-4xl font-bold tracking-tight text-white">
                    {result} {toUnit}
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    {value} {fromUnit} = {result} {toUnit}
                  </p>
                </>
              ) : (
                <p className="text-lg text-white/55">Enter a valid weight.</p>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                disabled={result === null}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied ? "Copied!" : "Copy"}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-white/75">
              Quick reference
            </p>

            <div className="mt-3 space-y-2">
              {quickRows.map((row) => (
                <div
                  key={row.input}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm"
                >
                  <span className="text-white/70">
                    {row.input} {fromUnit}
                  </span>
                  <span className="font-medium text-white">
                    {row.output} {toUnit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
