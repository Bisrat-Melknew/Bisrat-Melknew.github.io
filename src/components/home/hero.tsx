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

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-1">
            {/* Availability Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-4 py-1.5 text-sm text-muted-foreground mb-6 backdrop-blur-sm shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Available for opportunities
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
                {siteConfig.title}
              </h1>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {siteConfig.tagline}
              </p>
            </FadeIn>

            {/* Location */}
            <FadeIn delay={0.25}>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {siteConfig.location}
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-250 shadow-sm hover:shadow-md"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:border-border transition-all duration-250 backdrop-blur-xs"
                >
                  Contact Me
                </Link>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={0.35}>
              <div className="mt-8 flex items-center gap-3">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all backdrop-blur-xs shadow-xs"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all backdrop-blur-xs shadow-xs"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: "About Me" Card Layout (getlabsdone style) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-2 w-full">
            <FadeIn delay={0.2}>
              <div className="w-full max-w-[390px] bg-card/60 backdrop-blur-md rounded-3xl border border-border/80 p-5 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:border-border">

                <h2 className="text-center font-heading text-lg font-bold text-foreground mb-4 tracking-tight">
                  About Me
                </h2>

                {/* Profile Picture aspect-ratio-controlled (1065x631) */}
                <div className="relative w-full aspect-[1065/631] rounded-2xl overflow-hidden border border-border bg-muted/50 mb-5 shadow-xs">
                  <img
                    src="/images/portrait.png"
                    alt="Bisrat Melknew"
                    className="h-full w-full object-cover"
                    decoding="sync"
                    fetchPriority="high"
                    style={{ imageRendering: "-webkit-optimize-contrast" as any }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = document.getElementById("portrait-fallback");
                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />
                  <div
                    id="portrait-fallback"
                    className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-muted to-card"
                  >
                    <span className="font-heading text-4xl font-bold text-primary/60">
                      BM
                    </span>
                  </div>
                </div>

                {/* Profile Details centered */}
                <div className="text-center">
                  <h3 className="font-heading text-lg font-extrabold text-foreground tracking-tight">
                    {siteConfig.name}
                  </h3>

                  <p className="text-sm font-semibold text-primary mt-1">
                    IT Infrastructure & Security Engineer
                  </p>

                  <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap text-xs text-muted-foreground px-2">
                    <span>Infrastructure</span>
                    <span className="text-border">•</span>
                    <span>Security</span>
                    <span className="text-border">•</span>
                    <span>Cloud</span>
                    <span className="text-border">•</span>
                    <span>Automation</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-center gap-3">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all text-xs"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all text-xs"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                    </a>
                    <span className="w-px h-4 bg-border/60" />
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Contact me &rarr;
                    </Link>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
