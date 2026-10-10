import { ImageResponse } from "next/og";

// Mirrors the site's paper / ink palette from globals.css.
const ink = "#0B1633";
const paper = "#F5F3EE";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card used by the site root and every service / system page. */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const fontSize = title.length > 60 ? 60 : title.length > 40 ? 68 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: paper,
          backgroundImage:
            "linear-gradient(to right, rgba(11,22,51,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,22,51,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2, color: "rgba(11,22,51,0.6)" }}>
          <span>MTX DIGITAL TECHNOLOGIES</span>
          <span>{eyebrow.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", fontSize, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3, maxWidth: 1040 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, color: "rgba(11,22,51,0.7)" }}>
          <div style={{ display: "flex", width: 120, height: 8, borderRadius: 4, background: "linear-gradient(120deg,#1F5BFF,#19B8FF)" }} />
          {footer}
        </div>
      </div>
    ),
    ogSize
  );
}
