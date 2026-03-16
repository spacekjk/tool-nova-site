"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  { href: "/age-calculator", label: "Age Calculator" },
  { href: "/percentage-calculator", label: "Percentage Calculator" },
  { href: "/bmi-calculator", label: "BMI Calculator" },
  { href: "/word-counter", label: "Word Counter" },
  { href: "/character-counter", label: "Character Counter" },
  { href: "/time-calculator", label: "Time Calculator" },
  { href: "/kg-to-lbs", label: "Kg to Lbs Converter" },
  { href: "/random-number-generator", label: "Random Number Generator" },
  { href: "/password-generator", label: "Password Generator" },
  { href: "/case-converter", label: "Case Converter" },
  { href: "/random-name-picker", label: "Random Name Picker" },
  { href: "/number-to-words", label: "Number to Words" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Tool Nova
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-white/80 hover:text-white">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="rounded-md px-2 py-1 text-white/80 hover:text-white">
              Tools
            </button>

            {open && (
              <div className="absolute right-0 top-full z-50 pt-2">
                <div className="w-64 rounded-xl border border-white/10 bg-neutral-900 shadow-xl">
                  <div className="grid grid-cols-1">
                    {tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="px-4 py-3 text-sm text-white/85 hover:bg-white/5"
                      >
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}