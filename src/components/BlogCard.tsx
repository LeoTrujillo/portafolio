import React from "react";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";

type BlogCardProps = {
  imageUrl: string;
  tag: string;
  readTime: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

const BlogCard = ({
  imageUrl,
  tag,
  readTime,
  title,
  description,
  date,
  href,
}: BlogCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="relative h-36 w-full overflow-hidden bg-[color:var(--card)]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3 text-xs text-[color:var(--muted)]">
          <TechBadge label={tag} />
          <span>{readTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm text-[color:var(--muted)]">
          <span>{date}</span>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-[color:var(--brand-600)] transition hover:text-[color:var(--brand-700)]"
          >
            Leer más →
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
