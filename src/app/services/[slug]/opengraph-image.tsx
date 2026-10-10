import { getService, services } from "@/content/services";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "MTX Digital Technologies service";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOgImage({
    eyebrow: service?.category ?? "Services",
    title: service?.seoTitle ?? "Software development services in Ethiopia",
    footer: "mtxdigitaltechnologies.com/services",
  });
}
