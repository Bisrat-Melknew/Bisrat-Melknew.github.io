export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  category: "Networking" | "Security" | "Cloud" | "Infrastructure" | "Automation" | "Virtualization";
  readingTime: string;
  image?: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  category: "Networking" | "Security" | "Cloud" | "Infrastructure" | "Automation" | "Virtualization";
  image?: string;
}
