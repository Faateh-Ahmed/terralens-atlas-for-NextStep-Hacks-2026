import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import { CategoryTag, SeverityBadge } from "@/components/common/Badges";
import { EmptyState } from "@/components/common/StateViews";
import { CategoryFilter } from "@/components/explore/CategoryFilter";
import { GlobeView } from "@/components/globe/Globe";
import type { GlobePoint, GlobeRing } from "@/components/globe/types";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CategoryBreakdown, SeverityDistribution } from "@/components/pulse/PulseSummary";
import { useAtlas } from "@/lib/data/atlas-query";
import { highestSeverity, severityRank } from "@/lib/data/selectors";
import { CATEGORY_META, SEVERITY_META, SEVERITY_NOTE } from "@/lib/presentation";
import { optionalCategory, type PulseSearch } from "@/lib/search-params";
import {
  SEVERITIES,
  type EnvironmentalCategory,
  type EnvironmentalIssue,
  type Location,
  type Severity,
} from "@/types/atlas";

export const Route = createFileRoute("/pulse")({
  validateSearch: (s: Record<string, unknown>): PulseSearch => ({
    category: optionalCategory(s["category"]),
  }),
  head: () => ({
    meta: [
      { title: "Pulse — TerraLens" },
      {
        name: "description",
        content: "Where the atlas documents environmental issues, by category and severity.",
      },
    ],
  }),
  component: Pulse,
});

type Hotspot = { location: Location; issues: EnvironmentalIssue[]; severity: Severity };

