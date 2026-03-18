import React from "react";
import Container from "@/components/Container";
import LogoBadge from "@/components/LogoBadge";
import NavLink from "@/components/NavLink";
import PrimaryButton from "@/components/PrimaryButton";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <LogoBadge initials="LT" />
          <div className="text-sm font-semibold text-[color:var(--foreground)]">
            Leonardo Trujillo
          </div>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#que-hago">Qué hago</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#como-trabajo">Cómo trabajo</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </nav>
        <PrimaryButton href="#contacto" className="hidden md:inline-flex">
          Hablemos
        </PrimaryButton>
      </Container>
    </header>
  );
};

export default SiteHeader;
