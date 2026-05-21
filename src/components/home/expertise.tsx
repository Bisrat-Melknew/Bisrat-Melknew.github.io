"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/motion-wrapper";
import { expertiseCategories } from "@/lib/constants";

export function Expertise() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Expertise"
          subtitle="Core competencies across infrastructure, security, and cloud engineering."
        />

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {expertiseCategories.map((category) => {
            const Icon = category.icon;
            return (
              <FadeInStaggerItem key={category.title}>
                <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
