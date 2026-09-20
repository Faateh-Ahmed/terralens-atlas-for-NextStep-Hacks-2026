import type { EnvironmentalCategory } from "@/types/atlas";

export type HeroStory = {
  locationId: string;
  /** Short editorial theme, not a statistic. */
  theme: string;
  categories: EnvironmentalCategory[];
};

/** Editorially selected stories featured on the landing page, in order. */
export const HERO_STORIES: HeroStory[] = [
  { locationId: "lahore", theme: "Air pollution", categories: ["air"] },
  { locationId: "jakarta", theme: "Flooding and a sinking coast", categories: ["water"] },
  { locationId: "manaus-amazon", theme: "Deforestation and biodiversity", categories: ["nature"] },
  { locationId: "cape-town", theme: "Water scarcity", categories: ["water"] },
  { locationId: "dubai", theme: "Extreme heat and water", categories: ["climate", "water"] },
  { locationId: "miami", theme: "Sea level rise", categories: ["oceans"] },
  {
    locationId: "great-barrier-reef",
    theme: "Ocean warming and reef biodiversity",
    categories: ["oceans", "nature"],
  },
  { locationId: "rotterdam", theme: "Climate adaptation", categories: ["climate"] },
  { locationId: "singapore", theme: "A sustainable city-state", categories: ["water", "climate"] },
  { locationId: "copenhagen", theme: "Sustainable urbanism", categories: ["energy", "climate"] },
];
