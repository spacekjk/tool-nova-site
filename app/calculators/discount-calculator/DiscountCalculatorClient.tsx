"use client";

import { useMemo, useState } from "react";

export default function DiscountCalculatorClient() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");

  const result = useMemo(() => {
    const price = parseFloat(originalPrice);
    const percent = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(percent)) {
      return null;
    }

    const discountAmount = (price * percent) / 100;
    const finalPrice = price - discountAmount;

    return { discountAmount, finalPrice };
  }, [originalPrice, discountPercent]);

  return (



    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-white/70">Original Price</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="100"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Discount %</label>
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="20"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
        {result ? (
          <div className="space-y-2">
            <p>Discount Amount: <strong>{result.discountAmount.toFixed(2)}</strong></p>
            <p>Final Price: <strong>{result.finalPrice.toFixed(2)}</strong></p>
          </div>
        ) : (
          <p className="text-white/60">Enter values to see the result.</p>
        )}
      </div>
    </section>



  );
}