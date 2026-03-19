"use client";

import { useMemo, useState } from "react";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("1000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");
  const [compoundPerYear, setCompoundPerYear] = useState("12");

  const result = useMemo(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(years);
    const n = parseFloat(compoundPerYear);

    if ([p, r, t, n].some((v) => isNaN(v) || v < 0)) {
      return null;
    }

    if (n <= 0) {
      return null;
    }

    const finalAmount = p * Math.pow(1 + r / 100 / n, n * t);
    const totalInterest = finalAmount - p;

    return {
      finalAmount,
      totalInterest,
    };
  }, [principal, rate, years, compoundPerYear]);

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">
            Principal Amount
          </span>
          <input
            type="number"
            min="0"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="1000"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">
            Annual Interest Rate (%)
          </span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="5"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">
            Years
          </span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="10"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">
            Compounds Per Year
          </span>
          <select
            value={compoundPerYear}
            onChange={(e) => setCompoundPerYear(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
          >
            <option value="1">1 - Annually</option>
            <option value="2">2 - Semiannually</option>
            <option value="4">4 - Quarterly</option>
            <option value="12">12 - Monthly</option>
            <option value="365">365 - Daily</option>
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-white/60">Final Amount</p>
          <p className="mt-2 text-3xl font-bold text-white">
            {result ? `$${formatNumber(result.finalAmount)}` : "-"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-white/60">Total Interest</p>
          <p className="mt-2 text-3xl font-bold text-white">
            {result ? `$${formatNumber(result.totalInterest)}` : "-"}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <p className="text-sm text-white/60">Formula</p>
        <p className="mt-2 text-base text-white/80">
          A = P(1 + r / n)
          <sup>nt</sup>
        </p>
      </div>
    </div>

  );
}