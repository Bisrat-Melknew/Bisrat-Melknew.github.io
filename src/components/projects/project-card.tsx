"use client";

import Link from "next/link";
import { TagBadge } from "@/components/shared/tag-badge";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <motion.article
        className="flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image Area */}
        <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-muted to-primary/10 flex items-center justify-center border-b border-border relative overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-center px-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Architecture Overview
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>

          <h3 className="font-heading text-lg font-semibold text-primary mb-2 group-hover:text-foreground transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
