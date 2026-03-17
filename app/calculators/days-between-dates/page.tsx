import { buildMetadata } from "@/lib/seo";
import DaysBetweenDatesClient from "./DaysBetweenDatesClient";

export const metadata = buildMetadata({
  title: "Days Between Dates Calculator",
  description:
    "Calculate the number of days between two dates quickly using this free online calculator.",
  path: "/calculators/days-between-dates",
  keywords: ["days between dates", "date difference calculator"],
});

export default function Page() {
  return <DaysBetweenDatesClient />;
}