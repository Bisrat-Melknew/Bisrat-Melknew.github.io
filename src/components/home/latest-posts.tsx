"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { TagBadge } from "@/components/shared/tag-badge";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/motion-wrapper";
import { motion } from "framer-motion";

const latestPosts = [
  {
    slug: "zero-trust-architecture",
    title: "Implementing Zero Trust Architecture in Enterprise Networks",
    excerpt:
      "A comprehensive guide to designing and deploying Zero Trust principles across enterprise infrastructure, from identity verification to micro-segmentation.",
    date: "2024-09-15",
    category: "Security",
    readingTime: "12 min read",
  },
  {
    slug: "kubernetes-hardening",
    title: "Kubernetes Cluster Hardening: A Practical Guide",
    excerpt:
      "Step-by-step hardening procedures for production Kubernetes clusters, covering RBAC, network policies, pod security, and runtime protection.",
    date: "2024-08-20",
    category: "Cloud",
    readingTime: "15 min read",
  },
  {
    slug: "terraform-multi-cloud",
    title: "Multi-Cloud Infrastructure with Terraform Workspaces",
    excerpt:
      "Managing infrastructure across AWS and Azure using Terraform workspaces, remote state, and modular configurations for scalable deployments.",
    date: "2024-07-10",
    category: "Automation",
    readingTime: "10 min read",
  },
];

export function LatestPosts() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Latest Articles"
          subtitle="Technical writing on infrastructure, security, and cloud engineering."
        />

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
          {latestPosts.map((post) => (
            <FadeInStaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <motion.article
                  className="flex flex-col h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <TagBadge tag={post.category} />
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </motion.article>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
