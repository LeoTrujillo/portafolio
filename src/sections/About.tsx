import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <p>
          Soy desarrollador frontend con más de 15 años de experiencia creando experiencias web y móviles centradas en el usuario.
          He trabajado con tecnologías como <strong>React, React Native, AngularJS, Remix</strong> y otras herramientas modernas para
          mejorar el rendimiento, la accesibilidad y la usabilidad.
        </p>
        <p className="mt-4">
          Me apasiona escribir código limpio, trabajar en equipo y aprender constantemente. Actualmente busco oportunidades
          donde pueda seguir creciendo y aportar con mi experiencia.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;