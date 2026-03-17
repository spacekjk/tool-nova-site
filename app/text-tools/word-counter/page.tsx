import { buildMetadata } from "@/lib/seo";
import WordCounterClient from "./WordCounterClient";

export const metadata = buildMetadata({
  title: "Word Counter",
  description: "Count words instantly with this free online word counter tool.",
  path: "/text-tools/word-counter",
  keywords: ["word counter", "count words online", "word count tool"],
});

export default function Page() {
  return <WordCounterClient />;
}