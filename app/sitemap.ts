import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries();
}