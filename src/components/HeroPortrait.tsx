"use client";

import React, { useState } from "react";
import Image from "next/image";

type HeroPortraitProps = {
  src: string;
  alt: string;
};

const HeroPortrait = ({ src, alt }: HeroPortraitProps) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(true);
  const isLoaded = loadedCount >= 2;

  const handleLoad = () => {
    setLoadedCount((count) => Math.min(2, count + 1));
  };

  return (
    <div
      className="relative h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48"
      onMouseEnter={() => setIsFlipping(true)}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse rounded-full bg-slate-200" />
      )}
      <div className="coin-flip h-full w-full">
        <div
          className={`coin-flip-inner h-full w-full ${
            isFlipping ? "coin-flip-animate" : ""
          } ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onAnimationEnd={() => setIsFlipping(false)}
        >
          <div className="coin-face">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-cover object-[50%_25%] scale-110"
              onLoad={handleLoad}
              loading="lazy"
              quality={90}
            />
          </div>
          <div className="coin-face coin-back">
            <Image
              src="/images/memoji.png"
              alt="Memoji"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-cover object-center scale-110"
              onLoad={handleLoad}
              loading="lazy"
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortrait;
