import { useId } from "react";
import { cn } from "@/lib/utils";
import type { Location } from "@/types/atlas";

const GROUPS: [Location["type"], string][] = [
  ["city", "Cities"],
  ["region", "Regions"],
  ["global", "Global"],
  ["country", "Countries"],
];

/** Native, accessible location picker grouped by location type. */
export function LocationSelect({
  label,
  value,
  onChange,
  locations,
  disabledId,
  placeholder = "Choose a location",
  className,
}: {
  label: string;
  value: string | undefined;
  onChange: (id: string | undefined) => void;
  locations: Location[];
  disabledId?: string | undefined;
  placeholder?: string | undefined;
  className?: string | undefined;
}) {
  const id = useId();
  return (
    <div className={cn("min-w-0", className)}>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
      </label>
      <select
        id={id}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        className="h-12 w-full rounded-xl border border-input bg-card px-4 text-base text-foreground focus:border-leaf"
      >
        <option value="">{placeholder}</option>
        {GROUPS.map(([type, groupLabel]) => {
          const items = locations.filter((l) => l.type === type);
          if (!items.length) return null;
          return (
            <optgroup key={type} label={groupLabel}>
              {items.map((l) => (
                <option key={l.id} value={l.id} disabled={l.id === disabledId}>
                  {l.name}
                  {l.type !== "country" && l.country !== l.name ? ` — ${l.country}` : ""}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}
