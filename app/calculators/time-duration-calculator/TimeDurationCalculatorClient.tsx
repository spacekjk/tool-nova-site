"use client";

import { useMemo, useState } from "react";

function parseTimeToMinutes(time: string) {
    if (!time) return null;

    const [hours, minutes] = time.split(":").map(Number);

    if (
        Number.isNaN(hours) ||
        Number.isNaN(minutes) ||
        hours < 0 ||
        hours > 23 ||
        minutes < 0 ||
        minutes > 59
    ) {
        return null;
    }

    return hours * 60 + minutes;
}

export default function TimeDurationCalculatorClient() {
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("17:30");

    const result = useMemo(() => {
        const start = parseTimeToMinutes(startTime);
        const end = parseTimeToMinutes(endTime);

        if (start === null || end === null) return null;

        let diff = end - start;

        if (diff < 0) {
            diff += 24 * 60;
        }

        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;

        return {
            totalMinutes: diff,
            hours,
            minutes,
        };
    }, [startTime, endTime]);

    return (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Start Time
                    </label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        End Time
                    </label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                    />
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                {!result ? (
                    <p className="text-white/60">Enter valid times.</p>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Result</h2>

                        <p className="mt-4 text-5xl font-bold text-white">
                            {result.hours}h {result.minutes}m
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Hours</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {result.hours}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-white/60">Total Minutes</p>
                                <p className="mt-2 text-2xl font-semibold text-white">
                                    {result.totalMinutes}
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-white/60">
                            If the end time is earlier than the start time, the calculation assumes the time passes midnight.
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
}