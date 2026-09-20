import { useId } from "react";
import { CATEGORY_META } from "@/lib/presentation";
import type { EnvironmentalCategory } from "@/types/atlas";

const W = 640;
const H = 260;
const PAD = { l: 36, r: 16, t: 20, b: 36 };

const toPath = (pts: [number, number][]) =>
  pts
    .map(([t, v], i) => {
      const x = PAD.l + t * (W - PAD.l - PAD.r);
      const y = PAD.t + (1 - v) * (H - PAD.t - PAD.b);
      return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

/** Schematic, unitless curve. Deliberately has no numeric axes. */
export function IllustrativeChart({
  baseline,
  intervention,
  category,
}: {
  baseline: [number, number][];
  intervention: [number, number][];
  category: EnvironmentalCategory;
}) {
  const titleId = useId();
  const color = CATEGORY_META[category].color;
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby={titleId} className="h-auto w-full">
        <title id={titleId}>
          Schematic, unitless illustration: relative pressure over time without the intervention
          compared with the intervention in place. Not based on measured data.
        </title>
        <line
          x1={PAD.l}
          y1={H - PAD.b}
          x2={W - PAD.r}
          y2={H - PAD.b}
          stroke="currentColor"
          strokeOpacity={0.2}
        />
        <line
          x1={PAD.l}
          y1={PAD.t}
          x2={PAD.l}
          y2={H - PAD.b}
          stroke="currentColor"
          strokeOpacity={0.2}
        />
        <path
          d={toPath(baseline)}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.45}
          strokeWidth={2}
          strokeDasharray="6 6"
        />
        <path d={toPath(intervention)} fill="none" stroke={color} strokeWidth={2.5} />
        <text x={PAD.l} y={H - 12} fontSize={11} fill="currentColor" fillOpacity={0.5}>
          Now
        </text>
        <text
          x={W - PAD.r}
          y={H - 12}
          fontSize={11}
          fill="currentColor"
          fillOpacity={0.5}
          textAnchor="end"
        >
          Longer term →
        </text>
        <text
          x={14}
          y={H / 2}
          fontSize={11}
          fill="currentColor"
          fillOpacity={0.5}
          transform={`rotate(-90 14 ${H / 2})`}
          textAnchor="middle"
        >
          Relative pressure (unitless)
        </text>
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 border-t-2 border-dashed border-current opacity-60" />{" "}
          Without the intervention
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 border-t-2" style={{ borderColor: color }} /> With the
          intervention
        </span>
        <span className="text-subtle">Schematic shape only — no data, units or dates.</span>
      </figcaption>
    </figure>
  );
}
