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
  category: "Enterprise" | "Security" | "Cloud" | "Homelab" | "Networking";
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
  category: "Enterprise" | "Security" | "Cloud" | "Homelab" | "Networking";
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  securityConsiderations?: string;
  challenges?: string;
  results?: string;
  lessonsLearned?: string;
}
