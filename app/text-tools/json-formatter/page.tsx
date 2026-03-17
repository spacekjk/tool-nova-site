import { buildMetadata } from "@/lib/seo";
import JsonFormatterClient from "./JsonFormatterClient";

export const metadata = buildMetadata({
  title: "JSON Formatter",
  description: "Format and beautify JSON data instantly using this free JSON formatter.",
  path: "/text-tools/json-formatter",
  keywords: ["json formatter", "json beautifier"],
});

export default function Page() {
  return <JsonFormatterClient />;
}