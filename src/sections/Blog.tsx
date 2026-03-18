import React from "react";
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

type BlogPost = {
  imageUrl: string;
  tag: string;
  readTime: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

const fallbackPosts: BlogPost[] = [
  {
    imageUrl: "/images/projects/fallback.png",
    tag: "React",
    readTime: "5 min lectura",
    title: "React Hooks: Guía Completa",
    description:
      "Aprende a dominar los hooks de React y cómo pueden mejorar tu código y productividad.",
    date: "Contenido destacado",
    href: "https://dev.to/hileodev",
  },
  {
    imageUrl: "/images/projects/fallback.png",
    tag: "Performance",
    readTime: "8 min lectura",
    title: "Optimización de Performance Web",
    description:
      "Técnicas y estrategias para mejorar el rendimiento de tus aplicaciones web.",
    date: "Contenido destacado",
    href: "https://dev.to/hileodev",
  },
  {
    imageUrl: "/images/projects/fallback.png",
    tag: "Mobile",
    readTime: "6 min lectura",
    title: "Responsive Design en 2024",
    description:
      "Las mejores prácticas para crear diseños responsive modernos y accesibles.",
    date: "Contenido destacado",
    href: "https://dev.to/hileodev",
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

const getBlogPosts = async (): Promise<{
  posts: BlogPost[];
  sourceLabel: string;
}> => {
  const username = process.env.DEVTO_USERNAME;

  if (!username) {
    return {
      posts: fallbackPosts,
      sourceLabel: "Artículos destacados de referencia",
    };
  }

  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${encodeURIComponent(username)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Dev.to articles: ${response.status}`);
    }

    const data = (await response.json()) as DevtoArticle[];
    if (!Array.isArray(data) || data.length === 0) {
      return {
        posts: fallbackPosts,
        sourceLabel: "Artículos destacados de referencia",
      };
    }

    const posts = data.slice(0, 3).map((article) => {
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

    return {
      posts,
      sourceLabel: "Artículos recientes desde Dev.to",
    };
  } catch {
    return {
      posts: fallbackPosts,
      sourceLabel: "Artículos destacados de referencia",
    };
  }
};

const BlogSection = async () => {
  const { posts, sourceLabel } = await getBlogPosts();

  return (
    <section id="blog" className="bg-white py-20 sm:py-24">
      <Container>
        <RevealOnScroll direction="up">
          <SectionHeader
            title="Escribo sobre frontend, performance y decisiones que ayudan a construir mejor."
            body="El blog complementa mi trabajo práctico: documenta criterios, aprendizajes y formas de pensar producto desde ingeniería."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={`${post.href}-${post.title}`} {...post} />
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-[color:var(--muted)]">
            {sourceLabel}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default BlogSection;
