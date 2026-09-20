import type { EnvironmentalCategory, Severity } from "@/types/atlas";
import { CATEGORY_META, SEVERITY_META, SEVERITY_NOTE } from "@/lib/presentation";
import { cn } from "@/lib/utils";

export function CategoryTag({
  category,
  className,
}: {
  category: EnvironmentalCategory;
  className?: string | undefined;
}) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: meta.color }} />
      {meta.label}
    </span>
  );
}

export function SeverityBadge({
  severity,
  className,
}: {
  severity: Severity;
  className?: string | undefined;
}) {
  const meta = SEVERITY_META[severity];
  return (
    <span
      title={`${meta.label} severity — ${meta.description} ${SEVERITY_NOTE}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide",
        className,
      )}
      style={{ borderColor: `${meta.color}55`, color: meta.color, background: `${meta.color}12` }}
    >
      <span className="sr-only">Severity: </span>
      {meta.label}
    </span>
  );
}

export function TypeLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-border px-1.5 py-px text-[0.625rem] font-medium uppercase tracking-[0.14em] text-subtle",
        className,
      )}
    >
      {children}
    </span>
  );
}
