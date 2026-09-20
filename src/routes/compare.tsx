import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { useMemo, type ReactNode } from "react";
import { CategoryTag, SeverityBadge, TypeLabel } from "@/components/common/Badges";
import { EmptyState } from "@/components/common/StateViews";
import { LocationSelect } from "@/components/common/LocationSelect";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useAtlas } from "@/lib/data/atlas-query";
import { compareLocations, SUGGESTED_PAIRS, type Comparison } from "@/lib/compare";
import { LOCATION_TYPE_LABEL, locationsWithIssues } from "@/lib/data/selectors";
import { CATEGORY_META, SEVERITY_NOTE } from "@/lib/presentation";
import { optionalString, type CompareSearch } from "@/lib/search-params";
import {
  CATEGORY_SLUGS,
  type EnvironmentalIssue,
  type Indicator,
  type Location,
} from "@/types/atlas";

export const Route = createFileRoute("/compare")({
  validateSearch: (s: Record<string, unknown>): CompareSearch => {
    const a = optionalString(s["a"]);
    const b = optionalString(s["b"]);
    // A place compared with itself is meaningless; keep only the first.
    return { a, b: b === a ? undefined : b };
  },
  head: () => ({
    meta: [
      { title: "Compare — TerraLens" },
      {
        name: "description",
        content: "Compare environmental issues, causes, impacts and solutions across two places.",
      },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const { atlas } = useAtlas();
  const { a, b } = Route.useSearch();
  const navigate = Route.useNavigate();
  const options = useMemo(() => locationsWithIssues(atlas), [atlas]);

  const la = a ? atlas.locationsById.get(a) : undefined;
  const lb = b ? atlas.locationsById.get(b) : undefined;
  const comparison = useMemo(
    () => (la && lb ? compareLocations(atlas, la, lb) : null),
    [atlas, la, lb],
  );

  const set = (key: "a" | "b", id: string | undefined) =>
    navigate({ search: (prev) => ({ ...prev, [key]: id }), replace: true, resetScroll: false });

  return (
    <>
      <main id="main" className="pt-14">
        <header className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 pb-12 pt-14 sm:px-6 lg:px-10">
            <p className="eyebrow text-leaf">Compare</p>
            <h1 className="display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)]">
              Two places. What can each learn?
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Line up documented issues, causes, impacts and solutions. TerraLens does not rank
              places or produce an overall score — context differs, and so do the right answers.
            </p>

            <div className="mt-10 grid items-end gap-4 md:grid-cols-[1fr_auto_1fr]">
              <LocationSelect
                label="First location"
                value={a}
                onChange={(id) => set("a", id)}
                locations={options}
                disabledId={b}
              />
              <button
                type="button"
                onClick={() =>
                  navigate({ search: { a: b, b: a }, replace: true, resetScroll: false })
                }
                disabled={!a && !b}
                aria-label="Swap locations"
                className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-leaf hover:text-foreground disabled:opacity-40"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </button>
              <LocationSelect
                label="Second location"
                value={b}
                onChange={(id) => set("b", id)}
                locations={options}
                disabledId={a}
              />
            </div>
            {((a && !la) || (b && !lb)) && (
              <p role="alert" className="mt-4 text-sm text-destructive">
                One of the selected locations is not in the atlas. Please choose again.
              </p>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10">
          {comparison ? (
            <ComparisonView c={comparison} />
          ) : (
            <div>
              <EmptyState title="Choose two locations to compare">
                Or start with one of these pairings, each chosen because the places share a
                challenge in different contexts.
              </EmptyState>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SUGGESTED_PAIRS.map(([x, y]) => {
                  const lx = atlas.locationsById.get(x);
                  const ly = atlas.locationsById.get(y);
                  if (!lx || !ly) return null;
                  return (
                    <li key={`${x}-${y}`}>
                      <Link
                        to="/compare"
                        search={{ a: x, b: y }}
                        resetScroll={false}
                        className="group flex items-center justify-between rounded-2xl border border-border p-5 hover:border-border-strong hover:bg-card/60"
                      >
                        <span className="text-lg font-medium">
                          {lx.name} <span className="text-subtle">&amp;</span> {ly.name}
                        </span>
                        <ArrowRight className="h-4 w-4 text-subtle group-hover:text-leaf" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Row({ title, a, b, note }: { title: string; a: ReactNode; b: ReactNode; note?: string }) {
  return (
    <section className="border-t border-border py-10" aria-label={title}>
      <h2 className="eyebrow">{title}</h2>
      {note && <p className="mt-2 text-xs text-subtle">{note}</p>}
      <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="min-w-0">{a}</div>
        <div className="min-w-0">{b}</div>
      </div>
    </section>
  );
}

function ColumnLabel({ location }: { location: Location }) {
  return (
    <p className="mb-3 text-xs font-medium text-muted-foreground md:hidden">{location.name}</p>
  );
}

function IssueList({ issues, location }: { issues: EnvironmentalIssue[]; location: Location }) {
  return (
    <>
      <ColumnLabel location={location} />
      <ul className="space-y-3">
        {issues.map((i) => (
          <li key={i.id}>
            <Link
              to="/issues/$issueId"
              params={{ issueId: i.id }}
              className="group block rounded-xl border border-border p-4 hover:border-border-strong"
            >
              <span className="flex flex-wrap items-center gap-3">
                <CategoryTag category={i.category} />
                <SeverityBadge severity={i.severity} />
              </span>
              <span className="mt-2 block font-medium group-hover:text-leaf">{i.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function FactorColumn({
  issues,
  location,
  pick,
}: {
  issues: EnvironmentalIssue[];
  location: Location;
  pick: (i: EnvironmentalIssue) => { title: string; description?: string }[];
}) {
  return (
    <>
      <ColumnLabel location={location} />
      <div className="space-y-6">
        {issues.map((i) => (
          <div key={i.id}>
            <p className="text-xs text-subtle">{i.title}</p>
            <ul className="mt-2 space-y-1.5">
              {pick(i).map((f) => (
                <li key={f.title} className="text-sm" title={f.description}>
                  <span aria-hidden className="mr-2 text-subtle">
                    —
                  </span>
                  {f.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function ComparisonView({ c }: { c: Comparison }) {
  const { a, b } = c;
  const indicatorsOf = (issues: EnvironmentalIssue[]) =>
    issues.flatMap((i) => (i.indicators ?? []).map((ind) => ({ ...ind, issue: i.title })));

  return (
    <div>
      {/* Column headers */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {[a, b].map(({ location, issues }) => (
          <div key={location.id} className="min-w-0">
            <TypeLabel>{LOCATION_TYPE_LABEL[location.type]}</TypeLabel>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              <Link
                to="/locations/$locationId"
                params={{ locationId: location.id }}
                className="hover:text-leaf"
              >
                {location.name}
              </Link>
            </h2>
            <p className="text-sm text-subtle">
              {location.country} · {issues.length} documented{" "}
              {issues.length === 1 ? "issue" : "issues"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{location.summary}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="mt-12 border-t border-border py-10" aria-labelledby="cmp-cats">
        <h2 id="cmp-cats" className="eyebrow">
          Categories
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="text-left text-xs text-subtle">
                <th scope="col" className="pb-3 font-normal">
                  Category
                </th>
                <th scope="col" className="pb-3 font-normal">
                  {a.location.name}
                </th>
                <th scope="col" className="pb-3 font-normal">
                  {b.location.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {CATEGORY_SLUGS.map((cat) => {
                const ia = a.issues.filter((i) => i.category === cat);
                const ib = b.issues.filter((i) => i.category === cat);
                if (!ia.length && !ib.length) return null;
                const cell = (list: EnvironmentalIssue[]) =>
                  list.length ? (
                    <span className="flex flex-wrap gap-1.5">
                      {list.map((i) => (
                        <SeverityBadge key={i.id} severity={i.severity} />
                      ))}
                    </span>
                  ) : (
                    <span className="text-subtle">Not documented</span>
                  );
                return (
                  <tr key={cat}>
                    <th scope="row" className="py-3 text-left font-normal">
                      <CategoryTag category={cat} />
                      {c.shared.includes(cat) && (
                        <span className="ml-2 text-[0.625rem] uppercase tracking-wider text-leaf">
                          Shared
                        </span>
                      )}
                    </th>
                    <td className="py-3">{cell(ia)}</td>
                    <td className="py-3">{cell(ib)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-subtle">
          “Not documented” means the atlas has no write-up for that category there — not that the
          place is free of it. {SEVERITY_NOTE}
        </p>
      </section>

      <Row
        title="Environmental issues"
        a={<IssueList issues={a.issues} location={a.location} />}
        b={<IssueList issues={b.issues} location={b.location} />}
      />

      <Row
        title="Available indicators"
        note="Only indicators backed by a source are shown. Figures from different places are not directly comparable."
        a={<IndicatorColumn items={indicatorsOf(a.issues)} location={a.location} />}
        b={<IndicatorColumn items={indicatorsOf(b.issues)} location={b.location} />}
      />

      <Row
        title="Causes"
        a={<FactorColumn issues={a.issues} location={a.location} pick={(i) => i.causes} />}
        b={<FactorColumn issues={b.issues} location={b.location} pick={(i) => i.causes} />}
      />
      <Row
        title="Impacts"
        a={<FactorColumn issues={a.issues} location={a.location} pick={(i) => i.impacts} />}
        b={<FactorColumn issues={b.issues} location={b.location} pick={(i) => i.impacts} />}
      />
      <Row
        title="Solutions"
        a={<FactorColumn issues={a.issues} location={a.location} pick={(i) => i.solutions} />}
        b={<FactorColumn issues={b.issues} location={b.location} pick={(i) => i.solutions} />}
      />

      {/* Learning across locations */}
      <section
        aria-labelledby="learning"
        className="mt-6 rounded-3xl border border-leaf/25 bg-leaf-soft p-6 sm:p-10"
      >
        <p className="eyebrow text-leaf">Learning across locations</p>
        <h2 id="learning" className="display mt-3 text-3xl sm:text-4xl">
          {c.lessons.length ? learningHeadline(c) : "Different challenges, different lessons."}
        </h2>
        {c.lessons.length ? (
          <>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              These documented approaches from one place address a shared category or theme in the
              other. Whether they transfer depends on local climate, governance, resources and the
              specific causes involved. Themes are matched from the wording of each issue.
            </p>
            <ul className="mt-8 grid gap-4 lg:grid-cols-2">
              {c.lessons.map((l) => (
                <li
                  key={`${l.from.id}-${l.sourceIssue.id}-${l.solution.title}`}
                  className="rounded-2xl border border-border bg-background/60 p-5"
                >
                  <p className="flex flex-wrap items-center gap-2 text-xs text-subtle">
                    {l.link.kind === "category" ? (
                      <CategoryTag category={l.link.category} />
                    ) : (
                      <span className="rounded border border-leaf/30 px-1.5 py-px text-[0.625rem] uppercase tracking-[0.14em] text-leaf">
                        {l.link.label}
                      </span>
                    )}
                    <span>
                      From {l.from.name} <span aria-hidden>→</span> relevant to {l.to.name}
                    </span>
                  </p>
                  <p className="mt-3 font-medium">{l.solution.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l.solution.description}</p>
                  <Link
                    to="/issues/$issueId"
                    params={{ issueId: l.sourceIssue.id }}
                    hash="solutions"
                    className="mt-3 inline-block text-xs text-subtle underline-offset-2 hover:text-foreground hover:underline"
                  >
                    Context: {l.sourceIssue.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-4 max-w-3xl text-muted-foreground">
            The atlas documents no shared categories for these two places. Comparing them still
            shows how different geographies produce different environmental priorities
            {c.onlyA.length > 0 &&
              ` — ${c.a.location.name} centres on ${c.onlyA.map((x) => CATEGORY_META[x].label.toLowerCase()).join(", ")}`}
            {c.onlyB.length > 0 &&
              `, while ${c.b.location.name} centres on ${c.onlyB.map((x) => CATEGORY_META[x].label.toLowerCase()).join(", ")}`}
            .
          </p>
        )}
      </section>
    </div>
  );
}

function learningHeadline(c: Comparison): string {
  const parts = [
    ...c.shared.map((s) => CATEGORY_META[s].label.toLowerCase()),
    ...c.sharedThemes.filter(
      (t) => !c.shared.some((s) => CATEGORY_META[s].label.toLowerCase() === t),
    ),
  ];
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}` : parts[0];
  return `Both places are dealing with ${list}.`;
}

function IndicatorColumn({
  items,
  location,
}: {
  items: (Indicator & { issue: string })[];
  location: Location;
}) {
  if (!items.length) {
    return (
      <>
        <ColumnLabel location={location} />
        <p className="text-sm text-subtle">No quantitative or qualitative indicators documented.</p>
      </>
    );
  }
  return (
    <>
      <ColumnLabel location={location} />
      <dl className="space-y-3">
        {items.map((ind) => (
          <div
            key={`${ind.issue}-${ind.name}`}
            className="flex justify-between gap-4 border-b border-border pb-3 text-sm"
          >
            <dt className="text-muted-foreground">{ind.name}</dt>
            <dd className="text-right">
              {ind.value ?? "No verified figure"}
              {ind.unit ? ` ${ind.unit}` : ""}
              {ind.year ? <span className="text-subtle"> · {ind.year}</span> : null}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
