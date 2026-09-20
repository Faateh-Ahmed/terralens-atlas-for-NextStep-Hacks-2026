import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { useEffect, useId, useMemo } from "react";
import { CategoryTag, SeverityBadge } from "@/components/common/Badges";
import { EmptyState } from "@/components/common/StateViews";
import { LocationSelect } from "@/components/common/LocationSelect";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { IllustrativeChart } from "@/components/what-if/IllustrativeChart";
import { useAtlas } from "@/lib/data/atlas-query";
import { issuesForLocation, locationsWithIssues } from "@/lib/data/selectors";
import { optionalString, type WhatIfSearch } from "@/lib/search-params";
import { cn } from "@/lib/utils";
import { buildScenario, INTENSITIES, type IntensityLevel, type Scenario } from "@/lib/what-if";

const toIndex = (v: unknown) => {
  const n = Number(v);
  return Number.isInteger(n) && n >= 0 && n < 50 ? n : undefined;
};
const toIntensity = (v: unknown): IntensityLevel | undefined => {
  const n = Number(v);
  return n === 1 || n === 2 || n === 3 ? n : undefined;
};

export const Route = createFileRoute("/what-if")({
  validateSearch: (s: Record<string, unknown>): WhatIfSearch => ({
    location: optionalString(s["location"]),
    issue: optionalString(s["issue"]),
    intervention: toIndex(s["intervention"]),
    intensity: toIntensity(s["intensity"]),
  }),
  head: () => ({
    meta: [
      { title: "What-If — TerraLens" },
      {
        name: "description",
        content: "Explore illustrative scenarios for documented environmental interventions.",
      },
    ],
  }),
  component: WhatIfPage,
});

function Banner({ className }: { className?: string | undefined }) {
  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-3 rounded-xl border border-[#cdb46e]/40 bg-[#cdb46e]/10 px-4 py-3 text-sm text-[#e3d29c]",
        className,
      )}
    >
      <AlertTriangle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
      <p>
        <strong className="font-semibold tracking-[0.12em]">
          ILLUSTRATIVE SCENARIO — NOT A SCIENTIFIC PREDICTION.
        </strong>{" "}
        Built from documented causes, impacts and solutions plus general qualitative patterns. It
        contains no modelled numbers.
      </p>
    </div>
  );
}

