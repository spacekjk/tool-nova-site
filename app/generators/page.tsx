import Link from "next/link";

const generators = [
  {
    title: "Random Number Generator",
    href: "/random-number-generator",
    description: "Generate a random number between any two values.",
  },
  {
    title: "Password Generator",
    href: "/password-generator",
    description: "Create strong and secure passwords instantly.",
  },
  {
    title: "Random Name Picker",
    href: "/random-name-picker",
    description: "Pick a random name from a list.",
  },
];

export default function GeneratorsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-3 text-sm text-white/60">Tool Nova Categories</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Generators
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
          Free online generators for numbers, passwords, and name picking.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {generators.map((tool) => (
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