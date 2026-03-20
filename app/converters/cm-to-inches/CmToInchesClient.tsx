"use client";

import { useState } from "react";

type LengthUnit = "cm" | "m" | "in" | "ft";

const toCmMap: Record<LengthUnit, number> = {
  cm: 1,
  m: 100,
  in: 2.54,
  ft: 30.48,
};

function convertFromUnit(value: number, from: LengthUnit) {
  const cmValue = value * toCmMap[from];

  return {
    cm: cmValue,
    m: cmValue / 100,
    in: cmValue / 2.54,
    ft: cmValue / 30.48,
  };
}

function formatValue(value: number) {
  if (!Number.isFinite(value)) return "";
  return Number(value.toFixed(4)).toString();
}

// ✅ 이름 유지
export default function CmToInchesClient() {
  const [values, setValues] = useState({
    cm: "",
    m: "",
    in: "",
    ft: "",
  });

  const handleChange = (unit: LengthUnit, input: string) => {
    setValues((prev) => {
      if (input.trim() === "") {
        return {
          ...prev,
          [unit]: "",
        };
      }

      const numericValue = Number(input);

      if (Number.isNaN(numericValue)) {
        return {
          ...prev,
          [unit]: input,
        };
      }

      const converted = convertFromUnit(numericValue, unit);

      return {
        cm: formatValue(converted.cm),
        m: formatValue(converted.m),
        in: formatValue(converted.in),
        ft: formatValue(converted.ft),
      };
    });
  };

  const handleClear = () => {
    setValues({
      cm: "",
      m: "",
      in: "",
      ft: "",
    });
  };

  return (
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">
          Length Converter
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
          value={values.cm}
          onChange={(e) => handleChange("cm", e.target.value)}
          placeholder="Centimeters (cm)"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />

        <input
          type="number"
          value={values.m}
          onChange={(e) => handleChange("m", e.target.value)}
          placeholder="Meters (m)"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />

        <input
          type="number"
          value={values.in}
          onChange={(e) => handleChange("in", e.target.value)}
          placeholder="Inches (in)"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />

        <input
          type="number"
          value={values.ft}
          onChange={(e) => handleChange("ft", e.target.value)}
          placeholder="Feet (ft)"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />
      </div>
    </section>
  );
}
