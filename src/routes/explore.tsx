import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronUp } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CategoryFilter } from "@/components/explore/CategoryFilter";
import { LocationPanel } from "@/components/explore/LocationPanel";
import { GlobeView } from "@/components/globe/Globe";
import { focusFor, locationMarkers } from "@/components/globe/markers";
import { SeverityBadge, TypeLabel } from "@/components/common/Badges";
import { EmptyState, Spinner } from "@/components/common/StateViews";
import { DataStatus } from "@/components/layout/SiteFooter";
import { SearchBox } from "@/components/search/SearchBox";
import { useAtlas } from "@/lib/data/atlas-query";
import { useMediaQuery } from "@/hooks/use-media-query";
import { highestSeverity, issuesForLocation, LOCATION_TYPE_LABEL } from "@/lib/data/selectors";
import { CATEGORY_META, SEVERITY_META, SEVERITY_NOTE } from "@/lib/presentation";
import type { SearchResult } from "@/lib/search";
import { optionalCategory, optionalString, type ExploreSearch } from "@/lib/search-params";
import { cn } from "@/lib/utils";
import { CATEGORY_SLUGS, SEVERITIES, type EnvironmentalCategory } from "@/types/atlas";

export const Route = createFileRoute("/explore")({
  validateSearch: (s: Record<string, unknown>): ExploreSearch => ({
    location: optionalString(s["location"]),
    category: optionalCategory(s["category"]),
  }),
  head: () => ({
    meta: [
      { title: "Explore — TerraLens" },
      { name: "description", content: "Explore environmental issues on an interactive 3D globe." },
    ],
  }),
  component: Explore,
});

function Explore() {
  const { atlas, isSyncing } = useAtlas();
  const { location: locationId, category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [sheetExpanded, setSheetExpanded] = useState(false);
  // Below lg the side panel would squeeze the globe, so phones and tablets use the bottom sheet.
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const selected = locationId ? atlas.locationsById.get(locationId) : undefined;
  const missing = Boolean(locationId && !selected && !isSyncing);

  const matchesCategory = useCallback(
    (id: string) => {
      if (!category) return true;
      const l = atlas.locationsById.get(id);
      return l ? issuesForLocation(atlas, l).some((i) => i.category === category) : false;
    },
    [atlas, category],
  );

  const points = useMemo(() => {
    const markers = locationMarkers(atlas, (l) => matchesCategory(l.id));
    if (!category) return markers;
    return markers.map((m) => ({ ...m, color: CATEGORY_META[category].color }));
  }, [atlas, category, matchesCategory]);

  const focus = useMemo(() => (selected ? focusFor(selected) : null), [selected]);

  const select = useCallback(
    (id: string | undefined) => {
      navigate({ search: (prev) => ({ ...prev, location: id }), replace: true });
      if (id) setSheetExpanded(true);
    },
    [navigate],
  );

  const onSearchSelect = useCallback(
    (r: SearchResult) => {
      if (r.kind === "location") {
        select(r.id);
        return true;
      }
      return false; // issues navigate to their page
    },
    [select],
  );

  const setCategory = (c: EnvironmentalCategory | undefined) =>
    navigate({ search: (prev) => ({ ...prev, category: c }), replace: true });

  const counts = useMemo(() => {
    const out: Partial<Record<EnvironmentalCategory, number>> = {};
    for (const c of CATEGORY_SLUGS) out[c] = atlas.issues.filter((i) => i.category === c).length;
    return out;
  }, [atlas]);

  const listed = useMemo(
    () =>
      atlas.locations
        .filter((l) => l.type !== "country" && matchesCategory(l.id))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [atlas, matchesCategory],
  );

  // Escape closes the panel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && locationId && !(e.target instanceof HTMLInputElement))
        select(undefined);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locationId, select]);

  const panelBody = selected ? (
    <LocationPanel
      atlas={atlas}
      location={selected}
      onClose={() => select(undefined)}
      onSelectLocation={select}
    />
  ) : missing ? (
    <EmptyState title="Location not found">
      “{locationId}” is not in the atlas.{" "}
      <button type="button" className="underline" onClick={() => select(undefined)}>
        Clear selection
      </button>
    </EmptyState>
  ) : locationId && isSyncing ? (
    <div role="status" className="flex items-center gap-3 py-10">
      <Spinner /> <span className="eyebrow">Loading location…</span>
    </div>
  ) : (
    <ExploreIntro listed={listed} category={category} onSelect={select} atlas={atlas} />
  );

  return (
    <main id="main" className="relative h-[100svh] overflow-hidden pt-14">
      <h1 className="sr-only">Explore Earth</h1>

      {/* Globe */}
      <div className="absolute inset-0 top-14 lg:right-[440px]">
        <GlobeView
          points={points}
          selectedId={selected?.id}
          focus={focus}
          autoRotate={!selected}
          initialAltitude={2.3}
          onPointClick={select}
          ariaLabel="Interactive globe of environmental locations. Drag to rotate, scroll or pinch to zoom, select a marker to open its details. The panel lists every location for keyboard users."
        />
      </div>

      {/* Search and filters */}
      <div className="pointer-events-none absolute inset-x-0 top-14 z-20 p-3 sm:p-5 lg:right-[440px]">
        <div className="pointer-events-auto max-w-md">
          <SearchBox onSelect={onSearchSelect} />
        </div>
        <CategoryFilter
          value={category}
          onChange={setCategory}
          counts={counts}
          className="pointer-events-auto mt-3 sm:flex-wrap"
        />
      </div>

      {/* Legend */}
      <div
        className="glass pointer-events-auto absolute bottom-5 left-5 z-10 hidden rounded-xl px-4 py-3 lg:block"
        title={SEVERITY_NOTE}
      >
        <p className="eyebrow mb-2">
          {category
            ? `${CATEGORY_META[category].label} issues present`
            : "Most severe documented issue"}
        </p>
        {category ? (
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: CATEGORY_META[category].color }}
            />
            Location with at least one {CATEGORY_META[category].label.toLowerCase()} issue
          </p>
        ) : (
          <ul className="flex gap-3">
            {SEVERITIES.map((s) => (
              <li key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: SEVERITY_META[s].color }}
                />
                {SEVERITY_META[s].label}
              </li>
            ))}
            <li className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9d1cd]" />
              Country
            </li>
          </ul>
        )}
      </div>

      {/* Desktop side panel */}
      {!isMobile && (
        <aside
          aria-label="Location details"
          className="scrollbar-thin absolute bottom-0 right-0 top-14 z-20 hidden w-[440px] overflow-y-auto border-l border-border bg-background/85 p-7 backdrop-blur-xl lg:block"
        >
          {panelBody}
        </aside>
      )}

      {/* Mobile bottom sheet */}
      {isMobile && (
        <aside
          aria-label="Location details"
          className={cn(
            "absolute inset-x-0 bottom-0 z-30 flex flex-col rounded-t-3xl border-t border-border-strong bg-background/92 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[max-height] duration-300 lg:hidden",
            sheetExpanded ? "max-h-[78svh]" : "max-h-[34svh]",
          )}
        >
          <button
            type="button"
            onClick={() => setSheetExpanded((v) => !v)}
            aria-expanded={sheetExpanded}
            aria-label={sheetExpanded ? "Collapse panel" : "Expand panel"}
            className="flex w-full flex-col items-center gap-1 pb-1 pt-2.5"
          >
            <span className="h-1 w-10 rounded-full bg-border-strong" />
            <ChevronUp
              className={cn(
                "h-4 w-4 text-subtle transition-transform",
                sheetExpanded && "rotate-180",
              )}
            />
          </button>
          <div className="scrollbar-thin overflow-y-auto px-5 pb-8">{panelBody}</div>
        </aside>
      )}
    </main>
  );
}

