import React from "react";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import Container from "@/components/Container";
import LogoBadge from "@/components/LogoBadge";
import FooterContactPill from "@/components/FooterContactPill";
import FooterSocialLink from "@/components/FooterSocialLink";
import RevealOnScroll from "@/components/RevealOnScroll";

const FooterSection = () => {
  return (
    <footer id="contacto">
      <RevealOnScroll direction="up">
        <div className="bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] py-20 sm:py-24">
          <Container>
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Construyamos algo que realmente funcione a largo plazo.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-lg">
                Si tienes un producto y quieres que escale sin romperse, platiquemos. Puedo ayudarte a fortalecer la base, mejorar la experiencia y ordenar el frontend para la siguiente etapa.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <FooterContactPill
                  href="mailto:hi@leonardotrujillo.dev"
                  icon={<HiMail className="text-lg" />}
                  label="Enviar mensaje"
                />
                <FooterContactPill
                  href="tel:+522225670424"
                  icon={<FiPhoneCall className="text-lg" />}
                  label="Agendar llamada"
                  variant="outline"
                />
              </div>
              <div className="mt-5 text-sm text-white/70">
                <p>Freelance, colaboraciones de largo plazo y posiciones remotas senior.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <FooterSocialLink
                  href="https://github.com/LeoTrujillo"
                  label="GitHub"
                >
                  <FaGithub />
                </FooterSocialLink>
                <FooterSocialLink
                  href="https://linkedin.com/in/leonardo-trujillo"
                  label="LinkedIn"
                >
                  <FaLinkedinIn />
                </FooterSocialLink>
                <FooterSocialLink href="https://dev.to/hileodev" label="Dev.to">
                  <FaDev />
                </FooterSocialLink>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#0b1020] py-6 text-white">
          <Container className="flex flex-col items-center justify-between gap-4 text-center text-xs sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <LogoBadge initials="LT" />
              <span className="text-sm font-semibold">Leonardo Trujillo</span>
            </div>
            <div className="space-y-1 text-white/70 sm:text-right">
              <p>© 2026 Leonardo Trujillo. Todos los derechos reservados.</p>
              <p>
                Senior Frontend Engineer especializado en producto, performance y arquitectura frontend.
              </p>
            </div>
          </Container>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default FooterSection;
