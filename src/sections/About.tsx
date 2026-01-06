import React from "react";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import Container from "@/components/Container";
import FeatureCard from "@/components/FeatureCard";
import RevealOnScroll from "@/components/RevealOnScroll";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="bg-white py-12 sm:py-16">
      <Container>
        <RevealOnScroll direction="right">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[color:var(--foreground)] sm:text-3xl">
              Sobre mí
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--muted)] sm:text-base">
              Desarrollador frontend apasionado por crear interfaces intuitivas
              y experiencias de usuario excepcionales
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<FaCode />}
              title="Desarrollo Frontend"
              description="Especializado en crear aplicaciones web modernas con React, Vue y las últimas tecnologías del ecosistema JavaScript."
              tone="blue"
            />
            <FeatureCard
              icon={<FaPalette />}
              title="UI/UX Design"
              description="Diseño interfaces centradas en el usuario, priorizando la accesibilidad y una experiencia fluida en todos los dispositivos."
              tone="purple"
            />
            <FeatureCard
              icon={<FaRocket />}
              title="Optimización"
              description="Enfocado en el rendimiento, SEO y mejores prácticas para garantizar aplicaciones rápidas y escalables."
              tone="green"
            />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default AboutSection;
