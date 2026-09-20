import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useMemo } from "react";
import { CategoryTag, SeverityBadge, TypeLabel } from "@/components/common/Badges";
import { EmptyState, LoadingState, NotFoundState } from "@/components/common/StateViews";
import { buttonClass } from "@/lib/button-class";
import { GlobeView } from "@/components/globe/Globe";
import { focusFor, locationMarkers } from "@/components/globe/markers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getBundledAtlas } from "@/lib/data/build-atlas";
import { existsInAtlas, useAtlas } from "@/lib/data/atlas-query";
import {
  categoriesOf,
  countryEntryFor,
  issuesForLocation,
  LOCATION_TYPE_LABEL,
  placesInCountry,
} from "@/lib/data/selectors";
import { CATEGORY_META, SEVERITY_NOTE } from "@/lib/presentation";

export const Route = createFileRoute("/locations/$locationId")({
  // Throwing notFound() here makes SSR respond with HTTP 404 for unknown ids.
  loader: async ({ params, context }) => {
    const found = await existsInAtlas(context.queryClient, (a) =>
      a.locationsById.has(params.locationId),
    );
    if (!found) throw notFound();
  },
  notFoundComponent: LocationNotFound,
  head: ({ params }) => {
    const l = getBundledAtlas().locationsById.get(params.locationId);
    return {
      meta: [
        { title: `${l?.name ?? "Location"} — TerraLens` },
        { name: "description", content: l?.summary ?? "Environmental overview on TerraLens." },
      ],
    };
  },
  component: LocationPage,
});

function LocationNotFound() {
  const { locationId } = Route.useParams();
  return <NotFoundState kind="location" id={locationId} />;
}

