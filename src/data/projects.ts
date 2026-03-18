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
    title: "FreshTri",
    context: "Producto propio enfocado en experiencia digital y operación de servicios.",
    problem:
      "Como en muchos productos nuevos, había que validar rápido sin sacrificar una base que luego permitiera crecer con orden.",
    solution:
      "Diseñé la estructura frontend pensando desde el inicio en mantenibilidad, performance y una UX clara para iterar sin rehacer todo.",
    impact:
      "Sirve como muestra de un enfoque donde producto y arquitectura avanzan juntos, reduciendo deuda temprana y acelerando aprendizaje real.",
    tech: ["React", "TypeScript", "Next.js", "UX"],
    image: "/images/projects/nutri.png",
    link: "#contacto",
  },
];
