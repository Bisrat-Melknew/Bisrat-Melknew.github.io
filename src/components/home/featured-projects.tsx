"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { TagBadge } from "@/components/shared/tag-badge";
import { FadeIn } from "@/components/shared/motion-wrapper";
import { type Project } from "@/types/project";
import { motion } from "framer-motion";

const featuredProjects: Project[] = [
  {
    slug: "enterprise-network-overhaul",
    title: "Enterprise Network Architecture Overhaul",
    description:
      "Redesigned a multi-site enterprise network serving 5,000+ users across 12 locations, implementing SD-WAN, Zero Trust segmentation, and automated provisioning.",
    excerpt:
      "Complete network modernization for a multi-site enterprise environment.",
    date: "2024-08",
    tags: ["Enterprise", "Networking", "Security"],
    featured: true,
    technologies: ["Cisco SD-WAN", "Palo Alto", "Terraform", "Ansible"],
    category: "Enterprise",
  },
  {
    slug: "cloud-security-platform",
    title: "Multi-Cloud Security Operations Platform",
    description:
      "Built a centralized security operations platform spanning AWS and Azure environments, integrating SIEM, automated incident response, and compliance monitoring.",
    excerpt:
      "Unified security operations across AWS and Azure cloud environments.",
    date: "2024-06",
    tags: ["Cloud", "Security", "Automation"],
    featured: true,
    technologies: ["AWS", "Azure Sentinel", "Terraform", "Python"],
    category: "Cloud",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="Selected infrastructure and security engineering work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <motion.article
                  className="relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Image / Diagram Area */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-muted to-primary/10 flex items-center justify-center border-b border-border">
                    <div className="text-center px-8">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        Architecture Diagram
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <TagBadge key={tag} tag={tag} />
                      ))}
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
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
            </FadeIn>
          ))}
        </div>

        {/* View All */}
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