function LocationPage() {
  const { locationId } = Route.useParams();
  const { atlas, isSyncing } = useAtlas();
  const navigate = useNavigate();
  const location = atlas.locationsById.get(locationId);

  const points = useMemo(() => locationMarkers(atlas, (l) => l.type !== "country"), [atlas]);
  const focus = useMemo(() => (location ? focusFor(location) : null), [location]);
  const onPointClick = useCallback(
    (id: string) => navigate({ to: "/locations/$locationId", params: { locationId: id } }),
    [navigate],
  );

  if (!location) {
    return isSyncing ? (
      <LoadingState label="Loading location" className="min-h-screen" />
    ) : (
      <NotFoundState kind="location" id={locationId} />
    );
  }

  const issues = issuesForLocation(atlas, location);
  const categories = categoriesOf(issues);
  const country = countryEntryFor(atlas, location);
  const places = location.type === "country" ? placesInCountry(atlas, location) : [];
  const sourceCount = new Set(issues.flatMap((i) => i.sources.map((s) => s.url))).size;
  const displayName = location.name;

  return (
    <>
      <main id="main" className="pt-14">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
            <div className="fade-up py-16 lg:py-24">
              <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2">
                <Link
                  to="/explore"
                  search={{ location: location.id }}
                  className="hover:text-foreground"
                >
                  Explore
                </Link>
                <span aria-hidden>/</span>
                {country ? (
                  <Link
                    to="/locations/$locationId"
                    params={{ locationId: country.id }}
                    className="hover:text-foreground"
                  >
                    {country.name}
                  </Link>
                ) : (
                  <span>{LOCATION_TYPE_LABEL[location.type]}</span>
                )}
              </nav>
              <h1 className="display mt-8 break-words text-[clamp(3rem,9vw,7.5rem)] uppercase">
                {displayName}
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                {location.type === "country" ? "Country overview" : location.country}
                <TypeLabel className="ml-3 align-middle">
                  {LOCATION_TYPE_LABEL[location.type]}
                </TypeLabel>
              </p>

              <p className="eyebrow mt-12">Environmental overview</p>
              <p className="mt-4 max-w-2xl font-serif text-2xl leading-snug text-foreground/90 sm:text-3xl">
                {location.summary}
              </p>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                <div>
                  <dt className="eyebrow">Issues</dt>
                  <dd className="mt-2 text-3xl font-light">{issues.length}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Categories</dt>
                  <dd className="mt-2 text-3xl font-light">{categories.length}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Sources</dt>
                  <dd className="mt-2 text-3xl font-light">{sourceCount}</dd>
                </div>
              </dl>
            </div>
            <div className="relative h-[46svh] min-h-[320px] lg:h-auto lg:min-h-[640px]">
              <GlobeView
                points={points}
                selectedId={location.id}
                focus={focus}
                enableZoom={false}
                initialAltitude={2}
                onPointClick={onPointClick}
                ariaLabel={`Globe centred on ${location.name}. Drag to rotate; select another marker to open that place.`}
              />
            </div>
          </div>
        </section>

        {/* Issues */}
        <section
          aria-labelledby="issues-title"
          className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr]">
            <div>
              <p className="eyebrow">Major issues</p>
              <h2 id="issues-title" className="display mt-4 text-4xl">
                What is changing
                {location.type === "country" ? " across the country" : ` in ${location.name}`}.
              </h2>
              {categories.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {categories.map((c) => (
                    <CategoryTag key={c} category={c} />
                  ))}
                </div>
              )}
              <p className="mt-6 text-xs leading-relaxed text-subtle">{SEVERITY_NOTE}</p>
            </div>

            {issues.length === 0 ? (
              <EmptyState title="No issues documented yet">
                {location.name} is on the map, but no environmental issues have been written up for
                it yet.
              </EmptyState>
            ) : (
              <ol className="divide-y divide-border border-y border-border">
                {issues.map((issue, i) => (
                  <li key={issue.id}>
                    <Link
                      to="/issues/$issueId"
                      params={{ issueId: issue.id }}
                      className="group grid gap-4 py-8 sm:grid-cols-[3rem_1fr_auto]"
                    >
                      <span className="font-mono text-sm text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="flex flex-wrap items-center gap-3">
                          <CategoryTag category={issue.category} />
                          <SeverityBadge severity={issue.severity} />
                          {location.type === "country" && (
                            <span className="text-xs text-subtle">
                              {atlas.locationsById.get(issue.locationId)?.name}
                            </span>
                          )}
                        </span>
                        <span className="mt-3 block text-2xl font-medium tracking-tight transition-colors group-hover:text-leaf">
                          {issue.title}
                        </span>
                        <span className="mt-2 block max-w-2xl text-muted-foreground">
                          {issue.summary}
                        </span>
                        <span className="mt-4 block text-xs text-subtle">
                          {issue.causes.length} causes · {issue.impacts.length} impacts ·{" "}
                          {issue.solutions.length} solutions · {issue.sources.length} sources
                        </span>
                      </span>
                      <ArrowUpRight className="hidden h-5 w-5 text-subtle transition-colors group-hover:text-leaf sm:block" />
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {places.length > 0 && (
          <section aria-labelledby="places-title" className="border-t border-border">
            <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
              <p className="eyebrow">Within {location.name}</p>
              <h2 id="places-title" className="display mt-4 text-4xl">
                Places to explore
              </h2>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {places.map((p) => (
                  <li key={p.id}>
                    <Link
                      to="/locations/$locationId"
                      params={{ locationId: p.id }}
                      className="group flex h-full flex-col rounded-2xl border border-border p-5 hover:border-border-strong hover:bg-card/60"
                    >
                      <TypeLabel className="self-start">{LOCATION_TYPE_LABEL[p.type]}</TypeLabel>
                      <span className="mt-6 text-xl font-medium group-hover:text-leaf">
                        {p.name}
                      </span>
                      <span className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                        {p.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Next steps */}
        {issues.length > 0 && (
          <section className="border-t border-border">
            <div className="mx-auto grid max-w-[1440px] gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-10">
              <Link
                to="/compare"
                search={{ a: location.id }}
                className="group rounded-3xl border border-border p-8 hover:border-border-strong"
              >
                <p className="eyebrow">Compare</p>
                <p className="mt-4 text-2xl font-medium">
                  Set {location.name} beside another place
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Shared challenges, different contexts, transferable solutions.
                </p>
                <span className={`${buttonClass("ghost")} mt-6 -ml-5 group-hover:text-leaf`}>
                  Start comparing <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/what-if"
                search={{ location: location.id, issue: issues[0]?.id }}
                className="group rounded-3xl border border-border p-8 hover:border-border-strong"
              >
                <p className="eyebrow">What-If</p>
                <p className="mt-4 text-2xl font-medium">Explore what could change</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  An illustrative scenario for{" "}
                  {CATEGORY_META[issues[0]!.category].label.toLowerCase()} and other issues here.
                </p>
                <span className={`${buttonClass("ghost")} mt-6 -ml-5 group-hover:text-leaf`}>
                  Open What-If <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
