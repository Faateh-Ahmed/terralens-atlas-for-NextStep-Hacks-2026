import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import { TypeLabel } from "@/components/common/Badges";
import { useAtlas } from "@/lib/data/atlas-query";
import { searchAtlas, type SearchResult } from "@/lib/search";
import { cn } from "@/lib/utils";

type Props = {
  /** Custom handling; return true to skip default navigation. */
  onSelect?: (result: SearchResult) => boolean | void;
  placeholder?: string;
  className?: string | undefined;
  autoFocus?: boolean;
};

/** Accessible combobox searching countries, cities, regions and issues. */
export function SearchBox({
  onSelect,
  placeholder = "Search a country, city, or region...",
  className,
  autoFocus,
}: Props) {
  const { atlas } = useAtlas();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const deferred = useDeferredValue(query);
  const results = useMemo(() => searchAtlas(atlas, deferred), [atlas, deferred]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const showList = open && query.trim().length > 0;

  const choose = (r: SearchResult) => {
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
    if (onSelect?.(r)) return;
    if (r.kind === "location")
      navigate({ to: "/locations/$locationId", params: { locationId: r.id } });
    else navigate({ to: "/issues/$issueId", params: { issueId: r.id } });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      const r = results[active];
      if (r) {
        e.preventDefault();
        choose(r);
      }
    } else if (e.key === "Escape") {
      if (query) setQuery("");
      else setOpen(false);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="glass flex h-12 items-center gap-3 rounded-full px-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] focus-within:border-leaf/60">
        <Search aria-hidden className="h-4 w-4 shrink-0 text-subtle" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-label="Search the atlas"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList && results[active] ? `${listId}-${active}` : undefined}
          autoComplete="off"
          spellCheck={false}
          autoFocus={autoFocus}
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={onKeyDown}
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-subtle focus:outline-none"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="rounded-full p-1 text-subtle hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showList && (
        <div className="glass absolute inset-x-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl shadow-2xl">
          {results.length === 0 ? (
            <p className="px-4 py-5 text-sm text-muted-foreground" role="status">
              No places or issues match “{query.trim()}”. Try a city, country or topic such as
              “flood”.
            </p>
          ) : (
            <ul
              id={listId}
              role="listbox"
              aria-label="Search results"
              className="scrollbar-thin max-h-[min(60vh,420px)] overflow-y-auto py-1.5"
            >
              {results.map((r, i) => (
                <li
                  key={`${r.kind}-${r.id}`}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(r)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5",
                    i === active && "bg-accent",
                  )}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm text-foreground">{r.label}</span>
                    <span className="block truncate text-xs text-subtle">{r.detail}</span>
                  </span>
                  <TypeLabel
                    className={r.kind === "issue" ? "border-leaf/30 text-leaf" : undefined}
                  >
                    {r.typeLabel}
                  </TypeLabel>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
