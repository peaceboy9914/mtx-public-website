import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { IconArrowRight } from "./icons";

type Variant = "primary" | "outline" | "inverse" | "outline-inverse";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-brand",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  inverse: "bg-paper text-ink hover:bg-white",
  "outline-inverse": "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export const buttonClass = (variant: Variant = "primary", className?: string) =>
  clsx(
    "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-200",
    variants[variant],
    className
  );

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
      {arrow ? (
        <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

/** Inline text link with a trailing arrow, used for "read more" style links. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-1.5 text-[14px] font-medium underline decoration-current/25 underline-offset-[5px] transition-colors hover:decoration-current",
        className
      )}
    >
      {children}
      <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
