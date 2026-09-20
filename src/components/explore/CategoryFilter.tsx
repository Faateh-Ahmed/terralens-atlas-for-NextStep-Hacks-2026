import { CATEGORY_META } from "@/lib/presentation";
import { cn } from "@/lib/utils";
import { CATEGORY_SLUGS, type EnvironmentalCategory } from "@/types/atlas";

type Props = {
  value: EnvironmentalCategory | undefined;
  onChange: (value: EnvironmentalCategory | undefined) => void;
  counts?: Partial<Record<EnvironmentalCategory, number>>;
  allLabel?: string;
  className?: string | undefined;
};

/** Single-select category chips, implemented as a radio group. */
export function CategoryFilter({ value, onChange, counts, allLabel = "All", className }: Props) {
  const options: (EnvironmentalCategory | undefined)[] = [undefined, ...CATEGORY_SLUGS];
  return (
    <div
      role="radiogroup"
      aria-label="Filter by category"
      className={cn(
        "flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {options.map((c) => {
        const selected = value === c;
        const label = c ? CATEGORY_META[c].label : allLabel;
        return (
          <button
            key={c ?? "all"}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(c)}
            className={cn(
              "glass inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors",
              selected
                ? "!border-leaf/60 text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {c && (
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: CATEGORY_META[c].color }}
              />
            )}
            {label}
            {c && counts?.[c] !== undefined && (
              <span className="font-mono text-subtle">{counts[c]}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
