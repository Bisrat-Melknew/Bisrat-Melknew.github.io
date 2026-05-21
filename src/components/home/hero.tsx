"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { AnimatedGrid } from "@/components/shared/animated-grid";
import { FadeIn } from "@/components/shared/motion-wrapper";
import { siteConfig, socialLinks } from "@/lib/constants";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedGrid />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Availability Badge */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground mb-8 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for opportunities
            </div>
          </FadeIn>

          {/* Portrait Area */}
          <FadeIn delay={0.1}>
            <div className="mb-8 relative">
              <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-border flex items-center justify-center">
                <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-br from-muted to-card border border-border flex items-center justify-center">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-primary/60">
                    BM
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.2}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
              {siteConfig.title}
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.3}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {siteConfig.tagline}
            </p>
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.35}>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {siteConfig.location}
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.5}>
            <div className="mt-8 flex items-center gap-3">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
