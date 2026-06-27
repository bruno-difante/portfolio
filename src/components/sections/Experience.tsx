"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Operador de Central de Monitoramento",
    company: "PRS Monitoramento",
    location: "Santa Maria, RS",
    period: "Fev. 2026 — Presente",
    description:
      "Operação de central de monitoramento 24h, gestão de portaria remota e controle de acesso de condomínios e empresas. Análise de sistemas de CFTV para detecção de anormalidades e acionamento ágil de segurança pública em situações de risco. Emissão de relatórios operacionais e tomada de decisão rápida em incidentes de segurança.",
    tags: ["Monitoramento 24h", "CFTV", "Controle de Acesso", "Relatórios"],
  },
  {
    title: "Desenvolvedor de Software",
    company: "Lab. Práticas — Universidade Franciscana",
    location: "Santa Maria, RS",
    period: "Ago. 2024 — Dez. 2025",
    description:
      "Desenvolvimento de soluções tecnológicas para demandas da comunidade utilizando o framework Python-Django e Bootstrap. Atuação em todo o ciclo de desenvolvimento de software, abrangendo codificação, testes e manutenção de sistemas. Trabalho em equipe multidisciplinar sob metodologias ágeis para a entrega de produtos digitais eficientes.",
    tags: ["Python", "Django", "Bootstrap", "Git", "Metodologias Ágeis"],
  },
  {
    title: "Técnico de Suporte e Urnas Eletrônicas",
    company: "Cartório Eleitoral",
    location: "Santa Maria, RS",
    period: "Out. 2025 — Dez. 2025 (temporário)",
    description:
      "Preparação, configuração de software e manutenção de hardware de urnas eletrônicas durante o processo eleitoral. Execução de testes funcionais e verificação de integridade dos sistemas. Prestação de suporte técnico presencial para equipes de campo, assegurando o funcionamento em momentos críticos.",
    tags: ["Suporte Técnico", "Hardware", "Urnas Eletrônicas", "Testes"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative bg-surface-alt py-28 px-6">
      {/* Top border decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Trajetória
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Experiência Profissional<span className="text-accent">.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-border md:block" />

          <StaggerChildren className="space-y-8" staggerDelay={0.15}>
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="group relative flex gap-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 mt-1 hidden md:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-surface transition-all group-hover:border-accent group-hover:bg-accent/10">
                      <Briefcase className="h-4 w-4 text-text-muted transition-colors group-hover:text-accent" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/[0.04] sm:p-8">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-text-secondary">
                      {exp.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-surface-alt px-2.5 py-1 text-xs font-medium text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
