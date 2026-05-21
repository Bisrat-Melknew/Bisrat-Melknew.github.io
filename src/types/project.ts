export interface Project {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  image?: string;
  technologies: string[];
  category: "Enterprise" | "Security" | "Cloud" | "Homelab";
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  image?: string;
  technologies: string[];
  category: "Enterprise" | "Security" | "Cloud" | "Homelab";
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  securityConsiderations?: string;
  challenges?: string;
  results?: string;
  lessonsLearned?: string;
}
