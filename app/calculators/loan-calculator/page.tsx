import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata = buildMetadata({
  title: "Loan Calculator",
  description:
    "Estimate monthly payments and total loan cost using this free loan calculator.",
  path: "/calculators/loan-calculator",
  keywords: ["loan calculator", "monthly payment calculator", "loan payment"],
});

const faqItems = [
  {
    question: "What does a loan calculator do?",
    answer:
      "A loan calculator estimates monthly payments, total repayment amount, and interest based on your loan details.",
  },
  {
    question: "Can I calculate monthly loan payments with this tool?",
    answer:
      "Yes. Enter your loan amount, interest rate, and term to estimate monthly payments.",
  },
  {
    question: "Is this loan calculator free?",
    answer:
      "Yes. Tool Nova provides this loan calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <LoanCalculatorClient />
      <ToolSchema
        name="Loan Calculator"
        description="Estimate monthly payments and total loan cost using this free loan calculator."
        url="https://tool-nova.com/calculators/loan-calculator"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}