"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Award } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/motion-wrapper";
import { certifications } from "@/lib/constants";

export function CertificationsPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Certifications"
          subtitle="Industry-recognized credentials validating technical expertise."
        />

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
          {certifications.slice(0, 6).map((cert) => (
            <FadeInStaggerItem key={cert.name}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
                {/* Logo placeholder */}
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      {cert.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Verify ${cert.name}`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <div className="mt-10 text-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all certifications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
