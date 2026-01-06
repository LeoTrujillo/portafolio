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
      <RevealOnScroll direction="right">
        <div className="bg-[color:var(--brand-600)] py-12 sm:py-16">
          <Container>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center text-white">
              <h2 className="text-2xl font-bold sm:text-3xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Estoy disponible para proyectos freelance y oportunidades
                laborales. ¡Hablemos!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <FooterContactPill
                  href="mailto:hi@leonardotrujillo.dev"
                  icon={<HiMail className="text-lg" />}
                  label="hi@leonardotrujillo.dev"
                />
                <FooterContactPill
                  href="tel:+522225670424"
                  icon={<FiPhoneCall className="text-lg" />}
                  label="+52 (222) 567-0424"
                  variant="outline"
                />
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
              <span className="text-sm font-semibold">Leo Developer</span>
            </div>
            <div className="space-y-1 text-white/70 sm:text-right">
              <p>© 2026 Leo Developer. Todos los derechos reservados.</p>
              <p>
                Hecho con <span className="text-red-400">♥</span> y React
              </p>
            </div>
          </Container>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default FooterSection;
