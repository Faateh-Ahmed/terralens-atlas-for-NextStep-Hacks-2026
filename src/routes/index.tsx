import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useMemo } from "react";
import { GlobeView } from "@/components/globe/Globe";
import { locationMarkers } from "@/components/globe/markers";
import type { GlobeRing } from "@/components/globe/types";
import { CategoryTag, SeverityBadge } from "@/components/common/Badges";
import { buttonClass } from "@/lib/button-class";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SearchBox } from "@/components/search/SearchBox";
import { HERO_STORIES } from "@/data/hero-stories";
import { useAtlas } from "@/lib/data/atlas-query";
import { highestSeverity, issuesForLocation } from "@/lib/data/selectors";
import { CATEGORY_META } from "@/lib/presentation";
import { CATEGORY_SLUGS } from "@/types/atlas";

// No head() here: the home route inherits title/description from __root.tsx.
export const Route = createFileRoute("/")({
  component: Landing,
});

const JOURNEY = [
  {
    step: "01",
    title: "Explore",
    body: "Move across a live 3D Earth and find places facing environmental change.",
  },
  {
    step: "02",
    title: "Discover",
    body: "See the documented problems affecting a country, city or region.",
  },
  {
    step: "03",
    title: "Understand",
    body: "Follow each problem through its causes and its impacts on people and ecosystems.",
  },
  {
    step: "04",
    title: "Compare",
    body: "Set two places side by side and learn what one can teach the other.",
  },
  {
    step: "05",
    title: "Explore solutions",
    body: "Review documented interventions, then test illustrative What-If scenarios.",
  },
];

