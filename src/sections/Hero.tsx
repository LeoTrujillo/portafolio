import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Leonardo Trujillo
        </h1>
      <p className="mt-4 text-xl md:text-2xl">
        Frontend Developer con +15 años de experiencia construyendo apps web y móviles usando React, Angular y más.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="/resume.pdf" target="_blank" className="btn">Descargar CV</a>
        <a href="https://github.com/LeoTrujillo" target="_blank" className="btn-outline">GitHub</a>
          <a href="https://linkedin.com/in/leonardo-trujillo-a868a712a" target="_blank" className="btn-outline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;