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
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 text-white backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Tool Nova
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-white/80 hover:text-white">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDesktopOpen(true)}
              onMouseLeave={() => setDesktopOpen(false)}
            >
              <button className="rounded-md px-2 py-1 text-white/80 hover:text-white">
                Tools
              </button>

              {desktopOpen && (
                <div className="absolute right-0 top-full z-50 pt-2">
                  <div className="w-72 rounded-xl border border-white/10 bg-neutral-900 shadow-xl">
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

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-900 md:hidden">
            <div className="flex flex-col p-2">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <button
                onClick={() => setMobileToolsOpen((prev) => !prev)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-white/85 hover:bg-white/5"
              >
                <span>Tools</span>
                <span>{mobileToolsOpen ? "−" : "+"}</span>
              </button>

              {mobileToolsOpen && (
                <div className="mt-1 flex flex-col border-t border-white/10 pt-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/5"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileToolsOpen(false);
                      }}
                    >
                      {tool.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}