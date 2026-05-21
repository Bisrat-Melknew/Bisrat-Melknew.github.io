import { Award, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertCardProps {
  name: string;
  issuer: string;
  date: string;
  status: "active" | "expired" | "in-progress";
  verifyUrl: string;
  className?: string;
}

const statusConfig = {
  active: {
    label: "Active",
    dotClass: "bg-emerald-500",
    textClass: "text-emerald-600 dark:text-emerald-400",
  },
  expired: {
    label: "Expired",
    dotClass: "bg-red-500",
    textClass: "text-red-600 dark:text-red-400",
  },
  "in-progress": {
    label: "In Progress",
    dotClass: "bg-amber-500",
    textClass: "text-amber-600 dark:text-amber-400",
  },
};

export function CertCard({
  name,
  issuer,
  date,
  status,
  verifyUrl,
  className,
}: CertCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div
      className={cn(
        "group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5",
        className
      )}
    >
      {/* Icon */}
      <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Award className="h-7 w-7" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-base font-semibold text-foreground leading-snug">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{issuer}</p>
        <div className="mt-3 flex items-center gap-4">
          <span className="text-xs text-muted-foreground">Issued {date}</span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium",
              statusInfo.textClass
            )}
          >
            <span
              className={cn("h-1.5 w-1.5 rounded-full", statusInfo.dotClass)}
            />
            {statusInfo.label}
          </span>
        </div>
      </div>

      {/* Verify Link */}
      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
        aria-label={`Verify ${name}`}
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
