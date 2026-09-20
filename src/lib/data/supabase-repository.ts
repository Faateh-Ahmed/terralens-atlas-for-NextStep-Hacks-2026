import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/data/seed";
import {
  CATEGORY_SLUGS,
  type EnvironmentalCategory,
  type EnvironmentalIssue,
  type Location,
} from "@/types/atlas";
import type { AtlasParts } from "./build-atlas";

const ISSUE_SELECT = `
  id, location_id, title, severity, summary, description,
  category:categories(slug),
  causes(title, description),
  impacts(title, description),
  solutions(title, description, expected_impact),
  indicators(name, value, unit, year, description),
  sources(title, organization, url, publication_date)
`;

const isCategory = (v: string): v is EnvironmentalCategory =>
  (CATEGORY_SLUGS as readonly string[]).includes(v);

const orUndefined = <T>(v: T | null | undefined) => (v === null ? undefined : v);

/** Reads the normalised TerraLens schema and maps rows to domain types. */
export async function fetchSupabaseAtlas(): Promise<AtlasParts> {
  const [categoriesRes, locationsRes, issuesRes] = await Promise.all([
    supabase.from("categories").select("slug, name, description"),
    supabase
      .from("locations")
      .select("id, name, country, country_code, type, latitude, longitude, summary, featured"),
    supabase.from("issues").select(ISSUE_SELECT),
  ]);
  const error = categoriesRes.error ?? locationsRes.error ?? issuesRes.error;
  if (error) throw new Error(`Supabase request failed: ${error.message}`);

  const locationSlugById = new Map<string, string>();
  const locations: Location[] = (locationsRes.data ?? []).map((row) => {
    const id = slugify(row.name);
    locationSlugById.set(row.id, id);
    return {
      id,
      name: row.name,
      country: row.country,
      countryCode: row.country_code,
      type: row.type,
      latitude: row.latitude,
      longitude: row.longitude,
      summary: row.summary,
      featured: row.featured,
      issues: [],
    };
  });

  const issues: EnvironmentalIssue[] = [];
  for (const row of issuesRes.data ?? []) {
    const locationId = locationSlugById.get(row.location_id);
    const slug = row.category?.slug ?? "";
    if (!locationId || !isCategory(slug)) continue;
    issues.push({
      id: slugify(row.title),
      locationId,
      title: row.title,
      category: slug,
      severity: row.severity,
      summary: row.summary,
      description: row.description,
      causes: row.causes,
      impacts: row.impacts,
      solutions: row.solutions.map((s) => ({
        title: s.title,
        description: s.description,
        expectedImpact: s.expected_impact || undefined,
      })),
      indicators: row.indicators.map((i) => ({
        name: i.name,
        value: orUndefined(i.value),
        unit: orUndefined(i.unit),
        year: orUndefined(i.year),
        description: i.description || undefined,
      })),
      sources: row.sources
        .filter((s): s is typeof s & { url: string } => Boolean(s.url))
        .map((s) => ({
          title: s.title,
          organization: s.organization,
          url: s.url,
          publicationDate: orUndefined(s.publication_date),
        })),
    });
  }

  const categories = (categoriesRes.data ?? [])
    .filter((c) => isCategory(c.slug))
    .map((c) => ({
      id: c.slug as EnvironmentalCategory,
      name: c.name,
      description: c.description,
    }));

  return { locations, issues, categories };
}
