"use client";

import { useMemo, useState } from "react";

function calculateDetailedAge(birthDateString: string) {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  if (Number.isNaN(birthDate.getTime())) {
    return null;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const diffMs = today.getTime() - birthDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    totalDays,
  };
}

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) return null;
    return calculateDetailedAge(birthDate);
  }, [birthDate]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <label
            htmlFor="birthdate"
            className="mb-3 block text-sm font-medium text-white/80"
          >
            Enter your birth date
          </label>

          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              id="birthdate"
              type="date"
              min="1900-01-01"
              max="2099-12-31"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/30 focus:border-white/25"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            {!birthDate && (
              <p className="text-white/60">
                Select your birth date to see your exact age.
              </p>
            )}

            {birthDate && result && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Age</h2>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Years</p>
                    <p className="mt-2 text-3xl font-bold">{result.years}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Months</p>
                    <p className="mt-2 text-3xl font-bold">{result.months}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Days</p>
                    <p className="mt-2 text-3xl font-bold">{result.days}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/55">Total Days Lived</p>
                  <p className="mt-2 text-2xl font-semibold">
                    {result.totalDays.toLocaleString()} days
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      

      

      
    </main>
  );
}