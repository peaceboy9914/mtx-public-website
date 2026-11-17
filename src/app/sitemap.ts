import type { MetadataRoute } from "next";
import { publishedPosts } from "@/content/insights";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { workProjects } from "@/content/work";
import { SITE_CONTENT_UPDATED } from "@/lib/dates";
import { hasImage } from "@/lib/images";

/**
 * Each entry carries the date its own content last changed (never the build time, which tells crawlers
 * nothing). Case-study entries also list their screenshots for image search.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const entry = (path: string, priority: number, updated: string = SITE_CONTENT_UPDATED, images?: string[]) => ({
    url: url(path),
    lastModified: new Date(`${updated}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority,
    ...(images?.length ? { images } : {}),
  });

  const newest = (dates: (string | undefined)[]) =>
    dates.filter((date): date is string => Boolean(date)).sort().at(-1) ?? SITE_CONTENT_UPDATED;
  const workUpdated = newest(workProjects.map((project) => project.updated));

  return [
    entry("", 1, newest([SITE_CONTENT_UPDATED, workUpdated])),
    entry("/services", 0.9),
    entry("/platforms", 0.9),
    ...services.map((service) => entry(`/services/${service.slug}`, 0.8, service.updated)),
    ...platforms.map((platform) => entry(`/platforms/${platform.slug}`, 0.8, platform.updated)),
    entry("/work", 0.7, workUpdated),
    ...workProjects.map((project) =>
      entry(
        `/work/${project.slug}`,
        0.6,
        project.updated,
        [project.image.src, ...(project.gallery ?? []).map((shot) => shot.src)].filter(hasImage).map(url)
      )
    ),
    ...(publishedPosts.length
      ? [
          entry("/insights", 0.6, newest(publishedPosts.map((post) => post.updated ?? post.published))),
          ...publishedPosts.map((post) => entry(`/insights/${post.slug}`, 0.6, post.updated ?? post.published)),
        ]
      : []),
    entry("/about", 0.6),
    entry("/facts", 0.6),
    entry("/contact", 0.7),
    entry("/privacy", 0.2),
    entry("/terms", 0.2),
  ];
}
