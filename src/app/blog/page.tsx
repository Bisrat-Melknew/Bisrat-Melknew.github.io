import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PageHeader } from "@/components/layout/page-header";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on infrastructure engineering, security architecture, cloud platforms, and automation.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Blog"
        description="Technical writing on infrastructure, security, and cloud engineering — guides, deep dives, and lessons learned."
      />

      <div className="mx-auto max-w-6xl px-6 pb-20">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              Articles coming soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
