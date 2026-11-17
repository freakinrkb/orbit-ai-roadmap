import { ImageResponse } from "next/og";

export const alt = "ORBIT · Applied AI Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "radial-gradient(ellipse at top, #0b0d14 0%, #06070b 70%)",
          color: "#e8e6e1",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#3ee0c6", boxShadow: "0 0 24px #3ee0c6" }} />
          <span style={{ fontFamily: "monospace", fontSize: 18, letterSpacing: 6, color: "#a7a49c" }}>ORBIT · APPLIED AI ENGINEERING</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.95, fontStyle: "italic" }}>One orbit.</div>
          <div style={{ fontSize: 92, lineHeight: 0.95, fontStyle: "italic", background: "linear-gradient(120deg,#e8e6e1,#3ee0c6,#8b7cff)", backgroundClip: "text", color: "transparent" }}>
            180 days.
          </div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#a7a49c", fontFamily: "sans-serif" }}>
            From backend engineer to applied AI engineer · 1–2 hours a day
          </div>
        </div>
        <div style={{ fontFamily: "monospace", fontSize: 16, color: "#6b6963", letterSpacing: 4 }}>
          7 PHASES · 25 WEEKS · 3 PROJECTS · NOV 2026 — MAY 2027
        </div>
      </div>
    ),
    size
  );
}