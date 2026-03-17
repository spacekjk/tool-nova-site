import { buildMetadata } from "@/lib/seo";
import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata = buildMetadata({
  title: "Age Calculator - Calculate Exact Age Online",
  description:
    "Use this free age calculator to calculate your exact age in years, months, and days from your birth date.",
  path: "/calculators/age-calculator",
  keywords: [
    "age calculator",
    "exact age calculator",
    "calculate age online",
    "birth date calculator",
    "online age calculator",
  ],
});

export default function Page() {
  return <AgeCalculatorClient />;
}