"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useI18n } from "@/i18n/index";
import LanguageToggle from "./LanguageToggle";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevenir el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo o nombre */}
            <div className="text-white font-bold text-xl">
              Leo
            </div>

            {/* Menú de hamburguesa para móvil */}
            <button 
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute h-0.5 bg-white w-6 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 bg-white w-6 top-2 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 bg-white w-6 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'
                  }`}
                />
              </div>
            </button>

            {/* Enlaces de navegación para desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/" 
                className="relative px-4 py-2 text-white/90 hover:text-white transition-colors group text-sm md:text-base"
              >
                <span className="relative z-10">{t('nav.home')}</span>
                <span className="absolute inset-x-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bottom-1.5" />
              </Link>
              <Link 
                href="/proyectos" 
                className="relative px-4 py-2 text-white/90 hover:text-white transition-colors group text-sm md:text-base"
              >
                <span className="relative z-10">{t('nav.projects')}</span>
                <span className="absolute inset-x-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bottom-1.5" />
              </Link>
              <Link 
                href="/contacto" 
                className="relative px-4 py-2 text-white/90 hover:text-white transition-colors group text-sm md:text-base"
              >
                <span className="relative z-10">{t('nav.contact')}</span>
                <span className="absolute inset-x-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bottom-1.5" />
              </Link>
              <Link 
                href="/" 
                className="relative ml-2 px-4 py-1.5 text-sm md:text-base bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                {t('nav.blog')}
              </Link>
              <LanguageToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-8 text-white text-2xl">
            <Link 
              href="/" 
              className="relative px-4 py-2 hover:text-cyan-400 transition-colors"
              onClick={handleLinkClick}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/proyectos" 
              className="relative px-4 py-2 hover:text-cyan-400 transition-colors"
              onClick={handleLinkClick}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              href="/contacto" 
              className="relative px-4 py-2 hover:text-cyan-400 transition-colors"
              onClick={handleLinkClick}
            >
              {t('nav.contact')}
            </Link>
            <Link 
              href="/" 
              className="relative px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
              onClick={handleLinkClick}
            >
              {t('nav.blog')}
            </Link>
            <div className="mt-8">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