function Landing() {
  const { atlas } = useAtlas();
  const navigate = useNavigate();

  const points = useMemo(() => locationMarkers(atlas, (l) => l.type !== "country"), [atlas]);
  const rings = useMemo<GlobeRing[]>(
    () =>
      HERO_STORIES.flatMap((s) => {
        const l = atlas.locationsById.get(s.locationId);
        return l
          ? [{ id: l.id, lat: l.latitude, lng: l.longitude, color: "#a8d5bd", maxRadius: 2.2 }]
          : [];
      }),
    [atlas],
  );
  const onPointClick = useCallback(
    (id: string) => navigate({ to: "/explore", search: { location: id } }),
    [navigate],
  );

  const stories = HERO_STORIES.map((s) => ({
    story: s,
    location: atlas.locationsById.get(s.locationId),
  })).filter((x): x is typeof x & { location: NonNullable<typeof x.location> } =>
    Boolean(x.location),
  );

  const categoryCounts = CATEGORY_SLUGS.map((c) => ({
    id: c,
    count: atlas.issues.filter((i) => i.category === c).length,
    description: atlas.categories.find((x) => x.id === c)?.description ?? "",
  }));

  return (
    <>
      <main id="main">
        {/* Hero */}
        <section className="relative isolate min-h-[100svh] overflow-hidden pt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_45%,oklch(0.24_0.02_170/0.55),transparent_70%)]"
          />
          <div className="mx-auto grid max-w-[1440px] items-center gap-6 px-4 sm:px-6 lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-10">
            <div className="fade-up relative z-10 pt-12 lg:py-10">
              <p className="eyebrow text-leaf">TerraLens</p>
              <h1 className="display mt-6 text-[clamp(2.75rem,5.4vw,5.5rem)]">
                Explore Earth.
                <br />
                <span className="text-muted-foreground">Understand the change.</span>
                <br />
                Move it forward.
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                An interactive atlas of environmental change, causes, impacts, and solutions.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/explore" className={buttonClass("primary", "lg")}>
                  Explore Earth <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#stories" className={buttonClass("ghost", "lg")}>
                  Featured stories
                </a>
              </div>
              <SearchBox className="mt-10 max-w-md" />
            </div>

            <div className="relative h-[62svh] min-h-[360px] lg:h-[calc(100svh-3.5rem)]">
              <GlobeView
                points={points}
                rings={rings}
                autoRotate
                initialAltitude={2.1}
                onPointClick={onPointClick}
                ariaLabel="Interactive 3D globe showing TerraLens locations. Drag to rotate, scroll to zoom, select a marker to explore it. All locations are also reachable through search."
              />
              <p className="eyebrow pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap lg:block">
                Drag to rotate · Scroll to zoom · Select a marker
              </p>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section aria-labelledby="journey-title" className="border-t border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10">
            <p className="eyebrow">The journey</p>
            <h2 id="journey-title" className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
              From a point on the map to what could change.
            </h2>
            <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {JOURNEY.map((j) => (
                <li key={j.step} className="bg-background p-6">
                  <span className="font-mono text-xs text-leaf">{j.step}</span>
                  <h3 className="mt-6 text-lg font-medium">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stories */}
        <section
          id="stories"
          aria-labelledby="stories-title"
          className="scroll-mt-16 border-t border-border"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Featured stories</p>
                <h2 id="stories-title" className="display mt-4 text-4xl sm:text-5xl">
                  Ten places. Ten lessons.
                </h2>
              </div>
              <Link to="/explore" className={buttonClass("outline")}>
                Open the explorer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {stories.map(({ story, location }, index) => {
                const issues = issuesForLocation(atlas, location);
                const severity = highestSeverity(issues);
                return (
                  <li key={story.locationId}>
                    <Link
                      to="/locations/$locationId"
                      params={{ locationId: location.id }}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-border-strong hover:bg-card"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-subtle">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-subtle transition-colors group-hover:text-leaf" />
                      </div>
                      <h3 className="mt-10 text-2xl font-medium tracking-tight">
                        {location.name.replace(" / Amazon", "")}
                      </h3>
                      <p className="text-sm text-subtle">{location.country}</p>
                      <p className="mt-4 font-serif text-xl italic leading-snug text-muted-foreground">
                        {story.theme}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                        {story.categories.map((c) => (
                          <CategoryTag key={c} category={c} />
                        ))}
                        {severity && <SeverityBadge severity={severity} className="ml-auto" />}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Categories */}
        <section aria-labelledby="categories-title" className="border-t border-border">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-10">
            <div>
              <p className="eyebrow">Seven lenses</p>
              <h2 id="categories-title" className="display mt-4 text-4xl sm:text-5xl">
                One planet, read through seven systems.
              </h2>
              <p className="mt-6 max-w-sm text-muted-foreground">
                Every issue in the atlas belongs to one category. Open the Pulse to see where each
                is documented.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {categoryCounts.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/pulse"
                    search={{ category: c.id }}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-1 py-5"
                  >
                    <span
                      aria-hidden
                      className="h-2 w-2 translate-y-[-2px] rounded-full"
                      style={{ background: CATEGORY_META[c.id].color }}
                    />
                    <span className="text-xl font-medium tracking-tight transition-colors group-hover:text-leaf">
                      {CATEGORY_META[c.id].label}
                    </span>
                    <span className="font-mono text-sm text-subtle">
                      {c.count} {c.count === 1 ? "issue" : "issues"}
                    </span>
                    <span className="col-start-2 col-end-4 text-sm text-muted-foreground">
                      {c.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Principles */}
        <section aria-labelledby="principles-title" className="border-t border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-10">
            <p className="eyebrow">How to read TerraLens</p>
            <h2 id="principles-title" className="sr-only">
              Data principles
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {[
                [
                  "Sourced, not invented",
                  "Each issue cites the institutions behind it — agencies, UN bodies and peer-reviewed research. Numbers appear only where a reliable figure exists.",
                ],
                [
                  "Severity describes, it doesn't rank",
                  "Severity is descriptive metadata for a single issue. TerraLens never combines issues into a score or declares one place better than another.",
                ],
                [
                  "Scenarios are illustrations",
                  "What-If explores how interventions could plausibly shift a problem. It is clearly labelled and is not a scientific forecast.",
                ],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card/40 p-8 sm:flex-row sm:items-center sm:p-12">
              <p className="display text-3xl sm:text-4xl">See the planet as it is changing.</p>
              <Link to="/explore" className={buttonClass("primary", "lg")}>
                Explore Earth <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
