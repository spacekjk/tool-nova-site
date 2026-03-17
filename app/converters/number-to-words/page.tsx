import { buildMetadata } from "@/lib/seo";
import NumberToWordsClient from "./NumberToWordsClient";

export const metadata = buildMetadata({
  title: "Number to Words Converter",
  description: "Convert numbers into words instantly using this free online tool.",
  path: "/converters/number-to-words",
  keywords: ["number to words converter"],
});

export default function Page() {
  return <NumberToWordsClient />;
}