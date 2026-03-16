import Link from "next/link";

const tools = [
  {
    title: "Age Calculator",
    href: "/age-calculator",
    description: "Calculate your exact age from your birth date.",
  },
  {
    title: "Percentage Calculator",
    href: "/percentage-calculator",
    description: "Quickly calculate percentages, increases, and decreases.",
  },
  {
    title: "BMI Calculator",
    href: "/bmi-calculator",
    description: "Check your body mass index in seconds.",
  },
  {
    title: "Time Calculator",
    href: "/time-calculator",
    description: "Add or subtract hours and minutes easily.",
  },
  {
    title: "Word Counter",
    href: "/word-counter",
    description: "Count words and characters instantly.",
  },
  {
    title: "Kg to Lbs Converter",
    href: "/kg-to-lbs",
    description: "Convert kilograms to pounds fast.",
  },
  {
    title: "Random Number Generator",
    href: "/random-number-generator",
    description: "Generate a random number between any two values.",
  },
  {
    title: "Password Generator",
    href: "/password-generator",
    description: "Generate strong and secure passwords instantly."
  },
  {
    title: "Character Counter",
    href: "/character-counter",
    description: "Count characters, words, and sentences instantly."
  },
  {
    title: "Case Converter",
    href: "/case-converter",
    description: "Convert text to uppercase, lowercase, title case, and more.",
  },  
  {
    title: "Random Name Picker",
    href: "/random-name-picker",
    description: "Pick a random name from a list instantly.",
  }

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
            Free online calculators, converters, and text tools designed for
            fast answers and simple everyday use.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/age-calculator"
              className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
            >
              Try Age Calculator
            </Link>

            <a
              href="#popular-tools"
              className="rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      <section
        id="popular-tools"
        className="mx-auto max-w-6xl px-6 pb-16"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Popular Tools</h2>
          <p className="mt-2 text-white/60">
            Start with the most useful calculators and converters.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold">{tool.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {tool.description}
              </p>
              <p className="mt-5 text-sm font-medium text-white/85">
                Open tool →
              </p>
            </Link>
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
                Get results instantly without clutter.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Free</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                No signup required for everyday tools.
              </p>
            </div>
            <div>
              <h3 className="font-medium">SEO-Friendly Structure</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Clear pages for calculators, converters, and guides.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}