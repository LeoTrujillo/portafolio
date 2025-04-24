"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { useI18n } from "@/i18n";
import { es } from "@/i18n/locales/es";
import { en } from "@/i18n/locales/en";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectUrl: string;
}

const Projects = () => {
  const { t, language } = useI18n();
  
  const projects = language === 'es' 
    ? es.projects.projects 
    : en.projects.projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">{t('projects.title')}</h2>
        <p className="text-gray-600 text-center mb-8">{t('projects.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.title} project={project} />            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

