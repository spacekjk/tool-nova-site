import { buildMetadata } from "@/lib/seo";
import CaseConverterClient from "./CaseConverterClient";

export const metadata = buildMetadata({
  title: "Case Converter",
  description:
    "Convert text to uppercase, lowercase, or title case easily with this free case converter.",
  path: "/text-tools/case-converter",
  keywords: ["case converter", "uppercase lowercase converter"],
});

export default function Page() {
  return <CaseConverterClient />;
}