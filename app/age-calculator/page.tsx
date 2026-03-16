import type { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Exact Age Online | Tool Nova",
  description:
    "Use this free age calculator to calculate your exact age in years, months, and days from your birth date.",
  keywords: [
    "age calculator",
    "exact age calculator",
    "calculate age online",
    "birth date calculator",
    "online age calculator",
  ],
};

export default function Page() {
  return <AgeCalculatorClient />;
}