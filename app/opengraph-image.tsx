import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saikalyan Akunuri | Fractional Programme Manager & Agile Coach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top: accent bar */}
        <div style={{ width: 48, height: 3, background: "#4a6fa5" }} />

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 52, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.15, maxWidth: 820 }}>
            Engineering programmes run. Teams aligned. Delivery visible.
          </div>
          <div style={{ fontSize: 24, color: "#666", fontFamily: "sans-serif", fontWeight: 400 }}>
            Fractional Programme Manager and Agile Coach. 25 years in software engineering.
          </div>
        </div>

        {/* Bottom: name + stats */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 22, fontWeight: 600, color: "#1a1a1a", fontFamily: "sans-serif" }}>
            Saikalyan Akunuri
          </div>
          <div style={{ display: "flex", gap: 40 }}>
            {[["25 yrs", "Engineering"], ["15+ teams", "Hach / Danaher"], ["4 countries", "Remote"]].map(([n, l]) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>{n}</span>
                <span style={{ fontSize: 13, color: "#888", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
