import { getPlatform, platforms } from "@/content/platforms";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "MTX Digital Technologies system";

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  return renderOgImage({
    eyebrow: platform?.sector ?? "Systems",
    title: platform?.seoTitle ?? "Business software systems in Ethiopia",
    footer: "mtxdigitaltechnologies.com/platforms",
  });
}
