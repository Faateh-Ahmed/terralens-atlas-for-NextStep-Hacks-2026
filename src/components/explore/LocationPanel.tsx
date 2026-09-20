import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import { CategoryTag, SeverityBadge, TypeLabel } from "@/components/common/Badges";
import { EmptyState } from "@/components/common/StateViews";
import { buttonClass } from "@/lib/button-class";
import {
  categoriesOf,
  countryEntryFor,
  issuesForLocation,
  LOCATION_TYPE_LABEL,
  placesInCountry,
} from "@/lib/data/selectors";
import type { Atlas, Location } from "@/types/atlas";

type Props = {
  atlas: Atlas;
  location: Location;
  onClose: () => void;
  onSelectLocation: (id: string) => void;
};

export function LocationPanel({ atlas, location, onClose, onSelectLocation }: Props) {
  const issues = issuesForLocation(atlas, location);
  const categories = categoriesOf(issues);
  const indicators = issues.flatMap((i) =>
    (i.indicators ?? []).map((ind) => ({ ...ind, issue: i.title })),
  );
  const places = location.type === "country" ? placesInCountry(atlas, location) : [];
  const country = countryEntryFor(atlas, location);

  return (
    <article aria-labelledby="panel-title" className="fade-up">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <TypeLabel>{LOCATION_TYPE_LABEL[location.type]}</TypeLabel>
            {country ? (
              <button
                type="button"
                onClick={() => onSelectLocation(country.id)}
                className="text-xs text-subtle underline-offset-2 hover:text-foreground hover:underline"
              >
                {location.country}
              </button>
            ) : (
              location.type !== "country" && (
                <span className="text-xs text-subtle">{location.country}</span>
              )
            )}
          </div>
          <h2 id="panel-title" className="display mt-3 text-4xl">
            {location.name}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close location panel"
          className="-mr-1 rounded-full p-2 text-subtle hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{location.summary}</p>

      {categories.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label="Categories">
          {categories.map((c) => (
            <CategoryTag key={c} category={c} />
          ))}
        </div>
      )}

      <section className="mt-8" aria-labelledby="panel-issues">
        <h3 id="panel-issues" className="eyebrow">
          {location.type === "country"
            ? "Issues documented in this country"
            : "Major environmental issues"}
        </h3>
        {issues.length === 0 ? (
          <EmptyState className="mt-3 py-6" title="No issues documented yet">
            This place is in the atlas, but no environmental issues have been written up for it.
          </EmptyState>
        ) : (
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {issues.map((issue) => (
              <li key={issue.id}>
                <Link
                  to="/issues/$issueId"
                  params={{ issueId: issue.id }}
                  className="group flex items-center gap-3 py-3"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium leading-snug group-hover:text-leaf">
                      {issue.title}
                    </span>
                    <span className="mt-1 flex items-center gap-3">
                      <CategoryTag category={issue.category} />
                      {location.type === "country" && (
                        <span className="truncate text-xs text-subtle">
                          {atlas.locationsById.get(issue.locationId)?.name}
                        </span>
                      )}
                    </span>
                  </span>
                  <SeverityBadge severity={issue.severity} />
                  <ChevronRight className="h-4 w-4 shrink-0 text-subtle" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {indicators.length > 0 && (
        <section className="mt-8" aria-labelledby="panel-indicators">
          <h3 id="panel-indicators" className="eyebrow">
            Available indicators
          </h3>
          <ul className="mt-3 space-y-2">
            {indicators.slice(0, 5).map((ind) => (
              <li key={`${ind.issue}-${ind.name}`} className="flex justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{ind.name}</span>
                <span className="text-right">
                  {ind.value ?? "Qualitative"}
                  {ind.unit ? ` ${ind.unit}` : ""}
                  {ind.year ? <span className="text-subtle"> · {ind.year}</span> : null}
                </span>
              </li>
            ))}
          </ul>
          {indicators.length > 5 && (
            <p className="mt-2 text-xs text-subtle">
              +{indicators.length - 5} more on the issue pages
            </p>
          )}
        </section>
      )}

      {places.length > 0 && (
        <section className="mt-8" aria-labelledby="panel-places">
          <h3 id="panel-places" className="eyebrow">
            Places in {location.name}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {places.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => onSelectLocation(p.id)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-leaf hover:text-foreground"
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/locations/$locationId"
          params={{ locationId: location.id }}
          className={buttonClass("primary")}
        >
          Explore {location.name.length > 18 ? "this place" : location.name}{" "}
          <ArrowRight className="h-4 w-4" />
        </Link>
        {issues.length > 0 && (
          <Link to="/compare" search={{ a: location.id }} className={buttonClass("ghost")}>
            Compare
          </Link>
        )}
      </div>
    </article>
  );
}
