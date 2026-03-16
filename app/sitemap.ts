import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tool-nova.com";

  const routes = [
    "",
    "/age-calculator",
    "/percentage-calculator",
    "/bmi-calculator",
    "/word-counter",
    "/time-calculator",
    "/kg-to-lbs",
    "/random-number-generator",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}