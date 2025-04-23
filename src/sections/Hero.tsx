import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl md:text-6xl font-bold">
          Hola 👋🏼 soy Leo
        </h1>
        <p className="font-sans mt-4 text-xl md:text-2xl">
          Frontend Developer especializado en crear interfaces web y móviles modernas con React, Angular y tecnologías afines.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="btn inline-flex items-center justify-center gap-3 md:w-auto w-full bg-white text-black hover:bg-gray-100 md:bg-transparent md:text-white md:hover:bg-white/10 px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up md:animate-none"
            style={{ animationDelay: '0.1s' }}
          >
            <HiDocumentDownload className="text-2xl transition-transform group-hover:rotate-12" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Descargar CV
            </span>
          </a>
          <a 
            href="https://github.com/LeoTrujillo" 
            target="_blank" 
            className="btn-outline inline-flex items-center justify-center gap-3 md:w-auto w-full bg-white text-black hover:bg-gray-100 md:bg-transparent md:text-white md:hover:bg-white/10 px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up md:animate-none"
            style={{ animationDelay: '0.2s' }}
          >
            <FaGithub className="text-2xl transition-transform group-hover:scale-110" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              GitHub
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/leonardo-trujillo-a868a712a" 
            target="_blank" 
            className="btn-outline inline-flex items-center justify-center gap-3 md:w-auto w-full bg-white text-black hover:bg-gray-100 md:bg-transparent md:text-white md:hover:bg-white/10 px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up md:animate-none"
            style={{ animationDelay: '0.3s' }}
          >
            <FaLinkedin className="text-2xl transition-transform group-hover:scale-110" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;