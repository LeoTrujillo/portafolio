import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const needs = [
  "Escalar su producto sin aumentar fragilidad técnica.",
  "Mejorar performance y estabilidad en flujos clave.",
  "Arreglar una base existente antes de seguir creciendo.",
  "Construir nuevas funcionalidades con calidad desde el inicio.",
];

const WorkWithMeSection = () => {
  return (
    <section id="trabajemos" className="bg-[#f8fafc] py-20 sm:py-28">
      <Container>
        <RevealOnScroll direction="up">
          <SectionHeader
            eyebrow="Trabaja conmigo"
            title="Trabajo con equipos que necesitan velocidad, pero no quieren pagarla con caos técnico."
            body="Suelo aportar más valor cuando hay un producto vivo, un roadmap exigente y la necesidad de mejorar la base sin detener entregas."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <RevealOnScroll direction="up">
            <div className="rounded-[28px] border border-[color:var(--border)] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="space-y-4">
                {needs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-lg text-emerald-600">
                      <FiCheckCircle />
                    </span>
                    <p className="text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.08}>
            <div className="rounded-[28px] border border-[#dbeafe] bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-7 shadow-[0_20px_60px_rgba(29,78,216,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-600)]">
                Disponible para
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--foreground)] sm:text-base">
                <p>Proyectos freelance con foco en producto y frontend.</p>
                <p>Colaboraciones de mediano o largo plazo.</p>
                <p>Posiciones remotas senior con responsabilidad técnica.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="mailto:hi@leonardotrujillo.dev">
                  Agendar llamada
                </PrimaryButton>
                <SecondaryButton href="#contacto">Enviar mensaje</SecondaryButton>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
};

export default WorkWithMeSection;
