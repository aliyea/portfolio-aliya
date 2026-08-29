"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  FileText,
  Mail,
  Phone,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

import AliyaSvg from "../src/assets/image/Aliya.svg";
import PaperTexture from "../src/assets/image/Paper.png";
import { PROJECTS_DATA } from "../src/data/projects";

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

.main-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px 60px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.desktop-sidebar {
  display: flex;
}

.mobile-header {
  display: none;
}

.banner-padding {
  padding: 40px 60px 0;
}

/* PENGATURAN KHUSUS HP (Layar di bawah 768px) */
@media (max-width: 768px) {
  .main-container {
    grid-template-columns: 1fr;
    padding: 0 20px 40px;
    gap: 20px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .desktop-sidebar {
    display: none !important; 
  }

.mobile-header {
    display: flex !important;
    position: fixed !important; 
    top: 20px;
    right: 20px;
    z-index: 50; 
  }

  .banner-padding {
    padding: 0px 20px 0 !important; 
  }
  
  .banner-height {
    height: 120px !important; 
    margin-bottom: 20px !important; 
    margin-top: 50px !important; 
  }

  /* RESOLUSI TITIK DIPERHALUS KHUSUS MOBILE */
  .banner-svg {
    background-image: radial-gradient(circle, #5e5250 1px, transparent 1px) !important;
    background-size: 4px 4px !important; 
    mask-position: center !important;
    -webkit-mask-position: center !important;
    mask-size: 90% auto !important;
    -webkit-mask-size: 90% auto !important;
  }
}
`;

export interface ProjectCardProps {
  title: string;
  role?: string;
  period?: string;
  context?: string;
  process?: string[];
  tech: string[];
  links?: any;
  defaultOpen?: boolean;
  category?: string;
  id?: string | number;
  thumbnail?: string;
}

function ProjectCard({
  title,
  tech,
  id,
  thumbnail,
}: ProjectCardProps) {
  const targetUrl = id
    ? `/projects/${id}`
    : `/projects/${title.toLowerCase().replace(/\s+/g, "-")}`;

  const displayKeywords = (tech || []).slice(0, 2);

  return (
    <Link
      href={targetUrl}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          height: "fit-content",
          cursor: "pointer",
        }}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              objectFit: "cover",
              border: "1.5px solid #3a3a3a",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              background: "rgba(43,33,48,0.08)",
              border: "1.5px solid #3a3a3a",
            }}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "'Helvetica', sans-serif",
              fontSize: "18px", // <-- FONT JUDUL DIGEDEIN (Awalnya 16px)
              fontWeight: "bold",
              color: "#3a3a3a",
              lineHeight: 1.2,
              letterSpacing: "0.3px",
            }}
          >
            {title}
          </div>

          <div
            className="kategori"
            style={{
              fontFamily: "'Helvetica', sans-serif",
              fontSize: "14px", // <-- FONT KATEGORI DIGEDEIN (Awalnya 13px)
              color: "#6B5C74",
            }}
          >
            {displayKeywords.join(" • ")}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioDesktop() {
  const [activeCategory, setActiveCategory] = useState<string>("Web Development");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const savedTab = sessionStorage.getItem("activeTab");
    if (savedTab) {
      setActiveCategory(savedTab);
    }
  }, []);

  const bannerRef = useRef<HTMLDivElement | null>(null);
  const patternRef = useRef<HTMLDivElement | null>(null);

  const svgUrl = typeof AliyaSvg === "string" ? AliyaSvg : AliyaSvg?.src;
  const paperUrl = typeof PaperTexture === "string" ? PaperTexture : PaperTexture?.src;

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

  const isWebDev = activeCategory === "Web Development";
  const isCreative = activeCategory === "Creative";

  const hasCreativeProject = PROJECTS_DATA.some((project: ProjectCardProps) => {
    const cat = (project.category || "").toLowerCase();
    return cat.includes("creative") || cat.includes("kreatif");
  });

  const allProjectsWithFallback = hasCreativeProject
    ? PROJECTS_DATA
    : [
        ...PROJECTS_DATA,
        {
          id: "creative-dummy-1",
          title: "Majalah & Editorial Design (Dummy Creative)",
          role: "Layout Designer & Copywriter",
          period: "2026 · Personal Project",
          context: "Merancang konsep visual dan tata letak majalah independen.",
          process: ["Riset visual", "Eksperimen tipografi", "Proses layouting"],
          tech: ["InDesign", "Figma", "Copywriting"],
          category: "Creative",
        },
      ];

  const filteredProjects = allProjectsWithFallback.filter((project: ProjectCardProps) => {
    const cat = (project.category || "").toLowerCase();
    if (isCreative) {
      return cat.includes("creative") || cat.includes("kreatif");
    } else {
      return !cat.includes("creative") && !cat.includes("kreatif");
    }
  });

  return (
    <div
      style={{
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
        position: "relative",
      }}
    >
      {/* MOBILE HEADER - 3 Titik Ngambang */}
      <div className="mobile-header">
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

      {/* MOBILE MENU OVERLAY */}
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
          {/* Tombol Back */}
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

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveCategory("Web Development");
                sessionStorage.setItem("activeTab", "Web Development");
                setIsMobileMenuOpen(false); 
              }}
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px",
                color: "#3a3a3a",
                fontWeight: isWebDev ? "bold" : "normal", 
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
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveCategory("Creative");
                sessionStorage.setItem("activeTab", "Creative");
                setIsMobileMenuOpen(false); 
              }}
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px",
                color: "#3a3a3a",
                fontWeight: isCreative ? "bold" : "normal", 
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
            </button>
          </div>
        </div>
      )}

      {/* BANNER SVG STATIS */}
      <div className="banner-padding">
        <div
          ref={bannerRef}
          className="banner-height"
          style={{
            width: "100%",
            height: "350px",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {svgUrl ? (
            <div
              ref={patternRef}
              className="banner-svg"
              style={
                {
                  position: "absolute",
                  inset: "-40px",
                  backgroundImage: "radial-gradient(circle, #5e5250 1.8px, transparent 1.8px)",
                  backgroundSize: "7px 7px",
                  transform: "scale(1.04)", 
                  maskImage: `url("${svgUrl}")`,
                  WebkitMaskImage: `url("${svgUrl}")`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  pointerEvents: "none",
                  zIndex: 1,
                } as React.CSSProperties
              }
            />
          ) : (
            <div
              style={{
                fontFamily: "'Helvetica', sans-serif",
                color: "#6B5C74",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              Aliya.svg tidak ditemukan.
            </div>
          )}
        </div>
      </div>

      <div className="main-container">
        {/* DESKTOP SIDEBAR */}
        <div
          className="desktop-sidebar"
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
                <br />
                <br />
                PROJECTS
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveCategory("Web Development");
                  sessionStorage.setItem("activeTab", "Web Development");
                }}
                style={{
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: "14px",
                  color: "#3a3a3a",
                  fontWeight: isWebDev ? "bold" : "normal",
                  textDecoration: "underline",
                  textUnderlineOffset: "1px",
                  letterSpacing: "0em",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                  position: "relative",
                  zIndex: 10,
                  pointerEvents: "auto",
                }}
              >
                Web Development
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveCategory("Creative");
                  sessionStorage.setItem("activeTab", "Creative");
                }}
                style={{
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: "14px",
                  color: "#3a3a3a",
                  fontWeight: isCreative ? "bold" : "normal",
                  textDecoration: "underline",
                  textUnderlineOffset: "1px",
                  letterSpacing: "0em",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                  position: "relative",
                  zIndex: 10,
                  pointerEvents: "auto",
                }}
              >
                Creative
              </button>
            </div>
          </div>
        </div>

        {/* AREA KANAN (Projects) */}
        <div id="projects">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project: ProjectCardProps, index: number) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "14px",
                color: "#3a3a3a",
                paddingTop: "10px",
              }}
            >
              Belum ada project di kategori ini.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}