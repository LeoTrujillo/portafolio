export const es = {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    contact: "Contacto",
    blog: "Blog"
  },
  hero: {
    greeting: {
      base: "Hola 👋🏼 soy Leo un",
      roles: ["Desarrollador Frontend", "Desarrollador Full Stack", "Desarrollador Móvil"]
    },
    description: "Soy desarrollador Frontend especializado en crear interfaces web y móviles modernas con React, Angular y tecnologías relacionadas.",
    cv: "Descargar CV",
    github: "GitHub",
    linkedin: "LinkedIn"
  },
  about: {
    description1: "Soy un desarrollador frontend con más de 15 años de experiencia en el desarrollo de aplicaciones web y móviles. Me enfoco en construir experiencias centradas en el usuario, con especial atención al rendimiento, accesibilidad y escalabilidad.",
    description2: "He colaborado en productos de alto impacto utilizando tecnologías como React, React Native, AngularJS, Remix y NestJS. Me apasiona escribir código limpio, trabajar en equipo y el aprendizaje continuo. Busco proyectos donde pueda brindar soluciones efectivas y seguir creciendo profesionalmente."
  },
  projects: {
    title: "Proyectos",
    subtitle: "Algunos de mis trabajos recientes",
    viewProject: "Ver Proyecto",
    projects: [
      {
        title: "Drivalbe",
        description: "Aplicación para compra de boletos para viajes",
        technologies: ["React Native", "TypeScript", "Redux", "React", "Next", "Remix", "NestJS", "PostgreSQL"],
        image: "/images/projects/drivalbe.png",
        projectUrl: "https://drivalbe.com/",
      },
      {
        title: "Red Clecal",
        description: "Plataforma para el registro y automatización de citas compradores, proveedores y landing page",
        technologies: ["React", "TypeScript", "Inertia", "PHP", "Laravel", "MySQL"],
        image: "/images/projects/redclelac.png",
        projectUrl: "https://red.clelac.com/",
      },
      {
        title: "Observatorio Técnologico de Monterrey",
        description: "Pagina web y dashboard para administrar el contenido para el Observatorio Técnologico de Monterrey",
        technologies: ["HTML", "CSS", "Wordpress", "PHP", "MySQL"],
        image: "/images/projects/observatorio.png",
        projectUrl: "https://observatorio.tec.mx/",
      },
      {
        title: "Camino Real App",
        description: "Aplicación movil para la reserva de habitaciones en el Hotel Camino Real",
        technologies: ["React Native", "TypeScript", "Redux"],
        image: "/images/projects/camino.png",
        projectUrl: "https://apps.apple.com/mx/app/camino-real-hoteles/id1658196886",
      },
      {
        title: "Nutri Cal",
        description: "Aplicación para calcular y reemplazar cualquier alimento o ingrediente",
        technologies: ["React", "Remix", "TypeScript", "Jest", "Cypress", "TailwindCSS"],
        image: "/images/projects/nutri.png",
        projectUrl: "https://nutrition-calculator-eight.vercel.app/",
      }
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "Trabajemos juntos",
    description: "¿Tienes un proyecto en mente? ¡Hablemos!",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    send: "Enviar Mensaje",
    success: "¡Mensaje enviado exitosamente!",
    error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    formLabels: {
      name: "Tu Nombre",
      email: "Tu Correo",
      message: "Tu Mensaje",
      send: "Enviar Mensaje"
    },
    formPlaceholders: {
      name: "Ingresa tu nombre",
      email: "Ingresa tu correo",
      message: "Ingresa tu mensaje"
    },
    formValidation: {
      nameRequired: "El nombre es requerido",
      emailRequired: "El correo es requerido",
      emailInvalid: "Por favor ingresa un correo válido",
      messageRequired: "El mensaje es requerido"
    }
  },
  footer: {
    rights: "© 2024 Leo Trujillo. Todos los derechos reservados.",
    social: "Sígueme en redes sociales",
    backToTop: "Volver arriba"
  }
}; 