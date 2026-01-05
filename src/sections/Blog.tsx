import React from "react";
import { FaReact, FaChartLine, FaMobileAlt } from "react-icons/fa";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";

const posts = [
  {
    accent: "#7c3aed",
    icon: <FaReact />,
    tag: "React",
    readTime: "5 min lectura",
    title: "React Hooks: Guía Completa",
    description:
      "Aprende a dominar los hooks de React y cómo pueden mejorar tu código y productividad.",
    date: "Hace 2 días",
  },
  {
    accent: "#1d87d8",
    icon: <FaChartLine />,
    tag: "Performance",
    readTime: "8 min lectura",
    title: "Optimización de Performance Web",
    description:
      "Técnicas y estrategias para mejorar el rendimiento de tus aplicaciones web.",
    date: "Hace 1 semana",
  },
  {
    accent: "#16a34a",
    icon: <FaMobileAlt />,
    tag: "Mobile",
    readTime: "6 min lectura",
    title: "Responsive Design en 2024",
    description:
      "Las mejores prácticas para crear diseños responsive modernos y accesibles.",
    date: "Hace 2 semanas",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#f6f7fb] py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Blog & Artículos"
          subtitle="Comparto conocimientos y experiencias en desarrollo frontend"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-[color:var(--muted)]">
          Próximamente: artículos recientes desde Dev.to
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
