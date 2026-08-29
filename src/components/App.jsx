"use client";

import { useEffect, useRef } from "react";
import styles from "./App.module.css";

export default function App() {
  const stageRef = useRef(null);
  const patternRef = useRef(null);

  const animationFrameRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const pattern = patternRef.current;

    if (!stage || !pattern) {
      return;
    }

    let currentX = 0;
    let currentY = 0;

    let targetX = 0;
    let targetY = 0;

    let running = true;

    function animate() {
      currentX +=
        (targetX - currentX) * 0.08;

      currentY +=
        (targetY - currentY) * 0.08;

      pattern.style.setProperty(
        "--move-x",
        `${currentX}px`
      );

      pattern.style.setProperty(
        "--move-y",
        `${currentY}px`
      );

      if (running) {
        animationFrameRef.current =
          requestAnimationFrame(animate);
      }
    }

    function handlePointerMove(event) {
      const rect =
        stage.getBoundingClientRect();

      const centerX =
        rect.left +
        rect.width / 2;

      const centerY =
        rect.top +
        rect.height / 2;

      targetX =
        (event.clientX - centerX) * 0.08;

      targetY =
        (event.clientY - centerY) * 0.08;
    }

    function handlePointerLeave() {
      targetX = 0;
      targetY = 0;
    }

    stage.addEventListener(
      "pointermove",
      handlePointerMove
    );

    stage.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      running = false;

      stage.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      stage.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, []);

  /*
  Next.js static import bisa berupa:
  1. string
  2. object dengan .src

  Kita handle dua-duanya.
  */

  const svgUrl =
    typeof AliyaSvg === "string"
      ? AliyaSvg
      : AliyaSvg?.src;

  return (
    <main className={styles.page}>

      <div className={styles.pill}>
        portfolio / 2026
      </div>

      <section className={styles.hero}>

        <p className={styles.eyebrow}>
          creative portfolio
        </p>

        <div
          ref={stageRef}
          className={styles.wordmarkStage}
        >
          {svgUrl ? (
            <div
              ref={patternRef}
              className={styles.dotPattern}
              style={{
                maskImage:
                  `url("${svgUrl}")`,

                WebkitMaskImage:
                  `url("${svgUrl}")`,
              }}
            />
          ) : (
            <div className={styles.error}>
              Aliya.svg tidak ditemukan.
            </div>
          )}
        </div>

        <p className={styles.hint}>
          gerakkan cursor
        </p>

      </section>

    </main>
  );
}