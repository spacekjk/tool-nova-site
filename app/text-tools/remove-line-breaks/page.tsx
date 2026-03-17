import { buildMetadata } from "@/lib/seo";
import RemoveLineBreaksClient from "./RemoveLineBreaksClient";

export const metadata = buildMetadata({
  title: "Remove Line Breaks",
  description: "Remove line breaks and clean text formatting with this free online tool.",
  path: "/text-tools/remove-line-breaks",
  keywords: ["remove line breaks", "text cleaner"],
});

export default function Page() {
  return <RemoveLineBreaksClient />;
}