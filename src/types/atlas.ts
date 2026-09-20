/**
 * TerraLens domain types.
 *
 * These are the UI-facing shapes. The Supabase schema (see
 * supabase/migrations) is normalised; the data layer in src/lib/data maps
 * rows into these types so components never touch database rows directly.
 */

export const CATEGORY_SLUGS = [
  "air",
  "water",
  "climate",
  "nature",
  "oceans",
  "waste",
  "energy",
] as const;

export type EnvironmentalCategory = (typeof CATEGORY_SLUGS)[number];

export const SEVERITIES = ["low", "moderate", "high", "critical"] as const;

/** Descriptive metadata only — never aggregated into a score. */
export type Severity = (typeof SEVERITIES)[number];

export type LocationType = "country" | "city" | "region" | "global";

export type Category = {
  id: EnvironmentalCategory;
  name: string;
  description: string;
};

/** A named cause or impact with a short explanation. */
export type Factor = {
  title: string;
  description: string;
};

export type Solution = {
  title: string;
  description: string;
  expectedImpact?: string | undefined;
};

export type Indicator = {
  name: string;
  value?: string | undefined;
  unit?: string | undefined;
  year?: number | undefined;
  description?: string | undefined;
};

export type Source = {
  title: string;
  organization: string;
  url: string;
  publicationDate?: string | undefined;
};

export type EnvironmentalIssue = {
  id: string;
  locationId: string;
  title: string;
  category: EnvironmentalCategory;
  severity: Severity;
  summary: string;
  description: string;
  causes: Factor[];
  impacts: Factor[];
  solutions: Solution[];
  indicators?: Indicator[] | undefined;
  sources: Source[];
};

export type Location = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  type: LocationType;
  latitude: number;
  longitude: number;
  summary: string;
  featured?: boolean | undefined;
  /** Issue ids documented directly at this location. */
  issues: string[];
};

export type AtlasDataOrigin = "supabase" | "bundled";

/** The complete, indexed dataset the UI works from. */
export type Atlas = {
  locations: Location[];
  issues: EnvironmentalIssue[];
  categories: Category[];
  locationsById: Map<string, Location>;
  issuesById: Map<string, EnvironmentalIssue>;
  origin: AtlasDataOrigin;
};
