import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondary-dark" | "light";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-[9px] px-6 py-[15px] text-[15px] font-semibold transition-all duration-200";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "gradient-cta text-white shadow-[0_16px_34px_-14px_rgba(47,155,255,0.9)] hover:-translate-y-px hover:brightness-[1.08]",
  secondary: "border border-white/22 text-white hover:bg-white/8",
  "secondary-dark": "border border-navy-900/14 text-navy-900 hover:bg-navy-900/[0.04]",
  light: "bg-white text-navy-900 hover:bg-blue-300/20",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
