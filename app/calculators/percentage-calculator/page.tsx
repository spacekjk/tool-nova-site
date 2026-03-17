import { buildMetadata } from "@/lib/seo";
import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata = buildMetadata({
  title: "Percentage Calculator",
  description:
    "Calculate percentages easily with this free online percentage calculator.",
  path: "/calculators/percentage-calculator",
  keywords: [
    "percentage calculator",
    "calculate percentage",
    "percent tool",
    "online percentage calculator",
  ],
});

export default function Page() {
  return <PercentageCalculatorClient />;
}