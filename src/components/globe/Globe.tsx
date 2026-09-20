import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { GlobeViewProps } from "./types";

// three.js and globe.gl are large and browser-only: load them on demand.
const GlobeCanvas = lazy(() => import("./GlobeCanvas"));

export function GlobePlaceholder({
  label = "Loading globe",
  className,
}: {
  label?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn("flex h-full w-full items-center justify-center", className)}
      role="status"
      aria-live="polite"
    >
      <div className="relative aspect-square w-[min(56%,420px)]">
        <div className="absolute inset-0 animate-pulse rounded-full bg-[radial-gradient(circle_at_35%_30%,oklch(0.3_0.02_200),oklch(0.16_0.01_180)_70%)] shadow-[0_0_80px_oklch(0.78_0.075_155/0.12)]" />
        <span className="eyebrow absolute inset-x-0 -bottom-10 text-center">{label}…</span>
      </div>
    </div>
  );
}

function GlobeUnavailable({ className }: { className?: string | undefined }) {
  return (
    <div
      className={cn("flex h-full w-full items-center justify-center p-6", className)}
      role="note"
    >
      <div className="max-w-sm text-center">
        <p className="eyebrow">Globe unavailable</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Your browser could not start 3D graphics (WebGL). Every location remains available through
          search and the lists on this page.
        </p>
      </div>
    </div>
  );
}

class GlobeErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  override state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  override componentDidCatch(error: unknown) {
    console.error("[TerraLens] Globe failed to render", error);
  }
  override render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function ClientGlobe(props: GlobeViewProps) {
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => setSupported(hasWebGL()), []);

  if (supported === null) return <GlobePlaceholder className={props.className} />;
  if (!supported) return <GlobeUnavailable className={props.className} />;
  return (
    <GlobeErrorBoundary fallback={<GlobeUnavailable className={props.className} />}>
      <Suspense fallback={<GlobePlaceholder className={props.className} />}>
        <GlobeCanvas {...props} />
      </Suspense>
    </GlobeErrorBoundary>
  );
}

/** Interactive 3D globe. Renders a placeholder during SSR and while loading. */
export function GlobeView(props: GlobeViewProps) {
  return (
    <ClientOnly fallback={<GlobePlaceholder className={props.className} />}>
      <ClientGlobe {...props} />
    </ClientOnly>
  );
}