function Pulse() {
  const { atlas } = useAtlas();
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/pulse" });
  const [minSeverity, setMinSeverity] = useState<Severity>("low");

  const setCategory = (c: EnvironmentalCategory | undefined) =>
    navigate({ search: { category: c }, replace: true, resetScroll: false });

  const filtered = useMemo(
    () =>
      atlas.issues.filter(
        (i) =>
          (!category || i.category === category) &&
          severityRank(i.severity) >= severityRank(minSeverity),
      ),
    [atlas, category, minSeverity],
  );

  const hotspots = useMemo<Hotspot[]>(() => {
    const byLocation = new Map<string, EnvironmentalIssue[]>();
    for (const i of filtered)
      byLocation.set(i.locationId, [...(byLocation.get(i.locationId) ?? []), i]);
    return [...byLocation.entries()]
      .flatMap(([id, issues]) => {
        const location = atlas.locationsById.get(id);
        return location ? [{ location, issues, severity: highestSeverity(issues)! }] : [];
      })
      .sort(
        (a, b) =>
          severityRank(b.severity) - severityRank(a.severity) || b.issues.length - a.issues.length,
      );
  }, [atlas, filtered]);

  const points = useMemo<GlobePoint[]>(
    () =>
      hotspots.map(({ location, issues, severity }) => ({
        id: location.id,
        lat: location.latitude,
        lng: location.longitude,
        color: category ? CATEGORY_META[category].color : SEVERITY_META[severity].color,
        radius: 0.9,
        altitude: 0.04 + issues.length * 0.07,
        label: location.name,
        detail: `${issues.length} ${category ? CATEGORY_META[category].label.toLowerCase() + " " : ""}issue${issues.length === 1 ? "" : "s"} · most severe: ${SEVERITY_META[severity].label}`,
      })),
    [hotspots, category],
  );

  const rings = useMemo<GlobeRing[]>(
    () =>
      hotspots
        .filter((h) => h.severity === "critical")
        .map((h) => ({
          id: h.location.id,
          lat: h.location.latitude,
          lng: h.location.longitude,
          color: SEVERITY_META.critical.color,
          maxRadius: 5,
        })),
    [hotspots],
  );

  const onPointClick = useCallback(
    (id: string) => navigate({ to: "/explore", search: { location: id, category } }),
    [navigate, category],
  );

  const label = category ? CATEGORY_META[category].label : "All categories";

  return (
    <>
      <main id="main" className="pt-14">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[minmax(0,1fr)_460px]">
          <section
            aria-label="Pulse globe"
            className="relative h-[58svh] min-h-[380px] border-b border-border lg:sticky lg:top-14 lg:h-[calc(100svh-3.5rem)] lg:border-b-0 lg:border-r"
          >
            <GlobeView
              points={points}
              rings={rings}
              autoRotate
              initialAltitude={2.2}
              onPointClick={onPointClick}
              ariaLabel={`Globe showing where ${label.toLowerCase()} issues are documented. Column height reflects the number of issues at a place. The list beside the globe contains the same information.`}
            />
            <div
              className="glass absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-xl px-4 py-3"
              title={SEVERITY_NOTE}
            >
              <p className="eyebrow mb-2">Legend</p>
              <p className="text-xs text-muted-foreground">
                Column height = number of documented issues
              </p>
              {category ? (
                <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: CATEGORY_META[category].color }}
                  />
                  {CATEGORY_META[category].label} · pulsing ring = critical severity
                </p>
              ) : (
                <ul className="mt-2 flex flex-wrap gap-3">
                  {SEVERITIES.map((s) => (
                    <li key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: SEVERITY_META[s].color }}
                      />
                      {SEVERITY_META[s].label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section aria-labelledby="pulse-title" className="px-4 py-10 sm:px-6 lg:px-8">
            <p className="eyebrow text-leaf">Pulse</p>
            <h1 id="pulse-title" className="display mt-3 text-5xl">
              The global pulse.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Where this atlas documents environmental issues, by category and severity. The Pulse
              shows the presence and density of documented issues — it reflects what TerraLens
              covers, not a measurement of global prevalence.
            </p>

            <div className="mt-8">
              <p className="eyebrow mb-3">Category</p>
              <CategoryFilter value={category} onChange={setCategory} className="flex-wrap" />
            </div>

            <div className="mt-6">
              <label htmlFor="min-severity" className="eyebrow mb-2 block">
                Minimum severity
              </label>
              <select
                id="min-severity"
                value={minSeverity}
                onChange={(e) => setMinSeverity(e.target.value as Severity)}
                className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm"
              >
                {SEVERITIES.map((s) => (
                  <option key={s} value={s}>
                    {s === "low" ? "Any severity" : `${SEVERITY_META[s].label} and above`}
                  </option>
                ))}
              </select>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6">
              <div>
                <dt className="eyebrow">Issues shown</dt>
                <dd className="mt-1 text-4xl font-light">{filtered.length}</dd>
              </div>
              <div>
                <dt className="eyebrow">Places</dt>
                <dd className="mt-1 text-4xl font-light">{hotspots.length}</dd>
              </div>
            </dl>

            {category && (
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="text-foreground">{CATEGORY_META[category].label}:</span>{" "}
                {atlas.categories.find((c) => c.id === category)?.description}
              </p>
            )}

            <div className="mt-8">
              <p className="eyebrow mb-3">Severity distribution · {label}</p>
              <SeverityDistribution issues={filtered} />
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-3">Documented issues by category</p>
              <CategoryBreakdown
                issues={atlas.issues.filter(
                  (i) => severityRank(i.severity) >= severityRank(minSeverity),
                )}
                selected={category}
                onSelect={(c) => setCategory(c === category ? undefined : c)}
              />
            </div>

            <div className="mt-10">
              <p className="eyebrow mb-3">Places · most severe first</p>
              {hotspots.length === 0 ? (
                <EmptyState title="No issues match these filters">
                  Try a lower minimum severity or another category.
                </EmptyState>
              ) : (
                <ul className="divide-y divide-border border-y border-border">
                  {hotspots.map(({ location, issues, severity }) => (
                    <li key={location.id} className="py-3">
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          to="/locations/$locationId"
                          params={{ locationId: location.id }}
                          className="font-medium hover:text-leaf"
                        >
                          {location.name}
                        </Link>
                        <SeverityBadge severity={severity} />
                      </div>
                      <ul className="mt-1.5 space-y-1">
                        {issues.map((i) => (
                          <li key={i.id} className="flex items-center gap-2 text-sm">
                            {!category && (
                              <CategoryTag category={i.category} className="w-20 shrink-0" />
                            )}
                            <Link
                              to="/issues/$issueId"
                              params={{ issueId: i.id }}
                              className="truncate text-muted-foreground hover:text-foreground"
                            >
                              {i.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-subtle">{SEVERITY_NOTE}</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
