"use client";

import { useMemo, useState } from "react";

function calculateAge(birthDate: string) {
  const birth = new Date(birthDate);
  const today = new Date();

  if (Number.isNaN(birth.getTime())) return null;

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // days 보정
  if (days < 0) {
    months--;
    const prevMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
  }

  // months 보정
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState(
    new Date().toISOString().split("T")[0] // 🔥 기본값 오늘
  );

  const result = useMemo(() => {
    if (!birthDate) return null;
    return calculateAge(birthDate);
  }, [birthDate]);

  return (
    <section className="mx-auto max-w-4xl px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        
        {/* 입력 */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Date of Birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          />
        </div>

        {/* 결과 */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
          {!result ? (
            <p className="text-white/60">Please select a valid date.</p>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Your Age
              </h2>

              {/* 메인 결과 */}
              <p className="mt-4 text-5xl font-bold text-white">
                {result.years} years
              </p>

              {/* 상세 */}
              <p className="mt-3 text-lg text-white/80">
                {result.years} years {result.months} months {result.days} days
              </p>

              {/* 설명 */}
              <p className="mt-3 text-sm text-white/60">
                Calculated from your birth date to today.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}