import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { TagBadge } from "@/components/shared/tag-badge";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 md:py-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        All Articles
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <TagBadge tag={frontmatter.category} />
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {frontmatter.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {frontmatter.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {frontmatter.author}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      {/* Tags */}
      <div className="mt-12 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag: string) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-8 pt-6 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>
      </div>
    </div>
  );
}
