import Link from "next/link";

const categories = [
  {
    title: "Calculators",
    href: "/calculators",
    description: "Age, percentage, BMI, loan, time, and date calculators.",
    items: [
      { title: "Age Calculator", href: "/age-calculator" },
      { title: "Percentage Calculator", href: "/percentage-calculator" },
      { title: "Loan Calculator", href: "/loan-calculator" },
    ],
  },
  {
    title: "Text Tools",
    href: "/text-tools",
    description: "Word counters, formatters, cleaners, and comparison tools.",
    items: [
      { title: "Word Counter", href: "/word-counter" },
      { title: "Character Counter", href: "/character-counter" },
      { title: "JSON Formatter", href: "/json-formatter" },
    ],
  },
  {
    title: "Generators",
    href: "/generators",
    description: "Random numbers, passwords, and name picker tools.",
    items: [
      { title: "Password Generator", href: "/password-generator" },
      { title: "Random Number Generator", href: "/random-number-generator" },
      { title: "Random Name Picker", href: "/random-name-picker" },
    ],
  },
  {
    title: "Converters",
    href: "/converters",
    description: "Weight and number conversion tools.",
    items: [
      { title: "Kg to Lbs", href: "/kg-to-lbs" },
      { title: "Number to Words", href: "/number-to-words" },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
            Free Online Tools
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Tool Nova
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
            Free online calculators, converters, generators, and text tools
            built for speed, simplicity, and everyday use.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculators"
              className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
            >
              Explore Calculators
            </Link>

            <Link
              href="/text-tools"
              className="rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Browse Text Tools
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={category.href}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  View all
                </Link>
              </div>

              <div className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/85 transition hover:bg-white/5"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Why Tool Nova?</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-medium">Fast</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Get instant results without clutter.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Free</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Use every tool without sign-up.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Organized</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Browse tools by category for easier navigation and stronger SEO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}