"use client";
import { useI18n } from "@/i18n/index";

const LanguageToggle = () => {
  const { language, setLanguage } = useI18n();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="relative px-4 py-2 text-white/90 hover:text-white transition-colors group text-sm md:text-base"
      aria-label="Cambiar idioma"
    >
      <span className="relative z-10">{language.toUpperCase()}</span>
      <span className="absolute inset-x-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bottom-1.5" />
    </button>
  );
};

export default LanguageToggle; 