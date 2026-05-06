import React from "react";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import CodeCard from "@/components/CodeCard";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SocialIconLink from "@/components/SocialIconLink";
import RevealOnScroll from "@/components/RevealOnScroll";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_50%),radial-gradient(circle_at_top_right,#e0f2fe_0%,transparent_42%)]" />
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--brand-100)] blur-3xl md:h-[28rem] md:w-[28rem]" />
      </div>
      <Container className="relative py-12 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <RevealOnScroll direction="up">
            <div className="min-w-0 space-y-5 text-center sm:text-left sm:space-y-6">
              <div className="flex justify-center sm:justify-start">
                <AvailabilityBadge label="Disponible para proyectos freelance y roles remotos" />
              </div>
              <div className="space-y-4">
                <h1 className="max-w-[12ch] text-4xl font-bold leading-[1.02] tracking-tight text-[color:var(--foreground)] sm:max-w-[11ch] sm:text-6xl lg:text-7xl">
                  Construyo productos digitales.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[color:var(--foreground)]/90 sm:text-xl">
                  Senior Frontend Engineer ayudando a transformar ideas y MVPs en aplicaciones escalables, mantenibles y listas para producción.
                </p>
                <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-lg">
                  Especializado en React, TypeScript, performance y arquitectura frontend para equipos que necesitan avanzar rápido sin romper la base del producto.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <PrimaryButton href="#proyectos">Ver proyectos</PrimaryButton>
                <SecondaryButton href="#contacto">Trabajemos juntos</SecondaryButton>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <SocialIconLink href="https://github.com/LeoTrujillo" label="GitHub">
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink href="https://linkedin.com/in/leonardo-trujillo" label="LinkedIn">
                  <FaLinkedinIn />
                </SocialIconLink>
                <SocialIconLink href="https://dev.to/hileodev" label="Dev.to">
                  <FaDev />
                </SocialIconLink>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <div className="w-full min-w-0 lg:justify-self-end">
              <CodeCard />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
