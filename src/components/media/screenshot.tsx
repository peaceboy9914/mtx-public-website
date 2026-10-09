import Image from "next/image";
import clsx from "clsx";
import { hasImage } from "@/lib/images";

type ScreenshotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Product screenshot in device chrome.
 * - "browser": a window with a title bar; pass `url` to show the live domain.
 *   `bleed` drops the shadow and right-hand corners so the window can run off a card's edge.
 * - "phone": a bezel sized by its container's width.
 * Missing files fall back to a labeled placeholder (screenshots are added by hand).
 */
export function Screenshot({
  frame = "browser",
  url,
  bleed,
  ...props
}: ScreenshotProps & { frame?: "browser" | "phone"; url?: string; bleed?: boolean }) {
  return frame === "phone" ? <PhoneShot {...props} /> : <BrowserShot url={url} bleed={bleed} {...props} />;
}

function BrowserShot({
  src,
  alt,
  priority,
  sizes = "(min-width: 1024px) 720px, 100vw",
  className,
  url,
  bleed,
}: ScreenshotProps & { url?: string; bleed?: boolean }) {
  return (
    <figure
      className={clsx(
        "overflow-hidden border border-ink/12 bg-white",
        bleed ? "rounded-l-xl border-r-0" : "rounded-xl shadow-[0_40px_80px_-40px_rgba(11,22,51,0.45)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-ink/10 bg-paper px-3.5 py-2.5">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </div>
        {url ? (
          <span className="mx-auto truncate rounded-md bg-ink/[0.05] px-3 py-1 font-mono text-[11px] text-ink/55">{url}</span>
        ) : null}
      </div>
      <div className="relative aspect-[16/10]">
        <Media src={src} alt={alt} priority={priority} sizes={sizes} />
      </div>
    </figure>
  );
}

function PhoneShot({ src, alt, priority, sizes = "320px", className }: ScreenshotProps) {
  return (
    <figure
      className={clsx(
        "rounded-[2.2rem] bg-ink p-[7px] shadow-[0_40px_80px_-30px_rgba(11,22,51,0.6)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-white">
        <Media src={src} alt={alt} priority={priority} sizes={sizes} />
      </div>
    </figure>
  );
}

function Media({ src, alt, priority, sizes }: { src: string; alt: string; priority?: boolean; sizes: string }) {
  if (!hasImage(src)) {
    return (
      <div className="grid-paper flex h-full w-full items-center justify-center bg-paper-2 p-4 text-center">
        <span className="label text-ink/45">{alt}</span>
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />;
}
