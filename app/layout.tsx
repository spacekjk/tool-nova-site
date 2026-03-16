import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";

export const metadata: Metadata = {
  title: "Tool Nova - Free Online Calculators & Converters",
  description:
    "Tool Nova provides free online calculators, converters, and text tools such as age calculator, percentage calculator, word counter, and more.",
  keywords: [
    "online calculator",
    "age calculator",
    "percentage calculator",
    "word counter",
    "free tools",
    "online converters",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="0CO529p4z7Bl4BU3hkAvlAapJKIU2UEHDgn__xNwYE4" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}