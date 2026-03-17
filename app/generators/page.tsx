import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Generators",
  description:
    "Use free online generators for passwords, random numbers, random names, and other useful values for work, study, and daily tasks.",
  alternates: {
    canonical: "https://tool-nova.com/generators",
  },
  openGraph: {
    title: "Free Online Generators | Tool Nova",
    description:
      "Use free online generators for passwords, random numbers, random names, and other useful values for work, study, and daily tasks.",
    url: "https://tool-nova.com/generators",
    siteName: "Tool Nova",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Generators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Generators | Tool Nova",
    description:
      "Use free online generators for passwords, random numbers, random names, and other useful values for work, study, and daily tasks.",
    images: ["/og-image.png"],
  },
};

const tools = [
  { name: "Password Generator", href: "/generators/password-generator" },
  { name: "Random Number Generator", href: "/generators/random-number-generator" },
  { name: "Random Name Picker", href: "/generators/random-name-picker" },
  { name: "UUID Generator", href: "/generators/uuid-generator" },
  { name: "Slug Generator", href: "/generators/slug-generator" },
];

export default function GeneratorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Free Online Generators</h1>

      <p className="mt-4 max-w-3xl text-gray-600">
        Use free online generators to quickly create passwords, random numbers,
        names, and other useful outputs. These tools are designed to be simple,
        fast, and practical for work, study, classroom use, and everyday tasks.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="mt-2 text-sm text-gray-500">
              Open the {tool.name.toLowerCase()} tool.
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Why use online generators?</h2>
        <p className="mt-3 text-gray-600">
          Online generators make it easier to create values instantly without
          doing the work manually. A password generator can help create stronger
          login credentials, while random number and name tools are useful for
          fair selection, classroom activities, giveaways, games, and testing.
        </p>
        <p className="mt-3 text-gray-600">
          Because these tools work directly in your browser, they are convenient
          on both desktop and mobile. They are especially useful when you need
          quick results without installing any software.
        </p>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Popular generator categories</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Security tools like password generators</li>
          <li>Random selection tools like number and name pickers</li>
          <li>Classroom and event tools for fair and simple choices</li>
          <li>Utility generators for everyday online tasks</li>
        </ul>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Fast tools for practical use</h2>
        <p className="mt-3 text-gray-600">
          Generator tools are useful in many situations, from choosing a winner
          in a giveaway to creating secure passwords for accounts. They also help
          reduce bias in manual selection and improve speed when repeated values
          need to be created quickly.
        </p>
      </section>
    </main>
  );
}