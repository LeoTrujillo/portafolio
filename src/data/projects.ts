export type ProjectCase = {
  title: string;
  context: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  image: string;
  link: string;
};

export const projects: ProjectCase[] = [
  {
    title: "Obervatorio Tec",
    context: "Pagina web para el Observatorio de la Universidad Tec de Monterrey.",
    problem:
      "Desarrollar un CMS para que el personal del observatorio pudiera gestionar el contenido del sitio web.",
    solution:
      "Diseñé una arquitectura frontend pensando desde el inicio en mantenibilidad, performance y una UX clara para iterar sin rehacer todo.",
    impact:
      "Logramos crear un sitio web robusto y escalable que cumpliera con los requerimientos del producto y permitiera un crecimiento sostenido.",
    tech: ["WordPress", "PHP", "UX"],
    image: "/images/projects/observatorio.png",
    link: "https://observatorio.tec.mx/",
  },
  {
    title: "Camino Real App",
    context: "Aplicación móvil para reservas y experiencia digital de huéspedes.",
    problem:
      "La experiencia debía sentirse fluida en un flujo sensible para negocio, con una app capaz de soportar crecimiento sin fricciones visibles.",
    solution:
      "Optimicé el frontend móvil y el comportamiento de pantallas críticas para mejorar claridad de flujo, estabilidad y capacidad de mantenimiento.",
    impact:
      "El resultado fue una experiencia más confiable en reserva y navegación, con una base lista para seguir evolucionando sin degradar calidad.",
    tech: ["React Native", "TypeScript", "Redux"],
    image: "/images/projects/camino.png",
    link: "https://apps.apple.com/mx/app/camino-real-hoteles/id1658196886",
  },
  {
    title: "Mindora",
    context: "Plataforma para buscar ayuda profesional de salud mental.",
    problem:
      "Desarrollar una plataforma que pudiera gestionar citas para profesionales así como registrar informacion de pacientes y llevar un seguimiento de su progreso.",
    solution:
      "El equipo de desarrollo implementó una arquitectura modular y escalable, con un diseño centrado en el usuario y una experiencia fluida y segura.",
    impact:
      "Se logró desarrollar una plataforma robusta y escalable que cumpliera con los requerimientos del producto y permitiera un crecimiento sostenido.",
    tech: ["React", "TypeScript", "Next.js", "UX"],
    image: "/images/projects/mindora.png",
    link: "https://mindor.app",
  },
  {
    title: "Drivalbe",
    context: "Plataforma de venta de boletos y operación de viajes.",
    problem:
      "El producto necesitaba crecer entre web, mobile y backend sin que la experiencia se volviera inconsistente o costosa de mantener.",
    solution:
      "Trabajé en una base compartida orientada a producto, alineando frontend, flujos clave y decisiones técnicas para sostener evolución continua.",
    impact:
      "Se fortaleció la capacidad de iterar sobre nuevas funcionalidades con más consistencia, mejor experiencia y una estructura más preparada para escalar.",
    tech: ["React Native", "TypeScript", "Redux", "Next.js"],
    image: "/images/projects/drivalbe.png",
    link: "https://drivalbe.com/",
  },
];
