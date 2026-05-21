import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  Enterprise: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Security: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  Cloud: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  Homelab: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Networking: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Infrastructure: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Automation: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Virtualization: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
};

const defaultColor = "bg-muted text-muted-foreground border-border";

interface TagBadgeProps {
  tag: string;
  className?: string;
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
        tagColors[tag] || defaultColor,
        className
      )}
    >
      {tag}
    </span>
  );
}
