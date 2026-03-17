"use client";

import Link from "next/link";
import { useState } from "react";
import { getNavbarGroups } from "@/lib/tools";

export function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const tools = getNavbarGroups();

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
                  <div className="max-h-[70vh] w-72 overflow-y-auto rounded-xl border border-white/10 bg-neutral-900 shadow-xl">
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
                <div className="mt-1 flex max-h-[60vh] flex-col overflow-y-auto border-t border-white/10 pt-2">
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