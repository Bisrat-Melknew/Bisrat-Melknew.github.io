import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MDXComponentsProps {
  [key: string]: React.ComponentType<any>;
}

function Callout({
  children,
  type = "note",
}: {
  children: ReactNode;
  type?: "note" | "warning" | "tip";
}) {
  const labels = { note: "Note", warning: "Warning", tip: "Tip" };
  return (
    <div className={cn("callout", `callout-${type}`)}>
      <p className="font-heading font-semibold text-sm mb-1">{labels[type]}</p>
      <div className="text-sm">{children}</div>
    </div>
  );
}

export const mdxComponents: MDXComponentsProps = {
  h1: (props: Record<string, unknown>) => (
    <h1
      className="font-heading text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props: Record<string, unknown>) => (
    <h2
      className="font-heading text-2xl md:text-3xl font-semibold tracking-tight mt-10 mb-4 pb-2 border-b border-border"
      {...props}
    />
  ),
  h3: (props: Record<string, unknown>) => (
    <h3
      className="font-heading text-xl font-semibold tracking-tight mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: Record<string, unknown>) => (
    <h4
      className="font-heading text-lg font-semibold mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: Record<string, unknown>) => (
    <p className="leading-7 mb-4 text-foreground/90" {...props} />
  ),
  ul: (props: Record<string, unknown>) => (
    <ul className="list-disc pl-6 mb-4 space-y-1.5 text-foreground/90" {...props} />
  ),
  ol: (props: Record<string, unknown>) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-foreground/90" {...props} />
  ),
  li: (props: Record<string, unknown>) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: Record<string, unknown>) => (
    <blockquote
      className="border-l-4 border-primary/50 pl-4 py-1 my-4 text-muted-foreground italic"
      {...props}
    />
  ),
  a: (props: Record<string, unknown>) => (
    <a
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      target={
        typeof props.href === "string" && props.href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        typeof props.href === "string" && props.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      {...props}
    />
  ),
  pre: (props: Record<string, unknown>) => (
    <pre
      className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-4 text-sm font-mono"
      {...props}
    />
  ),
  code: (props: Record<string, unknown>) => (
    <code className="font-mono text-sm" {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: (props: Record<string, unknown>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props: Record<string, unknown>) => (
    <th
      className="border border-border px-4 py-2 text-left font-heading font-semibold bg-muted"
      {...props}
    />
  ),
  td: (props: Record<string, unknown>) => (
    <td className="border border-border px-4 py-2" {...props} />
  ),
  Callout,
};
