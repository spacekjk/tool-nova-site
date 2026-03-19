"use client";

import { useMemo, useState } from "react";

type Gender = "male" | "female";

const activityLevels = [
    { label: "Sedentary (little or no exercise)", value: 1.2 },
    { label: "Light (1–3 days/week)", value: 1.375 },
    { label: "Moderate (3–5 days/week)", value: 1.55 },
    { label: "Active (6–7 days/week)", value: 1.725 },
    { label: "Very Active (physical job)", value: 1.9 },
];

function calculateBMR(
    gender: Gender,
    weight: number,
    height: number,
    age: number
) {
    // Mifflin-St Jeor Equation
    if (gender === "male") {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

export default function CalorieCalculatorClient() {
    const [gender, setGender] = useState<Gender>("male");
    const [age, setAge] = useState("25");
    const [weight, setWeight] = useState("70");
    const [height, setHeight] = useState("175");
    const [activity, setActivity] = useState("1.2");

    const result = useMemo(() => {
        const a = parseFloat(age);
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const act = parseFloat(activity);

        if ([a, w, h, act].some((v) => isNaN(v) || v <= 0)) return null;

        const bmr = calculateBMR(gender, w, h, a);
        const tdee = bmr * act;

        return {
            maintenance: Math.round(tdee),
            mildLoss: Math.round(tdee - 250),
            weightLoss: Math.round(tdee - 500),
            gain: Math.round(tdee + 500),
        };
    }, [gender, age, weight, height, activity]);

    return (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="text-white/80 text-sm">Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as Gender)}
                        className="w-full mt-2 rounded-xl bg-black/30 px-4 py-3 text-white"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <label className="text-white/80 text-sm">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full mt-2 rounded-xl bg-black/30 px-4 py-3 text-white"
                    />
                </div>

                <div>
                    <label className="text-white/80 text-sm">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full mt-2 rounded-xl bg-black/30 px-4 py-3 text-white"
                    />
                </div>

                <div>
                    <label className="text-white/80 text-sm">Height (cm)</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full mt-2 rounded-xl bg-black/30 px-4 py-3 text-white"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label className="text-white/80 text-sm">Activity Level</label>
                    <select
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="w-full mt-2 rounded-xl bg-black/30 px-4 py-3 text-white"
                    >
                        {activityLevels.map((a) => (
                            <option key={a.value} value={a.value}>
                                {a.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                {!result ? (
                    <p className="text-white/60">Enter valid values.</p>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold text-white">
                            Daily Calories
                        </h2>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div>
                                <p className="text-white/60">Maintenance</p>
                                <p className="text-3xl font-bold text-white">
                                    {result.maintenance} kcal
                                </p>
                            </div>

                            <div>
                                <p className="text-white/60">Weight Loss</p>
                                <p className="text-3xl font-bold text-white">
                                    {result.weightLoss} kcal
                                </p>
                            </div>

                            <div>
                                <p className="text-white/60">Mild Loss</p>
                                <p className="text-2xl text-white">
                                    {result.mildLoss} kcal
                                </p>
                            </div>

                            <div>
                                <p className="text-white/60">Weight Gain</p>
                                <p className="text-2xl text-white">
                                    {result.gain} kcal
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}