import Link from "next/link";
import "./globals.css";
import HeaderToolSearch from "@/components/HeaderToolSearch";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators" },
  { href: "/text-tools", label: "Text Tools" },
  { href: "/generators", label: "Generators" },
  { href: "/converters", label: "Converters" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="shrink-0 text-2xl font-bold text-white">
                Tool Nova
              </Link>
            </div>

            <div className="w-full md:min-w-0 md:flex-1 md:px-4">
              <HeaderToolSearch />
            </div>

            <nav className="hidden shrink-0 gap-3 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 text-sm text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Tool Nova</p>

            <div className="flex gap-4">
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}