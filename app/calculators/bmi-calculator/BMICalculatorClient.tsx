"use client";

import { useMemo, useState } from "react";

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

export default function BmiCalculatorPage() {
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const result = useMemo(() => {
    const height = Number(heightCm);
    const weight = Number(weightKg);

    if (!heightCm || !weightKg || Number.isNaN(height) || Number.isNaN(weight)) {
      return null;
    }

    if (height <= 0 || weight <= 0) {
      return null;
    }

    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    return {
      bmi: Number(bmi.toFixed(1)),
      category: getBmiCategory(bmi),
    };
  }, [heightCm, weightKg]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Height (cm)
              </label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="e.g. 170"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                placeholder="e.g. 65"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            {!heightCm || !weightKg ? (
              <p className="text-white/60">
                Enter your height and weight to calculate your BMI.
              </p>
            ) : result ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Your BMI Result</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">BMI</p>
                    <p className="mt-2 text-3xl font-bold">{result.bmi}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Category</p>
                    <p className="mt-2 text-2xl font-semibold">
                      {result.category}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-white/60">
                Please enter valid positive numbers.
              </p>
            )}
          </div>
        </div>
      </section>

      
      
    </main>
  );
}