import { buildMetadata } from "@/lib/seo";
import KgToLbsClient from "./KgToLbsClient";

export const metadata = buildMetadata({
  title: "Kg to Lbs Converter",
  description: "Convert kilograms to pounds quickly with this free online converter.",
  path: "/converters/kg-to-lbs",
  keywords: ["kg to lbs", "kilogram to pounds converter"],
});

export default function Page() {
  return <KgToLbsClient />;
}