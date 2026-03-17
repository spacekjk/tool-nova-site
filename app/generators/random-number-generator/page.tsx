import { buildMetadata } from "@/lib/seo";
import RandomNumberGeneratorClient from "./RandomNumberGeneratorClient";

export const metadata = buildMetadata({
  title: "Random Number Generator",
  description: "Generate random numbers instantly with this free online tool.",
  path: "/generators/random-number-generator",
  keywords: ["random number generator"],
});

export default function Page() {
  return <RandomNumberGeneratorClient />;
}