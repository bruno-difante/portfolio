"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Parallax from "@/components/animations/Parallax";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Parallax speed={0.15}>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface-alt px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-text-secondary">
              Disponível para oportunidades
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Olá, eu sou{" "}
            <span className="gradient-text">Bruno Difante</span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
          >
            Estudante de{" "}
            <span className="font-medium text-text-primary">
              Ciência da Computação
            </span>{" "}
            focado em{" "}
            <span className="font-medium text-text-primary">
              desenvolvimento de software
            </span>{" "}
            e{" "}
            <span className="font-medium text-text-primary">
              inteligência artificial
            </span>
            . Transformando ideias em soluções com código limpo e design intencional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Ver Projetos
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-accent/30 hover:bg-surface-alt hover:-translate-y-0.5"
            >
              Fale Comigo
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-12 flex items-center justify-center gap-5"
          >
            {[
              { icon: Github, href: "https://github.com/bruno-difante", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/bruno-difante", label: "LinkedIn" },
              { icon: Mail, href: "mailto:difantemoraes@gmail.com", label: "E-mail" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group rounded-full border border-border p-3 text-text-muted transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </Parallax>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-text-muted/40 pt-2"
        >
          <motion.div className="h-1.5 w-1.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
