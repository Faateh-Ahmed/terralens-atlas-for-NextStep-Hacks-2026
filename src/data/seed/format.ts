/**
 * Compact authoring format for the bundled TerraLens dataset.
 *
 * This folder must stay free of path aliases and runtime dependencies: it is
 * imported by the app AND by scripts/generate-seed-sql.ts (run directly with
 * Node's type stripping) to produce the Supabase seed migration.
 */

export type CategorySlug = "air" | "water" | "climate" | "nature" | "oceans" | "waste" | "energy";
export type SeverityLevel = "low" | "moderate" | "high" | "critical";

export type LocationSeed = {
  name: string;
  country: string;
  countryCode: string;
  type: "country" | "city" | "region" | "global";
  lat: number;
  lng: number;
  summary: string;
  featured?: boolean;
};

/** [title, description] */
export type FactorSeed = readonly [string, string];
/** [title, description, expectedImpact] */
export type SolutionSeed = readonly [string, string, string];
/** [title, organization, url, publicationDate?] */
export type SourceSeed = readonly [string, string, string, string?];

export type IndicatorSeed = {
  name: string;
  value?: string;
  unit?: string;
  year?: number;
  description: string;
};

export type IssueSeed = {
  /** Location name, exactly as in the location seed. */
  location: string;
  category: CategorySlug;
  title: string;
  severity: SeverityLevel;
  summary: string;
  description: string;
  causes: readonly FactorSeed[];
  impacts: readonly FactorSeed[];
  solutions: readonly SolutionSeed[];
  indicators?: readonly IndicatorSeed[];
  sources: readonly SourceSeed[];
};

/** Stable URL slug. Used for both bundled and Supabase rows so ids agree. */
export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
