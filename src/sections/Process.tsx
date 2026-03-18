import React from "react";
import Container from "@/components/Container";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import TechBadge from "@/components/TechBadge";

const principles = [
  "Entiendo el producto antes de tomar decisiones técnicas.",
  "Busco el balance entre velocidad y calidad.",
  "Evito sobreingeniería y resuelvo lo que sí mueve el producto.",
  "Diseño pensando en escalabilidad y mantenibilidad.",
  "Priorizo código limpio, legible y fácil de evolucionar.",
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Design Systems",
  "Performance",
];

const ProcessSection = () => {
  return (
    <section id="como-trabajo" className="bg-white py-20 sm:py-28">
      <Container>
        <RevealOnScroll direction="up">
          <SectionHeader
            eyebrow="Cómo trabajo"
            title="Mi enfoque no es solo escribir código, sino construir soluciones que duren."
            body="Trabajo con criterio de producto, cuidando el equilibrio entre delivery, calidad técnica y capacidad de evolución."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealOnScroll direction="up">
            <div className="rounded-[28px] border border-[color:var(--border)] bg-[#f8fafc] p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="space-y-4">
                {principles.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-100)] text-sm font-semibold text-[color:var(--brand-600)]">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.08}>
            <div className="rounded-[28px] border border-[color:var(--border)] bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                Stack principal
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Tecnología al servicio del producto, no al revés.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
                React, TypeScript y arquitectura frontend son mi base. Los uso para construir interfaces sólidas, rápidas y fáciles de mantener.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
