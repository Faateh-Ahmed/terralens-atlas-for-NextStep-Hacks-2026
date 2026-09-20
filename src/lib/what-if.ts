/**
 * Illustrative What-If scenarios.
 *
 * NOTHING here is a model or forecast. Scenarios are assembled from the
 * issue's documented content (causes, impacts, solutions) plus general,
 * qualitative characteristics of how each category of problem tends to
 * respond to intervention. The chart curve is schematic and unitless.
 */
import type {
  EnvironmentalCategory,
  EnvironmentalIssue,
  Factor,
  Location,
  Solution,
} from "@/types/atlas";

export const INTENSITIES = [
  {
    level: 1,
    label: "Pilot",
    description: "Tested in selected neighbourhoods or sites, with limited funding and scope.",
  },
  {
    level: 2,
    label: "Scaled",
    description: "Adopted across much of the area, with dedicated budgets and enforcement.",
  },
  {
    level: 3,
    label: "Transformative",
    description:
      "Fully implemented and sustained for years, combined with supporting policy and regional cooperation.",
  },
] as const;

export type IntensityLevel = (typeof INTENSITIES)[number]["level"];

type CategoryProfile = {
  response: string;
  horizon: [string, string, string];
  limits: string;
  /** Qualitative shape parameters for the schematic chart only. */
  lag: number;
  speed: number;
  /** How much a local intervention can shift the problem (global drivers limit it). */
  localReach: number;
  trend: number;
};

export const CATEGORY_PROFILES: Record<EnvironmentalCategory, CategoryProfile> = {
  air: {
    response:
      "Air quality tends to respond relatively quickly once emissions fall, although weather and regional sources still drive episodes.",
    horizon: [
      "Visible changes near targeted sources, especially where monitoring is dense.",
      "Fewer severe episodes if reductions cover the main local and regional sources.",
      "Health benefits accumulate as long-term exposure falls.",
    ],
    limits:
      "Pollution transported from outside the area, and seasonal meteorology, remain beyond local control.",
    lag: 0.08,
    speed: 5,
    localReach: 0.9,
    trend: 0.05,
  },
  water: {
    response:
      "Supply and demand measures can act within years, while groundwater, rivers and wetlands often take much longer to recover.",
    horizon: [
      "Operational gains such as reduced losses or new storage begin to show.",
      "Supply becomes more reliable in ordinary years if measures are sustained.",
      "Aquifers and ecosystems recover slowly, if extraction and pollution stay below recharge and assimilation.",
    ],
    limits:
      "Rainfall variability and drought remain; interventions change how well the system copes, not the weather.",
    lag: 0.15,
    speed: 3,
    localReach: 0.75,
    trend: 0.1,
  },
  climate: {
    response:
      "Adaptation reduces exposure and harm, but the underlying hazard continues to be shaped by global greenhouse gas emissions.",
    horizon: [
      "Early warning and preparedness measures can reduce harm quickly.",
      "Infrastructure and urban design changes reduce exposure as they are built out.",
      "Protection must keep pace with a hazard that continues to intensify unless global emissions fall.",
    ],
    limits:
      "Local action cannot stop global warming; without global emission cuts the baseline pressure keeps rising.",
    lag: 0.12,
    speed: 3.5,
    localReach: 0.55,
    trend: 0.3,
  },
  nature: {
    response:
      "Halting loss can happen faster than restoring what has been lost; ecosystems recover over years to decades.",
    horizon: [
      "Rates of clearing or degradation can slow where protection is enforced.",
      "Restored areas begin to function, supporting some species and services.",
      "Mature habitat and biodiversity return slowly, and some losses are irreversible.",
    ],
    limits:
      "Extinctions cannot be reversed, and market, governance and climate pressures continue outside protected areas.",
    lag: 0.2,
    speed: 2.2,
    localReach: 0.7,
    trend: 0.12,
  },
  oceans: {
    response:
      "Local action builds resilience, but ocean warming and acidification depend on global emissions.",
    horizon: [
      "Reduced local pressures such as pollution or overfishing give ecosystems some relief.",
      "More resilient ecosystems may recover faster between disturbances.",
      "Long-term outcomes depend heavily on the trajectory of global warming.",
    ],
    limits:
      "Marine heatwaves and sea level rise are driven globally and will continue without global emission cuts.",
    lag: 0.18,
    speed: 2.5,
    localReach: 0.45,
    trend: 0.3,
  },
  waste: {
    response:
      "Collection, segregation and policy changes can act within a few years; legacy pollution persists much longer.",
    horizon: [
      "Better collection and enforcement reduce visible leakage in served areas.",
      "Recycling and producer responsibility change material flows as systems mature.",
      "Legacy dumpsites and pollution in rivers and seas take long to clean up.",
    ],
    limits:
      "Rising consumption and hard-to-recycle materials can offset gains without upstream change.",
    lag: 0.1,
    speed: 4,
    localReach: 0.85,
    trend: 0.15,
  },
  energy: {
    response:
      "Energy systems change with infrastructure turnover, which typically takes years to decades.",
    horizon: [
      "Efficiency measures and early projects begin to cut demand and emissions.",
      "New low-carbon capacity and retrofits displace a growing share of fossil energy.",
      "Deep change requires replacing long-lived infrastructure and hard-to-abate processes.",
    ],
    limits:
      "Grid constraints, costs and long asset lifetimes set the pace; global fuel markets also matter.",
    lag: 0.15,
    speed: 2.8,
    localReach: 0.8,
    trend: 0.08,
  },
};

