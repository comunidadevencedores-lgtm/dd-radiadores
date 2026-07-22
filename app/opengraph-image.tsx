import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DD Radiadores - Conserto e manutenção de radiadores em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #4c0519 0%, #0f172a 55%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "110px",
              height: "110px",
              borderRadius: "24px",
              backgroundColor: "#e11d48",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "56px",
              fontWeight: 900,
              color: "white",
            }}
          >
            DD
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "56px", fontWeight: 900, color: "white" }}>
              Radiadores DD
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#fb7185",
                fontWeight: 700,
                letterSpacing: "4px",
              }}
            >
              CURITIBA - PR
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "34px",
            color: "#e2e8f0",
            textAlign: "center",
            maxWidth: "900px",
            fontWeight: 600,
          }}
        >
          Especialistas em Radiadores e Ar Condicionado
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            marginTop: "16px",
          }}
        >
          +20 anos de experiência · Veículos leves e pesados
        </div>
      </div>
    ),
    { ...size }
  );
}
