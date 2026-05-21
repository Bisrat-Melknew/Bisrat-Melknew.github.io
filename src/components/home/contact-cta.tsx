"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FadeIn } from "@/components/shared/motion-wrapper";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Mail className="h-6 w-6" />
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Let&apos;s build secure and scalable
                <br className="hidden md:block" /> infrastructure together.
              </h2>

              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                Open to discussing infrastructure challenges, security
                architecture, or new opportunities.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
