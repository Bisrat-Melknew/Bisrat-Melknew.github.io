"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/lib/constants";

export function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any existing iframe or scripts
    containerRef.current.innerHTML = "";

    const { repo, repoId, category, categoryId } = siteConfig.giscusConfig;

    // Create script element
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");

    // Dynamic light/dark theme matching next-themes
    const giscusTheme = resolvedTheme === "dark" ? "noborder_dark" : "noborder_light";
    script.setAttribute("data-theme", giscusTheme);

    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    containerRef.current.appendChild(script);
  }, [resolvedTheme]);

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
        Discussion & Comments
      </h2>
      <div 
        ref={containerRef} 
        className="giscus w-full min-h-[280px] bg-card/40 border border-border/80 rounded-2xl p-6 shadow-xs" 
      />
    </div>
  );
}
