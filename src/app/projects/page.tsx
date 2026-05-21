import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Infrastructure and security engineering projects — enterprise architecture, cloud security, and automation solutions.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        title="Projects"
        description="A selection of infrastructure and security engineering work across enterprise, cloud, and homelab environments."
      />

      <div className="mx-auto max-w-6xl px-6 pb-20">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              Projects coming soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
