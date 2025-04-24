"use client";
import React, { useState, useEffect } from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiAngular, SiNestjs, SiPhp, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { useI18n } from "@/i18n/index";

const AboutSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiAngular, name: "Angular" },
    { icon: SiNestjs, name: "NestJS" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [icons.length]);

  if (!mounted) return null;

  return (
    <section className="pb-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-lg md:text-xl dark:text-gray-300 text-primary-light leading-relaxed font-medium">
          {t('about.description1')}
        </p>
        <p className="text-base md:text-xl dark:text-gray-300 text-primary-light font-medium mt-6 leading-relaxed">
          {t('about.description2')}
        </p>
      </div>
      
      {/* Versión móvil - Carousel */}
      <div className="md:hidden mt-8 relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {icons.map(({ icon: Icon, name }) => (
              <div 
                key={name}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4"
              >
                <Icon size={48} className="text-cyan-400" />
                <span className="text-sm dark:text-gray-400 text-secondary-light mt-2 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-1.5">
          {icons.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400 w-4' : 'bg-gray-600 dark:bg-gray-600 bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Versión desktop - Grid */}
      <div className="hidden md:flex justify-between mt-16 container mx-auto px-4">
        {icons.map(({ icon: Icon, name }) => (
          <div key={name} className="flex flex-col items-center group">
            <Icon size={72} className="text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-base dark:text-gray-400 text-secondary-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;