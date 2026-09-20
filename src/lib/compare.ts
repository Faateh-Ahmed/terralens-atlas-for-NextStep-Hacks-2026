import type {
  Atlas,
  EnvironmentalCategory,
  EnvironmentalIssue,
  Location,
  Solution,
} from "@/types/atlas";
import { CATEGORY_SLUGS } from "@/types/atlas";
import { issuesForLocation } from "@/lib/data/selectors";

/** Plain-language themes matched against issue text. Transparent and deliberately simple. */
export const THEMES: { id: string; label: string; pattern: RegExp }[] = [
  { id: "flooding", label: "flooding", pattern: /\bflood|storm surge|cloudburst/i },
  { id: "sea-level", label: "sea level rise", pattern: /sea level/i },
  { id: "subsidence", label: "land subsidence", pattern: /subsidence|sinking/i },
  { id: "heat", label: "extreme heat", pattern: /\bheat(wave)?s?\b|urban heat/i },
  {
    id: "drought",
    label: "drought and water scarcity",
    pattern: /drought|scarcity|water stress|water security/i,
  },
  { id: "groundwater", label: "groundwater", pattern: /groundwater|aquifer/i },
  { id: "air", label: "air pollution", pattern: /air pollution|smog|particulate/i },
  { id: "waste", label: "waste and plastics", pattern: /\bwaste\b|plastic|landfill|dumpsite/i },
  { id: "forest", label: "forest loss", pattern: /deforestation|forest loss|clearing/i },
  { id: "fire", label: "wildfire", pattern: /wildfire|bushfire|peat fire/i },
  { id: "reef", label: "coral reefs", pattern: /coral|reef/i },
  {
    id: "transition",
    label: "the energy transition",
    pattern: /decarbonis|emissions from|district heating|renewable/i,
  },
];

const textOf = (i: EnvironmentalIssue) => `${i.title} ${i.summary} ${i.description}`;
const themesOf = (i: EnvironmentalIssue) =>
  THEMES.filter((t) => t.pattern.test(textOf(i))).map((t) => t.id);

export type LessonTransfer = {
  /** Why these places connect: a shared category or theme. */
  link: { kind: "category"; category: EnvironmentalCategory } | { kind: "theme"; label: string };
  from: Location;
  to: Location;
  solution: Solution;
  sourceIssue: EnvironmentalIssue;
};

export type Comparison = {
  a: { location: Location; issues: EnvironmentalIssue[] };
  b: { location: Location; issues: EnvironmentalIssue[] };
  shared: EnvironmentalCategory[];
  sharedThemes: string[];
  onlyA: EnvironmentalCategory[];
  onlyB: EnvironmentalCategory[];
  lessons: LessonTransfer[];
};

const cats = (issues: EnvironmentalIssue[]) => new Set(issues.map((i) => i.category));

/**
 * Structural comparison of two places. Deliberately produces no score:
 * it only lines up what is documented and where solutions may transfer.
 */
export function compareLocations(atlas: Atlas, a: Location, b: Location): Comparison {
  const ia = issuesForLocation(atlas, a);
  const ib = issuesForLocation(atlas, b);
  const ca = cats(ia);
  const cb = cats(ib);
  const shared = CATEGORY_SLUGS.filter((c) => ca.has(c) && cb.has(c));

  const themesA = new Set(ia.flatMap(themesOf));
  const themesB = new Set(ib.flatMap(themesOf));
  const sharedThemeIds = THEMES.filter((t) => themesA.has(t.id) && themesB.has(t.id)).map(
    (t) => t.id,
  );

  const lessons: LessonTransfer[] = [];
  const seen = new Set<string>();
  const add = (
    link: LessonTransfer["link"],
    from: Location,
    to: Location,
    issue: EnvironmentalIssue,
  ) => {
    for (const solution of issue.solutions.slice(0, 2)) {
      const key = `${issue.id}:${solution.title}`;
      if (seen.has(key)) continue;
      seen.add(key);
      lessons.push({ link, from, to, solution, sourceIssue: issue });
    }
  };

  for (const [from, to, issues] of [
    [a, b, ia],
    [b, a, ib],
  ] as const) {
    for (const category of shared) {
      for (const issue of issues.filter((i) => i.category === category))
        add({ kind: "category", category }, from, to, issue);
    }
    for (const id of sharedThemeIds) {
      const theme = THEMES.find((t) => t.id === id)!;
      for (const issue of issues.filter((i) => themesOf(i).includes(id)))
        add({ kind: "theme", label: theme.label }, from, to, issue);
    }
  }

  return {
    a: { location: a, issues: ia },
    b: { location: b, issues: ib },
    shared,
    sharedThemes: sharedThemeIds.map((id) => THEMES.find((t) => t.id === id)!.label),
    onlyA: CATEGORY_SLUGS.filter((c) => ca.has(c) && !cb.has(c)),
    onlyB: CATEGORY_SLUGS.filter((c) => cb.has(c) && !ca.has(c)),
    lessons,
  };
}

export const SUGGESTED_PAIRS: [string, string][] = [
  ["lahore", "beijing"],
  ["jakarta", "rotterdam"],
  ["miami", "shanghai"],
  ["cape-town", "mexico-city"],
  ["dubai", "phoenix"],
  ["delhi", "london"],
];
