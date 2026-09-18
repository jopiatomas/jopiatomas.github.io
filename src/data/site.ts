export const site = {
  name: "Tomás Jopia",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
    "Backend Developer",
  ],
  status: "Disponible para trabajar · Remoto LATAM",
  location: "Mar del Plata, Argentina",
  email: "tomasjopiaf@gmail.com",
  github: "https://github.com/jopiatomas",
  linkedin: "https://www.linkedin.com/in/tomas-jopia/",
  siteUrl: "https://jopiatomas.github.io",
} as const;

export const hero = {
  intro:
    "Desarrollador frontend-first especializado en Angular y React, con experiencia sólida en backend usando Java y Spring Boot.",
  cta: "Ver proyectos",
} as const;

export const about = {
  paragraphs: [
    "Desarrollador frontend-first especializado en Angular y React, con experiencia sólida en backend usando Java y Spring Boot. Recién graduado de la UTN, con proyectos reales usados por usuarios reales.",
    "Busco oportunidades remotas en LATAM. Abierto a roles Junior y Trainee en Frontend o Full Stack development.",
  ],
  education: {
    institution: "Universidad Tecnológica Nacional · Mar del Plata",
    degree: "Tecnicatura Universitaria en Programación",
    period: "Graduado en marzo de 2026",
    detail:
      "Orientación Full Stack. Promedio: 8.29/10. Materias: Estructuras de Datos, Bases de Datos, Desarrollo Web (Angular), Desarrollo Backend (Spring Boot), Programación Orientada a Objetos (Java, C).",
  },
} as const;

export const stack = {
  Frontend: ["Angular", "React.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  Backend: ["Java", "Spring Boot", "Node.js", "REST APIs"],
  "Bases de datos": ["MySQL"],
  Herramientas: ["Git", "Docker", "Postman", "Jira", "Linux"],
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
  featured?: boolean;
  cases?: string[];
};

export const projects: Project[] = [
  {
    title: "#WebRescue",
    description:
      "Iniciativa personal, no un encargo de cliente: rediseño proactivamente sitios web de negocios locales que ni siquiera me lo pidieron, para construir portfolio real y demostrarles valor concreto antes de que exista cualquier pedido.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://web-rescue-navy.vercel.app/",
    code: "https://github.com/jopiatomas/WebRescue",
    featured: true,
    cases: ["Química Kubo", "MenorCoste", "Nexo Matafuegos"],
  },
  {
    title: "Quickish",
    description:
      "Aplicación full-stack de delivery que replica sistemas reales de pedidos. Proyecto final de carrera con autenticación, catálogo de productos y gestión de órdenes.",
    tags: ["Angular", "Spring Boot", "MySQL", "REST API"],
    live: "https://quickish-frontend.vercel.app/",
    code: "https://github.com/jopiatomas/quickish-delivery-frontend",
  },
  {
    title: "Boxing Club Platform",
    description:
      "Plataforma web para centralizar videos de entrenamientos y peleas de un gimnasio de boxeo, resolviendo la pérdida real de contenido enviado por WhatsApp. Usada por ~50 usuarios activos semanales.",
    tags: ["React.js", "UI Responsive", "50 usuarios activos"],
    live: "https://pikiteam.com.ar",
    code: "https://github.com/jopiatomas/boxing-club",
  },
];

export const contact = {
  heading: "Trabajemos juntos",
  text: "Buscando oportunidades remotas en LATAM. Abierto a roles Junior y Trainee en Frontend o Full Stack development.",
  cta: "Escribime",
} as const;

export const nav = [
  { id: "sobre-mi", label: "Sobre mí", number: "01" },
  { id: "stack", label: "Stack", number: "02" },
  { id: "proyectos", label: "Proyectos", number: "03" },
  { id: "contacto", label: "Contacto", number: "04" },
] as const;
