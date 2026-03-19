"use client";

import { useMemo, useState } from "react";

function formatNumber(value: number) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
    }).format(value);
}

export default function PercentageIncreaseCalculatorClient() {
    const [originalValue, setOriginalValue] = useState("100");
    const [newValue, setNewValue] = useState("120");

    const result = useMemo(() => {
        const original = parseFloat(originalValue);
        const next = parseFloat(newValue);

        if ([original, next].some((v) => isNaN(v))) {
            return null;
        }

        if (original === 0) {
            return null;
        }

        const difference = next - original;
        const percentageChange = (difference / original) * 100;

        return {
            original,
            next,
            difference,
            percentageChange,
            isIncrease: percentageChange >= 0,
        };
    }, [originalValue, newValue]);

    return (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Original Value
                    </label>
                    <input
                        type="number"
                        value={originalValue}
                        onChange={(e) => setOriginalValue(e.target.value)}
                        placeholder="100"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        New Value
                    </label>
                    <input
                        type="number"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        placeholder="120"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                {!result ? (
                    <p className="text-white/60">
                        Enter valid numbers. The original value cannot be 0.
                    </p>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Result</h2>

                        <p className="mt-4 text-4xl font-bold text-white">
                            {result.isIncrease ? "Increase" : "Decrease"}:{" "}
                            {formatNumber(Math.abs(result.percentageChange))}%
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Original Value</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatNumber(result.original)}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">New Value</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatNumber(result.next)}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Difference</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatNumber(result.difference)}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-white/60">Formula</p>
                            <p className="mt-2 text-base text-white/80">
                                ((New Value - Original Value) / Original Value) × 100
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}