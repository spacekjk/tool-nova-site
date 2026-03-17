import { buildMetadata } from "@/lib/seo";
import CharacterCounterClient from "./CharacterCounterClient";

export const metadata = buildMetadata({
  title: "Character Counter",
  description: "Count characters instantly with this free online character counter.",
  path: "/text-tools/character-counter",
  keywords: ["character counter", "count characters tool"],
});

export default function Page() {
  return <CharacterCounterClient />;
}