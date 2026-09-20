import type { Atlas, EnvironmentalIssue, Location } from "@/types/atlas";
import { LOCATION_TYPE_LABEL } from "@/lib/data/selectors";
import { CATEGORY_META } from "@/lib/presentation";

export type SearchResult =
  | {
      kind: "location";
      id: string;
      label: string;
      detail: string;
      typeLabel: string;
      location: Location;
      score: number;
    }
  | {
      kind: "issue";
      id: string;
      label: string;
      detail: string;
      typeLabel: string;
      issue: EnvironmentalIssue;
      location?: Location | undefined;
      score: number;
    };

const normalize = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

/** Lower is better; Infinity means no match. */
function matchScore(query: string, text: string): number {
  const t = normalize(text);
  if (t === query) return 0;
  if (t.startsWith(query)) return 1;
  if (t.split(/[\s/,-]+/).some((w) => w.startsWith(query))) return 2;
  if (t.includes(query)) return 3;
  return Infinity;
}

export function searchAtlas(atlas: Atlas, rawQuery: string, limit = 12): SearchResult[] {
  const query = normalize(rawQuery.trim());
  if (!query) return [];
  const results: SearchResult[] = [];

  for (const location of atlas.locations) {
    const score = Math.min(
      matchScore(query, location.name),
      matchScore(query, location.country) + 1.5,
    );
    if (score === Infinity) continue;
    results.push({
      kind: "location",
      id: location.id,
      label: location.name,
      detail: location.type === "country" ? "National overview" : location.country,
      typeLabel: LOCATION_TYPE_LABEL[location.type],
      location,
      score: location.type === "country" && score === 0 ? -1 : score,
    });
  }

  for (const issue of atlas.issues) {
    const category = CATEGORY_META[issue.category].label;
    const score = Math.min(
      matchScore(query, issue.title) + 0.5,
      matchScore(query, category) + 3,
      normalize(issue.summary).includes(query) ? 5 : Infinity,
    );
    if (score === Infinity) continue;
    const location = atlas.locationsById.get(issue.locationId);
    results.push({
      kind: "issue",
      id: issue.id,
      label: issue.title,
      detail: [location?.name, category].filter(Boolean).join(" · "),
      typeLabel: "Issue",
      issue,
      location,
      score,
    });
  }

  return results
    .sort((a, b) => a.score - b.score || a.label.localeCompare(b.label))
    .slice(0, limit);
}
