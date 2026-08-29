"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

// Icon Github Manual Anti-Error
function Github({ size = 13 }: { size?: number }) {
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

function LinkPill({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "'Special Elite', monospace",
        fontSize: "12px",
        textDecoration: "none",
        color: "#2B2130",
        border: "1.5px solid #2B2130",
        borderRadius: "999px",
        padding: "7px 14px",
      }}
    >
      <Icon size={13} />
      {label}
    </a>
  );
}

export default function Sidebar() {
  return (
    <div
      style={{
        position: "sticky",
        top: "40px",
        alignSelf: "start",
        height: "calc(100vh - 80px)",
        paddingRight: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: "14px",
            lineHeight: 1.2,
            fontWeight: "bold",
            color: "#2B2130",
            marginBottom: "10px",
          }}
        >
          ALIYA RAIHANA
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
            href="/#about"
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "14px",
              color: "#2B2130",
              textDecoration: "underline",
              textUnderlineOffset: "1px",
            }}
          >
            About
          </Link>

          <div
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "14px",
              lineHeight: 1.2,
              fontWeight: "bold",
              color: "#2B2130",
              marginBottom: "10px",
            }}
          >
            <br />
            <br />
            PROJECTS
          </div>

          <Link
            href="/#projects"
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "14px",
              color: "#2B2130",
              textDecoration: "underline",
              textUnderlineOffset: "1px",
            }}
          >
            Web Development
          </Link>

          <Link
            href="/#projects"
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "14px",
              color: "#2B2130",
              textDecoration: "underline",
              textUnderlineOffset: "1px",
            }}
          >
            Creative
          </Link>
        </div>
      </div>

      {/* Contact Pills */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingBottom: "20px",
        }}
      >
        <LinkPill
          href="mailto:aliyahraihan@gmail.com"
          icon={Mail}
          label="aliyahraihan@gmail.com"
        />
        <LinkPill
          href="tel:089662323026"
          icon={Phone}
          label="089662323026"
        />
        <LinkPill
          href="https://github.com/aliyea"
          icon={Github}
          label="github.com/aliyea"
        />
      </div>
    </div>
  );
}