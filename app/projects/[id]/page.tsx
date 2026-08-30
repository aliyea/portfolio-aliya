"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ExternalLink, Mail, Phone, LucideIcon } from "lucide-react";

import { PROJECTS_DATA } from "../../../src/data/projects";
import PaperTexture from "../../../src/assets/image/Paper.png";

interface IconProps {
  size?: number | string;
}

function Github({ size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// Icon 3 Titik (Menu Mobile)
function MoreDots({ size = 24 }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

// Icon Panah Back (Tutup Menu Mobile)
function BackIcon({ size = 24 }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

const FONT_AND_RESET = `
@font-face {
  font-family: 'Helvetica';
  src: url('/fonts/Helvetica.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica', sans-serif;
}

.project-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px 60px;
}

.project-sidebar {
  display: flex;
}

.project-mobile-header {
  display: none;
}

.project-images-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 16px;
}

/* KHUSUS HP (Layar di bawah 768px) */
@media (max-width: 768px) {
  .project-wrapper {
    /* FIX: Matikan gambar background asli biar gak ditarik sama browser HP */
    background-image: none !important; 
  }

  /* Bikin layer background fiktif di belakang layar khusus HP. Ukurannya dikunci pas 1 layar (100vh) */
  .project-wrapper::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: #dcc9da;
    background-image: var(--bg-image);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: lighten;
    pointer-events: none;
  }

  .project-container {
    grid-template-columns: 1fr;
    padding: 0px 20px 40px; 
    gap: 24px;
  }

  .project-sidebar {
    display: none !important; 
  }

  .project-mobile-header {
    display: flex !important;
    position: fixed !important; 
    top: 20px;
    right: 20px;
    z-index: 50; 
  }

  .project-images-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const project: any = PROJECTS_DATA.find(
    (p: any) =>
      p.id?.toString().toLowerCase() === id?.toLowerCase() ||
      p.title?.toLowerCase().replace(/\s+/g, "-") === id?.toLowerCase()
  );

  const paperUrl =
    typeof PaperTexture === "string" ? PaperTexture : PaperTexture?.src;

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = FONT_AND_RESET;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

if (!project) {
    return (
      <div
        className="project-wrapper"
        style={{
          "--bg-image": paperUrl ? `url("${paperUrl}")` : "none",
          backgroundColor: "#dcc9da",
          backgroundImage: paperUrl ? `url("${paperUrl}")` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "lighten",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Helvetica', sans-serif",
          gap: "16px",
          color: "#3a3a3a",
        } as React.CSSProperties}
      >
        <div style={{ fontSize: "20px" }}>Project tidak ditemukan.</div>
        <Link
          href="/"
          style={{
            textDecoration: "underline",
            color: "#3a3a3a",
          }}
        >
          ← Kembali ke Homepage
        </Link>
      </div>
    );
  }

  return (
    <div
      className="project-wrapper"
      style={{
        "--bg-image": paperUrl ? `url("${paperUrl}")` : "none",
        backgroundColor: "#dcc9da",
        backgroundImage: paperUrl ? `url("${paperUrl}")` : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "lighten",
        minHeight: "100vh",
        color: "#3a3a3a",
        fontFamily: "'Helvetica', sans-serif",
        overflowX: "hidden",
        paddingTop: "40px",
        position: "relative",
      } as React.CSSProperties}
    >
      {/* MOBILE HEADER - 3 Titik Ngambang & Freeze (Hanya di HP) */}
      <div className="project-mobile-header">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "#3a3a3a",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MoreDots size={24} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY (Hanya di HP kalau titik 3 diklik) */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#dcc9da",
            backgroundImage: paperUrl ? `url("${paperUrl}")` : "none",
            backgroundBlendMode: "lighten",
            backgroundSize: "cover",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            padding: "24px 32px", 
          }}
        >
          {/* Tombol Back Menu */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "40px" }}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#3a3a3a",
                padding: "0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <BackIcon size={25} /> 
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link
              href="/about"
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px", 
                color: "#3a3a3a",
                textDecoration: "underline",
                textUnderlineOffset: "1px",
                letterSpacing: "0em",
              }}
            >
              About
            </Link>

            <div
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px",
                lineHeight: 1.2,
                fontWeight: "bold",
                color: "#3a3a3a",
                marginTop: "10px", 
                marginBottom: "10px",
                letterSpacing: "0em",
              }}
            >
              PROJECTS
            </div>

            <Link
              href="/"
              onClick={() => {
                sessionStorage.setItem("activeTab", "Web Development");
              }}
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px",
                color: "#3a3a3a",
                textDecoration: "underline", 
                textUnderlineOffset: "1px",
                letterSpacing: "0em",
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                textAlign: "left",
              }}
            >
              Web Development
            </Link>

            <Link
              href="/"
              onClick={() => {
                sessionStorage.setItem("activeTab", "Creative");
              }}
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px",
                color: "#3a3a3a",
                textDecoration: "underline", 
                textUnderlineOffset: "1px",
                letterSpacing: "0em",
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                textAlign: "left",
              }}
            >
              Creative
            </Link>
          </div>
        </div>
      )}

      <div className="project-container">
        
        {/* DESKTOP SIDEBAR */}
        <div
          className="project-sidebar"
          style={{
            position: "sticky",
            top: "40px",
            alignSelf: "start",
            height: "calc(100vh - 80px)",
            paddingRight: "20px",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "14px",
                lineHeight: 1.2,
                fontWeight: "bold",
                color: "#3a3a3a",
                marginBottom: "10px",
                letterSpacing: "0em",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#3a3a3a",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "1px",
                }}
              >
                ALIYA RAIHANA
              </Link>
              <br />
              <br />
              BASED IN
              <br />
              JAKARTA
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "10px",
              }}
            >
              <Link
                href="/about"
                style={{
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: "14px",
                  color: "#3a3a3a",
                  textDecoration: "underline",
                  textUnderlineOffset: "1px",
                  letterSpacing: "0em",
                }}
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* KONTEN KANAN (Desktop) / KONTEN UTAMA (Mobile) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            paddingBottom: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "12px",
            }}
          >
            <h1
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: 0,
                color: "#3a3a3a",
                lineHeight: 1.4,
                fontFamily: "'Helvetica', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
              }}
            >
              {project.title}
            </h1>
            <span
              style={{
                fontSize: "16px",
                color: "#3a3a3a",
                fontFamily: "'Helvetica', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
              }}
            >
              {project.role ? `${project.role}` : ""}
            </span>
          </div>

          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.3,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "850px",
              fontFamily: "'Helvetica', sans-serif",
              color: "#3a3a3a",
              letterSpacing: "-0.2px",
            }}
          >
            {project.context && <p style={{ margin: 0 }}>{project.context}</p>}

            {project.process && (project.process as any)?.length > 0 && (
              <p style={{ margin: 0, whiteSpace: "pre-line" }}>
                {(project.process as any).join(" ")}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "4px",
              fontSize: "15px",
              fontFamily: "'Helvetica', sans-serif",
            }}
          >
            {Array.isArray(project.links) ? (
              project.links.map((linkItem: any, index: number) => (
                <div key={index}>
                  <a
                    href={linkItem.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#3a3a3a",
                      textDecoration: "underline",
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "1px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {linkItem.label}
                  </a>
                </div>
              ))
            ) : (
              <>
                {project.links?.live && (
                  <div>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#3a3a3a",
                        textDecoration: "underline",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "1px",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {project.links.label || "Click to see full website"}
                    </a>
                  </div>
                )}

                {project.links?.github && (
                  <div>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#3a3a3a",
                        textDecoration: "underline",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "1px",
                        letterSpacing: "-0.1px",
                      }}
                    >
                      See documentation here
                    </a>
                  </div>
                )}

                {project.links?.doc && (
                  <div>
                    <a
                      href={project.links.doc}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#3a3a3a",
                        textDecoration: "underline",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "3px",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      Click to see documentation.
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          {/* BAGIAN PALING BAWAH: Embed Flipbook atau Foto */}
          {project.embedUrl ? (
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                marginTop: "16px",
                border: "1.5px solid #3a3a3a",
                overflow: "hidden",
                background: "#f9f9f9",
              }}
            >
              <iframe
                allowFullScreen
                allow="autoplay; fullscreen; clipboard-write"
                scrolling="no"
                className="fp-iframe"
                src={project.embedUrl}
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </div>
          ) : project.images && project.images.length > 0 ? (
            <div className="project-images-grid">
              {project.images.map((imgItem: any, idx: number) => {
                const isString = typeof imgItem === "string";
                const imgUrl = isString ? imgItem : imgItem.url;
                const isFullSpan = !isString && imgItem.span === "full";

                return (
                  <div
                    key={idx}
                    style={{
                      gridColumn: isFullSpan ? "1 / -1" : "span 1",
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} visual ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        border: "1.5px solid #3a3a3a",
                        display: "block",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                background: "rgba(43,33,48,0.08)",
                border: "1.5px solid #3a3a3a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3a3a3a",
                fontSize: "14px",
                fontFamily: "'Helvetica', sans-serif",
                marginTop: "16px",
              }}
            >
              [ Placeholder Foto / GIF Preview {project.title} ]
            </div>
          )}
        </div>
      </div>
    </div>
  );
}