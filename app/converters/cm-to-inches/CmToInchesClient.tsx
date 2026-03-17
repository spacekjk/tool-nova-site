"use client";

import { useMemo, useState } from "react";

export default function CmToInchesClient() {
  const [cm, setCm] = useState("");

  const inches = useMemo(() => {
    const value = parseFloat(cm);
    if (isNaN(value)) return "";
    return (value / 2.54).toFixed(4);
  }, [cm]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">Cm to Inches Converter</h1>
      <p className="mt-3 text-white/70">
        Convert centimeters into inches instantly.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <input
          type="number"
          value={cm}
          onChange={(e) => setCm(e.target.value)}
          placeholder="Centimeters"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
        <input
          type="text"
          value={inches}
          readOnly
          placeholder="Inches"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
      </section>
    </main>
  );
}