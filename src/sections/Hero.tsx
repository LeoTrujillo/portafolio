import React from "react";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import CodeCard from "@/components/CodeCard";
import Container from "@/components/Container";
// import HeroPortrait from "@/components/HeroPortrait";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SocialIconLink from "@/components/SocialIconLink";
import RevealOnScroll from "@/components/RevealOnScroll";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#eef0ff_0%,transparent_55%),radial-gradient(circle_at_top_right,#f4f1ff_0%,transparent_45%)]" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--brand-100)] blur-3xl md:h-96 md:w-96" />
      </div>
      <Container className="relative py-8 sm:py-16">
        <RevealOnScroll direction="left">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0 space-y-5 text-center sm:text-left sm:space-y-6">
              {/* <div className="flex justify-center sm:justify-start">
                <HeroPortrait src="/images/leo.png" alt="Leo Developer" />
              </div> */}
              <div className="flex justify-center sm:justify-start">
                <AvailabilityBadge label="Disponible para trabajar" />
              </div>
              <div className="space-y-4">
                <h1 className="max-w-[18ch] text-3xl font-bold leading-tight tracking-tight text-[color:var(--foreground)] sm:max-w-none sm:text-5xl lg:text-6xl">
                  Frontend & Mobile Developer
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-lg">
                  Creo experiencias web modernas, accesibles y escalables.
                  Especializado en React, Vue y tecnologías frontend de última
                  generación.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <PrimaryButton href="#proyectos">Ver proyectos</PrimaryButton>
                <SecondaryButton href="#contacto">Hablemos</SecondaryButton>
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
            <div className="w-full min-w-0 lg:justify-self-end">
              <CodeCard />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default HeroSection;
