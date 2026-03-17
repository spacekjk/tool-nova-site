import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import DaysBetweenDatesClient from "./DaysBetweenDatesClient";

export const metadata = buildMetadata({
  title: "Days Between Dates Calculator",
  description:
    "Calculate the number of days between two dates quickly using this free online calculator.",
  path: "/calculators/days-between-dates",
  keywords: ["days between dates", "date difference calculator"],
});

const faqItems = [
  {
    question: "How do I calculate the number of days between two dates?",
    answer:
      "Choose a start date and an end date, and the calculator will instantly show the number of days between them.",
  },
  {
    question: "Does this date calculator account for leap years?",
    answer:
      "Yes. The calculator uses real calendar dates, including leap years.",
  },
  {
    question: "Is this days between dates calculator free?",
    answer:
      "Yes. Tool Nova provides this date calculator for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <DaysBetweenDatesClient />
      <ToolSchema
        name="Days Between Dates Calculator"
        description="Calculate the number of days between two dates quickly using this free online calculator."
        url="https://tool-nova.com/calculators/days-between-dates"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}