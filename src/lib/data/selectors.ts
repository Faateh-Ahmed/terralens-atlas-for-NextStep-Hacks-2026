import type {
  Atlas,
  EnvironmentalCategory,
  EnvironmentalIssue,
  Location,
  Severity,
} from "@/types/atlas";
import { SEVERITIES } from "@/types/atlas";

export const severityRank = (s: Severity) => SEVERITIES.indexOf(s);

export function sortBySeverity(issues: EnvironmentalIssue[]): EnvironmentalIssue[] {
  return [...issues].sort((a, b) => severityRank(b.severity) - severityRank(a.severity));
}

/**
 * Issues shown for a location. Countries aggregate the issues documented at
 * every location in that country (including their own).
 */
export function issuesForLocation(atlas: Atlas, location: Location): EnvironmentalIssue[] {
  if (location.type === "country") {
    const ids = new Set(
      atlas.locations.filter((l) => l.countryCode === location.countryCode).map((l) => l.id),
    );
    return sortBySeverity(atlas.issues.filter((i) => ids.has(i.locationId)));
  }
  return sortBySeverity(
    location.issues
      .map((id) => atlas.issuesById.get(id))
      .filter((i): i is EnvironmentalIssue => !!i),
  );
}

export function categoriesOf(issues: EnvironmentalIssue[]): EnvironmentalCategory[] {
  return [...new Set(issues.map((i) => i.category))];
}

export function highestSeverity(issues: EnvironmentalIssue[]): Severity | undefined {
  let best: Severity | undefined;
  for (const i of issues)
    if (!best || severityRank(i.severity) > severityRank(best)) best = i.severity;
  return best;
}

/** Detailed places within a country (excluding the country entry itself). */
export function placesInCountry(atlas: Atlas, country: Location): Location[] {
  return atlas.locations.filter(
    (l) => l.countryCode === country.countryCode && l.id !== country.id,
  );
}

export function countryEntryFor(atlas: Atlas, location: Location): Location | undefined {
  if (location.type === "country") return undefined;
  return atlas.locations.find(
    (l) => l.type === "country" && l.countryCode === location.countryCode,
  );
}

export const LOCATION_TYPE_LABEL: Record<Location["type"], string> = {
  country: "Country",
  city: "City",
  region: "Region",
  global: "Global region",
};

/** Locations that can be compared or used in What-If: those with issues of their own or aggregated. */
export function locationsWithIssues(atlas: Atlas): Location[] {
  return atlas.locations
    .filter((l) => issuesForLocation(atlas, l).length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
}
