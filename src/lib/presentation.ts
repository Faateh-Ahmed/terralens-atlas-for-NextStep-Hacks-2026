import type { EnvironmentalCategory, Severity } from "@/types/atlas";

/** Muted, globe-safe colours. Hex is required by three.js materials. */
export const CATEGORY_META: Record<EnvironmentalCategory, { label: string; color: string }> = {
  air: { label: "Air", color: "#a3b6c9" },
  water: { label: "Water", color: "#6fa8c9" },
  climate: { label: "Climate", color: "#d39c68" },
  nature: { label: "Nature", color: "#83b98d" },
  oceans: { label: "Oceans", color: "#56a8a6" },
  waste: { label: "Waste", color: "#b8a07e" },
  energy: { label: "Energy", color: "#d2c46e" },
};

export const SEVERITY_META: Record<
  Severity,
  { label: string; color: string; description: string }
> = {
  low: {
    label: "Low",
    color: "#8fb3a0",
    description: "Present and monitored; limited current harm.",
  },
  moderate: {
    label: "Moderate",
    color: "#cdb46e",
    description: "Material effects on people or ecosystems; actively managed.",
  },
  high: {
    label: "High",
    color: "#dc8d55",
    description: "Serious, widespread effects requiring sustained action.",
  },
  critical: {
    label: "Critical",
    color: "#dd6552",
    description: "Severe, persistent harm to health, ecosystems or livelihoods.",
  },
};

export const SEVERITY_NOTE =
  "Severity is descriptive editorial metadata summarising documented effects. It is not a measured index or a score.";

export function formatDate(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", timeZone: "UTC" });
}

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
