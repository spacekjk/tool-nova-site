import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Tool Nova
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Home
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}