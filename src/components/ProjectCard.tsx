import React from "react";

interface ProjectCardProps {
  title: string;
  role?: string;
  tech: string[];
}

export default function ProjectCard({
  title,
  tech,
}: ProjectCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        height: "fit-content",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          background: "rgba(43,33,48,0.08)",
          border: "1.5px solid #2B2130",
          borderRadius: "0",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#3a3a3a",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: "13px",
            color: "#6B5C74",
          }}
        >
          • {tech.join(" • ")}
        </div>
      </div>
    </div>
  );
}