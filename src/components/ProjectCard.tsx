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
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useI18n();

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  return (
    <div 
      className="relative h-72 md:h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Cara frontal */}
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={imageErrors[project.title] ? '/images/projects/fallback.png' : project.image}
            alt={project.title}
            fill
            className="object-cover object-center rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            onError={() => handleImageError(project.title)}
          />
        </div>

        {/* Cara trasera */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#00d3f3] to-[#0f172a] rounded-xl p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-100 mb-4 text-sm md:text-base font-medium leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="text-xs font-medium bg-blue-600/20 text-blue-50 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Link 
            href={project.projectUrl} 
            target="_blank"
            className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
          >
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;