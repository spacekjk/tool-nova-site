"use client";

import { useMemo, useState } from "react";

export default function CelsiusToFahrenheitClient() {
  const [mode, setMode] = useState<"CtoF" | "FtoC">("CtoF");
  const [value, setValue] = useState("");

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";

    if (mode === "CtoF") {
      return ((num * 9) / 5 + 32).toFixed(2);
    } else {
      return (((num - 32) * 5) / 9).toFixed(2);
    }
  }, [value, mode]);

  const isCtoF = mode === "CtoF";

  return (
    <section className="mt-8 flex flex-col items-center gap-6">

      {/* 🔁 변환 버튼 */}
      <button
        onClick={() =>
          setMode((prev) => (prev === "CtoF" ? "FtoC" : "CtoF"))
        }
        className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
      >
        {isCtoF ? "°C → °F" : "°F → °C"}
      </button>

      {/* 🔢 입력 영역 */}
      <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={isCtoF ? "Celsius (°C)" : "Fahrenheit (°F)"}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center outline-none"
        />

        <input
          type="text"
          value={result}
          readOnly
          placeholder={isCtoF ? "Fahrenheit (°F)" : "Celsius (°C)"}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center outline-none"
        />
      </div>
    </section>
  );
}