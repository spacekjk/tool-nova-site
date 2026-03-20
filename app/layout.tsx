import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import HeaderToolSearch from "@/components/HeaderToolSearch";
import { SITE_URL } from "@/lib/tools";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tool Nova",
    template: "%s | Tool Nova",
  },
  description:
    "Free online tools for text, calculators, generators, and converters. Fast, simple, and privacy-friendly tools for everyday use.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Tool Nova",
    title: "Tool Nova",
    description:
      "Free online tools for text, calculators, generators, and converters. Fast, simple, and privacy-friendly tools for everyday use.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tool Nova",
    description:
      "Free online tools for text, calculators, generators, and converters. Fast, simple, and privacy-friendly tools for everyday use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <div className="min-h-screen">
          <header className="border-b border-white/10 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                Tool Nova
              </Link>

              <div className="hidden min-w-[280px] flex-1 justify-center md:flex">
                <HeaderToolSearch />
              </div>

              <nav className="flex items-center gap-4 text-sm text-white/70">
                <Link href="/all-tools" className="transition hover:text-white">
                  All Tools
                </Link>
                <Link href="/popular-tools" className="transition hover:text-white">
                  Popular
                </Link>
                <Link href="/new-tools" className="transition hover:text-white">
                  New
                </Link>
              </nav>
            </div>

            <div className="mx-auto px-6 pb-4 md:hidden">
              <HeaderToolSearch />
            </div>
          </header>

          {children}

          <footer className="mt-20 border-t border-white/10">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
              <div className="md:col-span-2">
                <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                  Tool Nova
                </Link>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                  Free online tools for text, calculators, converters, generators,
                  and quick everyday tasks. Built for speed, simplicity, and easy use.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Explore
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/60">
                  <div>
                    <Link href="/all-tools" className="transition hover:text-white">
                      All Tools
                    </Link>
                  </div>
                  <div>
                    <Link href="/popular-tools" className="transition hover:text-white">
                      Popular Tools
                    </Link>
                  </div>
                  <div>
                    <Link href="/new-tools" className="transition hover:text-white">
                      New Tools
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Company
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/60">
                  <div>
                    <Link href="/about" className="transition hover:text-white">
                      About
                    </Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="transition hover:text-white">
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link href="/terms-of-service" className="transition hover:text-white">
                      Terms of Service
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact" className="transition hover:text-white">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Tool Nova. All rights reserved.</p>
                <p>Fast, simple, privacy-friendly online tools.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
