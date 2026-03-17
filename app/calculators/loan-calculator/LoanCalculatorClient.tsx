"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [annualRate, setAnnualRate] = useState("5");
  const [loanYears, setLoanYears] = useState("3");

  const result = useMemo(() => {
    const principal = Number(loanAmount);
    const yearlyRate = Number(annualRate);
    const years = Number(loanYears);

    if (
      !loanAmount ||
      !annualRate ||
      !loanYears ||
      Number.isNaN(principal) ||
      Number.isNaN(yearlyRate) ||
      Number.isNaN(years) ||
      principal <= 0 ||
      yearlyRate < 0 ||
      years <= 0
    ) {
      return null;
    }

    const monthlyRate = yearlyRate / 100 / 12;
    const numberOfPayments = years * 12;

    let monthlyPayment = 0;

    if (monthlyRate === 0) {
      monthlyPayment = principal / numberOfPayments;
    } else {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
    };
  }, [loanAmount, annualRate, loanYears]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Calculator</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Loan Calculator
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Calculate your monthly loan payment, total repayment amount, and total
            interest. This free online loan calculator is useful for personal loans,
            car loans, and simple repayment estimates.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Loan Amount
              </label>
              <input
                type="number"
                min="0"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g. 10000"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                placeholder="e.g. 5"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Loan Term (Years)
              </label>
              <input
                type="number"
                min="1"
                step="1"
                value={loanYears}
                onChange={(e) => setLoanYears(e.target.value)}
                placeholder="e.g. 3"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            {!result ? (
              <p className="text-white/60">
                Enter valid loan details to calculate your payment.
              </p>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold">Loan Results</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Monthly Payment</p>
                    <p className="mt-2 text-2xl font-bold">
                      {formatCurrency(result.monthlyPayment)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Total Payment</p>
                    <p className="mt-2 text-2xl font-bold">
                      {formatCurrency(result.totalPayment)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Total Interest</p>
                    <p className="mt-2 text-2xl font-bold">
                      {formatCurrency(result.totalInterest)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">How this loan calculator works</h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This loan calculator uses the standard amortized loan payment formula
              to estimate your monthly payment based on the loan amount, annual
              interest rate, and repayment period.
            </p>
            <p>
              It also calculates the total amount you will repay over the full loan
              term and the total interest paid.
            </p>
            <p>
              This tool is useful for estimating personal loans, car loans, and other
              simple installment loans.
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
                How do I calculate a monthly loan payment?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Enter the loan amount, interest rate, and loan term. The calculator
                uses these values to estimate your monthly repayment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Does this calculator show total interest?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. It shows both the total repayment amount and the total interest
                paid over the full loan term.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this loan calculator free to use?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this loan calculator online for free with no
                sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Related Tools</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="/calculators/bmi-calculator"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              BMI Calculator
            </a>

            <a
              href="/calculators/time-calculator"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Time Calculator
            </a>

            <a
              href="/calculators/days-between-dates"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Days Between Dates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}