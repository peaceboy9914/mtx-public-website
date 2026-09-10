import Image from "next/image";
import { hasImage } from "@/lib/images";
import { ImagePlaceholder } from "./image-placeholder";

export function PhoneFrame({
  src,
  alt,
  size = "md",
  priority = false,
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}) {
  const exists = hasImage(src);
  const sizeClass = {
    sm: "w-[110px] sm:w-[132px]",
    md: "w-[118px] sm:w-[158px]",
    lg: "w-[140px] sm:w-[190px]",
  }[size];

  return (
    <div
      className={`${sizeClass} flex-none rounded-[26px] border border-white/10 bg-navy-900 p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)]`}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[21px] bg-white">
        {exists ? (
          <Image src={src} alt={alt} fill sizes="200px" className="object-cover object-top" priority={priority} />
        ) : (
          <ImagePlaceholder label={alt} />
        )}
      </div>
    </div>
  );
}
