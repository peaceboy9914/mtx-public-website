import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#f5f3ee",
    theme_color: "#0b1633",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
