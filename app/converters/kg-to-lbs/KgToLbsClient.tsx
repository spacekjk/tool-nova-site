"use client";

import { useMemo, useState } from "react";

export default function KgToLbsClient() {
  const [kg, setKg] = useState("");

  const result = useMemo(() => {
    const value = Number(kg);
    if (!kg || Number.isNaN(value) || value < 0) return null;

    const lbs = value * 2.2046226218;
    return Number(lbs.toFixed(2));
  }, [kg]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
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
        <h2 className="text-2xl font-semibold text-white">Result</h2>
        <p className="mt-3 text-3xl font-bold text-white">
          {result !== null ? `${result} lbs` : "Enter a valid weight."}
        </p>
      </div>
    </div>
  );
}