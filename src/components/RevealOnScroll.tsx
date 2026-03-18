"use client";

import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
};

const RevealOnScroll = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHorizontal = direction === "left" || direction === "right";
  const offsetX = direction === "left" ? -32 : direction === "right" ? 32 : 0;
  const offsetY = direction === "up" ? 32 : direction === "down" ? -32 : 0;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const stop = inView(
      element,
      () => {
        animate(
          element,
          { opacity: 1, x: 0, y: 0 },
          { duration: 0.55, ease: "easeOut", delay }
        );
        return () => undefined;
      },
      { margin: "0px 0px -10% 0px" }
    );

    return () => stop();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: isHorizontal
          ? `translateX(${offsetX}px)`
          : `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
