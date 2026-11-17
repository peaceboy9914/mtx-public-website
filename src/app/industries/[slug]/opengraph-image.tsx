import { getIndustry, industries } from "@/content/industries";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "MTX Digital Technologies industry";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return renderOgImage({
    eyebrow: industry ? `Industries · ${industry.name}` : "Industries",
    title: industry?.seoTitle ?? "Software for Ethiopian industries",
    footer: "mtxdigitaltechnologies.com/industries",
  });
}
