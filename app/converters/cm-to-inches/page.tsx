import { buildMetadata } from "@/lib/seo";
import FAQSchema from "@/components/FAQSchema";
import ToolSchema from "@/components/ToolSchema";
import RelatedTools from "@/components/RelatedTools";
import CmToInchesClient from "./CmToInchesClient";

export const metadata = buildMetadata({
  title: "Cm to Inches Converter",
  description: "Convert centimeters to inches instantly with this free online converter.",
  path: "/converters/cm-to-inches",
  keywords: ["cm to inches", "centimeters to inches", "height converter"],
});

const faqItems = [
  {
    question: "How do I convert centimeters to inches?",
    answer:
      "Enter a value in centimeters and the converter will instantly show the equivalent value in inches.",
  },
  {
    question: "Is this cm to inches converter accurate?",
    answer:
      "Yes. The converter uses the standard conversion formula where 1 inch equals 2.54 centimeters.",
  },
  {
    question: "Is this converter free?",
    answer:
      "Yes. Tool Nova provides this cm to inches converter for free with no sign-up required.",
  },
];

export default function Page() {
  return (
    <>
      <CmToInchesClient />
      <RelatedTools
        tools={[
          { name: "Kg to Lbs Converter", href: "/converters/kg-to-lbs" },
          { name: "Celsius to Fahrenheit", href: "/converters/celsius-to-fahrenheit" },
          { name: "BMI Calculator", href: "/calculators/bmi-calculator" },
        ]}
      />
      <ToolSchema
        name="Cm to Inches Converter"
        description="Convert centimeters to inches instantly with this free online converter."
        url="https://tool-nova.com/converters/cm-to-inches"
      />
      <FAQSchema items={faqItems} />
    </>
  );
}