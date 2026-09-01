"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import PaperTexture from "../../src/assets/image/Paper.png";

// Icon 3 Titik (Menu Mobile)
interface IconProps {
  size?: number | string;
}

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

.about-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px 60px;
}

.about-sidebar {
  display: flex;
}

.about-mobile-header {
  display: none;
}

/* KHUSUS HP (Layar di bawah 768px) */
@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    padding: 0px 20px 40px; 
    gap: 24px;
  }

  .about-sidebar {
    display: none !important; 
  }

  /* Header 3 Titik: FIXED biar freeze di layar pas di-scroll */
  .about-mobile-header {
    display: flex !important;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 20px 0px;
    position: fixed !important; 
    top: 0;
    right: 0;
    z-index: 50;
    width: 100%;
    box-sizing: border-box;
  }
}
`;

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
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
        paddingTop: "40px",
        position: "relative",
      }}
    >
      {/* MOBILE HEADER - 3 Titik Ngambang & Freeze (Hanya di HP) */}
      <div className="about-mobile-header">
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
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: "'Helvetica', sans-serif",
                fontSize: "18px", 
                color: "#3a3a3a",
                textDecoration: "underline",
                textUnderlineOffset: "1px",
                letterSpacing: "0em",
                fontWeight: "bold",
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

      <div className="about-container">
        
{/* DESKTOP SIDEBAR */}
        <div
          className="about-sidebar"
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

              <div
                style={{
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.2,
                  fontWeight: "bold",
                  color: "#3a3a3a",
                  marginTop: "10px",
                  marginBottom: "10px",
                  letterSpacing: "0em",
                }}
              >
                <br />
                PROJECTS
              </div>
              
              <Link
                href="/"
                onClick={() => sessionStorage.setItem("activeTab", "Web Development")}
                style={{
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: "14px",
                  color: "#3a3a3a",
                  textDecoration: "underline",
                  textUnderlineOffset: "1px",
                  letterSpacing: "0em",
                }}
              >
                Web Development
              </Link>

              <Link
                href="/"
                onClick={() => sessionStorage.setItem("activeTab", "Creative")}
                style={{
                  fontFamily: "'Helvetica', sans-serif",
                  fontSize: "14px",
                  color: "#3a3a3a",
                  textDecoration: "underline",
                  textUnderlineOffset: "1px",
                  letterSpacing: "0em",
                }}
              >
                Creative
              </Link>
            </div>
          </div>
        </div>

        {/* KONTEN KANAN */}
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
              ABOUT 
            </h1>
          </div>

          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.4,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "850px",
              fontFamily: "'Helvetica', sans-serif",
              color: "#3a3a3a",
              letterSpacing: "-0.2px",
            }}
          >
            <p style={{ margin: 0 }}>
              Aliya Raihana is a <strong>Software Engineering graduate</strong> based in Jakarta, Indonesia, with an interest in <strong>digital product development, UI/UX design, and web development.</strong>
            </p>
            
            <p style={{ margin: 0 }}>
             Her experience spans requirements analysis, system documentation, software testing, and web development. She enjoys understanding how a system works, translating user and business needs into clear requirements, and making sure the final product functions as intended.
            </p>
            
            <p style={{ margin: 0 }}>
             With a background in both <strong>Software Engineering and English Literature</strong>, Aliya brings a technical foundation together with strong communication and documentation skills. Her experience includes working with stakeholders, creating functional requirements and system diagrams, conducting black-box testing and UAT, and contributing to web-based systems throughout the development process.
            </p>
            
            <p style={{ margin: 0 }}>
              She is currently exploring opportunities across Product Design, UI/UX, Frontend Development, Full-stack Development, and related digital product roles—particularly positions where she can combine technical thinking, creativity, and a user-focused approach to build better digital experiences.
            </p>
          </div>

          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "5px 0 0 0",
              color: "#3a3a3a",
              lineHeight: 1.4,
              fontFamily: "'Helvetica', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "-0.3px",
            }}
          >
            CONTACT
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "15px",
              fontFamily: "'Helvetica', sans-serif",
            }}
          >
            <div>
              <a
                href="mailto:aliyahraihan91@gmail.com"
                style={{
                  color: "#3a3a3a",
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "1px",
                  letterSpacing: "-0.3px",
                }}
              >
                aliyahraihan91@gmail.com
              </a>
            </div>

            <div>
              <a
                href="/resume"
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
                View resume
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}