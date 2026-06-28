import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectUrls = projects.map((p) => ({
    url: `${siteConfig.url}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
