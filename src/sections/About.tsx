import React from "react";
import { FiArrowRight, FiCode, FiTrendingUp, FiZap } from "react-icons/fi";
import Container from "@/components/Container";
import FeatureCard from "@/components/FeatureCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: <FiCode />,
    title: "Desarrollo de producto",
    description:
      "Construyo aplicaciones web y móviles listas para producción, enfocadas en rendimiento, escalabilidad y experiencia de usuario.",
    tone: "blue" as const,
  },
  {
    icon: <FiZap />,
    title: "Arquitectura frontend",
    description:
      "Diseño y mejoro la estructura de aplicaciones para que puedan crecer sin volverse difíciles de mantener.",
    tone: "purple" as const,
  },
  {
    icon: <FiTrendingUp />,
    title: "Performance y optimización",
    description:
      "Identifico cuellos de botella y optimizo aplicaciones para mejorar velocidad, estabilidad y experiencia.",
    tone: "green" as const,
  },
];

const AboutSection = () => {
  return (
    <section
      id="que-hago"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fb_100%)] py-20 sm:py-28"
    >
      <Container>
        <RevealOnScroll direction="up">
          <SectionHeader
            eyebrow="Qué hago"
            title="Convierto MVPs y productos en crecimiento en aplicaciones listas para escalar."
            body="No trabajo solo para entregar pantallas. Me involucro para darle estructura al frontend, mejorar la experiencia y evitar que el producto se vuelva más frágil con cada release."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} direction="up" delay={index * 0.08}>
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                tone={service.tone}
              />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={0.15}>
          <div className="mt-10 rounded-[28px] border border-[color:var(--border)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-600)]">
                  Valor real
                </p>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-3xl">
                  Mi foco es que tu equipo pueda seguir iterando sin que cada cambio se vuelva más caro.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                  Trabajo especialmente bien cuando ya existe un producto, un roadmap exigente y la necesidad de subir el nivel técnico sin frenar negocio.
                </p>
              </div>
              <div className="rounded-3xl bg-[linear-gradient(180deg,#0f172a_0%,#16243c_100%)] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
                <p className="text-sm leading-7 text-slate-200">
                  Aporto criterio técnico, claridad en decisiones y una base más confiable para que producto, diseño e ingeniería puedan avanzar con menos fricción.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  De la urgencia al orden
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default AboutSection;
