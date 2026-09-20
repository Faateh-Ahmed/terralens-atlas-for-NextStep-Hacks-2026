import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";
import { Color, MeshPhongMaterial, type WebGLRenderer } from "three";
import { useElementSize } from "@/hooks/use-element-size";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { GlobePoint, GlobeRing, GlobeViewProps } from "./types";

const FLY_MS = 1400;

/** Must match the preload media queries in __root.tsx. */
const textureUrl = () =>
  window.matchMedia("(min-width: 1024px)").matches
    ? "/textures/earth-blue-marble.jpg"
    : "/textures/earth-blue-marble-2k.jpg";

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

function tooltip(p: GlobePoint) {
  return `<div style="font-family:Inter,system-ui,sans-serif;background:rgba(18,20,19,.92);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px 11px;color:#f1f3f2;box-shadow:0 8px 24px rgba(0,0,0,.4);max-width:240px">
    <div style="font-size:13px;font-weight:500;letter-spacing:-.01em">${escapeHtml(p.label)}</div>
    ${p.detail ? `<div style="font-size:11px;color:#a3aaa6;margin-top:2px">${escapeHtml(p.detail)}</div>` : ""}
  </div>`;
}

// Stable accessors (module scope) so the globe layers don't re-digest on every render.
const pointLabel = (obj: object) => tooltip(obj as GlobePoint);
const ringColor = (obj: object) => {
  const c = (obj as GlobeRing).color;
  return (t: number) =>
    `${c}${Math.round((1 - t) * 200)
      .toString(16)
      .padStart(2, "0")}`;
};
const ringMaxRadius = (obj: object) => (obj as GlobeRing).maxRadius ?? 3;

function GlobeCanvas({
  points,
  rings = [],
  selectedId,
  focus,
  autoRotate = false,
  enableZoom = true,
  initialAltitude = 2.4,
  onPointClick,
  onPointHover,
  ariaLabel,
  className,
}: GlobeViewProps) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [containerRef, size] = useElementSize<HTMLDivElement>();
  const [ready, setReady] = useState(false);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const [globeImageUrl] = useState(textureUrl);

  // Slightly darkened, desaturated Blue Marble for an editorial look.
  const material = useMemo(() => {
    const m = new MeshPhongMaterial();
    m.color = new Color("#9ea6a2");
    m.shininess = 6;
    m.specular = new Color("#1a2a33");
    return m;
  }, []);

  // Captured on ready: the globe ref is already detached when unmount effects run.
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const mountedRef = useRef(false);

  // react-globe.gl's destructor disposes the scene and renderer but never releases
  // the WebGL context or the bump map texture, so each mount leaked a context.
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      // Defer until after the library destructor (a child effect) has run, and
      // skip if React immediately remounted (StrictMode in development).
      setTimeout(() => {
        if (mountedRef.current) return;
        material.bumpMap?.dispose();
        material.map?.dispose();
        material.dispose();
        const renderer = rendererRef.current;
        rendererRef.current = null;
        if (renderer) {
          renderer.dispose();
          renderer.forceContextLoss();
        }
      }, 0);
    };
  }, [material]);

  const handleReady = useCallback(() => {
    const g = globeRef.current;
    if (!g) return;
    rendererRef.current = g.renderer();
    g.renderer().setPixelRatio(Math.min(window.devicePixelRatio, 2));
    g.pointOfView({ lat: 18, lng: 40, altitude: initialAltitude }, 0);
    setReady(true);
  }, [initialAltitude]);

  // Orbit controls: rotation, zoom limits.
  useEffect(() => {
    const controls = globeRef.current?.controls();
    if (!ready || !controls) return;
    controls.autoRotate = autoRotate && !reducedMotion;
    controls.autoRotateSpeed = 0.35;
    controls.enableZoom = enableZoom;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 130;
    controls.maxDistance = 700;
    const stop = () => {
      controls.autoRotate = false;
    };
    controls.addEventListener("start", stop);
    return () => controls.removeEventListener("start", stop);
  }, [ready, autoRotate, enableZoom, reducedMotion]);

  // Camera flights.
  useEffect(() => {
    if (!ready || !focus) return;
    const g = globeRef.current;
    if (!g) return;
    g.controls().autoRotate = false;
    g.pointOfView(focus, reducedMotion ? 0 : FLY_MS);
  }, [ready, focus, reducedMotion]);

  const handleHover = useCallback(
    (obj: object | null) => {
      const id = obj ? (obj as GlobePoint).id : null;
      setHoverId(id);
      onPointHover?.(id);
    },
    [onPointHover],
  );

  const handleClick = useCallback(
    (obj: object) => onPointClick?.((obj as GlobePoint).id),
    [onPointClick],
  );

  const pointColor = useCallback(
    (obj: object) => {
      const p = obj as GlobePoint;
      if (p.id === selectedId || p.id === hoverId) return "#ffffff";
      return p.color;
    },
    [selectedId, hoverId],
  );

  const pointRadius = useCallback(
    (obj: object) => {
      const p = obj as GlobePoint;
      return p.id === selectedId || p.id === hoverId ? p.radius * 1.5 : p.radius;
    },
    [selectedId, hoverId],
  );

  const allRings = useMemo<GlobeRing[]>(() => {
    const selected = selectedId ? points.find((p) => p.id === selectedId) : undefined;
    return selected
      ? [
          ...rings,
          {
            id: `sel-${selected.id}`,
            lat: selected.lat,
            lng: selected.lng,
            color: "#ffffff",
            maxRadius: 4,
          },
        ]
      : rings;
  }, [rings, points, selectedId]);

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label={ariaLabel}
      className={cn(
        "relative h-full w-full transition-opacity duration-1000",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {size.width > 0 && size.height > 0 && (
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl={globeImageUrl}
          bumpImageUrl="/textures/earth-topology.png"
          globeMaterial={material}
          showAtmosphere
          atmosphereColor="#9cc9b4"
          atmosphereAltitude={0.16}
          animateIn={!reducedMotion}
          onGlobeReady={handleReady}
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude="altitude"
          pointRadius={pointRadius}
          pointColor={pointColor}
          pointResolution={10}
          pointsMerge={false}
          pointsTransitionDuration={reducedMotion ? 0 : 600}
          pointLabel={pointLabel}
          onPointClick={handleClick}
          onPointHover={handleHover}
          ringsData={allRings}
          ringLat="lat"
          ringLng="lng"
          ringColor={ringColor}
          ringMaxRadius={ringMaxRadius}
          ringPropagationSpeed={reducedMotion ? 0 : 1.6}
          ringRepeatPeriod={reducedMotion ? 0 : 1400}
        />
      )}
    </div>
  );
}

export default memo(GlobeCanvas);
