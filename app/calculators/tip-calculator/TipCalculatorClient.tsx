"use client";

import { useMemo, useState } from "react";

export default function TipCalculatorClient() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("15");
  const [people, setPeople] = useState("1");

  const result = useMemo(() => {
    const billAmount = parseFloat(bill);
    const tip = parseFloat(tipPercent);
    const split = parseInt(people, 10);

    if (isNaN(billAmount) || isNaN(tip) || isNaN(split) || split <= 0) {
      return null;
    }

    const tipAmount = (billAmount * tip) / 100;
    const total = billAmount + tipAmount;
    const perPerson = total / split;

    return { tipAmount, total, perPerson };
  }, [bill, tipPercent, people]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-white/70">Bill Amount</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="100"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">Tip %</label>
            <input
              type="number"
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
              placeholder="15"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">People</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder="1"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          {result ? (
            <div className="space-y-2">
              <p>Tip Amount: <strong>{result.tipAmount.toFixed(2)}</strong></p>
              <p>Total Bill: <strong>{result.total.toFixed(2)}</strong></p>
              <p>Per Person: <strong>{result.perPerson.toFixed(2)}</strong></p>
            </div>
          ) : (
            <p className="text-white/60">Enter values to calculate the tip.</p>
          )}
        </div>
      </section>

      
    </main>
  );
}