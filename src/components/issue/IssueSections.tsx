import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { formatDate, hostOf } from "@/lib/presentation";
import type { Factor, Indicator, Solution, Source } from "@/types/atlas";

export function IssueSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-border py-14 first:border-t-0 first:pt-0"
    >
      <p className="eyebrow text-leaf">{eyebrow}</p>
      <h2 id={`${id}-title`} className="display mt-3 text-3xl sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function FactorList({ items }: { items: Factor[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {items.map((f, i) => (
        <li key={f.title} className="bg-background p-6">
          <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-lg font-medium leading-snug">{f.title}</h3>
          {f.description && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

export function SolutionList({ items }: { items: Solution[] }) {
  return (
    <ol className="space-y-4">
      {items.map((s) => (
        <li key={s.title} className="rounded-2xl border border-border bg-card/40 p-6">
          <h3 className="text-lg font-medium">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          {s.expectedImpact && (
            <p className="mt-4 border-l-2 border-leaf/50 pl-4 text-sm leading-relaxed">
              <span className="eyebrow mb-1 block">Expected effect</span>
              {s.expectedImpact}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

export function IndicatorList({ items }: { items: Indicator[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {items.map((ind) => (
        <div key={ind.name} className="rounded-2xl border border-border p-6">
          <dt className="eyebrow">{ind.name}</dt>
          <dd className="mt-3">
            {ind.value ? (
              <span
                className={
                  ind.value.length > 24
                    ? "text-lg font-medium"
                    : "text-3xl font-light tracking-tight"
                }
              >
                {ind.value}
                {ind.unit && (
                  <span className="ml-1 text-base text-muted-foreground">{ind.unit}</span>
                )}
              </span>
            ) : (
              <span className="text-lg text-muted-foreground">No verified figure</span>
            )}
            {ind.year && <span className="ml-2 font-mono text-xs text-subtle">{ind.year}</span>}
            {ind.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ind.description}
              </p>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function SourceList({ items }: { items: Source[] }) {
  return (
    <ol className="divide-y divide-border border-y border-border">
      {items.map((s, i) => (
        <li key={`${s.url}-${s.title}`}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[2rem_1fr_auto] items-start gap-3 py-4"
          >
            <span className="font-mono text-xs text-subtle">[{i + 1}]</span>
            <span className="min-w-0">
              <span className="block font-medium leading-snug group-hover:text-leaf">
                {s.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {s.organization}
                {formatDate(s.publicationDate) && (
                  <span className="text-subtle"> · {formatDate(s.publicationDate)}</span>
                )}
              </span>
              <span className="mt-1 block truncate font-mono text-xs text-subtle">
                {hostOf(s.url)}
              </span>
            </span>
            <ExternalLink aria-hidden className="mt-1 h-4 w-4 text-subtle group-hover:text-leaf" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
