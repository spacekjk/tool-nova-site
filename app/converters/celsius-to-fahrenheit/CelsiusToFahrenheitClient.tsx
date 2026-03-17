"use client";

import { useMemo, useState } from "react";

export default function CelsiusToFahrenheitClient() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit = useMemo(() => {
    const value = parseFloat(celsius);
    if (isNaN(value)) return "";
    return ((value * 9) / 5 + 32).toFixed(2);
  }, [celsius]);

  return (

    <section className="mt-8 grid gap-4 sm:grid-cols-2">
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Celsius"
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
      />
      <input
        type="text"
        value={fahrenheit}
        readOnly
        placeholder="Fahrenheit"
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
      />
    </section>

  );
}