"use client";

import { useState } from "react";

export default function CmToInchesClient() {
  const [cm, setCm] = useState("");
  const [inches, setInches] = useState("");

  const handleCmChange = (value: string) => {
    setCm(value);

    const num = parseFloat(value);
    if (isNaN(num)) {
      setInches("");
      return;
    }

    setInches((num / 2.54).toFixed(4));
  };

  const handleInchesChange = (value: string) => {
    setInches(value);

    const num = parseFloat(value);
    if (isNaN(num)) {
      setCm("");
      return;
    }

    setCm((num * 2.54).toFixed(4));
  };

  const handleClear = () => {
    setCm("");
    setInches("");
  };

  return (
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">
          Cm ↔ Inches Converter
        </h2>

        <button
          onClick={handleClear}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
        >
          Clear
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="number"
          step="any"
          value={cm}
          onChange={(e) => handleCmChange(e.target.value)}
          placeholder="Centimeters (cm)"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />

        <input
          type="number"
          step="any"
          value={inches}
          onChange={(e) => handleInchesChange(e.target.value)}
          placeholder="Inches (in)"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />
      </div>
    </section>
  );
}
