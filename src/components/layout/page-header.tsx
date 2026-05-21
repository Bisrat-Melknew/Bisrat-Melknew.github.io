import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("pt-8 pb-12 md:pt-12 md:pb-16", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
