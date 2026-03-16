import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/age-calculator", label: "Age Calculator" },
  { href: "/percentage-calculator", label: "Percentage" },
  { href: "/bmi-calculator", label: "BMI" },
  { href: "/word-counter", label: "Word Counter" },
  { href: "/time-calculator", label: "Time" },
  { href: "/kg-to-lbs", label: "Kg to Lbs" },
  { href: "/random-number-generator", label: "Random" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          Tool Nova
        </Link>

        <nav className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}