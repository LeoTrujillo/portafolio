import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import Container from "@/components/Container";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const painPoints = [
  "Código difícil de mantener cuando el equipo empieza a crecer.",
  "Performance pobre en flujos clave y pantallas críticas.",
  "Bugs constantes y regresiones por falta de estructura.",
  "Features nuevas que rompen comportamientos existentes.",
];

const ProblemSection = () => {
  return (
    <section
      id="problema"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_60%)]" />
      <Container className="relative">
        <RevealOnScroll direction="up">
          <SectionHeader
            eyebrow="El problema"
            title="Hoy es fácil construir rápido. Lo difícil es mantenerlo."
            body="Muchos productos se desarrollan en semanas usando herramientas modernas o incluso IA. Cuando empiezan a crecer, aparecen los problemas que frenan al equipo y erosionan la confianza."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {painPoints.map((item, index) => (
            <RevealOnScroll key={item} direction="up" delay={index * 0.08}>
              <article className="rounded-3xl border border-[color:var(--border)] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fee2e2] text-[#dc2626]">
                    <FiAlertCircle />
                  </span>
                  <p className="text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                    {item}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mt-8 rounded-[28px] border border-[#dbeafe] bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-7 shadow-[0_20px_60px_rgba(29,78,216,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-600)]">
              Ahí es donde más valor aporto
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--foreground)] sm:text-xl">
              Ayudo a ordenar la base técnica, mejorar la experiencia y dejar un frontend que pueda seguir creciendo sin romperse en el intento.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default ProblemSection;
