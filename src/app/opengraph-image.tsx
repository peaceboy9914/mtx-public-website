import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 560px at 78% 0%, rgba(47,155,255,0.35), transparent 60%), radial-gradient(800px 560px at 0% 100%, rgba(11,92,255,0.28), transparent 60%), #0A1330",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#0B5CFF,#2F9BFF)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            M
          </div>
          MTX Digital Technologies
        </div>
        <div style={{ display: "flex", marginTop: 44, fontSize: 56, fontWeight: 700, lineHeight: 1.12, maxWidth: 920 }}>
          We build the software Ethiopian institutions run on
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.68)" }}>
          Web · Mobile · ERP · AI — Addis Ababa, Ethiopia
        </div>
      </div>
    ),
    { ...size }
  );
}
