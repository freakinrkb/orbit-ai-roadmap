import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06070b",
          color: "#3ee0c6",
          fontSize: 22,
          fontFamily: "serif",
          fontStyle: "italic",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8,
        }}
      >
        O
      </div>
    ),
    size
  );
}