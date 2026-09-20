import { categorySeeds, issueSeeds, locationSeeds, slugify } from "@/data/seed";
import type {
  Atlas,
  AtlasDataOrigin,
  Category,
  EnvironmentalIssue,
  Location,
  Source,
} from "@/types/atlas";

type AtlasParts = {
  locations: Location[];
  issues: EnvironmentalIssue[];
  categories: Category[];
};

/** Adds lookup maps and recomputes each location's issue list. */
export function indexAtlas(parts: AtlasParts, origin: AtlasDataOrigin): Atlas {
  const issuesByLocation = new Map<string, string[]>();
  for (const issue of parts.issues) {
    const list = issuesByLocation.get(issue.locationId) ?? [];
    list.push(issue.id);
    issuesByLocation.set(issue.locationId, list);
  }
  const locations = parts.locations.map((l) => ({
    ...l,
    issues: issuesByLocation.get(l.id) ?? [],
  }));
  return {
    ...parts,
    locations,
    locationsById: new Map(locations.map((l) => [l.id, l])),
    issuesById: new Map(parts.issues.map((i) => [i.id, i])),
    origin,
  };
}

function buildBundledParts(): AtlasParts {
  const locationIdByName = new Map(locationSeeds.map((l) => [l.name, slugify(l.name)]));

  const locations: Location[] = locationSeeds.map((l) => ({
    id: slugify(l.name),
    name: l.name,
    country: l.country,
    countryCode: l.countryCode,
    type: l.type,
    latitude: l.lat,
    longitude: l.lng,
    summary: l.summary,
    featured: l.featured ?? false,
    issues: [],
  }));

  const issues: EnvironmentalIssue[] = issueSeeds.map((s) => {
    const locationId = locationIdByName.get(s.location);
    if (!locationId)
      throw new Error(`Seed issue "${s.title}" references unknown location "${s.location}"`);
    return {
      id: slugify(s.title),
      locationId,
      title: s.title,
      category: s.category,
      severity: s.severity,
      summary: s.summary,
      description: s.description,
      causes: s.causes.map(([title, description]) => ({ title, description })),
      impacts: s.impacts.map(([title, description]) => ({ title, description })),
      solutions: s.solutions.map(([title, description, expectedImpact]) => ({
        title,
        description,
        expectedImpact,
      })),
      indicators: s.indicators?.map((i) => ({ ...i })),
      sources: s.sources.map(([title, organization, url, publicationDate]) => ({
        title,
        organization,
        url,
        publicationDate,
      })),
    };
  });

  const categories: Category[] = categorySeeds.map((c) => ({
    id: c.slug,
    name: c.name,
    description: c.description,
  }));
  return { locations, issues, categories };
}

let bundled: Atlas | undefined;

/** The atlas shipped with the app. Always available, including during SSR. */
export function getBundledAtlas(): Atlas {
  bundled ??= indexAtlas(buildBundledParts(), "bundled");
  return bundled;
}

/** Order `items` like `reference` (matched by key); unknown items keep their order at the end. */
function orderLike<T, R>(items: T[], reference: R[] | undefined, key: (x: T | R) => string): T[] {
  if (!reference?.length) return items;
  const rank = new Map(reference.map((r, i) => [key(r), i]));
  return [...items].sort((a, b) => (rank.get(key(a)) ?? Infinity) - (rank.get(key(b)) ?? Infinity));
}

/**
 * Sources are matched by URL, which is stable, falling back to title so a
 * source whose link was corrected since seeding still keeps its position.
 */
function orderSources(remote: Source[], curated: Source[]): Source[] {
  const byUrl = new Map(curated.map((s, i) => [s.url, i]));
  const byTitle = new Map(curated.map((s, i) => [s.title, i]));
  const rank = (s: Source) => byUrl.get(s.url) ?? byTitle.get(s.title) ?? Infinity;
  return [...remote].sort((a, b) => rank(a) - rank(b));
}

/**
 * The schema has no sort column for child rows, so remote causes, impacts,
 * etc. arrive in arbitrary order. Keep the curated order where we know it.
 */
function withCuratedOrder(
  remote: EnvironmentalIssue,
  curated: EnvironmentalIssue | undefined,
): EnvironmentalIssue {
  if (!curated) return remote;
  const byTitle = (x: { title: string }) => x.title;
  return {
    ...remote,
    causes: orderLike(remote.causes, curated.causes, byTitle),
    impacts: orderLike(remote.impacts, curated.impacts, byTitle),
    solutions: orderLike(remote.solutions, curated.solutions, byTitle),
    sources: orderSources(remote.sources, curated.sources),
    indicators:
      remote.indicators && orderLike(remote.indicators, curated.indicators, (x) => x.name),
  };
}

/**
 * Overlay remote rows onto the bundled atlas. Remote records win when ids
 * match; records only present remotely are added.
 */
export function mergeAtlas(base: Atlas, remote: AtlasParts): Atlas {
  remote = {
    ...remote,
    issues: remote.issues.map((i) => withCuratedOrder(i, base.issuesById.get(i.id))),
  };
  const overlay = <T extends { id: string }>(a: T[], b: T[]) => {
    const map = new Map(a.map((x) => [x.id, x]));
    for (const x of b) map.set(x.id, x);
    return [...map.values()];
  };
  return indexAtlas(
    {
      locations: overlay(base.locations, remote.locations),
      issues: overlay(base.issues, remote.issues),
      categories: overlay(base.categories, remote.categories),
    },
    "supabase",
  );
}

export type { AtlasParts };
