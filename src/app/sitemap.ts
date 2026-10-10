import type { MetadataRoute } from "next";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { workProjects } from "@/content/work";

/** Bump when page content changes meaningfully; a fresh timestamp on every build tells crawlers nothing. */
const CONTENT_UPDATED = new Date("2026-10-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${siteConfig.url}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("", 1),
    entry("/services", 0.9),
    entry("/platforms", 0.9),
    ...services.map((service) => entry(`/services/${service.slug}`, 0.8)),
    ...platforms.map((platform) => entry(`/platforms/${platform.slug}`, 0.8)),
    entry("/work", 0.7),
    ...workProjects.map((project) => entry(`/work/${project.slug}`, 0.6)),
    entry("/about", 0.6),
    entry("/contact", 0.7),
  ];
}
