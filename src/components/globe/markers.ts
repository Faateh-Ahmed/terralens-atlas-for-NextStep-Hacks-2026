import type { Atlas, Location } from "@/types/atlas";
import { CATEGORY_META, SEVERITY_META } from "@/lib/presentation";
import { highestSeverity, issuesForLocation, LOCATION_TYPE_LABEL } from "@/lib/data/selectors";
import type { GlobePoint } from "./types";

/** Standard explorer markers: coloured by the most severe documented issue. */
export function locationMarkers(atlas: Atlas, filter?: (l: Location) => boolean): GlobePoint[] {
  const points: GlobePoint[] = [];
  for (const l of atlas.locations) {
    if (filter && !filter(l)) continue;
    const own = l.issues.length;
    const isCountry = l.type === "country";
    const issues = issuesForLocation(atlas, l);
    const severity = highestSeverity(issues);
    points.push({
      id: l.id,
      lat: l.latitude,
      lng: l.longitude,
      color: isCountry ? "#c9d1cd" : severity ? SEVERITY_META[severity].color : "#9aa39f",
      radius: isCountry ? 0.35 : 0.5,
      altitude: isCountry ? 0.005 : 0.012 + Math.min(own, 4) * 0.004,
      label: l.name,
      detail: `${LOCATION_TYPE_LABEL[l.type]}${l.type === "country" ? "" : ` · ${l.country}`} · ${issues.length} issue${issues.length === 1 ? "" : "s"}${
        issues.length
          ? ` · ${[...new Set(issues.map((i) => CATEGORY_META[i.category].label))].slice(0, 3).join(", ")}`
          : ""
      }`,
    });
  }
  return points;
}

/** Camera altitude suited to each location type. */
export function focusFor(l: Location) {
  const altitude = l.type === "country" ? 1.5 : l.type === "global" ? 1.9 : 1.1;
  return { lat: l.latitude, lng: l.longitude, altitude };
}
