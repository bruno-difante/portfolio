"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/bruno-difante",
    username: "@bruno-difante",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/bruno-difante",
    username: "/in/bruno-difante",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:difantemoraes@gmail.com",
    username: "difantemoraes@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative bg-surface-alt py-28 px-6">
      {/* Top border decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Contato
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Vamos conversar<span className="text-accent">?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
            Estou sempre aberto a novas oportunidades, colaborações e conversas
            sobre tecnologia. Sinta-se à vontade para entrar em contato.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-3">
            {contactLinks.map(({ icon: Icon, label, href, username }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.06] hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/30">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">{label}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-text-muted">
                    {username}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.35}>
          <div className="mt-12">
            <a
              href="mailto:contato@bruni.dev"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Enviar E-mail
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-20 max-w-6xl border-t border-border pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Bruno Difante. Todos os direitos reservados.
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-text-muted">
            Feito com{" "}
            <Heart className="h-3.5 w-3.5 fill-red-400 text-red-400" /> e
            muito café
          </p>
        </div>
      </div>
    </section>
  );
}
