"use client";

import { useMemo, useState } from "react";

type PayPeriod = "yearly" | "monthly" | "weekly" | "daily" | "hourly";

const PERIOD_OPTIONS: { value: PayPeriod; label: string }[] = [
    { value: "yearly", label: "Yearly" },
    { value: "monthly", label: "Monthly" },
    { value: "weekly", label: "Weekly" },
    { value: "daily", label: "Daily" },
    { value: "hourly", label: "Hourly" },
];

function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    }).format(value);
}

function toAnnualSalary(
    amount: number,
    period: PayPeriod,
    hoursPerWeek: number,
    daysPerWeek: number
) {
    switch (period) {
        case "yearly":
            return amount;
        case "monthly":
            return amount * 12;
        case "weekly":
            return amount * 52;
        case "daily":
            return amount * daysPerWeek * 52;
        case "hourly":
            return amount * hoursPerWeek * 52;
        default:
            return amount;
    }
}

function fromAnnualSalary(
    annualSalary: number,
    hoursPerWeek: number,
    daysPerWeek: number
) {
    const monthly = annualSalary / 12;
    const weekly = annualSalary / 52;
    const daily = annualSalary / (daysPerWeek * 52);
    const hourly = annualSalary / (hoursPerWeek * 52);

    return {
        yearly: annualSalary,
        monthly,
        weekly,
        daily,
        hourly,
    };
}

export default function SalaryCalculatorClient() {
    const [amount, setAmount] = useState("50000");
    const [period, setPeriod] = useState<PayPeriod>("yearly");
    const [hoursPerWeek, setHoursPerWeek] = useState("40");
    const [daysPerWeek, setDaysPerWeek] = useState("5");

    const result = useMemo(() => {
        const salaryAmount = parseFloat(amount);
        const hours = parseFloat(hoursPerWeek);
        const days = parseFloat(daysPerWeek);

        if ([salaryAmount, hours, days].some((v) => isNaN(v) || v <= 0)) {
            return null;
        }

        const annualSalary = toAnnualSalary(salaryAmount, period, hours, days);
        return fromAnnualSalary(annualSalary, hours, days);
    }, [amount, period, hoursPerWeek, daysPerWeek]);

    return (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Salary Amount
                    </label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="50000"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Pay Period
                    </label>
                    <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value as PayPeriod)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    >
                        {PERIOD_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Hours Per Week
                    </label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(e.target.value)}
                        placeholder="40"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Days Per Week
                    </label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={daysPerWeek}
                        onChange={(e) => setDaysPerWeek(e.target.value)}
                        placeholder="5"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                {!result ? (
                    <p className="text-white/60">
                        Enter valid numbers to calculate salary conversions.
                    </p>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Salary Breakdown</h2>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Yearly</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatCurrency(result.yearly)}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Monthly</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatCurrency(result.monthly)}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Weekly</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatCurrency(result.weekly)}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Daily</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatCurrency(result.daily)}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Hourly</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {formatCurrency(result.hourly)}
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-white/60">
                            Estimates are based on {hoursPerWeek} work hours and {daysPerWeek} work days per week.
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
}