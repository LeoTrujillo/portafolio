import React from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="bg-[#f6f7fb] py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Una selección de mis trabajos más recientes y destacados"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#proyectos"
            className="text-sm font-semibold text-[color:var(--brand-600)] transition hover:text-[color:var(--brand-700)]"
          >
            Ver todos los proyectos →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
