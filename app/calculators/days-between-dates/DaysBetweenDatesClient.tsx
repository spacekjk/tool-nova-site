"use client";

import { useMemo, useState } from "react";

function formatDateDiff(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return null;
  }

  const msPerDay = 1000 * 60 * 60 * 24;

  const utcStart = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  const utcEnd = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );

  const diffDays = Math.abs(Math.floor((utcEnd - utcStart) / msPerDay));

  return diffDays;
}

export default function DaysBetweenDatesPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const result = useMemo(() => {
    if (!startDate || !endDate) return null;
    return formatDateDiff(startDate, endDate);
  }, [startDate, endDate]);

  return (

    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
        {!startDate || !endDate ? (
          <p className="text-white/60">
            Select both dates to calculate the difference.
          </p>
        ) : result !== null ? (
          <div>
            <h2 className="text-2xl font-semibold">Result</h2>
            <p className="mt-3 text-4xl font-bold">{result} days</p>
          </div>
        ) : (
          <p className="text-white/60">Please enter valid dates.</p>
        )}
      </div>
    </div>




  );
}