"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useI18n } from "@/i18n/index";
import LanguageToggle from "./LanguageToggle";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-1 md:gap-8">
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
  );
};

export default Header;
