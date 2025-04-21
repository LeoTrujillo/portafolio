import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Bienvenido a mi sitio web</h2>
        <a href="/resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Descargar CV
        </a>
      </div>

    </section>
  );
};

export default HomeSection;