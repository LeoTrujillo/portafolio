import React from "react";
import Container from "@/components/Container";
import LogoBadge from "@/components/LogoBadge";
import NavLink from "@/components/NavLink";
import PrimaryButton from "@/components/PrimaryButton";

const SiteHeader = () => {
  return (
    <header className="border-b border-[color:var(--border)] bg-white">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <LogoBadge initials="LT" />
          <div className="text-sm font-semibold text-[color:var(--foreground)]">
            Leo Developer
          </div>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#sobre-mi">Sobre mí</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#tecnologias">Tecnologías</NavLink>
          <NavLink href="#blog">Blog</NavLink>
        </nav>
        <PrimaryButton href="#contacto" className="hidden md:inline-flex">
          Contacto
        </PrimaryButton>
      </Container>
    </header>
  );
};

export default SiteHeader;
