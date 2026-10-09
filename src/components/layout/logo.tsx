import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { hasImage } from "@/lib/images";

const LOGOS = {
  dark: "/images/brand/mtx-logo.png",
  light: "/images/brand/mtx-logo-light.png",
};
// Intrinsic aspect ratio of the source lockup (icon + wordmark, tagline cropped).
const LOGO_RATIO = 1032 / 443;

/** `tone` is the color of the logo itself: "dark" for light backgrounds, "light" for ink ones. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const src = LOGOS[tone];

  return (
    <Link href="/" aria-label="MTX Digital Technologies — Home" className={clsx("flex flex-none items-center", className)}>
      {hasImage(src) ? (
        <Image
          src={src}
          alt="MTX Digital Technologies"
          width={Math.round(160 * LOGO_RATIO)}
          height={160}
          className="h-8 w-auto"
          priority
        />
      ) : (
        <span className={clsx("text-xl font-bold tracking-[-0.04em]", tone === "light" ? "text-paper" : "text-ink")}>
          MTX
        </span>
      )}
    </Link>
  );
}
