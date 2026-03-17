"use client";

import { useMemo, useState } from "react";

type Mode = "add" | "subtract";

function formatHoursAndMinutes(totalMinutes: number) {
  const negative = totalMinutes < 0;
  const abs = Math.abs(totalMinutes);
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;

  return `${negative ? "-" : ""}${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`;
}

export default function TimeCalculatorPage() {
  const [mode, setMode] = useState<Mode>("add");

  const [hours1, setHours1] = useState("");
  const [minutes1, setMinutes1] = useState("");
  const [hours2, setHours2] = useState("");
  const [minutes2, setMinutes2] = useState("");

  const result = useMemo(() => {
    const h1 = Number(hours1 || 0);
    const m1 = Number(minutes1 || 0);
    const h2 = Number(hours2 || 0);
    const m2 = Number(minutes2 || 0);

    if (
      [h1, m1, h2, m2].some((value) => Number.isNaN(value)) ||
      m1 < 0 ||
      m2 < 0 ||
      h1 < 0 ||
      h2 < 0
    ) {
      return null;
    }

    const total1 = h1 * 60 + m1;
    const total2 = h2 * 60 + m2;
    const finalMinutes = mode === "add" ? total1 + total2 : total1 - total2;

    return {
      totalMinutes: finalMinutes,
      formatted: formatHoursAndMinutes(finalMinutes),
    };
  }, [mode, hours1, minutes1, hours2, minutes2]);

  return (

    <section className="mx-auto max-w-4xl px-6 py-14">


      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <label className="mb-3 block text-sm font-medium text-white/80">
          Choose calculation type
        </label>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
        >
          <option value="add">Add time</option>
          <option value="subtract">Subtract time</option>
        </select>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-lg font-semibold">First Time</h2>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Hours
                </label>
                <input
                  type="number"
                  min="0"
                  value={hours1}
                  onChange={(e) => setHours1(e.target.value)}
                  placeholder="e.g. 2"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Minutes
                </label>
                <input
                  type="number"
                  min="0"
                  value={minutes1}
                  onChange={(e) => setMinutes1(e.target.value)}
                  placeholder="e.g. 30"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-lg font-semibold">Second Time</h2>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Hours
                </label>
                <input
                  type="number"
                  min="0"
                  value={hours2}
                  onChange={(e) => setHours2(e.target.value)}
                  placeholder="e.g. 1"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Minutes
                </label>
                <input
                  type="number"
                  min="0"
                  value={minutes2}
                  onChange={(e) => setMinutes2(e.target.value)}
                  placeholder="e.g. 45"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
          <h2 className="text-2xl font-semibold">Result</h2>
          <p className="mt-3 text-3xl font-bold">
            {result ? result.formatted : "Enter valid values."}
          </p>
          {result && (
            <p className="mt-3 text-white/65">
              Total minutes: {result.totalMinutes}
            </p>
          )}
        </div>
      </div>
    </section>




  );
}