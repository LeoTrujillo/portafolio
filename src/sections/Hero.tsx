"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { useI18n } from "@/i18n/index";
import AnimatedText from "@/components/AnimatedText";
import "@/styles/AnimatedText.css";

const HeroSection: React.FC = () => {
  const { t } = useI18n();
  
  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "Mobile Developer"
  ];

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold">
            <AnimatedText 
              baseText={t('hero.greeting.base')}
              roles={roles}
            />
          </h1>
          <p className="font-sans mt-4 text-xl md:text-2xl">
            {t('hero.description')}
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
                {t('hero.cv')}
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
                {t('hero.github')}
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
                {t('hero.linkedin')}
              </span>
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        .typewriter {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid currentColor;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: currentColor }
        }
      `}</style>
    </>
  );
};

export default HeroSection;