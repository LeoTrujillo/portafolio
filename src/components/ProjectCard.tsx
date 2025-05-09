"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/i18n";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { t } = useI18n();

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };
  return (
    <Link 
      href={project.projectUrl} 
      target="_blank"
      className="block relative group overflow-hidden rounded-xl shadow-xl h-72 md:h-80 transition-transform duration-300 hover:scale-[1.02] no-underline hover:no-underline focus:no-underline"
    >
      <div className="absolute inset-0">
        <Image
          src={imageErrors[project.title] ? '/images/projects/fallback.png' : project.image}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          onError={() => handleImageError(project.title)}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md transform transition-all duration-300 group-hover:-translate-y-1">{project.title}</h3>
        <p className="text-gray-100 mb-4 text-sm md:text-base font-medium leading-relaxed drop-shadow-md transform transition-all duration-300 group-hover:-translate-y-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 md:transform md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-100">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs font-medium bg-blue-600/20 text-blue-50 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="w-full hidden md:block">
          <div className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium inline-flex items-center justify-center gap-2 transform opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-200">
            {t('projects.viewProject')}
            <svg 
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;