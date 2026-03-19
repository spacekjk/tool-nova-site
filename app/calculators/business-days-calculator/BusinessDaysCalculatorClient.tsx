"use client";

import { useMemo, useState } from "react";

function getTodayLocal() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function countDaysBetween(start: Date, end: Date) {
    const msPerDay = 1000 * 60 * 60 * 24;

    const utcStart = Date.UTC(
        start.getFullYear(),
        start.getMonth(),
        start.getDate()
    );
    const utcEnd = Date.UTC(
        end.getFullYear(),
        end.getMonth(),
        end.getDate()
    );

    return Math.floor((utcEnd - utcStart) / msPerDay) + 1;
}

function countBusinessDays(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
        return null;
    }

    if (start > end) {
        return null;
    }

    const totalDays = countDaysBetween(start, end);

    let businessDays = 0;
    const current = new Date(start);

    while (current <= end) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) {
            businessDays++;
        }
        current.setDate(current.getDate() + 1);
    }

    const weekendDays = totalDays - businessDays;

    return {
        totalDays,
        businessDays,
        weekendDays,
    };
}

export default function BusinessDaysCalculatorClient() {
    const [startDate, setStartDate] = useState(getTodayLocal());
    const [endDate, setEndDate] = useState(getTodayLocal());

    const result = useMemo(() => {
        if (!startDate || !endDate) return null;
        return countBusinessDays(startDate, endDate);
    }, [startDate, endDate]);

    return (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Start Date
                    </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        End Date
                    </label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                {!startDate || !endDate ? (
                    <p className="text-white/60">
                        Select both dates to calculate business days.
                    </p>
                ) : !result ? (
                    <p className="text-white/60">
                        Please make sure the end date is the same as or after the start date.
                    </p>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Result</h2>

                        <p className="mt-4 text-5xl font-bold text-white">
                            {result.businessDays} business days
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Business Days</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {result.businessDays}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Weekend Days</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {result.weekendDays}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Total Days</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {result.totalDays}
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-white/60">
                            Weekends are excluded from the business day count.
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
}