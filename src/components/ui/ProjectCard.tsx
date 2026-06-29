"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, Construction } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  emoji?: string;
  wip?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href = "#",
  featured = false,
  emoji = "🚀",
  wip = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      {...(!wip && {
        onClick: () => window.open(href, "_blank", "noopener,noreferrer"),
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative block overflow-hidden rounded-2xl border transition-all duration-500 ${
        featured
          ? "border-accent/20 bg-gradient-to-br from-accent/[0.03] to-transparent md:col-span-2"
          : "border-border bg-surface"
      } ${wip ? "cursor-default opacity-80" : "cursor-pointer"}`}
      whileHover={{ y: wip ? 0 : -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered
            ? "0 20px 60px -15px rgba(29, 78, 216, 0.12), 0 0 0 1px rgba(29, 78, 216, 0.1)"
            : "0 0 0 0 rgba(29, 78, 216, 0), 0 0 0 0 rgba(29, 78, 216, 0)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient overlay on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent/[0.02]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                <Star className="h-3 w-3 fill-accent" />
                Destaque
              </span>
            )}
          </div>

          {/* Arrow icon or WIP badge */}
          {wip ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1.5 text-[11px] font-semibold text-yellow-400">
              <Construction className="h-3.5 w-3.5" />
              Em desenvolvimento
            </span>
          ) : (
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-alt text-text-muted transition-colors group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white"
              animate={{
                x: isHovered ? 2 : 0,
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-text-primary transition-colors group-hover:text-accent">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-text-muted transition-colors group-hover:border-accent/20 group-hover:text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom line accent on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
