import { buildMetadata } from "@/lib/seo";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata = buildMetadata({
  title: "Password Generator",
  description: "Generate secure passwords instantly with this free password generator.",
  path: "/generators/password-generator",
  keywords: ["password generator", "secure password generator"],
});

export default function Page() {
  return <PasswordGeneratorClient />;
}