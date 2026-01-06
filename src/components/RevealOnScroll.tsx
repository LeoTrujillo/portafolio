"use client";

import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
};

const RevealOnScroll = ({
  children,
  className = "",
  delay = 0,
  direction = "left",
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const offsetX = direction === "left" ? -32 : 32;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const stop = inView(
      element,
      () => {
        animate(
          element,
          { opacity: 1, x: 0 },
          { duration: 0.6, ease: "easeOut", delay }
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
      style={{ opacity: 0, transform: `translateX(${offsetX}px)` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
