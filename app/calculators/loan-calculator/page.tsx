import { buildMetadata } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata = buildMetadata({
  title: "Loan Calculator",
  description:
    "Estimate monthly payments and total loan cost using this free loan calculator.",
  path: "/calculators/loan-calculator",
  keywords: ["loan calculator", "monthly payment calculator", "loan payment"],
});

export default function Page() {
  return <LoanCalculatorClient />;
}