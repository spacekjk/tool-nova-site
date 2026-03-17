import Link from "next/link";

const calculators = [
  {
    title: "Age Calculator",
    href: "/age-calculator",
    description: "Calculate your exact age from your birth date.",
  },
  {
    title: "Percentage Calculator",
    href: "/percentage-calculator",
    description: "Calculate percentages, increases, and decreases.",
  },
  {
    title: "BMI Calculator",
    href: "/bmi-calculator",
    description: "Check your body mass index quickly.",
  },
  {
    title: "Time Calculator",
    href: "/time-calculator",
    description: "Add or subtract hours and minutes.",
  },
  {
    title: "Loan Calculator",
    href: "/loan-calculator",
    description: "Estimate monthly payments and total interest.",
  },
  {
    title: "Days Between Dates",
    href: "/days-between-dates",
    description: "Find the number of days between two dates.",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-3 text-sm text-white/60">Tool Nova Categories</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Calculators
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
          Explore free online calculators for age, percentages, BMI, loans,
          dates, and more.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold">{tool.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}