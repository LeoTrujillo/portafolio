import React from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import PrimaryButton from "@/components/PrimaryButton";

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="bg-[#f3f6fb] py-20 sm:py-28">
      <Container>
        <RevealOnScroll direction="up">
          <SectionHeader
            eyebrow="Proyectos"
            title="Casos donde el frontend tenía que acompañar crecimiento real, no solo verse bien."
            body="Cada proyecto está pensado para demostrar criterio técnico, capacidad de ejecución y foco en impacto. Lo importante no es la pantalla, sino qué problema resolvió y cómo dejó una base mejor."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title} direction="up" delay={index * 0.08}>
              <FeaturedProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[28px] border border-[color:var(--border)] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-600)]">
                ¿Tienes un producto en una etapa parecida?
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                Puedo ayudarte a revisar la base actual, detectar riesgos y proponer una ruta clara para escalar sin romper el producto.
              </p>
            </div>
            <PrimaryButton href="#contacto">Hablemos de tu producto</PrimaryButton>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default ProjectsSection;
