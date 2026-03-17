// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white">
        
        {/* ✅ 상단 고정 Home 버튼 */}
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-black/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            
            {/* 로고 (왼쪽) */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Tool Nova
            </Link>

            {/* Home 버튼 (오른쪽) */}
            <Link
              href="/"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Home
            </Link>
          </div>
        </header>

        {/* 본문 */}
        <main>{children}</main>

      </body>
    </html>
  );
}