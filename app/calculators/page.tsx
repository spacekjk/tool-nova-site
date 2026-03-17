import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Calculators",
  description:
    "Use free online calculators for age, percentage, BMI, loan, time, and date calculations. Fast and simple tools for everyday use.",
  alternates: {
    canonical: "https://tool-nova.com/calculators",
  },
};

const tools = [
  { name: "Age Calculator", href: "/calculators/age-calculator" },
  { name: "Percentage Calculator", href: "/calculators/percentage-calculator" },
  { name: "BMI Calculator", href: "/calculators/bmi-calculator" },
  { name: "Time Calculator", href: "/calculators/time-calculator" },
  { name: "Loan Calculator", href: "/calculators/loan-calculator" },
  { name: "Days Between Dates", href: "/calculators/days-between-dates" },
];

export default function CalculatorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Free Online Calculators</h1>
      <p className="mt-4 text-gray-600">
        Explore simple and fast online calculators for daily tasks, finance,
        health, time, and date calculations. All tools are free and work on
        desktop and mobile.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-xl border p-4 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="mt-2 text-sm text-gray-500">
              Open the {tool.name.toLowerCase()} tool.
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why use online calculators?</h2>
        <p className="mt-3 text-gray-600">
          Online calculators save time and reduce manual mistakes. Whether you
          are checking your age, body mass index, loan payments, or date
          differences, quick web-based tools make calculations easier.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Popular calculator categories</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Health calculators like BMI</li>
          <li>Finance calculators like loan payment tools</li>
          <li>Time and date calculators</li>
          <li>Percentage and everyday math calculators</li>
        </ul>
      </section>
    </main>
  );
}