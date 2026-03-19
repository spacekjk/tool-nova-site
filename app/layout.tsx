import Link from "next/link";
import "./globals.css";

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
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Tool Nova
            </Link>

            <nav className="hidden md:flex gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        {children}

        {/* 🔥 FOOTER 추가 */}
        <footer className="border-t border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row justify-between gap-6 text-sm text-white/60">
            
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