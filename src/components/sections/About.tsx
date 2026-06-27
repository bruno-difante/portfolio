"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Code2, Globe, User } from "lucide-react";

const skills = [
  { category: "Linguagens", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frameworks", items: ["Django", "React", "Next.js", "LangChain"] },
  { category: "Ferramentas", items: ["Git", "Docker", "PostgreSQL", "ChromaDB", "Linux"] },
];

const languages = [
  { lang: "Português", level: "Nativo", percent: 100 },
  { lang: "Inglês", level: "Avançado", percent: 85 },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre Mim
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Quem eu sou<span className="text-accent">.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Bio */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-text-secondary">
              <p>
                Sou estudante de <span className="font-medium text-text-primary">Ciência da Computação</span> com paixão
                por resolver problemas reais através da tecnologia. Minha experiência abrange desde o
                desenvolvimento de aplicações web com <span className="font-medium text-text-primary">Python e Django</span>,
                até a criação de soluções com <span className="font-medium text-text-primary">Inteligência Artificial</span>.
              </p>
              <p>
                Acredito que o melhor software nasce da interseção entre código limpo, design
                intencional e empatia pelo usuário. Estou constantemente buscando novos
                desafios que me permitam crescer e contribuir com projetos de impacto.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: User, label: "Área", value: "Ciência da Computação" },
                { icon: Code2, label: "Foco", value: "Dev. de Software" },
                { icon: Globe, label: "Idiomas", value: "PT / EN" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-alt p-4 transition-all hover:border-accent/30 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-text-primary">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Skills & Languages */}
          <FadeIn delay={0.25} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface-alt p-6">
              <h3 className="mb-6 text-lg font-bold text-text-primary">
                Habilidades Técnicas
              </h3>
              <StaggerChildren className="space-y-5" staggerDelay={0.08}>
                {skills.map(({ category, items }) => (
                  <StaggerItem key={category}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {/* Languages */}
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="mb-5 text-lg font-bold text-text-primary">
                  Idiomas
                </h3>
                <div className="space-y-4">
                  {languages.map(({ lang, level, percent }) => (
                    <div key={lang}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-text-primary">
                          {lang}
                        </span>
                        <span className="text-xs text-text-muted">{level}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-accent transition-all duration-700"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
