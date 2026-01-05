import React from "react";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

type FeaturedProjectCardProps = {
  project: Project;
};

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <article className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="relative h-44 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 2).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">
            {project.description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-semibold text-[color:var(--brand-600)] transition hover:text-[color:var(--brand-700)]"
          >
            Ver proyecto →
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Abrir ${project.title}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--brand-600)] hover:text-[color:var(--brand-600)]"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
