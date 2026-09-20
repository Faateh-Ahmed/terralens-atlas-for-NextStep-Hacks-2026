import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CategoryTag, SeverityBadge } from "@/components/common/Badges";
import { LoadingState, NotFoundState } from "@/components/common/StateViews";
import { buttonClass } from "@/lib/button-class";
import {
  FactorList,
  IndicatorList,
  IssueSection,
  SolutionList,
  SourceList,
} from "@/components/issue/IssueSections";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getBundledAtlas } from "@/lib/data/build-atlas";
import { existsInAtlas, useAtlas } from "@/lib/data/atlas-query";
import { sortBySeverity } from "@/lib/data/selectors";
import { CATEGORY_META, SEVERITY_META, SEVERITY_NOTE } from "@/lib/presentation";

export const Route = createFileRoute("/issues/$issueId")({
  // Throwing notFound() here makes SSR respond with HTTP 404 for unknown ids.
  loader: async ({ params, context }) => {
    const found = await existsInAtlas(context.queryClient, (a) => a.issuesById.has(params.issueId));
    if (!found) throw notFound();
  },
  notFoundComponent: IssueNotFound,
  head: ({ params }) => {
    const i = getBundledAtlas().issuesById.get(params.issueId);
    return {
      meta: [
        { title: `${i?.title ?? "Issue"} — TerraLens` },
        { name: "description", content: i?.summary ?? "Environmental issue on TerraLens." },
      ],
    };
  },
  component: IssuePage,
});

const SECTIONS = [
  ["problem", "The problem"],
  ["causes", "Causes"],
  ["impacts", "Impacts"],
  ["solutions", "Solutions"],
  ["indicators", "Key indicators"],
  ["sources", "Sources"],
] as const;

function IssueNotFound() {
  const { issueId } = Route.useParams();
  return <NotFoundState kind="issue" id={issueId} />;
}

function IssuePage() {
  const { issueId } = Route.useParams();
  const { atlas, isSyncing } = useAtlas();
  const issue = atlas.issuesById.get(issueId);

  if (!issue) {
    return isSyncing ? (
      <LoadingState label="Loading issue" className="min-h-screen" />
    ) : (
      <NotFoundState kind="issue" id={issueId} />
    );
  }

  const location = atlas.locationsById.get(issue.locationId);
  const siblings = location
    ? location.issues
        .filter((id) => id !== issue.id)
        .map((id) => atlas.issuesById.get(id)!)
        .filter(Boolean)
    : [];
  const related = sortBySeverity(
    atlas.issues.filter(
      (i) =>
        i.category === issue.category && i.id !== issue.id && i.locationId !== issue.locationId,
    ),
  ).slice(0, 4);
  const indicators = issue.indicators ?? [];

  return (
    <>
      <main id="main" className="pt-14">
        <header className="border-b border-border">
          <div className="fade-up mx-auto max-w-[1200px] px-4 pb-16 pt-14 sm:px-6 lg:px-10 lg:pt-20">
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2">
              <Link to="/explore" className="hover:text-foreground">
                Explore
              </Link>
              {location && (
                <>
                  <span aria-hidden>/</span>
                  <Link
                    to="/locations/$locationId"
                    params={{ locationId: location.id }}
                    className="hover:text-foreground"
                  >
                    {location.name}
                  </Link>
                </>
              )}
            </nav>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CategoryTag category={issue.category} />
              <SeverityBadge severity={issue.severity} />
            </div>
            <h1 className="display mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">{issue.title}</h1>
            <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-muted-foreground sm:text-3xl">
              {issue.summary}
            </p>
            {location && (
              <p className="mt-8 text-sm text-subtle">
                {location.name} · {location.country}
              </p>
            )}
          </div>
        </header>

        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[200px_1fr] lg:px-10">
          <nav aria-label="On this page" className="hidden lg:block">
            <ol className="sticky top-24 space-y-1 border-l border-border">
              {SECTIONS.map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground hover:border-leaf hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="min-w-0">
            <IssueSection id="problem" eyebrow="01 · The problem" title="What is happening">
              <div className="prose-editorial max-w-3xl text-lg leading-relaxed text-foreground/90">
                <p>{issue.description}</p>
              </div>
              <p className="mt-8 max-w-3xl rounded-xl border border-border p-4 text-sm text-muted-foreground">
                <span
                  className="font-medium"
                  style={{ color: SEVERITY_META[issue.severity].color }}
                >
                  {SEVERITY_META[issue.severity].label} severity.
                </span>{" "}
                {SEVERITY_META[issue.severity].description} {SEVERITY_NOTE}
              </p>
            </IssueSection>

            <IssueSection id="causes" eyebrow="02 · Causes" title="Why it is happening">
              <FactorList items={issue.causes} />
            </IssueSection>

            <IssueSection id="impacts" eyebrow="03 · Impacts" title="Who and what it affects">
              <FactorList items={issue.impacts} />
            </IssueSection>

            <IssueSection id="solutions" eyebrow="04 · Solutions" title="Documented approaches">
              <SolutionList items={issue.solutions} />
              <Link
                to="/what-if"
                search={{ location: issue.locationId, issue: issue.id }}
                className={`${buttonClass("outline")} mt-8`}
              >
                Explore an illustrative What-If <ArrowRight className="h-4 w-4" />
              </Link>
            </IssueSection>

            <IssueSection
              id="indicators"
              eyebrow="05 · Key indicators"
              title="What can be measured"
            >
              {indicators.length > 0 ? (
                <IndicatorList items={indicators} />
              ) : (
                <p className="max-w-2xl text-muted-foreground">
                  No reliable quantitative indicator is included for this issue. TerraLens shows
                  figures only where a credible source supports them — consult the sources below for
                  current data.
                </p>
              )}
            </IssueSection>

            <IssueSection id="sources" eyebrow="06 · Sources" title="Where this comes from">
              <SourceList items={issue.sources} />
              <p className="mt-4 text-xs text-subtle">
                Links open the publishing organisation's site. Some point to the publisher's main
                page, where the named report or dataset can be found.
              </p>
            </IssueSection>
          </article>
        </div>

        {(siblings.length > 0 || related.length > 0) && (
          <section aria-label="Continue exploring" className="border-t border-border">
            <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-10">
              {siblings.length > 0 && location && (
                <div>
                  <p className="eyebrow">Also in {location.name}</p>
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {siblings.map((s) => (
                      <li key={s.id}>
                        <Link
                          to="/issues/$issueId"
                          params={{ issueId: s.id }}
                          className="group flex items-center justify-between gap-3 py-4"
                        >
                          <span className="font-medium group-hover:text-leaf">{s.title}</span>
                          <CategoryTag category={s.category} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {related.length > 0 && (
                <div>
                  <p className="eyebrow">{CATEGORY_META[issue.category].label} elsewhere</p>
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link
                          to="/issues/$issueId"
                          params={{ issueId: r.id }}
                          className="group flex items-center justify-between gap-3 py-4"
                        >
                          <span className="font-medium group-hover:text-leaf">{r.title}</span>
                          <span className="shrink-0 text-xs text-subtle">
                            {atlas.locationsById.get(r.locationId)?.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
