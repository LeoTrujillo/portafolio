import React from "react";
import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import CodeCard from "@/components/CodeCard";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SocialIconLink from "@/components/SocialIconLink";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#eef0ff_0%,transparent_55%),radial-gradient(circle_at_top_right,#f4f1ff_0%,transparent_45%)]" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--brand-100)] blur-3xl md:h-96 md:w-96" />
      </div>
      <Container className="relative py-10 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <AvailabilityBadge label="Disponible para trabajar" />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
                Frontend Stack & Mobile Developer
              </h1>
              <p className="max-w-xl text-base text-[color:var(--muted)] sm:text-lg">
                Creo experiencias web modernas, accesibles y escalables.
                Especializado en React, Vue y tecnologías frontend de última
                generación.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="#proyectos">Ver proyectos</PrimaryButton>
              <SecondaryButton href="#contacto">Hablemos</SecondaryButton>
            </div>
            <div className="flex items-center gap-3">
              <SocialIconLink href="https://github.com" label="GitHub">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://linkedin.com" label="LinkedIn">
                <FaLinkedinIn />
              </SocialIconLink>
              <SocialIconLink href="https://twitter.com" label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://dev.to" label="Dev.to">
                <FaDev />
              </SocialIconLink>
            </div>
          </div>
          <div className="w-full lg:justify-self-end">
            <CodeCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
