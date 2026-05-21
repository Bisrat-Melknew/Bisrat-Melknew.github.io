import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { siteConfig, socialLinks } from "@/lib/constants";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss infrastructure challenges, security architecture, or new opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Open to discussing infrastructure challenges, security architecture, or new opportunities."
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CTA Card */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Let&apos;s build secure and scalable infrastructure together.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you&apos;re looking for an infrastructure engineer, need
              security architecture guidance, or want to discuss a technical
              challenge — I&apos;d love to hear from you.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.email}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <LinkedinIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  Connect professionally
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GithubIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-sm text-muted-foreground">
                  View open source work
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
