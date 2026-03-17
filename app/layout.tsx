import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tool-nova.com"),
  title: {
    default: "Tool Nova - Free Online SEO, Text, Calculator & Converter Tools",
    template: "%s | Tool Nova",
  },
  description:
    "Free online tools for calculators, text editing, generators, converters, and SEO productivity. Fast, simple, and mobile-friendly.",
  keywords: [
    "free online tools",
    "seo tools",
    "calculator tools",
    "text tools",
    "generators",
    "converters",
    "age calculator",
    "word counter",
    "json formatter",
    "loan calculator",
  ],
  applicationName: "Tool Nova",
  authors: [{ name: "Tool Nova" }],
  creator: "Tool Nova",
  publisher: "Tool Nova",
  alternates: {
    canonical: "https://tool-nova.com",
  },
  openGraph: {
    type: "website",
    url: "https://tool-nova.com",
    title: "Tool Nova - Free Online SEO, Text, Calculator & Converter Tools",
    description:
      "Free online tools for calculators, text editing, generators, converters, and SEO productivity.",
    siteName: "Tool Nova",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tool Nova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tool Nova - Free Online SEO, Text, Calculator & Converter Tools",
    description:
      "Free online tools for calculators, text editing, generators, converters, and SEO productivity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}