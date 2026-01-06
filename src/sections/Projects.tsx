import React from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="bg-[#f6f7fb] py-12 sm:py-16">
      <Container>
        <RevealOnScroll direction="left">
          <SectionHeader
            title="Proyectos Destacados"
            subtitle="Una selección de mis trabajos más recientes y destacados"
          />
        </RevealOnScroll>
      </Container>
      <div className="mt-10">
        <ProjectsCarousel projects={projects} />
      </div>
      <Container>
        <RevealOnScroll direction="left">
          <div className="mt-10 flex justify-center">
            <a
              href="#proyectos"
              className="text-sm font-semibold text-[color:var(--brand-600)] transition hover:text-[color:var(--brand-700)]"
            >
              Ver todos los proyectos →
            </a>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default ProjectsSection;
