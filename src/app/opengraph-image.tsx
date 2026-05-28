import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ubaydullah Nayeem — Mu'allim & Porichalok";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0F5132 0%, #1A7C50 55%, #C9A24F 100%)",
          color: "#FAF6EE",
          padding: 72,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(231,199,126,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(15,81,50,0.5), transparent 40%)",
          }}
        />

        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.7,
            display: "flex",
          }}
        >
          Mu'allim · Porichalok · Khateeb
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 160, lineHeight: 1, letterSpacing: -3, fontWeight: 600 }}>
            Ubaydullah
          </div>
          <div
            style={{
              fontSize: 160,
              lineHeight: 1,
              letterSpacing: -3,
              fontStyle: "italic",
              fontWeight: 400,
              color: "#E7C77E",
            }}
          >
            Nayeem
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            opacity: 0.85,
          }}
        >
          <span>Baitul Quran wa Assunnah Madrasah</span>
          <span>ubaydullahnayeem.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
