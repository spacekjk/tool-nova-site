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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my exact age?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your birth date and the calculator will compare it with today's date to show your current age in years, months, and days.",
      },
    },
    {
      "@type": "Question",
      name: "Does this calculator include leap years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The calculator uses real calendar dates, so leap years are naturally reflected in the total day count.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this age calculator online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tool Nova provides this age calculator completely free with no sign-up required.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <AgeCalculatorClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}