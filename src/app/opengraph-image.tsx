import { siteConfig } from "@/content/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = `${siteConfig.name} — software development company in Ethiopia`;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Addis Ababa",
    title: "We build the software Ethiopian institutions run on.",
    footer: "Custom software · ERP · Web · Mobile · AI",
  });
}
