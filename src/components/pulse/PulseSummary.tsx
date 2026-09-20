import { CATEGORY_META, SEVERITY_META } from "@/lib/presentation";
import { cn } from "@/lib/utils";
import {
  CATEGORY_SLUGS,
  SEVERITIES,
  type EnvironmentalCategory,
  type EnvironmentalIssue,
} from "@/types/atlas";

/** Horizontal bars: documented issues per category in this atlas. */
export function CategoryBreakdown({
  issues,
  selected,
  onSelect,
}: {
  issues: EnvironmentalIssue[];
  selected?: EnvironmentalCategory | undefined;
  onSelect: (c: EnvironmentalCategory) => void;
}) {
  const counts = CATEGORY_SLUGS.map((c) => ({
    c,
    n: issues.filter((i) => i.category === c).length,
  }));
  const max = Math.max(1, ...counts.map((x) => x.n));
  return (
    <ul className="space-y-2">
      {counts.map(({ c, n }) => (
        <li key={c}>
          <button
            type="button"
            onClick={() => onSelect(c)}
            aria-pressed={selected === c}
            className={cn(
              "group grid w-full grid-cols-[4.5rem_1fr_2rem] items-center gap-3 rounded-md py-1 text-left",
              selected && selected !== c && "opacity-50 hover:opacity-100",
            )}
          >
            <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground">
              {CATEGORY_META[c].label}
            </span>
            <span className="h-1.5 overflow-hidden rounded-full bg-accent">
              <span
                className="block h-full rounded-full transition-[width] duration-500"
                style={{ width: `${(n / max) * 100}%`, background: CATEGORY_META[c].color }}
              />
            </span>
            <span className="text-right font-mono text-xs text-subtle">{n}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Count of issues by descriptive severity level (not a score). */
export function SeverityDistribution({ issues }: { issues: EnvironmentalIssue[] }) {
  const total = issues.length || 1;
  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full bg-accent" aria-hidden>
        {SEVERITIES.map((s) => {
          const n = issues.filter((i) => i.severity === s).length;
          return n ? (
            <span
              key={s}
              style={{ width: `${(n / total) * 100}%`, background: SEVERITY_META[s].color }}
            />
          ) : null;
        })}
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4">
        {SEVERITIES.map((s) => (
          <li key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full" style={{ background: SEVERITY_META[s].color }} />
            {SEVERITY_META[s].label}
            <span className="font-mono text-subtle">
              {issues.filter((i) => i.severity === s).length}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
