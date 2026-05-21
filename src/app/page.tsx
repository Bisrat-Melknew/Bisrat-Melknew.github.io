import { Hero } from "@/components/home/hero";
import { Expertise } from "@/components/home/expertise";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CertificationsPreview } from "@/components/home/certifications-preview";
import { LatestPosts } from "@/components/home/latest-posts";
import { ContactCTA } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <FeaturedProjects />
      <CertificationsPreview />
      <LatestPosts />
      <ContactCTA />
    </>
  );
}
