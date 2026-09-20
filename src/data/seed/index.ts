import type { CategorySlug, IssueSeed } from "./format.ts";
import { coreIssues } from "./issues-core.ts";
import { asiaIssues } from "./issues-asia.ts";
import { africaMiddleEastIssues } from "./issues-africa-middle-east.ts";
import { americasIssues } from "./issues-americas.ts";
import { europeOceaniaIssues } from "./issues-europe-oceania.ts";

export { locationSeeds } from "./locations.ts";
export { slugify } from "./format.ts";
export type * from "./format.ts";

/** Category descriptions match the rows seeded in Supabase. */
export const categorySeeds: { slug: CategorySlug; name: string; description: string }[] = [
  {
    slug: "air",
    name: "Air",
    description:
      "Air quality, particulate pollution and atmospheric emissions affecting human health.",
  },
  {
    slug: "water",
    name: "Water",
    description: "Freshwater availability, drought, flooding, groundwater and water quality.",
  },
  {
    slug: "climate",
    name: "Climate",
    description: "Heat, sea level rise, extreme weather and long-term climatic change.",
  },
  {
    slug: "nature",
    name: "Nature",
    description: "Forests, biodiversity, habitats, land use and ecosystem integrity.",
  },
  {
    slug: "oceans",
    name: "Oceans",
    description: "Coastal systems, marine ecosystems, coral reefs and ocean pollution.",
  },
  {
    slug: "waste",
    name: "Waste",
    description: "Solid waste, plastics, landfill and material flows.",
  },
  {
    slug: "energy",
    name: "Energy",
    description:
      "Energy systems, fuel use, emissions intensity and the transition to low-carbon supply.",
  },
];

export const issueSeeds: IssueSeed[] = [
  ...coreIssues,
  ...asiaIssues,
  ...africaMiddleEastIssues,
  ...americasIssues,
  ...europeOceaniaIssues,
];
