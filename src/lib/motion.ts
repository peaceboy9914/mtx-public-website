import type { CSSProperties } from "react";

/** Stagger offset for the `.rise` load animation defined in globals.css. */
export const riseDelay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
