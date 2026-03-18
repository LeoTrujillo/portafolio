import React from "react";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";
import { FiExternalLink } from "react-icons/fi";
import type { ProjectCase } from "@/data/projects";

type FeaturedProjectCardProps = {
  project: ProjectCase;
};

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
      <div className="relative h-52 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-7">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-600)]">
            {project.context}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
          <div>
            <p className="font-semibold text-[color:var(--foreground)]">Problema</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="font-semibold text-[color:var(--foreground)]">Solución</p>
            <p>{project.solution}</p>
          </div>
          <div>
            <p className="font-semibold text-[color:var(--foreground)]">Impacto</p>
            <p>{project.impact}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-[color:var(--border)] pt-5">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-600)] transition hover:text-[color:var(--brand-700)]"
          >
            Ver caso
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
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
