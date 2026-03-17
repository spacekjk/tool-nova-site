import { buildMetadata } from "@/lib/seo";
import TextCompareClient from "./TextCompareClient";

export const metadata = buildMetadata({
  title: "Text Compare Tool",
  description: "Compare two pieces of text and highlight differences instantly.",
  path: "/text-tools/text-compare",
  keywords: ["text compare", "diff checker"],
});

export default function Page() {
  return <TextCompareClient />;
}