function ExploreIntro({
  atlas,
  listed,
  category,
  onSelect,
}: {
  atlas: ReturnType<typeof useAtlas>["atlas"];
  listed: ReturnType<typeof useAtlas>["atlas"]["locations"];
  category: EnvironmentalCategory | undefined;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <p className="eyebrow">Explore</p>
      <h2 className="display mt-3 text-4xl">Choose a place on Earth.</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Rotate the globe and select a marker, search above, or pick from the list. Markers are
        coloured by the most severe issue documented at each place.
      </p>
      <div className="mt-3">
        <DataStatus />
      </div>

      <h3 className="eyebrow mt-8">
        {category
          ? `Places with ${CATEGORY_META[category].label.toLowerCase()} issues`
          : "All places"}{" "}
        · {listed.length}
      </h3>
      {listed.length === 0 ? (
        <EmptyState className="mt-3" title="No places match this filter" />
      ) : (
        <ul className="mt-3 divide-y divide-border border-y border-border">
          {listed.map((l) => {
            const issues = issuesForLocation(atlas, l);
            const severity = highestSeverity(issues);
            return (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => onSelect(l.id)}
                  className="group flex w-full items-center gap-3 py-2.5 text-left"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm group-hover:text-leaf">{l.name}</span>
                    <span className="block truncate text-xs text-subtle">
                      {l.country} · {issues.length} {issues.length === 1 ? "issue" : "issues"}
                    </span>
                  </span>
                  <TypeLabel>{LOCATION_TYPE_LABEL[l.type]}</TypeLabel>
                  {severity && <SeverityBadge severity={severity} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-6 text-xs text-subtle">
        Looking for a country overview? Search for it, or open the{" "}
        <Link to="/pulse" className="underline underline-offset-2 hover:text-foreground">
          Pulse
        </Link>
        .
      </p>
    </div>
  );
}
