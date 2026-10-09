import clsx from "clsx";
import type { ReactNode } from "react";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-current/20 px-3 py-1 text-[12.5px] leading-none font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
