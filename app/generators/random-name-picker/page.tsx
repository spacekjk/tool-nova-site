import { buildMetadata } from "@/lib/seo";
import RandomNamePickerClient from "./RandomNamePickerClient";

export const metadata = buildMetadata({
  title: "Random Name Picker",
  description: "Pick a random name from a list instantly using this free name picker.",
  path: "/generators/random-name-picker",
  keywords: ["random name picker"],
});

export default function Page() {
  return <RandomNamePickerClient />;
}