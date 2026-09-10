import Image from "next/image";
import { hasImage } from "@/lib/images";
import { ImagePlaceholder } from "./image-placeholder";

export function BrowserFrame({
  src,
  alt,
  variant = "standalone",
  priority = false,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: {
  src: string;
  alt: string;
  variant?: "standalone" | "flush";
  priority?: boolean;
  sizes?: string;
}) {
  const exists = hasImage(src);

  const screen = (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" priority={priority} />
      ) : (
        <ImagePlaceholder label={alt} />
      )}
    </div>
  );

  if (variant === "flush") {
    return (
      <div className="rounded-t-[14px] bg-[linear-gradient(160deg,#3a4a56,#131f24)] p-[7px] shadow-[0_30px_60px_-24px_rgba(0,0,0,.7)]">
        <div className="overflow-hidden rounded-t-[7px]">{screen}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-2xl bg-[linear-gradient(160deg,#31405f,#131f3d)] p-[9px] shadow-[0_44px_80px_-34px_rgba(14,28,66,.75)]">
        <div className="overflow-hidden rounded-lg">{screen}</div>
      </div>
      <div
        className="mx-auto h-[15px] w-[116%] -ml-[8%] rounded-b-2xl bg-[linear-gradient(180deg,#2A3A5C,#0B1428)]"
        style={{ clipPath: "polygon(2.5% 0,97.5% 0,100% 100%,0 100%)" }}
      />
      <div className="mx-auto h-[5px] w-[14%] rounded-b-md bg-navy-900/18" />
    </div>
  );
}
