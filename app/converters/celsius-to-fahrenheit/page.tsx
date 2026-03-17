import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import CelsiusToFahrenheitClient from "./CelsiusToFahrenheitClient";

export const metadata = buildMetadata({
  title: "Celsius to Fahrenheit Converter",
  description: "Convert Celsius to Fahrenheit instantly with this free temperature converter.",
  path: "/converters/celsius-to-fahrenheit",
  keywords: ["celsius to fahrenheit", "temperature converter", "c to f"],
});

const faqItems = [
  {
    question: "How do I convert Celsius to Fahrenheit?",
    answer:
      "Enter the temperature in Celsius and the converter will instantly show the Fahrenheit value.",
  },
  {
    question: "What formula is used for Celsius to Fahrenheit?",
    answer:
      "The conversion formula is Fahrenheit equals Celsius times 9 divided by 5 plus 32.",
  },
  {
    question: "Is this temperature converter free?",
    answer:
      "Yes. Tool Nova provides this temperature converter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <CelsiusToFahrenheitClient />
      <RelatedTools
        tools={[
          { name: "Cm to Inches Converter", href: "/converters/cm-to-inches" },
          { name: "Kg to Lbs Converter", href: "/converters/kg-to-lbs" },
          { name: "Number to Words Converter", href: "/converters/number-to-words" },
        ]}
      />
      <ToolSchema
        name="Celsius to Fahrenheit Converter"
        description="Convert Celsius to Fahrenheit instantly with this free temperature converter."
        url="https://tool-nova.com/converters/celsius-to-fahrenheit"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}