"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "motion";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

type ProjectsCarouselProps = {
  projects: Project[];
};

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<(() => void) | null>(null);
  const isHoveredRef = useRef(false);

  const getTranslateX = (element: HTMLElement) => {
    const transform = getComputedStyle(element).transform;
    if (!transform || transform === "none") return 0;
    const match = transform.match(/matrix(3d)?\((.+)\)/);
    if (!match) return 0;
    const values = match[2].split(",").map((value) => parseFloat(value.trim()));
    return match[1] === "3d" ? values[12] || 0 : values[4] || 0;
  };

  const setTranslateX = (element: HTMLElement, value: number) => {
    element.style.transform = `translateX(${value}px)`;
    currentTranslateRef.current = value;
  };

  const stopAnimation = () => {
    controlsRef.current?.stop();
    controlsRef.current = null;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const start = () => {
      if (!track || isPausedRef.current) return;
      const halfWidth = track.scrollWidth / 2;
      if (!halfWidth) return;

      let currentX = getTranslateX(track);
      if (currentX <= -halfWidth) {
        currentX = 0;
        setTranslateX(track, 0);
      }

      const distance = Math.abs(-halfWidth - currentX);
      const duration = Math.max(20, distance / 30);

      stopAnimation();
      controlsRef.current = animate(
        track,
        { x: [currentX, -halfWidth] },
        { duration, ease: "linear" }
      );

      controlsRef.current.finished?.then(() => {
        if (isPausedRef.current) return;
        setTranslateX(track, 0);
        start();
      });
    };
    startRef.current = start;

    const handleResize = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(start);
    };

    start();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      stopAnimation();
    };
  }, []);

  const loopItems = [...projects, ...projects];

  return (
    <>
      <div className="space-y-6 px-4 sm:hidden">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div
        className="hidden overflow-hidden sm:block"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          isPausedRef.current = true;
          stopAnimation();
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          isPausedRef.current = false;
          startRef.current?.();
        }}
        onPointerDown={(event) => {
          const track = trackRef.current;
          if (!track) return;
          isPausedRef.current = true;
          stopAnimation();
          isDraggingRef.current = true;
          startXRef.current = event.clientX;
          startTranslateRef.current = getTranslateX(track);
          track.setPointerCapture(event.pointerId);

          const handleMove = (moveEvent: PointerEvent) => {
            if (!isDraggingRef.current || !track) return;
            const halfWidth = track.scrollWidth / 2;
            const delta = moveEvent.clientX - startXRef.current;
            let next = startTranslateRef.current + delta;
            if (next <= -halfWidth) {
              next += halfWidth;
            } else if (next >= 0) {
              next -= halfWidth;
            }
            setTranslateX(track, next);
          };

          const handleUp = () => {
            isDraggingRef.current = false;
            track.releasePointerCapture(event.pointerId);
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("pointerup", handleUp);
            if (!isHoveredRef.current) {
              isPausedRef.current = false;
              startRef.current?.();
            }
          };

          window.addEventListener("pointermove", handleMove);
          window.addEventListener("pointerup", handleUp);
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 px-10 cursor-grab active:cursor-grabbing"
          style={{ transform: "translateX(0px)" }}
        >
          {loopItems.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="w-[280px] shrink-0 md:w-[340px] lg:w-[380px]"
            >
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsCarousel;