function WhatIfPage() {
  const { atlas, isSyncing } = useAtlas();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const intensityId = useId();
  const options = useMemo(() => locationsWithIssues(atlas), [atlas]);

  const location = search.location ? atlas.locationsById.get(search.location) : undefined;
  const issues = useMemo(
    () => (location ? issuesForLocation(atlas, location) : []),
    [atlas, location],
  );
  const issue = issues.find((i) => i.id === search.issue) ?? issues[0];
  const solutionIndex =
    issue && search.intervention !== undefined && search.intervention < issue.solutions.length
      ? search.intervention
      : 0;
  const solution = issue?.solutions[solutionIndex];
  const level = search.intensity ?? 2;

  const scenario = useMemo(
    () => (location && issue && solution ? buildScenario(location, issue, solution, level) : null),
    [location, issue, solution, level],
  );

  type Search = typeof search;
  const update = (patch: Partial<Search>) =>
    navigate({
      search: (prev: Search) => ({ ...prev, ...patch }),
      replace: true,
      resetScroll: false,
    });

  // Keep the URL in step with what is displayed: replace an unknown issue with the
  // one shown, and drop an out-of-range intervention (index 0 is the default).
  // Waits for live data so links to database-only issues are not rewritten early.
  const invalidIssue = search.issue !== undefined && issue?.id !== search.issue;
  const invalidIntervention =
    search.intervention !== undefined && solutionIndex !== search.intervention;
  useEffect(() => {
    if (isSyncing || (!invalidIssue && !invalidIntervention)) return;
    navigate({
      search: (prev: Search) => ({
        ...prev,
        issue: invalidIssue ? issue?.id : prev.issue,
        intervention: invalidIssue || invalidIntervention ? undefined : prev.intervention,
      }),
      replace: true,
      resetScroll: false,
    });
  }, [isSyncing, invalidIssue, invalidIntervention, issue?.id, navigate]);

  return (
    <>
      <main id="main" className="pt-14">
        <header className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-14 sm:px-6 lg:px-10">
            <p className="eyebrow text-leaf">What-If</p>
            <h1 className="display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)]">
              Explore what could change.
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Choose a place, a documented issue and one of its documented interventions, then set
              how far it goes.
            </p>
            <Banner className="mt-8 max-w-3xl" />
          </div>
        </header>

        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[380px_1fr] lg:px-10">
          {/* Builder */}
          <form
            className="space-y-6 lg:sticky lg:top-20 lg:self-start"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Scenario builder"
          >
            <LocationSelect
              label="1 · Location"
              value={location?.id}
              locations={options}
              onChange={(id) => update({ location: id, issue: undefined, intervention: undefined })}
            />

            <div>
              <label htmlFor="wi-issue" className="eyebrow mb-2 block">
                2 · Environmental issue
              </label>
              <select
                id="wi-issue"
                disabled={!location}
                value={issue?.id ?? ""}
                onChange={(e) => update({ issue: e.target.value, intervention: undefined })}
                className="h-12 w-full rounded-xl border border-input bg-card px-4 text-base disabled:opacity-50"
              >
                {!location && <option value="">Choose a location first</option>}
                {issues.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.title}
                  </option>
                ))}
              </select>
            </div>

            <fieldset disabled={!issue}>
              <legend className="eyebrow mb-2">3 · Intervention</legend>
              {issue ? (
                <div className="space-y-2">
                  {issue.solutions.map((s, idx) => (
                    <label
                      key={s.title}
                      className={cn(
                        "flex cursor-pointer gap-3 rounded-xl border p-3 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring",
                        idx === solutionIndex
                          ? "border-leaf/60 bg-leaf-soft"
                          : "border-border hover:border-border-strong",
                      )}
                    >
                      <input
                        type="radio"
                        name="intervention"
                        className="sr-only"
                        checked={idx === solutionIndex}
                        onChange={() => update({ intervention: idx })}
                      />
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1 h-3 w-3 shrink-0 rounded-full border",
                          idx === solutionIndex ? "border-leaf bg-leaf" : "border-border-strong",
                        )}
                      />
                      <span>{s.title}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-subtle">
                  Choose an issue to see its documented interventions.
                </p>
              )}
            </fieldset>

            <div>
              <label htmlFor={intensityId} className="eyebrow mb-2 flex justify-between">
                <span>4 · Intensity</span>
                <span className="text-foreground">{INTENSITIES[level - 1]!.label}</span>
              </label>
              <input
                id={intensityId}
                type="range"
                min={1}
                max={3}
                step={1}
                value={level}
                disabled={!issue}
                aria-valuetext={INTENSITIES[level - 1]!.label}
                onChange={(e) => update({ intensity: Number(e.target.value) as IntensityLevel })}
                className="w-full accent-[oklch(0.78_0.075_155)]"
              />
              <div className="mt-1 flex justify-between text-xs text-subtle">
                {INTENSITIES.map((i) => (
                  <span key={i.level}>{i.label}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {INTENSITIES[level - 1]!.description}
              </p>
            </div>
          </form>

          {/* Result */}
          <div aria-live="polite">
            {scenario ? (
              <ScenarioView s={scenario} />
            ) : search.location && !location ? (
              <EmptyState title="Location not found">
                Choose another location from the list.
              </EmptyState>
            ) : (
              <EmptyState title="Build a scenario">
                Start by choosing a location. You can also open What-If from any issue page.
              </EmptyState>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ScenarioView({ s }: { s: Scenario }) {
  const { issue, solution, location, intensity, profile } = s;
  return (
    <article aria-labelledby="scenario-title" className="fade-up">
      <p className="eyebrow">Illustrative scenario</p>
      <h2 id="scenario-title" className="display mt-3 text-3xl sm:text-4xl">
        What if {location.name} took a {intensity.label.toLowerCase()} approach to “{solution.title}
        ”?
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border p-5">
          <p className="eyebrow">Starting point · documented</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <CategoryTag category={issue.category} />
            <SeverityBadge severity={issue.severity} />
          </div>
          <Link
            to="/issues/$issueId"
            params={{ issueId: issue.id }}
            className="mt-3 block font-medium hover:text-leaf"
          >
            {issue.title}
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">{issue.summary}</p>
        </div>
        <div className="rounded-2xl border border-border p-5">
          <p className="eyebrow">The intervention · documented</p>
          <p className="mt-3 font-medium">{solution.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{solution.description}</p>
          {solution.expectedImpact && (
            <p className="mt-3 border-l-2 border-leaf/50 pl-3 text-sm">{solution.expectedImpact}</p>
          )}
        </div>
      </div>

      <section
        className="mt-10 rounded-2xl border border-border bg-card/40 p-5 sm:p-8"
        aria-labelledby="curve-title"
      >
        <h3 id="curve-title" className="eyebrow">
          Schematic direction of change
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{profile.response}</p>
        <div className="mt-6 text-foreground">
          <IllustrativeChart
            baseline={s.curve.baseline}
            intervention={s.curve.intervention}
            category={issue.category}
          />
        </div>
      </section>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <section aria-labelledby="pathways">
          <h3 id="pathways" className="eyebrow">
            Causes this could address
          </h3>
          {s.addressedCauses.length ? (
            <ul className="mt-4 space-y-3">
              {s.addressedCauses.map((c) => (
                <li key={c.title} className="text-sm">
                  <span className="font-medium">{c.title}</span>
                  <span className="block text-muted-foreground">{c.description}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              This intervention works indirectly — it does not map onto a single documented cause,
              but supports the wider response to the issue.
            </p>
          )}
        </section>

        <section aria-labelledby="eased">
          <h3 id="eased" className="eyebrow">
            Impacts that could ease
          </h3>
          <ul className="mt-4 space-y-3">
            {s.easedImpacts.map((i) => (
              <li key={i.title} className="text-sm">
                <span className="font-medium">{i.title}</span>
                <span className="block text-muted-foreground">{i.description}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-subtle">
            Wider reach at higher intensity is an assumption of this illustration.
          </p>
        </section>
      </div>

      <section className="mt-10" aria-labelledby="horizon">
        <h3 id="horizon" className="eyebrow">
          How change might unfold
        </h3>
        <ol className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {(["Near term", "Medium term", "Long term"] as const).map((label, idx) => (
            <li
              key={label}
              className={cn("bg-background p-5", idx + 1 > intensity.level && "opacity-60")}
            >
              <p className="font-mono text-xs text-leaf">{label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{profile.horizon[idx]}</p>
            </li>
          ))}
        </ol>
        {intensity.level < 3 && (
          <p className="mt-2 text-xs text-subtle">
            Faded stages are less likely to be reached at {intensity.label.toLowerCase()} intensity.
          </p>
        )}
      </section>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <section aria-labelledby="limits">
          <h3 id="limits" className="eyebrow">
            What this would not change
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">{profile.limits}</p>
        </section>
        <section aria-labelledby="deps">
          <h3 id="deps" className="eyebrow">
            What it depends on
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            {s.dependencies.map((d) => (
              <li key={d}>
                <span aria-hidden className="mr-2 text-subtle">
                  —
                </span>
                {d}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Banner className="mt-12" />
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          to="/issues/$issueId"
          params={{ issueId: issue.id }}
          hash="sources"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          Read the sources for this issue <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
