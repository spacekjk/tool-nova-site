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
    <main className="mx-auto max-w-4xl px-6 py-10">
      

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

      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">How this discount calculator works</h2>
        <p className="mt-4 leading-8 text-white/70">
          This tool calculates the discount amount by multiplying the original price
          by the discount percentage. It then subtracts that discount from the
          original price to show the final sale price.
        </p>
      </section>

      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">How do I calculate a discount?</h3>
            <p className="mt-2 leading-7 text-white/70">
              Enter the original price and the discount percentage to see the savings and final price.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Can I use this for shopping sales?</h3>
            <p className="mt-2 leading-7 text-white/70">
              Yes. This calculator is useful for sale prices, promotions, and markdowns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}