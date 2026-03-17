import { buildMetadata } from "@/lib/seo";
import BMICalculatorClient from "./BMICalculatorClient";

export const metadata = buildMetadata({
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI) using height and weight with this free BMI calculator.",
  path: "/calculators/bmi-calculator",
  keywords: ["bmi calculator", "body mass index calculator", "bmi tool"],
});

export default function Page() {
  return <BMICalculatorClient />;
}