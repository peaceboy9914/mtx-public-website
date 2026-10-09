import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

// Mirrors the site's paper / ink palette from globals.css.
const ink = "#0B1633";
const paper = "#F5F3EE";

export default function OpengraphImage() {
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
          backgroundImage: `linear-gradient(to right, rgba(11,22,51,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,22,51,0.06) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          color: ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2, color: "rgba(11,22,51,0.6)" }}>
          <span>MTX DIGITAL TECHNOLOGIES</span>
          <span>ADDIS ABABA</span>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000 }}>
          We build the software Ethiopian institutions run on.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, color: "rgba(11,22,51,0.7)" }}>
          <div style={{ display: "flex", width: 120, height: 8, borderRadius: 4, background: "linear-gradient(120deg,#1F5BFF,#19B8FF)" }} />
          Web · Mobile · ERP · AI
        </div>
      </div>
    ),
    { ...size }
  );
}
