import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0a",
          color: "#e8e9ec",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#2dd4bf", fontSize: 28, marginBottom: 24 }}>
          {"// portfolio.dev"}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, marginBottom: 20 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#2dd4bf" }}>
          {site.role}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9199a3", marginTop: 28 }}>
          Angular · React · Java · Spring Boot
        </div>
      </div>
    ),
    { ...size },
  );
}
