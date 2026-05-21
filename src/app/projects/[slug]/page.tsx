import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { mdxComponents } from "@/components/blog/mdx-components";
import { TagBadge } from "@/components/shared/tag-badge";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-12">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        All Projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {frontmatter.tags.map((tag: string) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {frontmatter.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {frontmatter.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {frontmatter.technologies.map((tech: string) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg border border-border bg-muted px-3 py-1 text-xs font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>
      </div>
    </div>
  );
}
