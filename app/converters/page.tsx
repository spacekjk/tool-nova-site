import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Converters",
  description:
    "Use free online converters for weight, numbers, and other everyday unit conversions. Fast, simple, and easy to use on any device.",
  alternates: {
    canonical: "https://tool-nova.com/converters",
  },
  openGraph: {
    title: "Free Online Converters | Tool Nova",
    description:
      "Use free online converters for weight, numbers, and other everyday unit conversions. Fast, simple, and easy to use on any device.",
    url: "https://tool-nova.com/converters",
    siteName: "Tool Nova",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Converters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Converters | Tool Nova",
    description:
      "Use free online converters for weight, numbers, and other everyday unit conversions. Fast, simple, and easy to use on any device.",
    images: ["/og-image.png"],
  },
};

const tools = [
  { name: "Kg to Lbs", href: "/converters/kg-to-lbs" },
  { name: "Number to Words", href: "/converters/number-to-words" },
];

export default function ConvertersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Free Online Converters</h1>

      <p className="mt-4 max-w-3xl text-gray-600">
        Explore free online converters for units, numbers, and everyday values.
        These tools help you quickly convert measurements and formats without
        needing extra apps or manual calculations.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="mt-2 text-sm text-gray-500">
              Open the {tool.name.toLowerCase()} tool.
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Why use online converters?</h2>
        <p className="mt-3 text-gray-600">
          Online converters help you switch between units, values, and text-based
          number formats in seconds. Whether you need to convert kilograms to
          pounds or turn numbers into written words, browser-based tools are
          faster and more convenient than doing it by hand.
        </p>
        <p className="mt-3 text-gray-600">
          These tools are helpful for students, writers, travelers, business
          users, and anyone who needs quick, accurate conversions in daily work.
        </p>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Popular converter categories</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Weight and measurement converters</li>
          <li>Number and word format converters</li>
          <li>Daily-use conversion tools for school and work</li>
          <li>Simple unit tools for quick calculations</li>
        </ul>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl font-semibold">Simple tools for accurate conversion</h2>
        <p className="mt-3 text-gray-600">
          Conversion tools reduce mistakes and save time, especially when the same
          types of values are used repeatedly. They are useful for writing checks,
          formatting documents, comparing measurements, and handling unit changes
          more confidently.
        </p>
      </section>
    </main>
  );
}