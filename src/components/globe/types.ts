export type GlobePoint = {
  id: string;
  lat: number;
  lng: number;
  color: string;
  /** Marker radius in degrees of arc. */
  radius: number;
  /** Marker height as a fraction of the globe radius. */
  altitude: number;
  /** Plain-text tooltip title and detail. */
  label: string;
  detail?: string | undefined;
};

export type GlobeRing = {
  id: string;
  lat: number;
  lng: number;
  color: string;
  maxRadius?: number | undefined;
};

export type GlobeFocus = {
  lat: number;
  lng: number;
  altitude: number;
};

export type GlobeViewProps = {
  points: GlobePoint[];
  rings?: GlobeRing[] | undefined;
  selectedId?: string | null | undefined;
  /** When this changes, the camera flies to it. */
  focus?: GlobeFocus | null | undefined;
  autoRotate?: boolean | undefined;
  /** Allow zoom with the scroll wheel (off on scroll-heavy pages). */
  enableZoom?: boolean | undefined;
  initialAltitude?: number | undefined;
  onPointClick?: ((id: string) => unknown) | undefined;
  onPointHover?: ((id: string | null) => unknown) | undefined;
  ariaLabel: string;
  className?: string | undefined;
};
