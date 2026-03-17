"use client";

import { useMemo, useState } from "react";

export default function VATCalculatorClient() {
  const [amount, setAmount] = useState("");
  const [vatRate, setVatRate] = useState("10");

  const result = useMemo(() => {
    const value = parseFloat(amount);
    const rate = parseFloat(vatRate);

    if (isNaN(value) || isNaN(rate)) return null;

    const vatAmount = (value * rate) / 100;
    const inclusive = value + vatAmount;
    const exclusiveFromInclusive = value / (1 + rate / 100);
    const vatFromInclusive = value - exclusiveFromInclusive;

    return {
      vatAmount,
      inclusive,
      exclusiveFromInclusive,
      vatFromInclusive,
    };
  }, [amount, vatRate]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-white/70">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">VAT Rate %</label>
            <input
              type="number"
              value={vatRate}
              onChange={(e) => setVatRate(e.target.value)}
              placeholder="10"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          {result ? (
            <div className="space-y-2">
              <p>Add VAT: <strong>{result.inclusive.toFixed(2)}</strong></p>
              <p>VAT Amount: <strong>{result.vatAmount.toFixed(2)}</strong></p>
              <p>Remove VAT (net): <strong>{result.exclusiveFromInclusive.toFixed(2)}</strong></p>
              <p>VAT in inclusive price: <strong>{result.vatFromInclusive.toFixed(2)}</strong></p>
            </div>
          ) : (
            <p className="text-white/60">Enter values to calculate VAT.</p>
          )}
        </div>
      </section>
    </main>
  );
}