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
      "Sistema de IA conversacional que utiliza Retrieval-Augmented Generation para consultar e interpretar legislações urbanísticas municipais. O agente processa documentos legais, os indexa em um banco vetorial e responde perguntas com base em fontes verificáveis.",
    tags: ["Python", "LangChain", "ChromaDB", "IA Generativa", "RAG"],
    href: "https://github.com/bruni/rag-legislacao",
    featured: true,
    emoji: "🤖",
  },
  {
    title: "Sistema de Gestão Acadêmica",
    description:
      "Aplicação web full-stack para gerenciamento de registros acadêmicos, incluindo matrículas, notas e frequência. Interface responsiva com autenticação e controle de acesso baseado em papéis.",
    tags: ["Django", "PostgreSQL", "JavaScript", "REST API"],
    href: "https://github.com/bruni/gestao-academica",
    emoji: "📚",
  },
  {
    title: "Dashboard de Monitoramento",
    description:
      "Painel em tempo real para visualização de métricas de sistemas e alertas operacionais. Integração com APIs externas e notificações automáticas.",
    tags: ["React", "TypeScript", "WebSocket", "Chart.js"],
    href: "https://github.com/bruni/dashboard-monitoramento",
    emoji: "📊",
  },
  {
    title: "API de Autenticação",
    description:
      "Microserviço de autenticação e autorização com JWT, suporte a OAuth2 e documentação completa com Swagger. Projetado para ser reutilizável em múltiplos projetos.",
    tags: ["Java", "Spring Boot", "JWT", "Docker"],
    href: "https://github.com/bruni/auth-api",
    emoji: "🔐",
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
