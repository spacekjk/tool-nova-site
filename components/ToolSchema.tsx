type ToolSchemaProps = {
  name: string;
  description: string;
  url: string;
  category?: string;
};

export default function ToolSchema({
  name,
  description,
  url,
  category = "UtilityApplication",
}: ToolSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Web",
    browserRequirements: "Requires a modern web browser",
    isAccessibleForFree: true,
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Tool Nova",
      url: "https://tool-nova.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
