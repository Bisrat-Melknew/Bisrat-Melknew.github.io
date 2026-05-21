import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type BlogPost, type BlogFrontmatter } from "@/types/blog";

const blogDirectory = path.join(process.cwd(), "content/blog");

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        excerpt: frontmatter.excerpt,
        date: frontmatter.date,
        author: frontmatter.author,
        tags: frontmatter.tags,
        category: frontmatter.category,
        readingTime: calculateReadingTime(content),
        image: frontmatter.image,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    frontmatter,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
