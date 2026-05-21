import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type Project, type ProjectFrontmatter } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const frontmatter = data as ProjectFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        excerpt: frontmatter.excerpt,
        date: frontmatter.date,
        tags: frontmatter.tags,
        featured: frontmatter.featured,
        image: frontmatter.image,
        technologies: frontmatter.technologies,
        category: frontmatter.category,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return projects;
}

export function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as ProjectFrontmatter;

  return {
    slug,
    frontmatter,
    content,
  };
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
