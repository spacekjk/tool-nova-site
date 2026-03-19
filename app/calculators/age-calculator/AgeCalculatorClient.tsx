"use client";

import { useMemo, useState } from "react";

function getTodayLocal() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calculateAge(birthDate: string) {
  const birth = new Date(birthDate);
  const today = new Date();

  if (Number.isNaN(birth.getTime())) return null;
  if (birth > today) return null;

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const utcBirth = Date.UTC(
    birth.getFullYear(),
    birth.getMonth(),
    birth.getDate()
  );
  const utcToday = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const totalDays = Math.floor((utcToday - utcBirth) / (1000 * 60 * 60 * 24));

  return { years, months, days, totalDays };
}

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState(getTodayLocal());

  const result = useMemo(() => {
    if (!birthDate) return null;
    return calculateAge(birthDate);
  }, [birthDate]);

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Date of Birth
        </label>
        <input
          type="date"
          value={birthDate}
          max={getTodayLocal()}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
        />
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
        {!result ? (
          <p className="text-white/60">Please select a valid birth date.</p>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-white">Your Age</h2>

            <p className="mt-4 text-5xl font-bold text-white">
              {result.years} years
            </p>

            <p className="mt-3 text-lg text-white/80">
              {result.years} years {result.months} months {result.days} days
            </p>

            <p className="mt-3 text-sm text-white/60">
              Total: {result.totalDays.toLocaleString()} days
            </p>

            <p className="mt-2 text-sm text-white/60">
              Calculated from your birth date to today.
            </p>
          </div>
        )}
      </div>
    </div>

  );
}