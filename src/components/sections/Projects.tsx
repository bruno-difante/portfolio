"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Agente RAG para Legislação Urbana",
    description:
      "Sistema de IA conversacional que utiliza Retrieval-Augmented Generation para consultar e interpretar legislações urbanísticas municipais. Processa documentos legais, indexa em banco vetorial e responde com base em fontes verificáveis. Em desenvolvimento.",
    tags: ["Python", "LangChain", "ChromaDB", "IA Generativa", "RAG"],
    href: "#",
    featured: true,
    emoji: "🤖",
    wip: true,
  },
  {
    title: "Portaria UFN",
    description:
      "Sistema de controle de empréstimos e localização de professores para a portaria da Universidade Franciscana. Registro de itens emprestados (chaves, controles, cabos), identificação de professores via crachá RFID e indicação de prédio e sala.",
    tags: ["Java", "Spring Boot", "React", "MongoDB Atlas"],
    href: "https://github.com/bruno-difante/PortariaUFN",
    emoji: "🏫",
  },
  {
    title: "Calculadora Django",
    description:
      "Aplicação web desenvolvida como teste técnico com autenticação de usuários, avaliação de expressões matemáticas, histórico de operações por usuário e interface responsiva com design moderno.",
    tags: ["Python", "Django", "SQLite", "HTML/CSS/JS"],
    href: "https://github.com/bruno-difante/calculadora-django",
    emoji: "🧮",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Este site! Portfólio pessoal desenvolvido com Next.js e Tailwind CSS, com animações suaves usando Framer Motion, design responsivo e tema dark mode.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/bruno-difante/portfolio",
    emoji: "🚀",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Portfólio
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Projetos em destaque<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-text-secondary">
              Uma seleção dos projetos que melhor representam minhas habilidades
              técnicas e interesses atuais.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerChildren
          className="grid gap-6 md:grid-cols-2"
          staggerDelay={0.12}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
