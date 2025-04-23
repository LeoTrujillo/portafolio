"use client";
import React, { useState, useEffect } from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiAngular, SiNestjs, SiPhp, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

const AboutSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-gray-300 leading-relaxed">
          Soy desarrollador frontend con más de 15 años de trayectoria en el desarrollo de aplicaciones web y móviles. Me enfoco en construir experiencias centradas en el usuario, con especial atención a la performance, accesibilidad y escalabilidad.
        </p>
        <p className="text-gray-400 mt-4 leading-relaxed">
          He colaborado en productos de alto impacto utilizando tecnologías como React, React Native, AngularJS, Remix y NestJS. Me apasiona escribir código limpio, trabajar en equipo y estar en constante aprendizaje. Busco proyectos donde pueda aportar soluciones efectivas y seguir creciendo profesionalmente.
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
                <span className="text-sm text-gray-400 mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-1.5">
          {icons.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400 w-4' : 'bg-gray-600'
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
            <span className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;