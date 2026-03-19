"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function MortgageCalculatorClient() {
  const [loanAmount, setLoanAmount] = useState("300000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTermYears, setLoanTermYears] = useState("30");

  const result = useMemo(() => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(loanTermYears);

    if ([principal, annualRate, years].some((v) => isNaN(v) || v < 0)) {
      return null;
    }

    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;

    if (totalMonths <= 0) {
      return null;
    }

    let monthlyPayment = 0;

    if (monthlyRate === 0) {
      monthlyPayment = principal / totalMonths;
    } else {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalRepayment = monthlyPayment * totalMonths;
    const totalInterest = totalRepayment - principal;

    return {
      monthlyPayment,
      totalRepayment,
      totalInterest,
    };
  }, [loanAmount, interestRate, loanTermYears]);

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/80">
            Loan Amount
          </span>
          <input
            type="number"
            min="0"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="300000"
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
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="6.5"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-white/80">
            Loan Term (Years)
          </span>
          <input
            type="number"
            min="1"
            step="1"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            placeholder="30"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-white/60">Monthly Payment</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {result ? formatCurrency(result.monthlyPayment) : "-"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-white/60">Total Repayment</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {result ? formatCurrency(result.totalRepayment) : "-"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-white/60">Total Interest</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {result ? formatCurrency(result.totalInterest) : "-"}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <p className="text-sm text-white/60">Formula</p>
        <p className="mt-2 text-base text-white/80">
          M = P[r(1 + r)
          <sup>n</sup>] / [(1 + r)
          <sup>n</sup> - 1]
        </p>
      </div>
    </div>

  );
}