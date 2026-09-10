import Image from "next/image";
import { hasImage } from "@/lib/images";
import { ImagePlaceholder } from "./image-placeholder";

/** A flat, cropped screenshot (no device chrome) — used in dense grid cards. */
export function WorkThumb({ src, alt, sizes = "(min-width: 1024px) 33vw, 100vw" }: { src: string; alt: string; sizes?: string }) {
  const exists = hasImage(src);
  return (
    <div className="relative h-full w-full overflow-hidden bg-navy-950">
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      ) : (
        <ImagePlaceholder label={alt} />
      )}
    </div>
  );
}