const STOP = new Set(
  "the and for with from into that this than more less their them they have has are was were been can could such other where which while also over under across through city cities local urban large public".split(
    " ",
  ),
);

const words = (s: string) =>
  new Set(
    s
      .toLowerCase()
      .replace(/[^a-z\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 3 && !STOP.has(w))
      .map((w) => w.replace(/(ing|ion|ions|es|s)$/, "")),
  );

/** Causes whose wording overlaps the intervention's — a transparent heuristic. */
function relatedCauses(issue: EnvironmentalIssue, solution: Solution): Factor[] {
  const sw = words(`${solution.title} ${solution.description}`);
  return issue.causes.filter((c) =>
    [...words(`${c.title} ${c.description}`)].some((w) => sw.has(w)),
  );
}

export type Scenario = {
  location: Location;
  issue: EnvironmentalIssue;
  solution: Solution;
  intensity: (typeof INTENSITIES)[number];
  profile: CategoryProfile;
  addressedCauses: Factor[];
  easedImpacts: Factor[];
  dependencies: string[];
  curve: { baseline: [number, number][]; intervention: [number, number][] };
};

export function buildScenario(
  location: Location,
  issue: EnvironmentalIssue,
  solution: Solution,
  level: IntensityLevel,
): Scenario {
  const intensity = INTENSITIES[level - 1]!;
  const profile = CATEGORY_PROFILES[issue.category];
  const impactCount = Math.min(issue.impacts.length, level + 0);

  const dependencies = [
    "Sustained funding and institutional capacity",
    level >= 2 ? "Consistent enforcement and monitoring" : "Evaluation to decide whether to scale",
    level >= 3 ? "Regional or national policy alignment" : "Local stakeholder support",
    "Participation of affected communities",
  ];

  // Schematic, unitless curve: baseline pressure vs. with intervention.
  const magnitude = [0.18, 0.35, 0.55][level - 1]! * profile.localReach;
  const steps = 40;
  const baseline: [number, number][] = [];
  const intervention: [number, number][] = [];
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const b = 0.62 + profile.trend * 0.35 * t;
    const effect =
      t <= profile.lag ? 0 : magnitude * (1 - Math.exp(-(t - profile.lag) * profile.speed));
    baseline.push([t, b]);
    intervention.push([t, b * (1 - effect)]);
  }

  return {
    location,
    issue,
    solution,
    intensity,
    profile,
    addressedCauses: relatedCauses(issue, solution),
    easedImpacts: issue.impacts.slice(0, Math.max(1, impactCount)),
    dependencies,
    curve: { baseline, intervention },
  };
}
