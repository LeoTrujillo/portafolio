"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import RevealOnScroll from "@/components/RevealOnScroll";

type DevtoArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  reading_time_minutes: number;
  published_at: string;
  cover_image?: string;
  social_image?: string;
};

const fallbackPosts = [
  {
    imageUrl: "/images/projects/fallback.png",
    tag: "React",
    readTime: "5 min lectura",
    title: "React Hooks: Guía Completa",
    description:
      "Aprende a dominar los hooks de React y cómo pueden mejorar tu código y productividad.",
    date: "Hace 2 días",
    href: "https://dev.to",
  },
  {
    imageUrl: "/images/projects/fallback.png",
    tag: "Performance",
    readTime: "8 min lectura",
    title: "Optimización de Performance Web",
    description:
      "Técnicas y estrategias para mejorar el rendimiento de tus aplicaciones web.",
    date: "Hace 1 semana",
    href: "https://dev.to",
  },
  {
    imageUrl: "/images/projects/fallback.png",
    tag: "Mobile",
    readTime: "6 min lectura",
    title: "Responsive Design en 2024",
    description:
      "Las mejores prácticas para crear diseños responsive modernos y accesibles.",
    date: "Hace 2 semanas",
    href: "https://dev.to",
  },
];

const getPresentation = (tag?: string) => {
  const normalized = tag?.toLowerCase() ?? "";
  if (normalized.includes("react")) {
    return { tag: "React" };
  }
  if (normalized.includes("performance")) {
    return { tag: "Performance" };
  }
  if (normalized.includes("mobile")) {
    return { tag: "Mobile" };
  }
  return { tag: tag || "Dev.to" };
};

const formatDate = (input: string) => {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return "Reciente";
  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const BlogSection = () => {
  const [posts, setPosts] = useState(fallbackPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/devto");
        if (!response.ok) return;
        const data = (await response.json()) as DevtoArticle[];
        if (!Array.isArray(data) || data.length === 0) return;

        const mapped = data.slice(0, 3).map((article) => {
          const firstTag = article.tag_list?.[0];
          const presentation = getPresentation(firstTag);
          return {
            ...presentation,
            imageUrl:
              article.cover_image ||
              article.social_image ||
              "/images/projects/fallback.png",
            readTime: `${article.reading_time_minutes} min lectura`,
            title: article.title,
            description: article.description,
            date: formatDate(article.published_at),
            href: article.url,
          };
        });
        setPosts(mapped);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section id="blog" className="bg-[#f6f7fb] py-12 sm:py-16">
      <Container>
        <RevealOnScroll direction="left">
          <SectionHeader
            title="Blog & Artículos"
            subtitle="Comparto conocimientos y experiencias en desarrollo frontend"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={`${post.href}-${index}`} {...post} />
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-[color:var(--muted)]">
            {loading
              ? "Cargando artículos recientes..."
              : "Artículos recientes desde Dev.to"}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default BlogSection;
