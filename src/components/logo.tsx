import Image from "next/image";
import Link from "next/link";
import { hasImage } from "@/lib/images";

const DARK_LOGO = "/images/brand/mtx-logo.png";
const LIGHT_LOGO = "/images/brand/mtx-logo-light.png";
// Intrinsic aspect ratio of the source lockup (icon + wordmark, tagline cropped).
const LOGO_RATIO = 1032 / 443;

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const src = tone === "light" ? LIGHT_LOGO : DARK_LOGO;
  const exists = hasImage(src);

  if (exists) {
    return (
      <Link href="/" aria-label="MTX Digital Technologies — Home" className="flex-none">
        <Image
          src={src}
          alt="MTX Digital Technologies"
          width={Math.round(160 * LOGO_RATIO)}
          height={160}
          className="h-8 w-auto sm:h-9"
          priority
        />
      </Link>
    );
  }

  const isLight = tone === "light";
  return (
    <Link href="/" aria-label="MTX Digital Technologies — Home" className="flex flex-none items-center gap-2.5">
      <span className="gradient-cta flex h-9 w-9 items-center justify-center rounded-[10px] font-display text-[15px] font-bold text-white">
        M
      </span>
      <span className={"font-display text-lg font-bold tracking-[-.01em] " + (isLight ? "text-white" : "text-navy-900")}>
        MTX
      </span>
    </Link>
  );
}
