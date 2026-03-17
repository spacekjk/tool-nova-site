import { buildMetadata } from "@/lib/seo";
import TimeCalculatorClient from "./TimeCalculatorClient";

export const metadata = buildMetadata({
  title: "Time Calculator",
  description: "Add or subtract time easily with this free online time calculator.",
  path: "/calculators/time-calculator",
  keywords: ["time calculator", "time addition calculator", "time difference"],
});

export default function Page() {
  return <TimeCalculatorClient />;
}