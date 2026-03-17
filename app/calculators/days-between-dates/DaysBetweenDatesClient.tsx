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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Calculator</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Days Between Dates Calculator
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Calculate the number of days between two dates instantly. This free
            online date calculator is useful for planning, scheduling, age
            tracking, deadlines, and time measurement.
          </p>
        </div>

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
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this days between dates calculator works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This calculator compares two calendar dates and returns the total
              number of days between them.
            </p>
            <p>
              It works by converting both dates into a standard day-based format
              and then measuring the difference.
            </p>
            <p>
              You can use it for deadlines, project planning, age tracking,
              travel planning, and counting time periods.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                How do I calculate the number of days between two dates?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Select a start date and an end date. The calculator will show
                the total number of days between them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Does this tool include leap years?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Because it uses actual calendar dates, leap years are
                automatically reflected in the result.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this days between dates calculator free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this date calculator online for free
                with no sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}