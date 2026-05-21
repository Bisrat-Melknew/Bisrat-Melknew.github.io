"use client";

import Link from "next/link";
import { TagBadge } from "@/components/shared/tag-badge";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { type BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
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
  );
}
