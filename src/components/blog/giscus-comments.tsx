"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";
import { siteConfig } from "@/lib/constants";

export function GiscusComments() {
  const { resolvedTheme } = useTheme();
  const { repo, repoId, category, categoryId } = siteConfig.giscusConfig;

  // Dynamic light/dark theme matching next-themes
  const giscusTheme = resolvedTheme === "dark" ? "noborder_dark" : "noborder_light";

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
        Discussion & Comments
      </h2>
      <div className="w-full min-h-[280px] bg-card/40 border border-border/80 rounded-2xl p-6 shadow-xs">
        <Giscus
          id="comments"
          repo={repo as any}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={giscusTheme}
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
}
